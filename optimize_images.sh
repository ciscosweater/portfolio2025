#!/bin/bash

# Script para otimizar imagens na pasta public/assets/screenshots/
# Converte para WebP com máximo 1280px de largura e qualidade 80%

echo "Iniciando otimização de imagens..."
echo "================================"

# Encontra todas as imagens acima de 500KB
find public/assets/screenshots/ -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +500k | while read img; do
    # Obtém informações da imagem
    size=$(du -h "$img" | cut -f1)
    dimensions=$(identify -format "%wx%h" "$img" 2>/dev/null || echo "desconhecido")
    
    echo "Processando: $img"
    echo "  Tamanho original: $size"
    echo "  Dimensões: $dimensions"
    
    # Define o nome do arquivo de saída
    output="${img%.*}.webp"
    
    # Redimensiona para máximo 1280px de largura e converte para WebP
    magick "$img" -resize "1280x>" -quality 80 -define webp:lossless=false "$output"
    
    # Verifica o resultado
    if [ -f "$output" ]; then
        new_size=$(du -h "$output" | cut -f1)
        echo "  Tamanho otimizado: $new_size"
        echo "  Salvo como: $output"
        echo "  ---"
    else
        echo "  ERRO: Falha ao criar $output"
        echo "  ---"
    fi
done

echo "Otimização concluída!"
echo "================================"

# Calcula estatísticas finais
echo "Estatísticas de redução:"
echo "========================"

original_total=$(find public/assets/screenshots/ -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +500k -exec du -k {} \; | awk '{sum += $1} END {print sum}')
webp_total=$(find public/assets/screenshots/ -name "*.webp" -exec du -k {} \; | awk '{sum += $1} END {print sum}')

if [ -n "$original_total" ] && [ -n "$webp_total" ]; then
    echo "Tamanho total original: ${original_total}KB"
    echo "Tamanho total otimizado: ${webp_total}KB"
    
    if [ "$original_total" -gt 0 ]; then
        reduction=$((original_total - webp_total))
        percentage=$((reduction * 100 / original_total))
        echo "Redução total: ${reduction}KB (${percentage}%)"
    fi
else
    echo "Não foi possível calcular as estatísticas completas"
fi