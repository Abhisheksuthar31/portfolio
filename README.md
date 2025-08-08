# Abhishek Suthar - Portfolio Website

A modern, glassmorphism-styled portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a web and mobile developer.

## 🌟 Features

- **Glassmorphism Design** - Modern transparent glass effect with backdrop blur
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - GSAP-powered animations with reduced motion support
- **SEO Optimized** - Semantic HTML, meta tags, and structured data
- **Interactive Components** - Dynamic project filtering, skill bars, and contact form
- **Performance Optimized** - Lazy loading, optimized images, and efficient animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhisheksuthar31/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📁 Project Structure

```
src/
├── assets/                 # Images and static assets
│   ├── headshot.jpg        # Profile photo
│   ├── logo.svg           # Personal logo
│   ├── hero-bg.jpg        # Hero background
│   └── projects/          # Project screenshots
├── components/
│   ├── navigation/        # Navbar component
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── footer/           # Footer component
│   └── ui/               # Reusable UI components
├── data/
│   └── projects.json     # Project data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── pages/               # Main pages
```

## ✏️ Customization Guide

### Personal Information

1. **Basic Info**: Update personal details in `src/pages/Index.tsx`:
   - Name, email, GitHub profile
   - Bio and taglines
   - Contact information

2. **Profile Photo**: Replace `src/assets/headshot.jpg` with your photo

3. **Logo**: Replace `src/assets/logo.svg` with your personal logo

### Projects

Edit `src/data/projects.json` to add/modify projects:

```json
{
  "id": "unique-project-id",
  "title": "Project Name",
  "summary": "Brief description",
  "description": "Detailed description",
  "tech": ["React", "TypeScript", "etc"],
  "repoUrl": "https://github.com/username/repo",
  "demoUrl": "https://demo-url.com",
  "category": "Web|Mobile|Flutter",
  "status": "Completed|In Progress",
  "highlights": ["Achievement 1", "Achievement 2"]
}
```

### Skills

Update skills in `src/components/sections/skills.tsx`:
- Modify skill categories and items
- Adjust proficiency levels (0-100)
- Update years of experience

### Design Customization

**Colors**: Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: 210 100% 50%;      /* Main brand color */
  --accent: 180 100% 32%;       /* Accent color */
  --background: 220 30% 8%;     /* Dark background */
}
```

**Typography**: Font settings in `tailwind.config.ts`:
```js
fontFamily: {
  sans: ['Poppins', 'sans-serif'],
}
```

### Contact Form

To enable the contact form:

1. Sign up for [Formspree](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `src/components/sections/contact.tsx`:

```javascript
// Replace the commented URL with your Formspree endpoint
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The site will build and deploy automatically

### Alternative Deployments

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **Custom Domain**: Configure CNAME in public folder

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Performance Tips

- Optimize images before adding to `src/assets/`
- Use WebP format for better compression
- Keep animations smooth but lightweight
- Test on various devices and browsers

## 📊 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data (JSON-LD)
- Sitemap and robots.txt ready
- Performance optimized

## 🎨 Design System

The portfolio uses a comprehensive design system:

- **Glass Morphism**: `glass-card`, `glass-button` classes
- **Animations**: CSS animations with reduced motion support
- **Typography**: Poppins font family with responsive sizing
- **Color Palette**: HSL-based color system for easy theming
- **Spacing**: Consistent spacing scale using Tailwind

## 🔒 Privacy & Security

- No analytics by default (add Google Analytics if needed)
- Contact form includes honeypot spam protection
- No sensitive data in source code
- HTTPS-ready for secure deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have questions or need help customizing the portfolio:

- Create an issue on GitHub
- Email: abhisheksuthar3112@gmail.com
- LinkedIn: [linkedin.com/in/abhisheksuthar](https://linkedin.com/in/abhisheksuthar)

---

**Built with ❤️ by Abhishek Suthar**

*This portfolio is designed to showcase skills and attract opportunities. Feel free to use it as inspiration for your own portfolio!*