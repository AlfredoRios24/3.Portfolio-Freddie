#!/bin/bash

# ------------------------------
# Configuración
# ------------------------------
BUCKET_NAME="portafolio-alfredorios.es"   # <--- Cambia por tu bucket
REGION="eu-north-1"                        # <--- Cambia a tu región
LOCAL_DIST_PATH="./dist"

# ------------------------------
# Construir proyecto
# ------------------------------
echo "🛠 Construyendo el proyecto..."
npm run build

# ------------------------------
# Subir a S3
# ------------------------------
echo "📤 Subiendo carpeta dist a S3..."
aws s3 sync "$LOCAL_DIST_PATH" "s3://$BUCKET_NAME" --region "$REGION" --delete --acl public-read

# ------------------------------
# Comprobar resultado
# ------------------------------
if [ $? -eq 0 ]; then
  echo "✅ Deploy completado. Tu portfolio en S3 está actualizado!"
else
  echo "❌ Error: El deploy no se pudo completar."
fi
