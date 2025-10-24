# Icon Library Comparison

A comprehensive comparison tool for popular icon libraries including Lucide, Tabler, Heroicons, Phosphor, and Feather.

## Libraries Compared

- **Lucide** (~1,000+ icons) - Modern, clean line icons (Feather successor)
- **Tabler** (~2,400+ icons) - Crisp line icons with some fills  
- **Heroicons** (~316 icons) - Multiple sizes (mini, micro, outline, solid)
- **Phosphor** (~7,000+ icons) - Multiple weights (thin to bold)
- **Feather** (~300+ icons) - Minimalist line icons (no longer maintained)

## Features

- Side-by-side comparison of equivalent icons across libraries
- Responsive design that works on desktop and mobile
- Hover effects and interactive elements
- Easy-to-identify icon names for development
- Organized by common icon categories

## Usage

1. Open `index.html` in a web browser
2. Browse the comparison table to see equivalent icons
3. Hover over icons to see enhanced views
4. Use the icon names shown below each icon in your projects

## Icon Categories Covered

- Navigation (home, menu, close)
- User interface (settings, search, edit, delete)
- Actions (save, upload, share, copy)
- Security (lock, unlock, eye)
- Communication (mail, phone, bell)
- Commerce (bag, cart, heart, star)
- Feedback (check, warning, error, success)
- Directional (arrows in all directions)
- Time & location (calendar, clock, map pin)

## Notes

- Some libraries may have multiple icons for the same concept
- Empty cells indicate no equivalent icon found in that library
- Icon availability may vary between library versions
- Some icons might be named differently but serve the same purpose

## Development

To add new icon mappings, edit the `iconMappings` array in `script.js`. Each mapping should include:

```javascript
{
    type: "Icon Category Name",
    lucide: ["icon-name"],
    tabler: ["icon-name"], 
    heroicons: ["icon-name"],
    phosphor: ["icon-name"],
    feather: ["icon-name"]
}
```

## CDN Links Used

- Lucide: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`
- Tabler: `https://unpkg.com/@tabler/icons@latest/tabler-icons.css`
- Heroicons: `https://unpkg.com/heroicons@2.0.0/`
- Phosphor: `https://unpkg.com/@phosphor-icons/web@2.0.3/`
- Feather: `https://unpkg.com/feather-icons/dist/feather.min.js`