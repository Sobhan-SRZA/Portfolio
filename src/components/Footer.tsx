import {
    Github,
    Instagram,
    Linkedin,
    Send
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { social } from "../storage";

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();

    const socialLinks = [
        { name: "GitHub", icon: <Github className="w-5 h-5" />, url: social.github },
        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: social.linkedin },
        { name: "Telegram", icon: <Send className="w-5 h-5" />, url: social.telegram },
        { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: social.instagram }
    ];

    const usefulLinks = [
        { name: t("footer.about"), url: "/about" },
        { name: t("footer.projects"), url: "/projects" },
        { name: t("footer.contact"), url: "/contact" }
    ];

    return (
        <footer className="relative bg-gray-900/80 backdrop-blur-md text-white py-12">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-[-1]"></div>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start animate-fade-in">
                    {/* لوگو و نام برند */}
                    <div className="flex flex-col items-center justify-self-center">
                        <a
                            href="/"
                            className="text-2xl font-bold text-blue-200 hover:text-blue-100 transition-colors duration-200"
                            aria-label="Mr. Sinre | Sobhan-SRZA"
                        >
                            Mr. Sinre | Sobhan-SRZA
                        </a>
                        <p className="text-gray-400 text-sm mt-2 text-center md:text-start">
                            {t("footer.tagline")}
                        </p>
                    </div>

                    {/* لینک‌های مفید */}
                    <div className="flex flex-col items-center justify-self-center">
                        <h3 className="text-lg font-semibold text-blue-200 mb-4">
                            {t("footer.links")}
                        </h3>
                        <ul className="space-y-2 text-center">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="text-gray-300 hover:text-blue-200 text-sm transition-colors duration-200"
                                        aria-label={link.name}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* شبکه‌های اجتماعی */}
                    <div className="flex flex-col items-center justify-self-center">
                        <h3 className="text-lg font-semibold text-blue-200 mb-4">
                            {t("footer.social")}
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-200 transition-colors duration-200"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* کپی‌رایت */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {`${i18n.language === "fa" ? "1404-1397" : "2025-2018"} Mr.Sinre | Sobhan - SRZA. ${t("footer.copyright")}`}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;