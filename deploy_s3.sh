#!/bin/bash

# ------------------------------
# Configuración
# ------------------------------
BUCKET_NAME="portafolio-alfredorios.es"   # Cambia por tu bucket
REGION="eu-north-1"                       # Cambia por tu región
LOCAL_DIST_PATH="./dist"
DISTRIBUTION_ID="E10D3TJFG5SGOF"      # ⚡️ Pon aquí el ID de tu distribución de CloudFront

# ------------------------------
# Construir proyecto
# ------------------------------
echo "🛠 Construyendo el proyecto..."
npm run build || { echo "❌ Error en build"; exit 1; }

# ------------------------------
# Subir a S3 (sin caché)
# ------------------------------
echo "📤 Subiendo carpeta dist a S3 con no-cache..."
aws s3 sync "$LOCAL_DIST_PATH" "s3://$BUCKET_NAME" \
    --region "$REGION" \
    --delete \
    --exact-timestamps \
    --cache-control "no-cache"

# ------------------------------
# Listar archivos subidos
# ------------------------------
echo "📄 Archivos actualmente en S3:"
aws s3 ls "s3://$BUCKET_NAME/" --recursive --region "$REGION"

# ------------------------------
# Invalidación de CloudFront
# ------------------------------
echo "🧹 Invalidando caché de CloudFront..."
aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/index.html"

# ------------------------------
# Mensaje final
# ------------------------------
echo "✅ Deploy completado y caché de CloudFront invalidada!"
