// Footer.tsx: Component for the website footer, featuring a logo, useful links, social media links, and a copyright notice with internationalization support.

// Import icons from lucide-react for social media links.
import {
    Github,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import NavLink for client-side routing.
import { NavLink } from "react-router-dom";

// Import social links from storage for social media URLs.
import { social } from "../storage";

// Footer component, defined as a functional component using TypeScript.
const Footer: React.FC = () => {
    // Access translation function and i18n instance for language support.
    const { t, i18n } = useTranslation();

    // Array of social media links with icons and URLs.
    const socialLinks = [
        { name: "GitHub", icon: <Github />, url: social.github }, // GitHub link
        { name: "Youtube", icon: <Youtube />, url: social.youtube }, // Youtube link
        { name: "LinkedIn", icon: <Linkedin />, url: social.linkedin }, // LinkedIn link
        { name: "Instagram", icon: <Instagram />, url: social.instagram } // Instagram link
    ];

    // Array of useful navigation links with translated names and URLs.
    const usefulLinks = [
        { name: t("footer.home"), url: "/" }, // Home link
        { name: t("footer.projects"), url: "/projects" }, // Projects link
        { name: t("footer.contact"), url: "/contact" } // Contact link
    ];

    // Render the footer with logo, links, social media, and copyright notice.
    return (
        <footer className="relative bg-(--sec-bg) backdrop-blur-md text-(--text) py-12 animate-fade-in transition-all">
            {/* Gradient overlay for visual effect */}
            <div className="absolute inset-0 bg-linear-to-t from-(--card-bg)/20 to-transparent z-[-1]"></div>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                {/* Grid layout for footer sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Logo or Name Section */}
                    <div className="flex flex-col items-center min-[768px]:items-start">
                        <NavLink
                            to="/" // Link to homepage
                            className="text-2xl min-[768px]:text-[18px] min-[944px]:text-2xl font-bold text-(--primary) hover:text-(--primary-hover) transition-colors"
                            aria-label="Mr. Sinre | Sobhan-SRZA" // Accessible label for screen readers
                        >
                            Mr. Sinre | Sobhan-SRZA
                        </NavLink>
                        <p className="text-(--text)/70 text-sm mt-2 text-center md:text-start transition-colors">
                            {t("footer.tagline")} {/* Translated tagline */}
                        </p>
                    </div>

                    {/* Useful Links Section */}
                    <div className="flex flex-col items-center justify-self-center">
                        <h3 className="text-lg font-semibold text-(--primary) mb-4 transition-colors">
                            {t("footer.links")} {/* Translated useful links title */}
                        </h3>
                        <ul className="space-y-2 text-center">
                            {usefulLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="text-(--text)/80 hover:text-(--hover) text-sm transition-all hover:scale-120"
                                > {/* Unique key for each link (consider using link.url for better uniqueness) */}
                                    <NavLink
                                        to={link.url} // Navigation route
                                        aria-label={link.name} // Accessible label for screen readers
                                    >
                                        {link.name} {/* Translated link name */}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Links Section */}
                    <div className="flex flex-col items-center justify-self-center">
                        <h3 className="text-lg font-semibold text-(--primary) mb-4 transition-colors">
                            {t("footer.social")} {/* Translated social media title */}
                        </h3>
                        <div className="flex gap-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index} // Unique key for each social link (consider using link.name for better uniqueness)
                                    href={link.url} // Social media URL
                                    target="_blank" // Open in new tab
                                    rel="noopener noreferrer" // Security attributes for external links
                                    aria-label={link.name} // Accessible label for screen readers
                                    className="transition-all w-5 h-5 text-(--text) hover:text-(--hover) hover:scale-120"
                                >
                                    {link.icon} {/* Social media icon */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-8 pt-8 border-t border-(--border) text-center transition-colors">
                    <p className="text-(--text)/70 text-sm transition-colors">
                        &copy; {`${i18n.language === "fa" ? "1404-1399" : "2020-2026"} Mr.Sinre | Sobhan - SRZA. ${t("footer.copyright")}`}
                        {/* Dynamic copyright years based on language and translated copyright text */}
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Export the Footer component as the default export.
export default Footer;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */