# Singles Update Guide - Ania Olczyk React Website

## 📝 How to Update Singles Data

This guide explains how to update the singles section with real YouTube video IDs and streaming platform links in the React application.

## 🎵 Current Singles (from Spotify)

Based on [Ania Olczyk's Spotify profile](https://open.spotify.com/artist/1AfgDOc4Q0Z7LZpdQbU49y?si=bzPPWj0VReGPP5C5vOwgog), the following singles are included:

1. **Listy Miłosne** (2025) - 6,055 plays
2. **Zaćmienie '99** (2025) - 5,830 plays  
3. **Rumianki** (2023) - 14,709 plays
4. **Toksyk** (2022) - 8,795 plays

## 🔧 Files to Update

### 1. Cover Images
Place actual cover images in the `public/covers/` directory:
- `public/covers/listy-milosne.jpg`
- `public/covers/zacmienie-99.jpg`
- `public/covers/rumianki.jpg`
- `public/covers/toksyk.jpg`

### 2. React Component Data
Update the singles data in `src/components/Singles.js`:

```javascript
const singles = [
  {
    id: 'listy-milosne',
    title: 'Listy Miłosne',
    year: '2025',
    coverImage: '/covers/listy-milosne.jpg',
    youtubeVideoId: 'REPLACE_WITH_ACTUAL_VIDEO_ID',
    spotifyUrl: 'https://open.spotify.com/track/REPLACE_WITH_ACTUAL_TRACK_ID',
    youtubeMusicUrl: 'https://music.youtube.com/watch?v=REPLACE_WITH_ACTUAL_VIDEO_ID',
    tidalUrl: 'https://tidal.com/browse/track/REPLACE_WITH_ACTUAL_TRACK_ID',
    appleMusicUrl: 'https://music.apple.com/pl/album/listy-mi%C5%82osne-single/REPLACE_WITH_ACTUAL_ALBUM_ID',
    description: 'Najnowszy singiel Ani Olczyk - \'Listy Miłosne\' to opowieść o miłości w formie listów, gdzie każdy wers to osobista wiadomość do ukochanej osoby.'
  },
  // ... repeat for other singles
];
```

### 3. Structured Data
Update the structured data in `public/index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Ania Olczyk",
  "album": [
    {
      "@type": "MusicAlbum",
      "name": "Listy Miłosne",
      "byArtist": {
        "@type": "Person",
        "name": "Ania Olczyk"
      },
      "genre": ["Pop", "Indie Pop", "Polish Music"],
      "image": "https://aniaolczyk.com/covers/listy-milosne.jpg",
      "description": "Singiel 'Listy Miłosne' - najnowszy utwór Ani Olczyk",
      "datePublished": "2025"
    }
    // ... repeat for other singles
  ]
}
</script>
```

## 📊 How to Find IDs

### YouTube Video ID
1. Go to the YouTube video
2. Copy the ID from the URL: `https://www.youtube.com/watch?v=**VIDEO_ID**`
3. Replace `VIDEO_ID_PLACEHOLDER` with the actual ID

### Spotify Track ID
1. Go to the track on Spotify
2. Right-click → Share → Copy Spotify URI
3. Extract the track ID from: `spotify:track:**TRACK_ID**`
4. Replace `TRACK_ID_PLACEHOLDER` with the actual ID

### Apple Music Album ID
1. Go to the album on Apple Music
2. Copy the ID from the URL: `https://music.apple.com/.../album/.../**ALBUM_ID**`
3. Replace `ALBUM_ID_PLACEHOLDER` with the actual ID

### Tidal Track ID
1. Go to the track on Tidal
2. Copy the ID from the URL: `https://tidal.com/browse/track/**TRACK_ID**`
3. Replace `TRACK_ID_PLACEHOLDER` with the actual ID

## 🎨 Cover Image Requirements

- **Format**: JPG or PNG
- **Size**: 300x300 pixels minimum (square aspect ratio)
- **Quality**: High resolution for crisp display
- **Style**: Consistent with Zara aesthetic (clean, minimal)
- **Location**: Place in `public/covers/` directory

## 📱 Testing Checklist

After updating:

- [ ] **Build the project**: `npm run build`
- [ ] **Test locally**: `npm start`
- [ ] **YouTube videos load** correctly
- [ ] **Spotify links open** the correct tracks
- [ ] **Apple Music links open** the correct albums
- [ ] **Tidal links work** properly
- [ ] **Cover images display** correctly
- [ ] **Mobile responsiveness** works
- [ ] **All links open** in new tabs
- [ ] **SEO structured data** is valid

## 🔍 SEO Benefits

The singles section provides:

- **Rich Content**: Detailed information about each release
- **Structured Data**: Schema.org markup for search engines
- **Internal Linking**: Anchor links for better navigation
- **Social Sharing**: Easy sharing of individual tracks
- **Streaming Integration**: Direct links to all major platforms

## 📈 Analytics Tracking

Consider adding tracking for:

- YouTube video views
- Streaming platform clicks
- Cover image interactions
- Time spent on each single section

## 🚀 Future Updates

When new singles are released:

1. **Add new single** to `src/components/Singles.js`
2. **Add cover image** to `public/covers/` directory
3. **Update structured data** in `public/index.html`
4. **Update sitemap.xml** with new single
5. **Test all functionality** before deployment
6. **Build and deploy** the updated version

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 File Structure

```
src/
├── components/
│   └── Singles.js          # Singles component with data
├── app.js                  # Main app component
└── style.css              # Styles including singles section

public/
├── index.html             # HTML with structured data
├── covers/                # Cover images directory
│   ├── listy-milosne.jpg
│   ├── zacmienie-99.jpg
│   ├── rumianki.jpg
│   └── toksyk.jpg
├── sitemap.xml            # Updated with singles
└── manifest.json          # PWA manifest
```

## 🎯 SEO Optimization

The singles section includes:

- **Semantic HTML**: Proper article and section structure
- **Accessibility**: ARIA labels and alt text
- **Structured Data**: MusicAlbum schema for each single
- **Internal Linking**: Anchor links for navigation
- **Social Sharing**: Open Graph meta tags
- **Performance**: Lazy loading for images

---

*Last updated: January 2025*
*Based on React.js implementation with comprehensive SEO optimization*
