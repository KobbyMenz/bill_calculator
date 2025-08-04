@echo off
echo Starting KM Bill Calculator App...

:: Navigate to backend folder
cd database

:: Start backend with npm run dev in a new terminal window
start cmd /k "npm run dev"

:: Wait a bit for server to start (optional)
timeout /t 3 >nul

:: Open the app in the browser
start http://localhost:5173

exit
