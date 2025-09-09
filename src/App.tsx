// App.tsx: Main application component, handling routing, internationalization, theme management, and SEO metadata.

// Import necessary components from react-router-dom for client-side routing.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import useEffect hook from React for handling side effects like theme and language initialization.
import { useEffect } from "react";

// Import Helmet for managing document head (meta tags, title, etc.) for SEO purposes.
import { Helmet } from "react-helmet";

// Import social links from storage for use in structured data and social page.
import { social } from "./storage";

// Import reusable components for the application structure.
import SeoSection from "./components/SeoSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import page components for different routes.
import Biography from "./pages/Biography";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Home from "./pages/Home";

// Import i18n configuration to initialize internationalization.
import "./i18n";

// Main App component, defined as a functional component using TypeScript.
const App: React.FC = () => {
  // Access i18n instance and translation function from react-i18next.
  const { i18n, t } = useTranslation();

  // Effect to handle language initialization and persistence.
  useEffect(() => {
    // Retrieve saved language from localStorage or default to system language.
    const savedLanguage = localStorage.getItem("language");
    const systemLanguage = navigator.language || navigator.languages[0] || "en";
    const userLanguage = savedLanguage || (systemLanguage.startsWith("fa") ? "fa" : "en");

    // Set the application language and update the HTML lang attribute.
    i18n.changeLanguage(userLanguage);
    document.documentElement.setAttribute("lang", userLanguage);
    // Persist the selected language to localStorage.
    localStorage.setItem("language", userLanguage);
  }, [i18n]); // Dependency on i18n to ensure language changes are handled correctly.

  // Effect to handle theme initialization and persistence, including system preference detection.
  useEffect(() => {
    // Retrieve saved theme or default to system preference (dark/light).
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    // Set the theme attribute on the HTML element and persist to localStorage.
    document.documentElement.setAttribute("data-theme", defaultTheme);
    localStorage.setItem("theme", defaultTheme);

    // Listen for system theme changes (e.g., OS switching between light/dark modes).
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = localStorage.getItem("theme") || (e.matches ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };
    mediaQuery.addEventListener("change", handleThemeChange);

    // Cleanup: Remove the event listener when the component unmounts.
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []); // Empty dependency array ensures this runs only on mount/unmount.

  // Render the application with routing, SEO metadata, and layout structure.
  return (
    // Wrap the app in BrowserRouter for client-side routing.
    <Router>
      {/* Helmet manages document head for SEO and metadata */}
      <Helmet>
        <meta charSet="UTF-8" /> {/* Set character encoding for the document */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Ensure responsive viewport */}
        <meta name="title" content="Mr. Sinre | Sobhan-SRZA" /> {/* Page title for SEO */}
        <meta name="description" content={t("meta_description")} /> {/* Dynamic meta description using i18n */}
        <meta property="og:title" content="Mr. Sinre | Sobhan-SRZA" /> {/* Open Graph title for social sharing */}
        <meta property="og:description" content={t("meta_description")} /> {/* Open Graph description */}
        <meta property="og:image" content="/images/og-image.jpg" /> {/* Open Graph image for social previews */}
        <meta property="og:url" content="https://srza.ir/" /> {/* Canonical URL for the site */}
        <meta property="og:type" content="website" /> {/* Open Graph type */}
        <meta name="twitter:card" content="summary_large_image" /> {/* Twitter card type for social previews */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> {/* Favicon for browser tab */}
        <title>Mr. Sinre | Sobhan-SRZA</title> {/* Browser title */}
        {/* Structured data for SEO, defining the person entity for search engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sobhan Rasoulzadeh Asl",
            "alternateName": [
              "Mr. Sinre", "mr.sinre", "Mr Sinre", "mr_sinre", "mr-sinre", "sinre",
              "SRZA", "sobhan srza", "Sobhan-SRZA", "srzaa",
              "Persian Caesar", "Persian Cezar", "Persian Cesar", "Persian Caeser", "پرشین سزار",
              "Sobhan Rasulzadeh", "Sobhan Rasoolzadeh", "Subhan Rasoulzadeh", "Soban Rasoulzadeh",
              "سبحان رسول زاده اصل", "سبحن رسول زاده", "رسول زاده اصل"
            ],
            "url": "https://srza.ir/",
            "sameAs": Object.values(social), // Social media links from storage
            "jobTitle": "Full-stack Developer",
            "description": "Full-stack developer specializing in Node.js, React.js, NestJS, API development, and Discord/Telegram bot development. وب‌سایت: srza.ir",
            "knowsAbout": [
              "Node.js", "JavaScript", "TypeScript", "React.js", "NestJS",
              "API development", "REST API", "GraphQL", "Database design",
              "Telegram bot", "Discord bot", "Bot automation",
              "Python", "Web design", "UI/UX", "Backend", "Frontend",
              "Freelancing", "Open source projects"
            ],
            "skills": [
              "Full-stack development", "Bot development", "API integration",
              "Frontend engineering", "Backend engineering", "Database management",
              "RESTful services", "DevOps basics"
            ],
            "nationality": "IR",
            "brand": {
              "@type": "Brand",
              "name": "SRZA / Mr. Sinre",
              "url": "https://srza.ir/"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Freelancer / Independent Developer",
              "url": "https://upwork.com/"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "availableLanguage": ["English", "Persian"],
              "url": "https://t.me/Sobhan_SRZA"
            }
          })}
        </script>
      </Helmet>

      {/* Main layout with dynamic font and text direction based on language */}
      <div className={`min-h-screen flex flex-col ${i18n.language === "fa" ? "font-iransans rtl" : "font-sans ltr"}`}>
        {/* Header component for navigation */}
        <Header />
        {/* Main content area with responsive container and padding */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* SEO section for additional on-page SEO elements */}
          <SeoSection />
          {/* Define routes for different pages of the application */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/projects" element={<Projects />} /> {/* Projects page route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
            <Route path="/biography" element={<Biography />} /> {/* Biography page route */}
            <Route path="/social" element={<Social />} /> {/* Social media page route */}
            <Route path="/404" element={<NotFound />} /> {/* Explicit 404 page route */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
          </Routes>
        </main>
        {/* Footer component for bottom navigation and information */}
        <Footer />
      </div>
    </Router>
  );
};

// Export the App component as the default export.
export default App;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */