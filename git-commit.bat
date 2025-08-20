@echo off
echo Starting Git commit process...

REM Check if we're in a Git repository
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Not in a Git repository
    pause
    exit /b 1
)

REM Add all changes
echo Adding changes to Git...
git add .

REM Create commit with timestamp
set timestamp=%date% %time%
echo Committing changes...
git commit -m "Update vocabulary data - %timestamp%"

REM Push to remote repository
echo Pushing to remote repository...
git push origin main

if %errorlevel% equ 0 (
    echo Successfully committed and pushed changes to Git repository!
) else (
    echo Error: Failed to push changes
)

pause
