@echo off
echo ==========================================
echo   Restarting Experiencia Gaucha Magdalena
echo ==========================================

:: Terminar procesos en el puerto 5173 (Vite)
echo Deteniendo servidor en puerto 5173...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do taskkill /f /pid %%a >nul 2>&1

:: Iniciar la aplicación en modo desarrollo
echo Iniciando servidor de desarrollo...
npm run dev
