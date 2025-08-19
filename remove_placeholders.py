import json
import re

def remove_placeholders():
    print("🗑️ Removing all placeholder entries from bookData.js...")
    
    try:
        # Read the current bookData.js file
        with open('bookData.js', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the JSON data
        start = content.find('const bookData = ') + len('const bookData = ')
        end = content.find(';\n\n// Export', start)
        if end == -1:
            end = content.find(';\n\n', start)
        if end == -1:
            end = content.find(';', start)
        
        app_data = json.loads(content[start:end])
        
        # Count placeholders before removal
        total_placeholders = 0
        
        # Remove placeholders from all books and units
        for book_num in app_data:
            for unit_num in app_data[book_num]["units"]:
                unit_words = app_data[book_num]["units"][unit_num]
                
                # Filter out placeholder entries
                original_count = len(unit_words)
                unit_words[:] = [word for word in unit_words if not word["word"].startswith("placeholder_")]
                removed_count = original_count - len(unit_words)
                total_placeholders += removed_count
                
                if removed_count > 0:
                    print(f"📚 Book {book_num}, Unit {unit_num}: Removed {removed_count} placeholders")
        
        print(f"\n✅ Total placeholders removed: {total_placeholders}")
        
        # Write the updated data back to the file
        with open('bookData.js', 'w', encoding='utf-8') as f:
            f.write('// Book Data Structure - Extracted from Word Documents\n')
            f.write('// Real vocabulary content from user-provided files\n')
            f.write('// All 4 books with complete vocabulary (placeholders removed)\n\n')
            f.write('const bookData = ')
            f.write(json.dumps(app_data, indent=2, ensure_ascii=False))
            f.write(';\n\n')
            f.write('// Export the data for use in the main script\n')
            f.write('if (typeof module !== \'undefined\' && module.exports) {\n')
            f.write('    module.exports = bookData;\n')
            f.write('}\n')
        
        print("✅ bookData.js updated successfully!")
        
        # Show summary of remaining words
        print("\n📊 Summary of remaining words:")
        for book_num in sorted(app_data.keys()):
            total_words = 0
            for unit_num in app_data[book_num]["units"]:
                total_words += len(app_data[book_num]["units"][unit_num])
            print(f"   Book {book_num}: {total_words} real words")
        
    except Exception as e:
        print(f"❌ Error updating bookData.js: {e}")

if __name__ == "__main__":
    remove_placeholders()
