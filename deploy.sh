#!/bin/bash

# Variables personalizadas
PEM_PATH="/c/Users/alfre/OneDrive/Documents/Formación Laboral/Projects/3.Portfolio-Freddie/clave-portfolio.pem"
USER="ubuntu"
IP="13.61.196.196"
LOCAL_DIST_PATH="./dist"
REMOTE_DIST_PATH="/home/ubuntu/dist"
NGINX_PATH="/var/www/html"

echo "🛠 Construyendo el proyecto..."
npm run build

echo "📤 Subiendo carpeta dist al servidor..."
scp -r -i "$PEM_PATH" "$LOCAL_DIST_PATH" "$USER@$IP:$REMOTE_DIST_PATH"

echo "⚙️ Actualizando archivos en el servidor..."
ssh -i "$PEM_PATH" "$USER@$IP" << EOF
  sudo rm -rf $NGINX_PATH/*
  sudo cp -r $REMOTE_DIST_PATH/* $NGINX_PATH/
  sudo chown -R www-data:www-data $NGINX_PATH
  sudo chmod -R 755 $NGINX_PATH
  sudo systemctl restart nginx
EOF

echo "✅ Deploy completado. ¡Tu portfolio está actualizado!"
