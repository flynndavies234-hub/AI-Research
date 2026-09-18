@echo off
setlocal
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if errorlevel 1 goto :fail
echo Building AI Research 2.2.2...
call npm run dist:win
if errorlevel 1 goto :fail
echo.
echo SUCCESS - open the dist folder and run AI-Research-Setup-2.2.2.exe
pause
exit /b 0
:fail
echo.
echo BUILD FAILED. Copy the error shown above into ChatGPT.
pause
exit /b 1
