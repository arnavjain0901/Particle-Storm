
@echo off
title Particle Storm Launcher

cd /d "%~dp0"

echo.
echo ================================
echo       PARTICLE STORM
echo ================================
echo.
echo Starting local server...

start "" /min cmd /c "py -m http.server 8000"

timeout /t 2 /nobreak >nul

start "" http://127.0.0.1:8000/particle_storm.html

echo.
echo Particle Storm is running!
echo Keep the server window open while using the app.
echo.
pause