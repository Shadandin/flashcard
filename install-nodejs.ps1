Write-Host "========================================" -ForegroundColor Green
Write-Host "Node.js Installation Helper" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is already installed
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "Node.js is already installed!" -ForegroundColor Green
        Write-Host "Version: $nodeVersion" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Starting the flashcard server..." -ForegroundColor Green
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        node server.js
        exit
    }
} catch {
    # Node.js not installed, continue with installation
}

Write-Host "Step 1: Downloading Node.js..." -ForegroundColor Cyan
Write-Host ""

# Download Node.js installer
$nodeUrl = "https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi"
$installerPath = "$PWD\nodejs-installer.msi"

try {
    Write-Host "Downloading Node.js LTS version..." -ForegroundColor Yellow
    Invoke-WebRequest -Uri $nodeUrl -OutFile $installerPath -UseBasicParsing
    
    if (Test-Path $installerPath) {
        Write-Host ""
        Write-Host "Step 2: Installing Node.js..." -ForegroundColor Cyan
        Write-Host "Please follow the installation wizard that opens." -ForegroundColor Yellow
        Write-Host "Click 'Next' through the installer and accept the defaults." -ForegroundColor Yellow
        Write-Host ""
        
        # Start the installer
        Start-Process -FilePath $installerPath -Wait
        
        Write-Host ""
        Write-Host "Step 3: Cleaning up..." -ForegroundColor Cyan
        Remove-Item $installerPath -Force
        
        Write-Host ""
        Write-Host "Step 4: Verifying installation..." -ForegroundColor Cyan
        Write-Host ""
        
        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        # Check if Node.js is now installed
        try {
            $nodeVersion = node --version 2>$null
            if ($nodeVersion) {
                Write-Host "SUCCESS! Node.js is now installed." -ForegroundColor Green
                Write-Host "Version: $nodeVersion" -ForegroundColor Yellow
                Write-Host ""
                Write-Host "Step 5: Starting the flashcard server..." -ForegroundColor Cyan
                Write-Host "The server will start and you can then open index.html in your browser." -ForegroundColor Yellow
                Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
                Write-Host ""
                node server.js
            } else {
                Write-Host ""
                Write-Host "Node.js installation may need a computer restart." -ForegroundColor Yellow
                Write-Host "Please restart your computer and then run this script again." -ForegroundColor Yellow
                Write-Host ""
                Read-Host "Press Enter to continue"
            }
        } catch {
            Write-Host ""
            Write-Host "Node.js installation may need a computer restart." -ForegroundColor Yellow
            Write-Host "Please restart your computer and then run this script again." -ForegroundColor Yellow
            Write-Host ""
            Read-Host "Press Enter to continue"
        }
    } else {
        Write-Host ""
        Write-Host "ERROR: Could not download Node.js installer." -ForegroundColor Red
        Write-Host "Please check your internet connection and try again." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Manual installation:" -ForegroundColor Cyan
        Write-Host "1. Go to https://nodejs.org/" -ForegroundColor Yellow
        Write-Host "2. Download the LTS version" -ForegroundColor Yellow
        Write-Host "3. Run the installer" -ForegroundColor Yellow
        Write-Host "4. Restart your computer" -ForegroundColor Yellow
        Write-Host "5. Run this script again" -ForegroundColor Yellow
        Write-Host ""
        Read-Host "Press Enter to continue"
    }
} catch {
    Write-Host ""
    Write-Host "ERROR: Could not download Node.js installer." -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Manual installation:" -ForegroundColor Cyan
    Write-Host "1. Go to https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "2. Download the LTS version" -ForegroundColor Yellow
    Write-Host "3. Run the installer" -ForegroundColor Yellow
    Write-Host "4. Restart your computer" -ForegroundColor Yellow
    Write-Host "5. Run this script again" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to continue"
} 