const fs = require('fs');
const path = require('path');

class DataQualityAnalyzer {
    constructor() {
        this.book6Data = null;
        this.issues = [];
        this.reportPath = 'reports/';
        this.initialize();
    }

    initialize() {
        // Create reports directory
        if (!fs.existsSync(this.reportPath)) {
            fs.mkdirSync(this.reportPath, { recursive: true });
        }
        
        // Load Book 6 data
        this.loadBook6Data();
    }

    loadBook6Data() {
        try {
            const data = fs.readFileSync('book6_parsed.json', 'utf8');
            this.book6Data = JSON.parse(data);
            console.log('✅ Book 6 data loaded for analysis');
        } catch (error) {
            console.error('❌ Error loading Book 6 data:', error.message);
            throw error;
        }
    }

    // Run comprehensive quality analysis
    async runFullAnalysis() {
        console.log('🔍 Starting comprehensive data quality analysis...\n');
        
        this.issues = []; // Reset issues
        
        // Run all analysis checks
        this.checkMissingExamples();
        this.checkDuplicateWords();
        this.checkInconsistentFormatting();
        this.checkPartOfSpeechConsistency();
        this.checkMeaningQuality();
        this.checkWordLengthDistribution();
        this.checkUnitCompleteness();
        this.checkDataStructureIntegrity();
        
        // Generate report
        this.generateReport();
        
        return this.issues;
    }

