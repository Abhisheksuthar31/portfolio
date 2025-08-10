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
    resume: "https://drive.google.com/file/d/1dGcmUxHKjhGK7wE2vEn4FZxQwE8R9tE1/view?usp=sharing", // Dummy URL - replace with actual resume
    cv: "/resume.pdf", // Local CV file
    logo: "/src/assets/logo.svg",
    profileImage: "/src/assets/profile-photo.jpg"
  },

  // Project Categories
  projectCategories: ["All", "Web", "Mobile", "MERN Stack"],

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