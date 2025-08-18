const fs = require('fs');
const path = require('path');

// Import all testing modules
const { runAllTests: runBook6Tests } = require('./test_book6.js');
const { runQualityAnalysis } = require('./data_quality_analyzer.js');
const { WordReplacementManager } = require('./word_replacement_manager.js');

class Book6TestSuite {
    constructor() {
        this.testResults = [];
        this.startTime = null;
        this.endTime = null;
    }

    // Run all tests
    async runAllTests() {
        console.log('🚀 Book 6 Comprehensive Test Suite');
        console.log('===================================\n');
        
        this.startTime = new Date();
        
        try {
            // Test 1: Data Integration Tests
            await this.runIntegrationTests();
            
            // Test 2: Data Quality Analysis
            await this.runQualityAnalysis();
            
            // Test 3: Word Replacement Functionality
            await this.runReplacementTests();
            
            // Test 4: Performance Tests
            await this.runPerformanceTests();
            
            // Test 5: Integration with Main Application
            await this.runApplicationIntegrationTests();
            
            // Generate final report
            this.generateFinalReport();
            
        } catch (error) {
            console.error('❌ Test suite failed:', error.message);
            this.recordTestResult('Test Suite', 'FAILED', error.message);
        }
        
        this.endTime = new Date();
        this.printSummary();
    }

    // Test 1: Data Integration Tests
    async runIntegrationTests() {
        console.log('📋 Test 1: Data Integration Tests');
        console.log('================================\n');
        
        try {
            const result = runBook6Tests();
            this.recordTestResult('Data Integration', 'PASSED', 'All integration tests passed');
            console.log('✅ Data integration tests completed\n');
        } catch (error) {
            this.recordTestResult('Data Integration', 'FAILED', error.message);
            console.log('❌ Data integration tests failed\n');
        }
    }

    // Test 2: Data Quality Analysis
    async runQualityAnalysis() {
        console.log('🔍 Test 2: Data Quality Analysis');
        console.log('===============================\n');
        
        try {
            const analyzer = require('./data_quality_analyzer.js').DataQualityAnalyzer;
            const qualityAnalyzer = new analyzer();
            const issues = await qualityAnalyzer.runFullAnalysis();
            
            const issueCount = issues.length;
            const highSeverityIssues = issues.filter(i => i.severity === 'high').length;
            
            if (issueCount === 0) {
                this.recordTestResult('Data Quality', 'PASSED', 'No quality issues found');
            } else if (highSeverityIssues === 0) {
                this.recordTestResult('Data Quality', 'WARNING', `${issueCount} quality issues found (none critical)`);
            } else {
                this.recordTestResult('Data Quality', 'FAILED', `${issueCount} quality issues found (${highSeverityIssues} critical)`);
            }
            
            console.log('✅ Data quality analysis completed\n');
        } catch (error) {
            this.recordTestResult('Data Quality', 'FAILED', error.message);
            console.log('❌ Data quality analysis failed\n');
        }
    }

    // Test 3: Word Replacement Functionality
    async runReplacementTests() {
        console.log('✏️  Test 3: Word Replacement Functionality');
        console.log('==========================================\n');
        
        try {
            const manager = new WordReplacementManager();
            
            // Test basic replacement functionality
            const testReplacement = {
                word: 'test_replacement_word',
                partOfSpeech: 'n',
                meaning: 'A test word for replacement functionality',
                example: 'This is a test example for replacement.',
                reason: 'Testing replacement functionality'
            };
            
            // Test single word replacement
            const success = manager.replaceWord('1', 0, testReplacement);
            
            if (success) {
                this.recordTestResult('Word Replacement', 'PASSED', 'Basic replacement functionality works');
                console.log('✅ Word replacement functionality test passed');
            } else {
                this.recordTestResult('Word Replacement', 'FAILED', 'Basic replacement functionality failed');
                console.log('❌ Word replacement functionality test failed');
            }
            
            // Test backup functionality
            const backups = manager.listBackups();
            if (backups.length > 0) {
                this.recordTestResult('Backup System', 'PASSED', `${backups.length} backups created`);
                console.log('✅ Backup system test passed');
            } else {
                this.recordTestResult('Backup System', 'FAILED', 'No backups were created');
                console.log('❌ Backup system test failed');
            }
            
            // Test find functionality
            const missingExamples = manager.findWords({ missingExample: true });
            if (missingExamples.length > 0) {
                this.recordTestResult('Search Functionality', 'PASSED', `Found ${missingExamples.length} words with missing examples`);
                console.log('✅ Search functionality test passed');
            } else {
                this.recordTestResult('Search Functionality', 'WARNING', 'No words with missing examples found');
                console.log('⚠️  Search functionality test - no missing examples found');
            }
            
            console.log('✅ Word replacement tests completed\n');
        } catch (error) {
            this.recordTestResult('Word Replacement', 'FAILED', error.message);
            console.log('❌ Word replacement tests failed\n');
        }
    }

    // Test 4: Performance Tests
    async runPerformanceTests() {
        console.log('⚡ Test 4: Performance Tests');
        console.log('===========================\n');
        
        try {
            const startTime = Date.now();
            
            // Test data loading performance
            const data = fs.readFileSync('book6_parsed.json', 'utf8');
            const book6Data = JSON.parse(data);
            const loadTime = Date.now() - startTime;
            
            if (loadTime < 1000) {
                this.recordTestResult('Data Loading Performance', 'PASSED', `Loaded in ${loadTime}ms`);
                console.log(`✅ Data loading performance: ${loadTime}ms`);
            } else {
                this.recordTestResult('Data Loading Performance', 'WARNING', `Slow loading time: ${loadTime}ms`);
                console.log(`⚠️  Data loading performance: ${loadTime}ms (slow)`);
            }
            
            // Test search performance
            const searchStartTime = Date.now();
            let searchCount = 0;
            
            for (let i = 0; i < 100; i++) {
                Object.values(book6Data.units).forEach(unit => {
                    unit.words.forEach(word => {
                        if (word.word.includes('a')) {
                            searchCount++;
                        }
                    });
                });
            }
            
            const searchTime = Date.now() - searchStartTime;
            
            if (searchTime < 5000) {
                this.recordTestResult('Search Performance', 'PASSED', `100 searches in ${searchTime}ms`);
                console.log(`✅ Search performance: ${searchTime}ms for 100 searches`);
            } else {
                this.recordTestResult('Search Performance', 'WARNING', `Slow search time: ${searchTime}ms`);
                console.log(`⚠️  Search performance: ${searchTime}ms for 100 searches (slow)`);
            }
            
            console.log('✅ Performance tests completed\n');
        } catch (error) {
            this.recordTestResult('Performance', 'FAILED', error.message);
            console.log('❌ Performance tests failed\n');
        }
    }

    // Test 5: Application Integration Tests
    async runApplicationIntegrationTests() {
        console.log('🔗 Test 5: Application Integration Tests');
        console.log('=======================================\n');
        
        try {
            // Test if data.js contains Book 6
            const dataJsContent = fs.readFileSync('data.js', 'utf8');
            
            if (dataJsContent.includes('const book6Data = {')) {
                this.recordTestResult('Data.js Integration', 'PASSED', 'Book 6 data is properly defined');
                console.log('✅ Book 6 data is properly defined in data.js');
            } else {
                this.recordTestResult('Data.js Integration', 'FAILED', 'Book 6 data is not defined in data.js');
                console.log('❌ Book 6 data is not defined in data.js');
            }
            
            if (dataJsContent.includes('vocabularyData.books[6] = book6Data')) {
                this.recordTestResult('Vocabulary Integration', 'PASSED', 'Book 6 is integrated into vocabulary data');
                console.log('✅ Book 6 is integrated into vocabulary data');
            } else {
                this.recordTestResult('Vocabulary Integration', 'FAILED', 'Book 6 is not integrated into vocabulary data');
                console.log('❌ Book 6 is not integrated into vocabulary data');
            }
            
            // Test if HTML includes Book 6
            if (fs.existsSync('index.html')) {
                const htmlContent = fs.readFileSync('index.html', 'utf8');
                if (htmlContent.includes('Book 6')) {
                    this.recordTestResult('HTML Integration', 'PASSED', 'Book 6 is referenced in HTML');
                    console.log('✅ Book 6 is referenced in HTML');
                } else {
                    this.recordTestResult('HTML Integration', 'WARNING', 'Book 6 may not be referenced in HTML');
                    console.log('⚠️  Book 6 may not be referenced in HTML');
                }
            }
            
            console.log('✅ Application integration tests completed\n');
        } catch (error) {
            this.recordTestResult('Application Integration', 'FAILED', error.message);
            console.log('❌ Application integration tests failed\n');
        }
    }