    // Check for missing examples
    checkMissingExamples() {
        console.log('📝 Checking for missing examples...');
        
        let missingCount = 0;
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                if (word.example === 'Example not provided.' || !word.example || word.example.trim() === '') {
                    this.issues.push({
                        type: 'missing_example',
                        severity: 'medium',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Missing example for word "${word.word}"`,
                        suggestion: 'Add a meaningful example sentence'
                    });
                    missingCount++;
                }
            });
        });
        
        console.log(`   Found ${missingCount} words with missing examples`);
    }

    // Check for duplicate words
    checkDuplicateWords() {
        console.log('🔄 Checking for duplicate words...');
        
        const wordCounts = {};
        const duplicates = [];
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                const wordKey = word.word.toLowerCase();
                if (!wordCounts[wordKey]) {
                    wordCounts[wordKey] = [];
                }
                wordCounts[wordKey].push({
                    unit: unitNum,
                    wordIndex: wordIndex,
                    word: word.word
                });
            });
        });
        
        Object.entries(wordCounts).forEach(([wordKey, occurrences]) => {
            if (occurrences.length > 1) {
                duplicates.push({
                    word: wordKey,
                    occurrences: occurrences
                });
                
                occurrences.forEach(occurrence => {
                    this.issues.push({
                        type: 'duplicate_word',
                        severity: 'high',
                        unit: occurrence.unit,
                        wordIndex: occurrence.wordIndex,
                        word: occurrence.word,
                        description: `Duplicate word "${occurrence.word}" appears ${occurrences.length} times`,
                        suggestion: 'Consider replacing with synonyms or removing duplicates'
                    });
                });
            }
        });
        
        console.log(`   Found ${duplicates.length} duplicate words`);
    }

    // Check for inconsistent formatting
    checkInconsistentFormatting() {
        console.log('📋 Checking for inconsistent formatting...');
        
        let formattingIssues = 0;
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                // Check for extra spaces
                if (word.word !== word.word.trim()) {
                    this.issues.push({
                        type: 'formatting_issue',
                        severity: 'low',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Extra spaces in word "${word.word}"`,
                        suggestion: 'Remove leading/trailing spaces'
                    });
                    formattingIssues++;
                }
                
                // Check for inconsistent capitalization
                if (word.word !== word.word.toLowerCase() && word.word !== word.word.charAt(0).toUpperCase() + word.word.slice(1).toLowerCase()) {
                    this.issues.push({
                        type: 'formatting_issue',
                        severity: 'low',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Inconsistent capitalization in word "${word.word}"`,
                        suggestion: 'Standardize capitalization'
                    });
                    formattingIssues++;
                }
                
                // Check for missing punctuation in examples
                if (word.example && word.example !== 'Example not provided.' && 
                    !word.example.endsWith('.') && !word.example.endsWith('!') && !word.example.endsWith('?')) {
                    this.issues.push({
                        type: 'formatting_issue',
                        severity: 'low',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Missing punctuation in example for "${word.word}"`,
                        suggestion: 'Add appropriate punctuation to example'
                    });
                    formattingIssues++;
                }
            });
        });
        
        console.log(`   Found ${formattingIssues} formatting issues`);
    }

    // Check part of speech consistency
    checkPartOfSpeechConsistency() {
        console.log('🏷️  Checking part of speech consistency...');
        
        const validPOS = ['adj', 'adv', 'n', 'v', 'prep', 'conj', 'interj', 'adj/n', 'v/n', 'n/adj', 'v/adj'];
        let posIssues = 0;
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                if (!validPOS.includes(word.partOfSpeech)) {
                    this.issues.push({
                        type: 'pos_inconsistency',
                        severity: 'medium',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Invalid part of speech "${word.partOfSpeech}" for word "${word.word}"`,
                        suggestion: `Use one of: ${validPOS.join(', ')}`
                    });
                    posIssues++;
                }
            });
        });
        
        console.log(`   Found ${posIssues} part of speech issues`);
    }

    // Check meaning quality
    checkMeaningQuality() {
        console.log('📖 Checking meaning quality...');
        
        let qualityIssues = 0;
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                // Check for very short meanings
                if (word.meaning && word.meaning.length < 10) {
                    this.issues.push({
                        type: 'meaning_quality',
                        severity: 'medium',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Very short meaning for word "${word.word}": "${word.meaning}"`,
                        suggestion: 'Provide more detailed meaning'
                    });
                    qualityIssues++;
                }
                
                // Check for missing definitions
                if (!word.meaning || word.meaning.trim() === '') {
                    this.issues.push({
                        type: 'meaning_quality',
                        severity: 'high',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Missing meaning for word "${word.word}"`,
                        suggestion: 'Add definition for the word'
                    });
                    qualityIssues++;
                }
                
                // Check for overly complex meanings
                if (word.meaning && word.meaning.length > 200) {
                    this.issues.push({
                        type: 'meaning_quality',
                        severity: 'low',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word,
                        description: `Very long meaning for word "${word.word}" (${word.meaning.length} characters)`,
                        suggestion: 'Consider simplifying the meaning'
                    });
                    qualityIssues++;
                }
            });
        });
        
        console.log(`   Found ${qualityIssues} meaning quality issues`);
    }

    // Check word length distribution
    checkWordLengthDistribution() {
        console.log('📏 Analyzing word length distribution...');
        
        const wordLengths = [];
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                wordLengths.push({
                    length: word.word.length,
                    word: word.word,
                    unit: unitNum
                });
            });
        });
        
        // Calculate statistics
        const lengths = wordLengths.map(w => w.length);
        const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
        const minLength = Math.min(...lengths);
        const maxLength = Math.max(...lengths);
        
        // Check for unusually short or long words
        const shortWords = wordLengths.filter(w => w.length <= 2);
        const longWords = wordLengths.filter(w => w.length >= 15);
        
        shortWords.forEach(word => {
            this.issues.push({
                type: 'word_length',
                severity: 'low',
                unit: word.unit,
                word: word.word,
                description: `Very short word "${word.word}" (${word.length} characters)`,
                suggestion: 'Verify this is a complete word'
            });
        });
        
        longWords.forEach(word => {
            this.issues.push({
                type: 'word_length',
                severity: 'low',
                unit: word.unit,
                word: word.word,
                description: `Very long word "${word.word}" (${word.length} characters)`,
                suggestion: 'Verify spelling and consider if it\'s appropriate for the level'
            });
        });
        
        console.log(`   Average word length: ${avgLength.toFixed(1)} characters`);
        console.log(`   Range: ${minLength} - ${maxLength} characters`);
        console.log(`   Found ${shortWords.length} very short words and ${longWords.length} very long words`);
    }

    // Check unit completeness
    checkUnitCompleteness() {
        console.log('📚 Checking unit completeness...');
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            // Check for units with very few words
            if (unit.words.length < 10) {
                this.issues.push({
                    type: 'unit_completeness',
                    severity: 'medium',
                    unit: unitNum,
                    description: `Unit ${unitNum} has only ${unit.words.length} words`,
                    suggestion: 'Consider adding more words to reach target count'
                });
            }
            
            // Check for missing unit titles
            if (!unit.title || unit.title.trim() === '') {
                this.issues.push({
                    type: 'unit_completeness',
                    severity: 'high',
                    unit: unitNum,
                    description: `Unit ${unitNum} is missing a title`,
                    suggestion: 'Add a descriptive title for the unit'
                });
            }
        });
        
        console.log(`   Analyzed ${Object.keys(this.book6Data.units).length} units`);
    }

    // Check data structure integrity
    checkDataStructureIntegrity() {
        console.log('🔧 Checking data structure integrity...');
        
        let structureIssues = 0;
        
        Object.entries(this.book6Data.units).forEach(([unitNum, unit]) => {
            // Check if unit has required fields
            if (!unit.words || !Array.isArray(unit.words)) {
                this.issues.push({
                    type: 'structure_integrity',
                    severity: 'high',
                    unit: unitNum,
                    description: `Unit ${unitNum} is missing words array`,
                    suggestion: 'Add words array to unit'
                });
                structureIssues++;
                return;
            }
            
            // Check each word for required fields
            unit.words.forEach((word, wordIndex) => {
                const requiredFields = ['word', 'partOfSpeech', 'meaning', 'example'];
                const missingFields = requiredFields.filter(field => !word.hasOwnProperty(field));
                
                if (missingFields.length > 0) {
                    this.issues.push({
                        type: 'structure_integrity',
                        severity: 'high',
                        unit: unitNum,
                        wordIndex: wordIndex,
                        word: word.word || 'unknown',
                        description: `Word is missing required fields: ${missingFields.join(', ')}`,
                        suggestion: 'Add missing fields to word object'
                    });
                    structureIssues++;
                }
            });
        });
        
        console.log(`   Found ${structureIssues} structure integrity issues`);
    }

    // Generate comprehensive report
    generateReport() {
        console.log('\n📊 Generating quality report...');
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const reportFile = path.join(this.reportPath, `quality_report_${timestamp}.json`);
        
        // Group issues by type and severity
        const issuesByType = {};
        const issuesBySeverity = { high: 0, medium: 0, low: 0 };
        
        this.issues.forEach(issue => {
            if (!issuesByType[issue.type]) {
                issuesByType[issue.type] = [];
            }
            issuesByType[issue.type].push(issue);
            issuesBySeverity[issue.severity]++;
        });
        
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                totalIssues: this.issues.length,
                issuesBySeverity: issuesBySeverity,
                issuesByType: Object.keys(issuesByType).reduce((acc, type) => {
                    acc[type] = issuesByType[type].length;
                    return acc;
                }, {})
            },
            details: {
                issuesByType: issuesByType,
                allIssues: this.issues
            },
            recommendations: this.generateRecommendations()
        };
        
        // Save report
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        // Print summary
        console.log('\n📋 Quality Analysis Summary:');
        console.log('============================');
        console.log(`Total issues found: ${this.issues.length}`);
        console.log(`High severity: ${issuesBySeverity.high}`);
        console.log(`Medium severity: ${issuesBySeverity.medium}`);
        console.log(`Low severity: ${issuesBySeverity.low}`);
        console.log(`\nReport saved to: ${reportFile}`);
        
        // Print top issues by type
        console.log('\nIssues by type:');
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {
            console.log(`   ${type}: ${count}`);
        });
        
        return report;
    }

    // Generate recommendations
    generateRecommendations() {
        const recommendations = [];
        
        const missingExamples = this.issues.filter(i => i.type === 'missing_example').length;
        if (missingExamples > 0) {
            recommendations.push({
                priority: 'high',
                action: 'Add missing examples',
                description: `${missingExamples} words are missing examples`,
                impact: 'Improves learning effectiveness'
            });
        }
        
        const duplicates = this.issues.filter(i => i.type === 'duplicate_word').length;
        if (duplicates > 0) {
            recommendations.push({
                priority: 'high',
                action: 'Resolve duplicate words',
                description: `${duplicates} duplicate words found`,
                impact: 'Prevents confusion and improves content quality'
            });
        }
        
        const structureIssues = this.issues.filter(i => i.type === 'structure_integrity').length;
        if (structureIssues > 0) {
            recommendations.push({
                priority: 'critical',
                action: 'Fix data structure issues',
                description: `${structureIssues} structural integrity issues found`,
                impact: 'Essential for proper application functionality'
            });
        }
        
        return recommendations;
    }

    // Get issues by severity
    getIssuesBySeverity(severity) {
        return this.issues.filter(issue => issue.severity === severity);
    }

    // Get issues by type
    getIssuesByType(type) {
        return this.issues.filter(issue => issue.type === type);
    }

    // Export issues to CSV
    exportIssuesToCSV(outputPath) {
        const csvHeader = 'Type,Severity,Unit,Word Index,Word,Description,Suggestion\n';
        const csvRows = this.issues.map(issue => {
            return `"${issue.type}","${issue.severity}","${issue.unit || ''}","${issue.wordIndex || ''}","${issue.word || ''}","${issue.description}","${issue.suggestion}"`;
        }).join('\n');
        
        const csvContent = csvHeader + csvRows;
        
        try {
            fs.writeFileSync(outputPath, csvContent);
            console.log(`✅ Issues exported to CSV: ${outputPath}`);
            return true;
        } catch (error) {
            console.error('❌ Error exporting to CSV:', error.message);
            return false;
        }
    }
}

// Example usage and testing
function runQualityAnalysis() {
    console.log('🔍 Book 6 Data Quality Analysis');
    console.log('================================\n');
    
    const analyzer = new DataQualityAnalyzer();
    
    analyzer.runFullAnalysis().then(issues => {
        console.log('\n✅ Analysis complete!');
        
        // Export to CSV for easy review
        const csvPath = path.join(analyzer.reportPath, 'quality_issues.csv');
        analyzer.exportIssuesToCSV(csvPath);
        
        // Show top recommendations
        const recommendations = analyzer.generateRecommendations();
        if (recommendations.length > 0) {
            console.log('\n🎯 Top Recommendations:');
            recommendations.forEach((rec, index) => {
                console.log(`${index + 1}. ${rec.action} (${rec.priority} priority)`);
                console.log(`   ${rec.description}`);
                console.log(`   Impact: ${rec.impact}\n`);
            });
        }
    }).catch(error => {
        console.error('❌ Error during analysis:', error.message);
    });
}

// Export for use in other scripts
module.exports = {
    DataQualityAnalyzer,
    runQualityAnalysis
};

// Run analysis if this script is executed directly
if (require.main === module) {
    runQualityAnalysis();
}
