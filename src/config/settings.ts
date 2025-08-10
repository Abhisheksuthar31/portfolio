// Global Settings Configuration
// Edit this file to update all URLs, links, and personal information across the site

export const SITE_CONFIG = {
  // Personal Information
  name: "Abhishek Suthar",
  email: "abhisheksuthar3112@gmail.com",
  phone: "", // Keep empty for privacy
  location: "Jaipur, Rajasthan, India",
  
  // Professional Details
  title: "Web & Mobile Developer",
  tagline: "Building polished user experiences with modern technology",
  bio: "Passionate B.Tech student specializing in web and mobile development. Currently in 3rd year at Poornima Institute, Jaipur, with experience in React, Node.js, React Native, and modern development practices.",
  
  // Education
  education: {
    current: {
      degree: "B.Tech in Computer Science",
      institution: "Poornima Institute, Jaipur",
      period: "2022-2025",
      status: "3rd Year"
    },
    previous: {
      degree: "Diploma in Physical Education",
      institution: "GD College Bhuna, Fatehabad", 
      period: "2021-2023"
    }
  },

  // Social Links
  social: {
    github: "https://github.com/abhisheksuthar31",
    linkedin: "https://linkedin.com/in/abhisheksuthar",
    email: "mailto:abhisheksuthar3112@gmail.com"
  },

  // File URLs
  files: {
    resume: "/resume.pdf", // Dummy resume download URL
    cv: "/resume.pdf", // Local CV file
    logo: "/src/assets/logo.svg",
    profileImage: "/src/assets/profile-photo.jpg"
  },

  // Project Categories
  projectCategories: ["All", "Full Stack", "Web App", "Mobile"],

  // Project Images (dummy URLs - replace with actual project screenshots)
  projectImages: {
    todoList: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    animatedCalculator: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop",
    ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    libraryManagement: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    passwordGenerator: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    expenseTracker: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    userAuth: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    reactMui: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    drawingApp: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    textEditor: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
  },

  // Contact Form Settings
  contact: {
    formspreeId: "YOUR_FORMSPREE_ID", // Replace with actual Formspree form ID
    successMessage: "Thanks for reaching out! I'll get back to you soon.",
    errorMessage: "Failed to send message. Please try again or use the email link below."
  },

  // SEO Settings
  seo: {
    keywords: [
      "web developer",
      "app developer", 
      "React Native",
      "Flutter",
      "front-end developer",
      "Abhishek Suthar",
      "Poornima Institute Jaipur",
      "MERN stack developer",
      "mobile app developer"
    ],
    description: "Abhishek Suthar - Web & Mobile Developer specializing in React, Node.js, React Native. B.Tech student at Poornima Institute, Jaipur. Available for internships and freelance projects."
  },

  // Skills
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    mobile: ["React Native", "Flutter"],
    tools: ["Git", "VS Code", "Figma", "Postman"],
    languages: ["JavaScript", "TypeScript", "Dart", "C++"]
  }
};

// Helper function to get social links
export const getSocialLinks = () => SITE_CONFIG.social;

// Helper function to get file URLs
export const getFileUrls = () => SITE_CONFIG.files;

// Helper function to get project categories
export const getProjectCategories = () => SITE_CONFIG.projectCategories;