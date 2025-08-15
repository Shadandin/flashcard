@echo off
echo ========================================
echo Node.js Installation Helper
echo ========================================
echo.
echo This script will help you install Node.js for the flashcard app.
echo.
echo Step 1: Downloading Node.js...
echo.

REM Check if Node.js is already installed
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo Node.js is already installed!
    node --version
    echo.
    echo Starting the flashcard server...
    node server.js
    pause
    exit /b
)

REM Download Node.js installer
echo Downloading Node.js LTS version...
powershell -Command "& {Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi' -OutFile 'nodejs-installer.msi'}"

if exist nodejs-installer.msi (
    echo.
    echo Step 2: Installing Node.js...
    echo Please follow the installation wizard that opens.
    echo Click "Next" through the installer and accept the defaults.
    echo.
    start /wait nodejs-installer.msi
    
    echo.
    echo Step 3: Cleaning up...
    del nodejs-installer.msi
    
    echo.
    echo Step 4: Verifying installation...
    echo.
    
    REM Refresh environment variables
    call refreshenv.cmd 2>nul
    
    REM Check if Node.js is now installed
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo SUCCESS! Node.js is now installed.
        node --version
        echo.
        echo Step 5: Starting the flashcard server...
        echo The server will start and you can then open index.html in your browser.
        echo.
        node server.js
    ) else (
        echo.
        echo Node.js installation may need a computer restart.
        echo Please restart your computer and then run this script again.
        echo.
        pause
    )
) else (
    echo.
    echo ERROR: Could not download Node.js installer.
    echo Please check your internet connection and try again.
    echo.
    echo Manual installation:
    echo 1. Go to https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Run the installer
    echo 4. Restart your computer
    echo 5. Run this script again
    echo.
    pause
) 