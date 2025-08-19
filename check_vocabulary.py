import json
from docx import Document
import re

def extract_all_words_from_docs():
    """Extract all words from all Word documents"""
    all_words = {}
    
    for book_num in range(3, 7):
        file_path = f"Book {book_num}.docx"
        print(f"\n=== Analyzing {file_path} ===")
        
        try:
            doc = Document(file_path)
            book_words = []
            current_unit = None
            
            for paragraph in doc.paragraphs:
                text = paragraph.text.strip()
                if not text:
                    continue
                
                # Check if it's a unit header
                if text.startswith('Unit'):
                    unit_match = re.search(r'Unit\s+(\d+)', text)
                    if unit_match:
                        current_unit = unit_match.group(1)
                        print(f"  Found Unit {current_unit}")
                    continue
                
                # Check if it's a vocabulary entry
                if current_unit and '–' in text and '(' in text and ')' in text:
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
                                
                                book_words.append({
                                    "word": word,
                                    "partOfSpeech": pos,
                                    "meaning": meaning,
                                    "unit": current_unit
                                })
                                print(f"    ✓ {word} ({pos}) - {meaning[:50]}...")
                    except:
                        continue
            
            all_words[str(book_num)] = {
                "title": f"Book {book_num}",
                "words": book_words,
                "total_words": len(book_words)
            }
            print(f"  Total words in Book {book_num}: {len(book_words)}")
            
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            all_words[str(book_num)] = {
                "title": f"Book {book_num}",
                "words": [],
                "total_words": 0
            }
    
    return all_words

def get_current_app_words():
    """Get words currently in the app"""
    try:
        with open('bookData.js', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the bookData object
        start = content.find('const bookData = ') + len('const bookData = ')
        end = content.find(';\n\n// Export', start)
        
        if start == -1 or end == -1:
            return {}
        
        # Parse existing data
        app_data = json.loads(content[start:end])
        
        # Extract all words
        app_words = {}
        for book_num, book_info in app_data.items():
            book_words = []
            for unit_num, unit_words in book_info["units"].items():
                for word_data in unit_words:
                    book_words.append({
                        "word": word_data["word"],
                        "partOfSpeech": word_data["partOfSpeech"],
                        "meaning": word_data["meaning"],
                        "unit": unit_num
                    })
            
            app_words[book_num] = {
                "title": book_info["title"],
                "words": book_words,
                "total_words": len(book_words)
            }
        
        return app_words
        
    except Exception as e:
        print(f"Error reading app data: {e}")
        return {}

def compare_vocabulary():
    """Compare vocabulary from documents vs app"""
    print("=== VOCABULARY COMPARISON ANALYSIS ===\n")
    
    # Get words from documents
    print("1. Extracting words from Word documents...")
    doc_words = extract_all_words_from_docs()
    
    # Get words from app
    print("\n2. Extracting words from current app...")
    app_words = get_current_app_words()
    
    # Compare
    print("\n3. Comparing vocabulary...")
    print("=" * 60)
    
    total_doc_words = 0
    total_app_words = 0
    
    for book_num in range(3, 7):
        book_str = str(book_num)
        doc_book = doc_words.get(book_str, {"words": [], "total_words": 0})
        app_book = app_words.get(book_str, {"words": [], "total_words": 0})
        
        doc_count = doc_book["total_words"]
        app_count = app_book["total_words"]
        
        total_doc_words += doc_count
        total_app_words += app_count
        
        print(f"\nBook {book_num}:")
        print(f"  📄 Word Document: {doc_count} words")
        print(f"  📱 App: {app_count} words")
        
        if doc_count > app_count:
            missing = doc_count - app_count
            print(f"  ❌ Missing {missing} words in app")
            
            # Show some missing words
            doc_word_list = [w["word"] for w in doc_book["words"]]
            app_word_list = [w["word"] for w in app_book["words"]]
            missing_words = [w for w in doc_word_list if w not in app_word_list]
            
            if missing_words:
                print(f"  📝 Sample missing words: {', '.join(missing_words[:10])}")
                if len(missing_words) > 10:
                    print(f"     ... and {len(missing_words) - 10} more")
        
        elif app_count > doc_count:
            extra = app_count - doc_count
            print(f"  ⚠️  {extra} extra words in app (possibly generated)")
        
        else:
            print(f"  ✅ Word count matches")
    
    print("\n" + "=" * 60)
    print(f"TOTAL SUMMARY:")
    print(f"  📄 Word Documents: {total_doc_words} words")
    print(f"  📱 App: {total_app_words} words")
    
    if total_doc_words > total_app_words:
        print(f"  ❌ Missing {total_doc_words - total_app_words} words in app")
    elif total_app_words > total_doc_words:
        print(f"  ⚠️  {total_app_words - total_doc_words} extra words in app")
    else:
        print(f"  ✅ All words from documents are in the app")
    
    # Show sample words from each book
    print("\n" + "=" * 60)
    print("SAMPLE WORDS FROM EACH BOOK:")
    
    for book_num in range(3, 7):
        book_str = str(book_num)
        doc_book = doc_words.get(book_str, {"words": []})
        
        if doc_book["words"]:
            sample_words = doc_book["words"][:5]
            print(f"\nBook {book_num} (from document):")
            for word_data in sample_words:
                print(f"  • {word_data['word']} ({word_data['partOfSpeech']}) - {word_data['meaning'][:50]}...")

if __name__ == "__main__":
    compare_vocabulary()
