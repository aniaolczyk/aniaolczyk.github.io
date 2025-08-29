# Singles Update Guide - Ania Olczyk Website

## 📝 How to Update Singles Data

This guide explains how to update the singles section with real YouTube video IDs and streaming platform links.

## 🎵 Current Singles (from Spotify)

Based on [Ania Olczyk's Spotify profile](https://open.spotify.com/artist/1AfgDOc4Q0Z7LZpdQbU49y?si=bzPPWj0VReGPP5C5vOwgog), the following singles are included:

1. **Listy Miłosne** (2025) - 6,055 plays
2. **Zaćmienie '99** (2025) - 5,830 plays  
3. **Rumianki** (2023) - 14,709 plays
4. **Toksyk** (2022) - 8,795 plays

## 🔧 Files to Update

### 1. Cover Images
Place actual cover images in the `/covers/` directory:
- `/covers/listy-milosne.jpg`
- `/covers/zacmienie-99.jpg`
- `/covers/rumianki.jpg`
- `/covers/toksyk.jpg`

### 2. YouTube Video IDs
Replace `VIDEO_ID_PLACEHOLDER` in `index.html` with actual YouTube video IDs:

```html
<!-- Find these lines in index.html and replace VIDEO_ID_PLACEHOLDER -->
src="https://www.youtube.com/embed/VIDEO_ID_PLACEHOLDER"
```

### 3. Spotify Track Links
Replace `TRACK_ID_PLACEHOLDER` with actual Spotify track IDs:

```html
<!-- Find these lines in index.html and replace TRACK_ID_PLACEHOLDER -->
href="https://open.spotify.com/track/TRACK_ID_PLACEHOLDER"
```

### 4. Apple Music Album Links
Replace `ALBUM_ID_PLACEHOLDER` with actual Apple Music album IDs:

```html
<!-- Find these lines in index.html and replace ALBUM_ID_PLACEHOLDER -->
href="https://music.apple.com/pl/album/.../ALBUM_ID_PLACEHOLDER"
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

## 📱 Testing Checklist

After updating:

- [ ] YouTube videos load correctly
- [ ] Spotify links open the correct tracks
- [ ] Apple Music links open the correct albums
- [ ] Tidal links work properly
- [ ] Cover images display correctly
- [ ] Mobile responsiveness works
- [ ] All links open in new tabs

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

1. Add new single section to `index.html`
2. Update `singles-data.json`
3. Add cover image to `/covers/` directory
4. Update structured data in `index.html`
5. Update `sitemap.xml`
6. Test all links and functionality

---

*Last updated: January 2025*
*Based on Spotify data from: https://open.spotify.com/artist/1AfgDOc4Q0Z7LZpdQbU49y*
