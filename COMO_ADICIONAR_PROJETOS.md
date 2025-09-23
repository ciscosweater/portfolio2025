# Como Adicionar Novos Projetos ao Portfolio

Este guia explica como adicionar novos projetos à sua página de projetos de forma fácil e organizada.

## Estrutura de Dados

Os projetos são armazenados no arquivo `src/data/projects.json` em formato JSON. Cada projeto segue uma estrutura padronizada:

```json
{
  "id": "identificador-unico",
  "title": "Título do Projeto",
  "subtitle": "Tecnologias Principais",
  "description": "Descrição detalhada do projeto...",
  "images": [
    "/assets/screenshots/nome-projeto/imagem1.png",
    "/assets/screenshots/nome-projeto/imagem2.png"
  ],
  "captions": ["Legenda da imagem 1", "Legenda da imagem 2"],
  "link": "https://url-do-projeto.com",
  "canVisit": true,
  "tags": ["tecnologia1", "tecnologia2", "categoria"],
  "featured": true
}
```

## Passo a Passo para Adicionar um Novo Projeto

### 1. Preparar as Imagens

1. **Crie uma pasta** para o seu projeto em `public/assets/screenshots/`
   ```bash
   mkdir public/assets/screenshots/meu-novo-projeto
   ```

2. **Adicione as screenshots** do projeto na pasta criada
   - Use formato PNG ou JPG de alta qualidade
   - Nomeie as imagens de forma descritiva (ex: `home.png`, `mobile.png`, `dashboard.png`)
   - O sistema automaticamente converterá para WebP quando disponível

3. **Otimização de imagens** (opcional mas recomendado):
   ```bash
   # Use os scripts de otimização já disponíveis
   ./optimize_images.sh
   ```

### 2. Adicionar o Projeto ao JSON

Abra o arquivo `src/data/projects.json` e adicione seu projeto no array:

```json
{
  "id": "meu-novo-projeto",
  "title": "Meu Novo Projeto",
  "subtitle": "React, Node.js",
  "description": "Uma descrição detalhada do seu projeto, explicando o problema que ele resolve, as tecnologias utilizadas e os principais recursos implementados. Seja específico e destaque os pontos mais importantes.",
  "images": [
    "/assets/screenshots/meu-novo-projeto/home.png",
    "/assets/screenshots/meu-novo-projeto/mobile.png",
    "/assets/screenshots/meu-novo-projeto/dashboard.png"
  ],
  "captions": ["Página inicial", "Versão mobile", "Painel administrativo"],
  "link": "https://meu-projeto.vercel.app",
  "canVisit": true,
  "tags": ["react", "nodejs", "mongodb", "fullstack"],
  "featured": false
}
```

### 3. Explicação dos Campos

#### Campos Obrigatórios:

- **`id`**: Identificador único do projeto (use kebab-case)
- **`title`**: Título do projeto que aparecerá no card
- **`description`**: Descrição detalhada do projeto
- **`images`**: Array com os caminhos das imagens
- **`link`**: URL do projeto ou repositório
- **`canVisit`**: Booleano indicando se o link é visitável (true) ou apenas repositório (false)
- **`tags`**: Array de tags para filtragem
- **`featured`**: Booleano para destacar o projeto (true/false)

#### Campos Opcionais:

- **`subtitle`**: Subtítulo com tecnologias principais
- **`captions`**: Array com legendas para cada imagem (na mesma ordem)

### 4. Boas Práticas

#### Para o Título:
- Seja claro e conciso
- Use capitalização padrão (Primeira Letra Maiúscula)
- Ex: "Sistema de Gestão de Tarefas"

#### Para a Descrição:
- Seja detalhado mas objetivo
- Explique o problema que o projeto resolve
- Mencione as tecnologias principais
- Destaque features importantes
- Limite recomendado: 200-300 caracteres

#### Para as Tags:
- Use minúsculas
- Separe tecnologias de conceitos
- Tags comuns: `react`, `nextjs`, `nodejs`, `typescript`, `mongodb`, `frontend`, `backend`, `fullstack`, `mobile`, `responsive`, `api`, `database`

#### Para Imagens:
- Use no mínimo 2-3 imagens por projeto
- Inclua sempre uma versão desktop e mobile se aplicável
- Ordene as imagens por importância (a primeira aparece no card)
- Use legendas descritivas

### 5. Exemplo Completo

```json
{
  "id": "ecommerce-platform",
  "title": "Plataforma de E-commerce",
  "subtitle": "Next.js, Stripe, PostgreSQL",
  "description": "Uma plataforma completa de e-commerce com catálogo de produtos, carrinho de compras, integração com Stripe para pagamentos, painel administrativo e sistema de notificações. O projeto utiliza Next.js para renderização híbrida, PostgreSQL para persistência de dados e implementa recursos como busca avançada, filtros por categoria e gestão de estoque em tempo real.",
  "images": [
    "/assets/screenshots/ecommerce/home.png",
    "/assets/screenshots/ecommerce/product-detail.png",
    "/assets/screenshots/ecommerce/cart.png",
    "/assets/screenshots/ecommerce/admin.png"
  ],
  "captions": ["Página inicial", "Detalhe do produto", "Carrinho de compras", "Painel administrativo"],
  "link": "https://my-ecommerce-demo.vercel.app",
  "canVisit": true,
  "tags": ["nextjs", "react", "stripe", "postgresql", "fullstack", "ecommerce"],
  "featured": true
}
```

### 6. Testar a Adição

Depois de adicionar seu projeto:

1. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

2. **Acesse a página de projetos** e verifique:
   - O card aparece corretamente
   - As imagens carregam
   - O link funciona
   - As tags aparecem para filtragem
   - A galeria de imagens funciona

3. **Teste em diferentes dispositivos** para garantir responsividade

### 7. Organização e Manutenção

#### Ordem dos Projetos:
- Projetos com `"featured": true` aparecem primeiro
- Demais projetos aparecem em ordem alfabética
- Você pode reorganizar manualmente no JSON se preferir

#### Remoção de Projetos:
- Simplesmente remova o objeto do array no JSON
- As imagens podem ser mantidas para referência futura

#### Atualização de Projetos:
- Edite os campos diretamente no JSON
- Atualize as imagens na pasta correspondente
- As mudanças serão refletidas imediatamente

## Dicas Adicionais

### Performance:
- Comprima as imagens antes de adicionar
- Use formatos modernos (WebP) quando possível
- Limite o número de imagens por projeto (3-5 é ideal)

### SEO:
- Inclua palavras-chave relevantes na descrição
- Use tags que representem bem as tecnologias
- Mantenha títulos descritivos

### UX:
- Escolha imagens que mostrem os melhores aspectos do projeto
- Use legendas claras e informativas
- Destaque projetos que você mais se orgulha

Seguindo este guia, você poderá facilmente adicionar, atualizar e organizar seus projetos no portfolio de forma consistente e profissional.
