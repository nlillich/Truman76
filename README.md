# Truman High School Class of 1976 Reunion Website

A static website for the Truman High School Class of 1976 49-year reunion, hosted on GitHub Pages.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Event Information**: Detailed information about reunion events and schedules
- **RSVP System**: Online registration and RSVP functionality
- **Payment Integration**: Multiple payment options including PayPal
- **Photo Galleries**: Links to reunion photos and memories
- **Contact Forms**: Easy way for attendees to get in touch
- **Social Integration**: Facebook group integration
- **Downloadable PDFs**: Registration forms and event invitations

## Structure

```
├── index.html              # Home page
├── reunion-details.html    # Event details and schedule
├── rsvp.html              # RSVP and registration form
├── payment.html           # Payment information and options
├── contact.html           # Contact form and committee info
├── photos.html            # Photo gallery links
├── 40-year-reunion-info.html  # 49-year reunion details
├── 30-year-reunion-info.html  # Past reunion information
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── navigation.js      # Mobile menu and navigation
│   └── scrollup.js        # Scroll to top functionality
├── images/                # Logo, banner, and other images
└── downloads/             # PDF files for download
```

## Deployment to GitHub Pages

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it something like `ths1976-reunion` or `yourusername.github.io`

2. **Upload Files**
   - Upload all the website files to your repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your site will be live at:**
   `https://yourusername.github.io/repository-name/`

## Customization

### Images
Replace the placeholder images in the `images/` folder:
- `images/Truman_Patriots_logo.png` - School logo (✅ Updated with actual logo)
- `images/ths-flag-banner.jpg` - Header banner image
- `images/facebook-badge.jpg` - Facebook group badge

### Content
Update the following information in the HTML files:
- Event dates and locations
- Pricing information
- Contact details
- Social media links
- Committee member information

### Styling
The main stylesheet is in `css/style.css`. You can customize:
- Colors (search for color codes like `#3498db`)
- Fonts (currently using Open Sans from Google Fonts)
- Layout spacing and dimensions

## Forms and Functionality

The current forms are set up for demonstration. For production use, you'll need to:

1. **Contact Form**: Integrate with a service like:
   - Netlify Forms (if hosting on Netlify)
   - Formspree
   - Google Forms
   - Custom backend

2. **RSVP Form**: Set up data collection:
   - Google Sheets integration
   - Email notifications
   - Database storage

3. **Payment Processing**: Current setup uses:
   - PayPal links
   - Venmo/Zelle information
   - Check by mail instructions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The site includes:
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Alt text for images

## Development

To make changes locally:
1. Edit the HTML, CSS, or JavaScript files
2. Open `index.html` in your web browser to preview
3. Test on different screen sizes using browser dev tools

## Support

For questions or issues:
- Email: reunion@sample-reunion.com
- Phone: (555) 123-4567
- Facebook: [THS Class of 1976 Reunion Group](https://www.facebook.com/groups/143213510728/)

---

Built with HTML, CSS, and JavaScript for static hosting on GitHub Pages.
