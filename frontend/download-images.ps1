# PowerShell Script to Download Sample Marine/Shipping Images
# This script downloads free images from Unsplash API

Write-Host "Downloading sample marine/shipping images..." -ForegroundColor Green

# Create image directories if they don't exist
$imageDir = "public/images"
$carouselDir = "$imageDir/carousel"
$servicesDir = "$imageDir/services"
$logosDir = "$imageDir/logos"

New-Item -ItemType Directory -Force -Path $imageDir | Out-Null
New-Item -ItemType Directory -Force -Path $carouselDir | Out-Null
New-Item -ItemType Directory -Force -Path $servicesDir | Out-Null
New-Item -ItemType Directory -Force -Path $logosDir | Out-Null

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    
    try {
        Write-Host "Downloading: $OutputPath" -ForegroundColor Yellow
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -UseBasicParsing
        Write-Host "Downloaded: $OutputPath" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download: $OutputPath" -ForegroundColor Red
        Write-Host "Error: $_" -ForegroundColor Red
    }
}

# Unsplash Source URLs (free to use, no attribution required for these specific IDs)
# These are sample images - replace with your own or download from Unsplash manually

Write-Host "`nDownloading Hero Carousel Images..." -ForegroundColor Cyan

# Carousel Images (1920x1080)
Download-Image -Url "https://source.unsplash.com/1920x1080/?cargo-ship,ocean" -OutputPath "$carouselDir/hero-1.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/1920x1080/?container-ship,sea" -OutputPath "$carouselDir/hero-2.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/1920x1080/?maritime,shipping" -OutputPath "$carouselDir/hero-3.jpg"

Write-Host "`nDownloading Service Images..." -ForegroundColor Cyan

# Service Images (800x600)
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?ship-crew,maritime" -OutputPath "$servicesDir/crew-manning.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?ship-supplies,anchor" -OutputPath "$servicesDir/ship-chandelling.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?customs,port" -OutputPath "$servicesDir/customs-clearing.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?freight,container" -OutputPath "$servicesDir/freight-forwarding.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?truck,transport" -OutputPath "$servicesDir/transportation.jpg"
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?harbor,ships" -OutputPath "$servicesDir/ship-chartering.jpg"

Write-Host "`nDownloading About Section Image..." -ForegroundColor Cyan
Start-Sleep -Seconds 2
Download-Image -Url "https://source.unsplash.com/800x600/?shipping,logistics" -OutputPath "$imageDir/about-shipping.jpg"

Write-Host "`n============================================" -ForegroundColor Green
Write-Host "Image download complete!" -ForegroundColor Green
Write-Host "============================================`n" -ForegroundColor Green

Write-Host "Note: You still need to add your company logos manually:" -ForegroundColor Yellow
Write-Host "  - $logosDir/company-logo-white.png" -ForegroundColor Yellow
Write-Host "  - $logosDir/ias-logo.png" -ForegroundColor Yellow
Write-Host "`nFor better quality, download specific images from:" -ForegroundColor Cyan
$unsplashUrl = "https://unsplash.com/s/photos/cargo-ship"
$pexelsUrl = "https://www.pexels.com/search/shipping/"
$pixabayUrl = "https://pixabay.com/images/search/container-ship/"
Write-Host "  - Unsplash: $unsplashUrl" -ForegroundColor Cyan
Write-Host "  - Pexels: $pexelsUrl" -ForegroundColor Cyan
Write-Host "  - Pixabay: $pixabayUrl" -ForegroundColor Cyan
