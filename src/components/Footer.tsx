import {
    Github,
    Instagram,
    Linkedin,
    Send,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { social } from "../storage";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();

    const socialLinks = [
        { name: "GitHub", icon: <Github className="w-5 h-5 text-[var(--text)] hover:text-[var(--hover)]" />, url: social.github },
        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5 text-[var(--text)] hover:text-[var(--hover)]" />, url: social.linkedin },
        { name: "Telegram", icon: <Send className="w-5 h-5 text-[var(--text)] hover:text-[var(--hover)]" />, url: social.telegram },
        { name: "Instagram", icon: <Instagram className="w-5 h-5 text-[var(--text)] hover:text-[var(--hover)]" />, url: social.instagram }
    ];

    const usefulLinks = [
        { name: t("footer.home"), url: "/" },
        { name: t("footer.projects"), url: "/projects" },
        { name: t("footer.contact"), url: "/contact" }
    ];

    return (
        <footer className="relative bg-[var(--sec-bg)] backdrop-blur-md text-[var(--text)] py-12 animate-fade-in fade-out-transation">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)]/20 to-transparent z-[-1]"></div>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Logo or Name */}
                    <div className="flex flex-col items-center min-[768px]:items-start">
                        <NavLink
                            to="/"
                            className="text-2xl min-[768px]:text-[18px] min-[944px]:text-2xl font-bold text-[var(--primary)] hover:text-[var(--text)] fade-out-transation"
                            aria-label="Mr. Sinre | Sobhan-SRZA"
                        >
                            Mr. Sinre | Sobhan-SRZA
                        </NavLink>
                        <p className="text-[var(--text)]/70 text-sm mt-2 text-center md:text-start">
                            {t("footer.tagline")}
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col items-center justify-self-center">
                        <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">
                            {t("footer.links")}
                        </h3>
                        <ul className="space-y-2 text-center">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.url}
                                        className="text-[var(--text)]/70 hover:text-[var(--hover)] text-sm fade-out-transation"
                                        aria-label={link.name}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Pages */}
                    <div className="flex flex-col items-center justify-self-center">
                        <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">
                            {t("footer.social")}
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--text)] hover:text-[var(--hover)] fade-out-transation"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyrights */}
                <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
                    <p className="text-[var(--text)]/70 text-sm">
                        &copy; {`${i18n.language === "fa" ? "1404-1397" : "2025-2018"} Mr.Sinre | Sobhan - SRZA. ${t("footer.copyright")}`}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;