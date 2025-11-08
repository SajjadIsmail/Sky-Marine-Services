# Manual Image Download Guide

The automatic download script is not working due to Unsplash API changes. Please follow this manual guide to add images to your website.

## ✅ IMPORTANT: Your Website Will Work Without Local Images

Your application is configured with **fallback images** from Unsplash. This means:
- The website will display properly even without local images
- High-quality marine/shipping images will load from Unsplash CDN
- For production, you should add your own images for better performance and branding

## Quick Download Instructions

### 🎯 Step 1: Download Carousel Images (Hero Slider)

Visit: **https://unsplash.com/s/photos/cargo-ship**

Search and download 3 images:
1. Search "cargo ship ocean sunset" → Download → Rename to `hero-1.jpg`
2. Search "container ship sea" → Download → Rename to `hero-2.jpg`
3. Search "maritime shipping vessel" → Download → Rename to `hero-3.jpg`

**Save to:** `frontend/public/images/carousel/`

**Recommended size:** Select "Large" or "Original" (1920x1080 or higher)

### 🎯 Step 2: Download Service Images

Visit: **https://www.pexels.com/search/shipping/**

Download these 6 images (search terms provided):

1. **crew-manning.jpg**
   - Search: "ship crew" or "maritime workers"
   - Save to: `frontend/public/images/services/`

2. **ship-chandelling.jpg**
   - Search: "ship supplies" or "marine equipment"
   - Save to: `frontend/public/images/services/`

3. **customs-clearing.jpg**
   - Search: "port customs" or "shipping documentation"
   - Save to: `frontend/public/images/services/`

4. **freight-forwarding.jpg**
   - Search: "cargo containers" or "shipping logistics"
   - Save to: `frontend/public/images/services/`

5. **transportation.jpg**
   - Search: "freight trucks" or "logistics transport"
   - Save to: `frontend/public/images/services/`

6. **ship-chartering.jpg**
   - Search: "ships harbor" or "port vessels"
   - Save to: `frontend/public/images/services/`

**Recommended size:** "Large" (800x600 minimum)

### 🎯 Step 3: Download About Section Image

Visit: **https://unsplash.com/s/photos/shipping-logistics**

- Search: "shipping logistics" or "maritime industry"
- Download 1 image
- Rename to: `about-shipping.jpg`
- Save to: `frontend/public/images/`

### 🎯 Step 4: Add Company Logos

**IMPORTANT:** You need official company logos for these:

1. **company-logo-white.png**
   - Your company's logo (white version for dark header)
   - PNG with transparent background
   - Size: ~200x80px
   - Save to: `frontend/public/images/logos/`
   - Request from your marketing/brand team

2. **ias-logo.png**
   - IAS (International Accreditation Service) logo
   - Official logo from: https://www.iasonline.org/
   - Or from your accreditation documents
   - Size: ~100x45px
   - Save to: `frontend/public/images/logos/`

## Alternative Free Image Sources

If Unsplash or Pexels don't have what you need:

1. **Pixabay**: https://pixabay.com/images/search/container-ship/
   - Free for commercial use
   - No attribution required
   - Good selection of shipping images

2. **StockSnap**: https://stocksnap.io/search/shipping
   - High-quality free stock photos
   - No attribution required

3. **Burst by Shopify**: https://burst.shopify.com/
   - Free stock photos for commercial use

## Image Optimization (Important!)

After downloading, optimize your images:

### Online Tools (Easiest):
- **TinyPNG**: https://tinypng.com/ (drag & drop)
- **Squoosh**: https://squoosh.app/ (more control)

### Target File Sizes:
- Carousel images: <500KB each
- Service images: <300KB each
- Logos: <50KB each

## Folder Structure Check

After downloading, your folder structure should look like:

```
frontend/public/images/
├── logos/
│   ├── company-logo-white.png ← ADD THIS
│   └── ias-logo.png           ← ADD THIS
├── carousel/
│   ├── hero-1.jpg             ← ADD THIS
│   ├── hero-2.jpg             ← ADD THIS
│   └── hero-3.jpg             ← ADD THIS
├── services/
│   ├── crew-manning.jpg       ← ADD THIS
│   ├── ship-chandelling.jpg   ← ADD THIS
│   ├── customs-clearing.jpg   ← ADD THIS
│   ├── freight-forwarding.jpg ← ADD THIS
│   ├── transportation.jpg     ← ADD THIS
│   └── ship-chartering.jpg    ← ADD THIS
└── about-shipping.jpg         ← ADD THIS
```

## Testing Your Images

1. Add images to the folders above
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check all pages to ensure images load correctly
4. Open browser DevTools (F12) → Network tab → check for 404 errors

## Current Fallback Images

Your website currently uses these Unsplash CDN images as fallbacks:
- They will load automatically if local images are not found
- This ensures your site always displays properly
- However, local images will load faster and are recommended for production

## Need Help?

- Check browser console (F12) for image loading errors
- Verify file names match exactly (case-sensitive)
- Ensure images are in the correct folders
- Make sure images are in JPG format (except logos in PNG)

## Pro Tip

For the best results:
1. Download larger images than needed
2. Crop/resize to recommended dimensions
3. Optimize/compress before adding to project
4. Test on mobile devices after adding images
