// NotFound.tsx: Component for rendering a 404 error page with redirection, internationalization, and SEO support.

// Import routing utilities from react-router-dom for navigation and location handling.
import {
    NavLink,
    useLocation,
    useNavigate
} from "react-router-dom";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import useEffect hook from React for handling side effects, such as redirecting to the /404 route.
import { useEffect } from "react";

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// NotFound component, defined as a functional component using TypeScript.
const NotFound: React.FC = () => {
    // Access translation function and i18n instance for language support.
    const { t, i18n } = useTranslation();

    // Access navigation function to programmatically redirect users.
    const navigate = useNavigate();

    // Access current location to check the pathname.
    const location = useLocation();

    // Effect to redirect any unmatched routes to the explicit /404 route.
    useEffect(() => {
        if (location.pathname !== "/404") {
            navigate("/404", { replace: true }); // Replace the current history entry to avoid back-button issues
        }
    }, [location.pathname, navigate]); // Dependencies ensure effect runs when pathname or navigate changes.

    // Render the 404 page with SEO metadata and responsive, theme-based styling.
    return (
        <>
            {/* Helmet for managing SEO metadata */}
            <Helmet>
                <title>{t("not_found_title")} | Mr. Sinre | Sobhan-SRZA</title> {/* Page title with translated 404 label */}
                <meta name="description" content={t("not_found_description").substring(0, 160)} /> {/* Truncated description for SEO */}
            </Helmet>
            {/* Main section for the 404 page with theme-based styling and animations */}
            <main
                className={`min-h-min bg-[var(--sec-bg)] backdrop-blur-md grid rounded-3xl place-items-center px-6 py-24 sm:py-32 lg:px-8 animate-fade-in fade-out-transition ${i18n.language === "fa" ? "rtl" : "ltr"}`}
            >
                {/* Centered content for the 404 message */}
                <div className="text-center">
                    {/* Large 404 text with theme-based primary color */}
                    <p className="text-7xl font-semibold text-[var(--primary)] font-iransans">404</p>
                    {/* Page title with translated text and responsive font sizing */}
                    <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] font-iransans">
                        {t("not_found_title")} {/* Translated title for the 404 page */}
                    </h1>
                    {/* Description text with translated content and subtle opacity */}
                    <p className="mt-6 text-lg font-medium text-[var(--text)]/70 font-iransans sm:text-xl">
                        {t("not_found_description")} {/* Translated description for the 404 page */}
                    </p>
                    {/* Navigation link back to the homepage */}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <NavLink
                            to="/" // Link to the homepage
                            className="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white font-iransans shadow-sm hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] fade-out-transition"
                            aria-label={t("back_to_home")} // Accessible label for screen readers
                        >
                            {t("back_to_home")} {/* Translated text for the back-to-home button */}
                        </NavLink>
                    </div>
                </div>
            </main>
        </>
    );
};

// Export the NotFound component as the default export.
export default NotFound;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */