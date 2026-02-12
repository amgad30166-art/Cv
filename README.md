# Haneen Al Sharq CV Generator

## 🌟 Overview
A professional CV generator for Haneen Al Sharq Recruitment Agency. This tool creates bilingual (Arabic/English) CVs for domestic workers with automatic salary calculations and PDF export functionality.

## ✨ Features

### 1. **Smart Form Inputs**
- Bilingual labels (Arabic/English)
- Auto-fill salary based on nationality and experience
- Age validation (21-40 years)
- Required field validation

### 2. **Automatic Salary Rules**
- **Kenya**: 850 SAR (Fresh) / 1000 SAR (Experience)
- **Uganda**: 900 SAR (Fresh) / 1000 SAR (Experience)  
- **Ethiopia**: 1000 SAR (Fixed)
- **Other nationalities**: Manual entry

### 3. **Professional CV Layout**
- Two-page A4 format
- Page 1: Complete candidate profile with photo
- Page 2: Passport scan
- RTL (Right-to-Left) layout for Arabic
- Professional color scheme with company branding

### 4. **Skills Assessment**
Nine core skills with proficiency levels:
- Cleaning / التنظيف
- Cooking / الطبخ
- Arabic Cooking / الطبخ العربي
- Washing / الغسيل
- Ironing / الكوي
- Babysitting / رعاية الرضع
- Children Care / رعاية الأطفال
- Tutoring / تعليم الأطفال
- Elderly Care / رعاية كبار السن

### 5. **Document Management**
- Photo upload with live preview
- Passport scan upload
- Placeholder images for missing uploads
- PDF generation via print function

### 6. **User Experience**
- Live preview updates
- Success notifications
- Form reset functionality
- Responsive design (desktop/mobile)
- Smooth scrolling to preview
- Print-optimized styling

## 🚀 How to Use

### Step 1: Fill in the Form
1. Enter office name
2. Complete personal information
3. Add job and passport details
4. Upload candidate photo
5. Upload passport scan
6. Rate skills (Poor/Fair/Good/Excellent)

### Step 2: Preview
- Click "Update Preview" button
- Review the generated CV
- Make any necessary corrections

### Step 3: Generate PDF
- Click "Generate PDF" button
- Save or print the CV
- CV will be formatted for A4 paper

## 📋 Required Fields
- Full Name
- Nationality
- Profession

## ⚙️ Technical Details

### Files Structure
```
haneen-cv-generator/
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # JavaScript functionality
├── logo.png            # Company logo
└── README.md           # Documentation
```

### Browser Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Print functionality for PDF generation

### Fonts
- Uses Google Font: **Tajawal** for professional Arabic typography
- Fallback to Arial for compatibility

## 🎨 Customization

### Color Scheme
- Primary: `#0d3b66` (Navy Blue)
- Secondary: `#1565C0` (Light Blue)
- Accent: `#ffc107` (Gold/Yellow for salary box)
- Gradient backgrounds for modern look

### Modifying Salary Rules
Edit the `autoSalary()` function in `script.js`:
```javascript
if (nationality === "Kenya") {
    salaryField.value = experience === "Fresh" ? 850 : 1000;
}
```

### Adding New Nationalities
1. Add option in HTML select element
2. Add translation in `nationalityMap` in script.js
3. Add salary rule in `autoSalary()` function (if needed)

## 🐛 Troubleshooting

### Issue: Images not showing
- **Solution**: Ensure `logo.png` is in the same directory as HTML file
- Check file paths are correct
- Verify images are uploaded before clicking preview

### Issue: PDF looks different from preview
- **Solution**: This is normal - print styles are optimized for A4
- Use Chrome for best PDF results
- Check print preview before saving

### Issue: Arabic text appears broken
- **Solution**: Ensure Google Fonts (Tajawal) loads properly
- Check internet connection for font loading
- Fallback font is Arial

### Issue: Age validation fails
- **Solution**: Candidate must be between 21-40 years old
- Double-check date of birth entry
- Use format: YYYY-MM-DD

## 📱 Mobile Support
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Data Privacy
- All data processing happens in the browser
- No data is sent to external servers
- Files are only stored temporarily in browser memory
- Clear browser cache to remove all data

## 📄 Print Settings Recommendation
For best PDF results:
- **Paper**: A4
- **Orientation**: Portrait
- **Margins**: Default (or 12mm)
- **Scale**: 100%
- **Background graphics**: Enabled

## 🌐 Language Support
- Interface: Bilingual (Arabic/English)
- CV Output: Arabic (primary)
- Form labels: Both languages for clarity

## 📞 Contact Information
Included in CV footer:
- Phone numbers: Multiple contact lines
- Email: haneenalshaq11@gmail.com
- Office address: الرياض - حي النهضة - شارع سلمان الفارسي

## 🔄 Version History
- **v2.0** - Complete redesign with improvements
  - Added Arabic font support
  - Improved validation
  - Better responsive design
  - Enhanced user experience
  - Fixed file path issues
  - Added notification system

## 💡 Tips for Best Results
1. Use high-quality photos (300x400px recommended)
2. Scan passport in good lighting
3. Fill all fields for complete CV
4. Review preview before printing
5. Save PDF with meaningful filename
6. Keep original form data for updates

## 🎯 Future Enhancements
Potential features for future versions:
- Save/Load form data
- Multiple language outputs
- Email CV directly
- Batch CV generation
- Database integration
- More nationality options

---

**Developed for Haneen Al Sharq Recruitment**  
*Professional CV Solutions for Domestic Worker Placement*
