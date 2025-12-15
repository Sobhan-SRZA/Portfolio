// Home.tsx: Component for the homepage, displaying a hero section, about section, skills, and teasers for projects and contact, with internationalization and SEO support.

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import icons from lucide-react for visual elements (download button and loading placeholder).
import { Download, Image as ImageIcon } from "lucide-react";

// Import NavLink for client-side routing.
import { NavLink } from "react-router-dom";

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// Import React hooks for managing state and side effects.
import { useEffect, useState } from "react";

// Home component, defined as a functional component using TypeScript.
const Home: React.FC = () => {
    // Access translation function and i18n instance for language support.
    const { t, i18n } = useTranslation();

    // Array of skills with translated names and proficiency levels for display in the skills section.
    const skills = [
        { name: t("skills.typescript"), level: 90 }, // TypeScript skill with 90% proficiency
        { name: t("skills.nodejs"), level: 90 }, // Node.js skill with 90% proficiency
        { name: t("skills.javascript"), level: 90 }, // JavaScript skill with 90% proficiency
        { name: t("skills.api"), level: 90 }, // API development skill with 90% proficiency
        { name: t("skills.python"), level: 50 }, // Python skill with 50% proficiency
        { name: t("skills.cpp"), level: 30 }, // C++ skill with 30% proficiency
        { name: t("skills.react"), level: 50 }, // React skill with 50% proficiency
        { name: t("skills.git"), level: 30 }, // Git skill with 30% proficiency
        { name: t("skills.debugging"), level: 90 }, // Debugging skill with 90% proficiency
        { name: t("skills.problem_solving"), level: 80 }, // Problem-solving skill with 80% proficiency
        { name: t("skills.mongodb"), level: 80 }, // MongoDB skill with 80% proficiency
        { name: t("skills.html"), level: 90 }, // HTML skill with 90% proficiency
        { name: t("skills.css"), level: 80 }, // CSS skill with 80% proficiency
        { name: t("skills.sass"), level: 90 } // Sass skill with 90% proficiency
    ];

    // State to track loading status for the profile image.
    const [loading, setLoading] = useState(true);

    // Component to render a loading placeholder for the profile image.
    const LoadingIcon = () => (
        <div
            className="transition-all relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[var(--primary)]/50 shadow-lg bg-[var(--sec-bg)] animate-pulse mb-6"
        >
            <ImageIcon
                className="p-2 w-full h-full text-[var(--primary)] transition-all hover:filter-grayscale hover:brightness-125"
            /> {/* Placeholder icon with animation and hover effects */}
        </div>
    );

    // Effect to preload the profile image and update loading state.
    useEffect(() => {
        const img = new Image();
        img.src = "/images/profile.jpg"; // Preload the profile image
        img.onload = () => setLoading(false); // Set loading to false on successful load
        img.onerror = () => setLoading(false); // Set loading to false on error
    }, []); // Empty dependency array ensures this runs only on mount.

    // Render the homepage with multiple sections, SEO metadata, and responsive layout.
    return (
        <>
            {/* Helmet for managing SEO metadata */}
            <Helmet>
                <title>{t("home")} | Mr. Sinre | Sobhan-SRZA</title> {/* Page title with translated home label */}
                <meta name="description" content={t("about_content").substring(0, 160)} /> {/* Truncated description for SEO */}
            </Helmet>

            {/* Hero Section: Displays profile image, title, tagline, and call-to-action buttons */}
            <section className="min-h-min py-16 flex items-center justify-center transition-all">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <div className="text-center">

                        {/* Profile image or loading placeholder */}
                        <div className="relative">
                            {loading ? (
                                <LoadingIcon /> // Render loading placeholder while image is loading
                            ) : (
                                <img
                                    src="/images/profile.jpg"
                                    alt="Mr. Sinre | Sobhan-SRZA" // Accessible alt text
                                    className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[var(--primary)]/50 shadow-lg object-cover mb-6 animate-scale-in"
                                    loading="lazy" // Lazy load the image for performance
                                    onLoad={() => setLoading(false)} // Update loading state on load
                                    onError={() => setLoading(false)} // Update loading state on error
                                />
                            )}
                        </div>

                        {/* Main title with responsive font sizing */}
                        <h1 className="max-[480px]:text-3xl max-[411px]:text-[26px] max-[365px]:text-[22px] text-4xl sm:text-5xl font-bold mb-4 text-[var(--primary)] animate-fade-in">
                            Mr. Sinre | Sobhan-SRZA
                        </h1>

                        {/* Tagline with translated text */}
                        <p className="text-xl text-[var(--text)] mb-8 animate-fade-in delay-200">
                            {t("hero.tagline")} {/* Translated tagline */}
                        </p>
                        
                        {/* Call-to-action buttons for projects, contact, and resume download */}
                        <div className="flex max-[560px]:flex-col justify-center gap-4 animate-fade-in delay-400">
                            <a
                                href={`/resume-${i18n.language}.pdf`} // Language-specific resume file
                                download="Sobhan-SRZA-Resume.pdf" // Download filename
                                className="flex gap-2 justify-center items-center px-6 py-3 text-[16px] font-semibold text-black backdrop-blur-2xl border-4 border-[var(--accent)] bg-[var(--accent-hover)]/30 rounded-md shadow-sm hover:bg-[var(--accent)] hover:scale-105 transition-all"
                                aria-label={t("download_resume")} // Accessible label for screen readers
                            >
                                <Download className="w-5 h-5 mr-2" /> {/* Download icon */}
                                {t("download_resume")} {/* Translated download resume button */}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section: Displays a brief introduction */}
            <section className="py-16">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
                        {t("about")} {/* Translated about section title */}
                    </h2>
                    <p className="text-lg text-[var(--text)] leading-relaxed animate-fade-in delay-200">
                        {t("about_content")} {/* Translated about section content */}
                    </p>
                </div>
            </section>

            {/* Skills Section: Displays a list of skills with animated progress bars */}
            <section className="py-16">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
                        {t("skills")} {/* Translated skills section title */}
                    </h2>

                    {/* Skills list with animated progress bars */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {skills.map((skill, index) => {
                            // State to track the animated progress value for each skill.
                            const [count, setCount] = useState(0);

                            // Effect to animate the progress bar for each skill.
                            useEffect(() => {
                                const delay = index * 100; // Stagger animation for each skill
                                let start: number | null = null;
                                const duration = 800; // Animation duration in milliseconds

                                const animate = (timestamp: number) => {
                                    if (!start) start = timestamp;
                                    const progress = Math.min((timestamp - start) / duration, 1);
                                    setCount(Math.round(progress * skill.level)); // Update progress value
                                    if (progress < 1) {
                                        requestAnimationFrame(animate); // Continue animation until complete
                                    }
                                };

                                const timeout = setTimeout(() => {
                                    requestAnimationFrame(animate); // Start animation after delay
                                }, delay);

                                return () => clearTimeout(timeout); // Cleanup timeout on unmount
                            }, [skill.level, index]); // Dependencies ensure animation runs when level or index changes

                            return (
                                <div
                                    key={index} // Unique key for each skill (consider using skill.name for better uniqueness)
                                    className="min-[1280px]:min-w-[300px] max-[1280px]:w-[325px] max-[768px]:min-w-full text-[20px] bg-[var(--card-bg)] p-4 rounded-lg shadow-lg transition-all border border-[var(--border)] hover:border-[var(--primary)] cursor-pointer"
                                >
                                    {/* Skill name and progress percentage */}
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[var(--text)]">{skill.name}</span>
                                        <span className="text-[var(--primary)] font-bold">{count}%</span>
                                    </div>
                                    {/* Progress bar */}
                                    <div className="h-2 bg-[var(--border)] rounded-full">
                                        <div
                                            className="h-full bg-[var(--primary)] rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${count}%` }} // Dynamically set width based on progress
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Projects Teaser: Encourages users to visit the projects page */}
            <section className="py-16">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
                        {t("projects")} {/* Translated projects section title */}
                    </h2>
                    <p className="text-center text-[var(--text)] mb-8 animate-fade-in delay-200">
                        {t("projects_teaser")} {/* Translated projects teaser content */}
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/projects"
                            className="inline-flex items-center px-6 py-3 text-[16px] font-semibold text-[var(--nav-text-hover)] bg-[var(--primary)] rounded-md shadow-sm transition-all border hover:backdrop-blur-2xl hover:border-[var(--primary)] hover:bg-[var(--card-bg)] hover:text-[var(--primary)]"
                        >
                            {t("view_projects")} {/* Translated view projects button */}
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Contact Teaser: Encourages users to visit the contact page */}
            <section className="py-16">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
                        {t("contact")} {/* Translated contact section title */}
                    </h2>
                    <p className="text-center text-[var(--text)] mb-8 animate-fade-in delay-200">
                        {t("contact_content")} {/* Translated contact teaser content */}
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 text-[16px] font-semibold text-[var(--primary)] border border-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] hover:text-[var(--nav-text-hover)] transition-all"
                        >
                            {t("contact_me")} {/* Translated contact button */}
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

// Export the Home component as the default export.
export default Home;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */