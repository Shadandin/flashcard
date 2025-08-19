import json
from docx import Document

def extract_book5():
    """Simple extraction of Book 5 vocabulary"""
    file_path = "Book 5.docx"
    
    try:
        doc = Document(file_path)
        
        # Create basic Book 5 data structure
        book5_data = {
            "title": "Book 5 - Academic Vocabulary",
            "units": {}
        }
        
        current_unit = None
        current_words = []
        
        for paragraph in doc.paragraphs:
            text = paragraph.text.strip()
            if not text:
                continue
            
            # Check if it's a unit header
            if text.startswith('Unit'):
                # Save previous unit
                if current_unit and current_words:
                    book5_data["units"][current_unit] = current_words
                    current_words = []
                
                # Extract unit number
                import re
                unit_match = re.search(r'Unit\s+(\d+)', text)
                if unit_match:
                    current_unit = unit_match.group(1)
                    print(f"Processing Unit {current_unit}")
                continue
            
            # Check if it's a vocabulary entry
            if current_unit and '–' in text and '(' in text and ')' in text:
                # Simple extraction
                try:
                    # Split by the en dash
                    parts = text.split('–', 1)
                    if len(parts) == 2:
                        left_part = parts[0].strip()
                        meaning = parts[1].strip()
                        
                        # Extract word and part of speech
                        word_pos_match = re.match(r'^([A-Za-z]+)\s*\(([^)]+)\)', left_part)
                        if word_pos_match:
                            word = word_pos_match.group(1).lower().strip()
                            pos = word_pos_match.group(2).strip().lower()
                            
                            # Clean up part of speech
                            if pos in ['adj', 'adjective']:
                                pos = "adjective"
                            elif pos in ['v', 'verb']:
                                pos = "verb"
                            elif pos in ['n', 'noun']:
                                pos = "noun"
                            elif pos in ['adv', 'adverb']:
                                pos = "adverb"
                            elif '/' in pos:
                                pos = pos.split('/')[0].strip()
                            
                            # Skip if word is too short
                            if len(word) < 2:
                                continue
                            
                            # Generate example
                            if pos == "verb":
                                example = f"The team will {word} the project successfully."
                            elif pos == "adjective":
                                example = f"The {word} approach was very effective."
                            else:
                                example = f"The {word} is important for success."
                            
                            current_words.append({
                                "word": word,
                                "partOfSpeech": pos,
                                "meaning": meaning,
                                "example": example
                            })
                            print(f"  ✓ {word} ({pos})")
                except:
                    continue
        
        # Add the last unit
        if current_unit and current_words:
            book5_data["units"][current_unit] = current_words
        
        return book5_data
        
    except Exception as e:
        print(f"Error: {e}")
        return {"title": "Book 5 - Academic Vocabulary", "units": {}}

def update_book_data():
    """Update bookData.js with Book 5 content"""
    print("Extracting Book 5 vocabulary...")
    
    # Read existing bookData.js
    with open('bookData.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the bookData object
    start = content.find('const bookData = ') + len('const bookData = ')
    end = content.find(';\n\n// Export', start)
    
    if start == -1 or end == -1:
        print("Could not find bookData in file")
        return
    
    # Parse existing data
    existing_data = json.loads(content[start:end])
    
    # Get Book 5 data
    book5_data = extract_book5()
    
    if book5_data["units"]:
        existing_data["5"] = book5_data
        print(f"Added {len(book5_data['units'])} units to Book 5")
        
        # Count total words in Book 5
        total_words = sum(len(unit) for unit in book5_data["units"].values())
        print(f"Total words in Book 5: {total_words}")
        
        # Write updated data
        with open('bookData.js', 'w', encoding='utf-8') as f:
            f.write('// Book Data Structure - Extracted from Word Documents\n')
            f.write('// Real vocabulary content from user-provided files\n')
            f.write('// All 4 books with complete vocabulary\n\n')
            f.write('const bookData = ')
            f.write(json.dumps(existing_data, indent=2, ensure_ascii=False))
            f.write(';\n\n')
            f.write('// Export the data for use in the main script\n')
            f.write('if (typeof module !== \'undefined\' && module.exports) {\n')
            f.write('    module.exports = bookData;\n')
            f.write('}\n')
        
        print("✅ bookData.js updated successfully!")
        
        # Print statistics
        total_units = sum(len(book["units"]) for book in existing_data.values())
        total_words = sum(
            sum(len(unit) for unit in book["units"].values()) 
            for book in existing_data.values()
        )
        print(f"\n📊 Final Statistics:")
        print(f"Total books: {len(existing_data)}")
        print(f"Total units: {total_units}")
        print(f"Total words: {total_words}")
        
        for book_num, book_info in existing_data.items():
            word_count = sum(len(unit) for unit in book_info["units"].values())
            unit_count = len(book_info["units"])
            print(f"   Book {book_num}: {word_count} words across {unit_count} units")
    else:
        print("❌ No Book 5 data extracted")

if __name__ == "__main__":
    update_book_data()
