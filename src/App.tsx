import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Social from "./components/Social";
import "./i18n";

const App: React.FC = () => {
  const { i18n, t } = useTranslation();

  return (
    <Router>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Mr. Sinre | Sobhan-SRZA" />
        <meta
          name="description"
          content={t("meta_description")}
        />
        <meta
          name="keywords"
          content="Mr. Sinre, Sobhan-SRZA, Portfolio, Developer, Programmer, Discord Bot, Farsi, English"
        />
        <meta property="og:title" content="Mr. Sinre | Sobhan-SRZA" />
        <meta
          property="og:description"
          content={t("meta_description")}
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://srza.ir/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Mr. Sinre | Sobhan-SRZA</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Mr. Sinre / Sobhan-SRZA",
            url: "https://srza.ir/",
            sameAs: [
              "https://www.upwork.com/freelancers/~0167afbcbca01071d4",
              "https://github.com/Sobhan-SRZA/",
              // ... سایر لینک‌ها
            ],
            jobTitle: "Developer & Content Creator",
            birthDate: "2005-11-22",
          })}
        </script>
      </Helmet>
      <div className={`min-h-screen flex flex-col ${i18n.language === "fa" ? "font-vazir" : "font-sans"}`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;