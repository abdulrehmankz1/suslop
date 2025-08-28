# Suslop - Modern Business Website

A comprehensive Next.js business website featuring multiple sections including About Us, Services, Projects, Insights, and Blog Perspectives.

## 🚀 Technology Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS + Tailwind CSS 4
- **Icons**: Lucide React
- **Sliders**: Swiper
- **Fonts**: Neue Montreal

## 📁 Project Structure

```
suslop/
├── app/                    # Next.js App Router pages
│   ├── about-us/          # About Us section
│   ├── blog-perspectives/ # Blog and perspectives section
│   ├── our-insights/      # Insights and reports
│   ├── our-projects/      # Projects and case studies
│   ├── our-services/      # Services offered
│   └── components/        # Reusable components
├── fonts/                 # Custom fonts (Neue Montreal)
├── public/               # Static assets
│   └── assets/images/    # Images and icons
└── styles/               # SCSS stylesheets
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/abdulrehmankz1/suslop.git
   cd suslop
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run dev:turbopack` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Features

### Pages & Sections

- **Home Page** - Main landing page with hero section and overview
- **About Us** - Company introduction, team, and vision
- **Our Services** - Service offerings and details
- **Our Projects** - Case studies and project portfolio
- **Our Insights** - Industry insights and reports
- **Blog Perspectives** - Blog posts and articles

### Components

- **Navigation** - Responsive navbar with navigation
- **Hero Sections** - Engaging hero components for each page
- **Cards** - Reusable card components for content display
- **Sliders** - Interactive sliders using Swiper
- **Footer** - Comprehensive footer with links and information

### Styling

- Custom SCSS styles with modular architecture
- Tailwind CSS for utility classes
- Responsive design for all screen sizes
- Custom Neue Montreal font family

## 🎯 Development

This project uses the latest Next.js App Router with TypeScript for type safety. The styling is a combination of SCSS modules and Tailwind CSS utility classes.

### Key Dependencies

- `next` - React framework
- `react` & `react-dom` - React library
- `sass` - SCSS preprocessing
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library
- `swiper` - Touch slider component

## 📦 Build & Deploy

To build the application for production:

```bash
npm run build
npm run start
```

The application can be deployed to platforms like Vercel, Netlify, or any Node.js hosting service that supports Next.js.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.