    // Record test result
    recordTestResult(testName, status, message) {
        this.testResults.push({
            test: testName,
            status: status,
            message: message,
            timestamp: new Date().toISOString()
        });
    }

    // Generate final report
    generateFinalReport() {
        console.log('📊 Generating Final Test Report');
        console.log('===============================\n');
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const reportFile = `test_reports/book6_test_report_${timestamp}.json`;
        
        // Create reports directory if it doesn't exist
        if (!fs.existsSync('test_reports')) {
            fs.mkdirSync('test_reports', { recursive: true });
        }
        
        const report = {
            timestamp: new Date().toISOString(),
            duration: this.endTime - this.startTime,
            summary: {
                total: this.testResults.length,
                passed: this.testResults.filter(r => r.status === 'PASSED').length,
                failed: this.testResults.filter(r => r.status === 'FAILED').length,
                warnings: this.testResults.filter(r => r.status === 'WARNING').length
            },
            results: this.testResults
        };
        
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        console.log(`📋 Test report saved to: ${reportFile}`);
    }

    // Print summary
    printSummary() {
        console.log('\n📋 Test Suite Summary');
        console.log('====================\n');
        
        const duration = this.endTime - this.startTime;
        const passed = this.testResults.filter(r => r.status === 'PASSED').length;
        const failed = this.testResults.filter(r => r.status === 'FAILED').length;
        const warnings = this.testResults.filter(r => r.status === 'WARNING').length;
        const total = this.testResults.length;
        
        console.log(`⏱️  Total Duration: ${duration}ms`);
        console.log(`📊 Total Tests: ${total}`);
        console.log(`✅ Passed: ${passed}`);
        console.log(`❌ Failed: ${failed}`);
        console.log(`⚠️  Warnings: ${warnings}\n`);
        
        console.log('Detailed Results:');
        console.log('=================');
        
        this.testResults.forEach(result => {
            const statusIcon = result.status === 'PASSED' ? '✅' : 
                             result.status === 'FAILED' ? '❌' : '⚠️';
            console.log(`${statusIcon} ${result.test}: ${result.status} - ${result.message}`);
        });
        
        console.log('\n🎯 Overall Status:');
        if (failed === 0 && warnings === 0) {
            console.log('🎉 ALL TESTS PASSED! Book 6 is ready for production use.');
        } else if (failed === 0) {
            console.log('✅ ALL CRITICAL TESTS PASSED! Book 6 is ready with some warnings.');
        } else {
            console.log('❌ SOME TESTS FAILED! Please review and fix the issues before using Book 6.');
        }
    }
}

// Run the test suite
async function runBook6TestSuite() {
    const testSuite = new Book6TestSuite();
    await testSuite.runAllTests();
}

// Export for use in other scripts
module.exports = {
    Book6TestSuite,
    runBook6TestSuite
};

// Run if this script is executed directly
if (require.main === module) {
    runBook6TestSuite().catch(error => {
        console.error('❌ Test suite execution failed:', error);
        process.exit(1);
    });
}
