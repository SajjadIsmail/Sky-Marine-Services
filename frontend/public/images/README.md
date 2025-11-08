# Image Assets Directory

This directory contains all image assets for the Sky Marine Services website.

## Directory Structure

```
images/
├── logos/
│   ├── company-logo-white.png    (Company logo - white version for header)
│   └── ias-logo.png              (IAS Accreditation logo)
├── carousel/
│   ├── hero-1.jpg                (Hero carousel image 1 - Oil tanker)
│   ├── hero-2.jpg                (Hero carousel image 2 - Cargo ship)
│   └── hero-3.jpg                (Hero carousel image 3 - Container vessel)
├── services/
│   ├── crew-manning.jpg
│   ├── ship-chandelling.jpg
│   ├── customs-clearing.jpg
│   ├── freight-forwarding.jpg
│   ├── transportation.jpg
│   └── ship-chartering.jpg
└── about-shipping.jpg            (About section image)
```

## Quick Start

### Option 1: Download Images Automatically

Run the PowerShell script from the `frontend` directory:

```powershell
cd frontend
.\download-images.ps1
```

This will download sample images from Unsplash. Note: Results may vary based on API availability.

### Option 2: Manual Download (Recommended)

1. **For Carousel Images** (1920x1080px or larger):
   - Visit: https://unsplash.com/s/photos/cargo-ship
   - Search: "cargo ship", "container vessel", "oil tanker"
   - Download 3 high-quality images
   - Rename as `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
   - Place in `carousel/` folder

2. **For Service Images** (800x600px or larger):
   - Visit: https://unsplash.com/s/photos/shipping OR https://www.pexels.com/search/maritime/
   - Search terms:
     - "ship crew" or "maritime workers" → crew-manning.jpg
     - "ship supplies" or "anchor" → ship-chandelling.jpg
     - "customs" or "port documentation" → customs-clearing.jpg
     - "cargo containers" or "logistics" → freight-forwarding.jpg
     - "trucks" or "transport" → transportation.jpg
     - "harbor" or "ships at port" → ship-chartering.jpg
   - Download and rename accordingly
   - Place in `services/` folder

3. **For Company Logos**:
   - Request official logos from your company's marketing/brand team
   - Ensure PNG format with transparent background for company-logo-white.png
   - Get official IAS logo from https://www.iasonline.org/ or your accreditation documents
   - Place in `logos/` folder

4. **For About Image**:
   - Search: "shipping logistics" or "maritime industry"
   - Download one image
   - Rename as `about-shipping.jpg`
   - Place in `images/` folder

## Image Specifications

### Carousel Images
- **Format**: JPG
- **Dimensions**: Minimum 1920x1080px (1920x1080 recommended)
- **Aspect Ratio**: 16:9
- **File Size**: <500KB (optimized)
- **Subject**: Ships, maritime scenes, ocean views

### Service Images
- **Format**: JPG
- **Dimensions**: Minimum 800x600px
- **Aspect Ratio**: 4:3
- **File Size**: <300KB (optimized)
- **Subject**: Related to each service category

### Logo Images
- **Format**: PNG (with transparency)
- **Company Logo**: ~200x80px (actual size, don't upscale)
- **IAS Logo**: ~100x45px (actual size)
- **Background**: Transparent
- **Color**: White/light color for dark header

## Fallback Images

The application includes fallback URLs for all images:
- If local images are not found, high-quality Unsplash images will be loaded
- This ensures the site always displays properly
- However, for best performance, add local images

## Image Optimization

Before adding images to the project:

1. **Resize** to recommended dimensions (don't use oversized images)
2. **Compress** using:
   - Online: https://tinypng.com/ or https://squoosh.app/
   - Desktop: Adobe Photoshop, GIMP, or ImageOptim (Mac)
3. **Target file sizes**:
   - Carousel: <500KB per image
   - Services: <300KB per image
   - Logos: <50KB per image

## Copyright & Licensing

- **Free Stock Photos**: Use only from sites with proper licenses (Unsplash, Pexels, Pixabay)
- **Company Assets**: Ensure you have rights to use company logos and branded images
- **Accreditation Logos**: Use only official logos you're authorized to display

## Testing

After adding images:

1. Clear browser cache
2. Reload the application
3. Check all pages load correctly
4. Verify images are crisp and properly sized
5. Test on mobile devices for responsive behavior

## Need Help?

- See `IMAGE_SOURCES.md` in the frontend directory for detailed download links
- For company-specific images, contact your marketing department
- For technical issues, check browser console for image loading errors
