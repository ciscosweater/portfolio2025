# Qwen Code Context - Gustavo Francisco's Portfolio 2025

## Project Overview

This is a modern, responsive portfolio website built with Next.js, React, and TypeScript for showcasing Full Stack projects. The portfolio features an interactive design with project filtering, image galleries, and responsive components tailored for all device sizes.

### Key Technologies
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: CSS Modules with responsive design
- **Carousels**: Embla Carousel for image galleries
- **Optimization**: Next.js Image Optimization with WebP/AVIF support
- **Fonts**: Google Fonts (Geist)
- **SEO**: Optimized with OpenGraph and Twitter Cards

### Project Structure
```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── carouselPage/   # Page carousels
│   │   ├── carouselText/   # Text carousels
│   │   ├── projectCard/    # Individual project cards
│   │   ├── projectFilter/  # Project filtering system
│   │   ├── projectGallery/ # Image galleries
│   │   ├── projectGrid/    # Project grid layout
│   │   └── embla-*         # Embla Carousel components
│   ├── contexts/           # Context API
│   │   └── GalleryContext.tsx
│   ├── pages/              # Main pages
│   │   ├── about/          # About page
│   │   ├── projects/       # Projects page
│   │   ├── certifications/ # Certifications page
│   │   └── experiences/    # Experiences page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Main layout
│   └── page.tsx            # Home page
├── data/
│   └── projects.json       # Project data
└── public/
    └── assets/             # Static assets
        ├── icons/          # Icons
        ├── screenshots/    # Project screenshots
        ├── techs/          # Technology icons
        └── profile.jpg     # Profile picture
```

## Building and Running

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation and Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

The development server will run on `http://localhost:3000`.

## Development Conventions

### Project Data Structure
Projects are stored in `src/data/projects.json` with the following structure:
```json
{
  "id": "unique-identifier",
  "title": "Project Title",
  "subtitle": "Main Technologies",
  "description": "Detailed description...",
  "images": ["/assets/screenshots/project/img1.png"],
  "captions": ["Image caption"],
  "link": "https://project-url.com",
  "canVisit": true,
  "tags": ["technology1", "technology2"],
  "featured": true
}
```

### Adding New Projects
To add new projects, follow these steps:
1. Create a folder in `public/assets/screenshots/` named after your project
2. Add screenshots to the new folder
3. Configure the project in `src/data/projects.json`
4. Test locally with `npm run dev`

### Code Style
- Use TypeScript for type safety
- Follow React best practices with hooks
- Implement responsive design with CSS Modules
- Use semantic HTML for accessibility
- Follow Next.js conventions (app router)
- Implement proper error boundaries where needed

### Project Features
- **Responsive Design**: Adapted for mobile, tablet, and desktop
- **Performance**: Optimized with Next.js Image and lazy loading
- **Accessibility**: Semantic HTML5 and keyboard navigation
- **Animations**: Smooth transitions and micro-interactions
- **SEO Optimized**: Metadata, OpenGraph, Twitter Cards
- **Project Filtering**: Filter projects by technology tags
- **Image Gallery**: Interactive gallery with Embla Carousel
- **Modern UI**: Clean design with professional color scheme

## Key Files and Configuration

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};
```

### Gallery Context
The `GalleryContext.tsx` manages the state of the image gallery modal that appears when a project is clicked, allowing for detailed image viewing with navigation.

### Image Optimization Scripts
The project includes several shell scripts for image optimization:
- `/optimize_images.sh` - Converts images to WebP format with specific dimensions
- `/optimize_images_hq.sh` - Optimizes images with high quality settings
- `/optimize_all_images.sh` - Runs optimization across all project images

## Deployment
The project is optimized for deployment on Vercel, with Next.js providing automatic optimizations for performance and SEO.