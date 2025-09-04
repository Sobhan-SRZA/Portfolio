import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { social } from "./storage";
import SeoSection from "./components/SeoSection";
import Biography from "./pages/Biography";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chand from "./pages/Chand";
import Home from "./pages/Home";

import "./i18n";

const App: React.FC = () => {
  const { i18n, t } = useTranslation();

  // Set language
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const systemLanguage = navigator.language || navigator.languages[0] || "en";
    const userLanguage = savedLanguage || (systemLanguage.startsWith("fa") ? "fa" : "en");

    i18n.changeLanguage(userLanguage);
    document.documentElement.setAttribute("lang", userLanguage);
    localStorage.setItem("language", userLanguage);
  }, [i18n]);

  // Set theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", defaultTheme);
    localStorage.setItem("theme", defaultTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = localStorage.getItem("theme") || (e.matches ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  return (
    <Router>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Mr. Sinre | Sobhan-SRZA" />
        <meta name="description" content={t("meta_description")} />
        <meta property="og:title" content="Mr. Sinre | Sobhan-SRZA" />
        <meta property="og:description" content={t("meta_description")} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://srza.ir/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Mr. Sinre | Sobhan-SRZA</title>
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
            "sameAs": Object.values(social),
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

      <div className={`min-h-screen flex flex-col ${i18n.language === "fa" ? "font-iransans rtl" : "font-sans ltr"}`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <SeoSection />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/social" element={<Social />} />
            <Route path="/chand" element={<Chand />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */