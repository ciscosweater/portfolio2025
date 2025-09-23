#!/bin/bash

# Script para remover arquivos de imagem originais após otimização
# Use com cuidado - faça backup antes de executar!

echo "ATENÇÃO: Este script irá remover arquivos de imagem originais (.png, .jpg, .jpeg)"
echo "deixando apenas as versões otimizadas (.webp)."
echo ""
read -p "Deseja continuar? (s/N): " confirm

if [[ $confirm == [sS] ]]; then
    echo "Removendo arquivos originais..."
    
    # Encontra e remove arquivos originais que têm versão WebP correspondente
    find public/assets/screenshots/ -name "*.webp" | while read webp_file; do
        original_file="${webp_file%.webp}"
        
        # Verifica se o arquivo original existe
        if [ -f "$original_file.png" ]; then
            echo "Removendo: $original_file.png"
            rm "$original_file.png"
        fi
        
        if [ -f "$original_file.jpg" ]; then
            echo "Removendo: $original_file.jpg"
            rm "$original_file.jpg"
        fi
        
        if [ -f "$original_file.jpeg" ]; then
            echo "Removendo: $original_file.jpeg"
            rm "$original_file.jpeg"
        fi
    done
    
    echo "Limpeza concluída!"
else
    echo "Operação cancelada."
fi