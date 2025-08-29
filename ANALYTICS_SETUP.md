# Analytics Setup Guide - Ania Olczyk Website

## 📊 Google Analytics 4 Setup

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create account: "Ania Olczyk Music"
4. Create property: "aniaolczyk.com"
5. Choose industry: "Arts & Entertainment"
6. Select business size: "Small business"

### 2. Get Measurement ID
- Copy the Measurement ID (format: G-XXXXXXXXXX)
- Replace `GA_MEASUREMENT_ID` in `index.html` with your actual ID

### 3. Enhanced Ecommerce Setup
```javascript
// Add to your React app for music tracking
gtag('event', 'purchase', {
  transaction_id: 'toksyk_single',
  value: 0.00,
  currency: 'PLN',
  items: [{
    item_id: 'toksyk_single',
    item_name: 'Toksyk - Ania Olczyk',
    category: 'Music',
    quantity: 1
  }]
});
```

## 🔍 Google Search Console Setup

### 1. Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://aniaolczyk.com`
3. Verify ownership (HTML tag method recommended)

### 2. Submit Sitemap
1. Go to "Sitemaps" section
2. Submit: `https://aniaolczyk.com/sitemap.xml`
3. Monitor indexing status

### 3. Monitor Performance
- Track search queries
- Monitor click-through rates
- Check mobile usability
- Review Core Web Vitals

## 📱 Social Media Analytics

### Facebook Insights
- Track page engagement
- Monitor post performance
- Analyze audience demographics

### Instagram Analytics
- Track follower growth
- Monitor story views
- Analyze post engagement

### YouTube Analytics (if applicable)
- Track video views
- Monitor subscriber growth
- Analyze audience retention

## 🎵 Music Industry Specific Tracking

### Streaming Platform Analytics
- Spotify for Artists
- Apple Music for Artists
- YouTube Music Analytics

### Event Tracking
```javascript
// Track music plays
gtag('event', 'play', {
  event_category: 'Music',
  event_label: 'Toksyk'
});

// Track social shares
gtag('event', 'share', {
  method: 'facebook',
  content_type: 'music',
  item_id: 'toksyk_single'
});
```

## 📈 Key Metrics to Monitor

### Website Performance
- **Page Load Speed**: Target < 3 seconds
- **Mobile Usability**: 100% mobile-friendly
- **Core Web Vitals**: All green
- **Bounce Rate**: Target < 60%

### SEO Performance
- **Organic Traffic**: Monthly growth
- **Keyword Rankings**: Target keywords
- **Click-through Rate**: > 2%
- **Indexed Pages**: All important pages

### User Engagement
- **Time on Site**: > 2 minutes
- **Pages per Session**: > 2 pages
- **Return Visitors**: > 20%
- **Social Shares**: Track sharing

### Music Industry Metrics
- **Music Plays**: Track streaming
- **Social Media Growth**: Followers increase
- **Event Attendance**: Concert metrics
- **Merchandise Sales**: If applicable

## 🔧 Implementation Checklist

### Google Analytics 4
- [ ] Create GA4 property
- [ ] Add tracking code to website
- [ ] Set up goals and conversions
- [ ] Configure enhanced ecommerce
- [ ] Set up custom dimensions

### Google Search Console
- [ ] Add and verify property
- [ ] Submit sitemap
- [ ] Set up email notifications
- [ ] Monitor Core Web Vitals
- [ ] Review search performance

### Social Media
- [ ] Connect Facebook Pixel
- [ ] Set up Instagram tracking
- [ ] Configure Twitter Analytics
- [ ] Monitor social referrals

### Music Platforms
- [ ] Claim Spotify for Artists
- [ ] Set up Apple Music for Artists
- [ ] Connect YouTube Analytics
- [ ] Monitor streaming data

## 📊 Monthly Reporting Template

### Website Performance Report
```
Month: [Month Year]
- Total Sessions: [Number]
- New Users: [Number]
- Bounce Rate: [Percentage]
- Avg. Session Duration: [Time]
- Pages per Session: [Number]
```

### SEO Performance Report
```
- Organic Traffic: [Number]
- Top Keywords: [List]
- Click-through Rate: [Percentage]
- Indexed Pages: [Number]
- Search Console Errors: [Number]
```

### Social Media Report
```
- Facebook Followers: [Number]
- Instagram Followers: [Number]
- Engagement Rate: [Percentage]
- Top Posts: [List]
- Social Referrals: [Number]
```

### Music Performance Report
```
- Spotify Streams: [Number]
- Apple Music Plays: [Number]
- YouTube Views: [Number]
- New Releases: [List]
- Event Attendance: [Number]
```

## 🎯 Action Items

### Immediate (Week 1)
1. Set up Google Analytics 4
2. Add tracking code to website
3. Create Google Search Console account
4. Submit sitemap

### Short-term (Month 1)
1. Set up goals and conversions
2. Configure social media tracking
3. Set up monthly reporting
4. Monitor initial performance

### Long-term (Ongoing)
1. Regular performance reviews
2. A/B testing implementation
3. Advanced tracking setup
4. ROI analysis

---

*For technical support, contact: analytics@aniaolczyk.com*
