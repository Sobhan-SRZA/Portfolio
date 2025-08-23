import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("about")} | Mr. Sinre | Sobhan-SRZA</title>
                <meta name="description" content={t("about_content").substring(0, 160)} />
                <meta name="keywords" content="Mr. Sinre, Sobhan-SRZA, About, Developer, Portfolio" />
            </Helmet>
            <section
                id="about"
                className="min-h-min mt-28 rounded-3xl py-16 bg-gray-900/80 backdrop-blur-md flex items-center justify-center"
            >
                <div
                    className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl ${i18n.language === "fa" ? "rtl" : "ltr"
                        }`}
                >
                    <div className={`text-center ${i18n.language === "fa" ? "md:text-right" : "md:text-left"}`}>
                        {/* عنوان */}
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-iransans text-green-200 animate-fade-in">
                            {t("about")}
                        </h2>

                        {/* تصویر پروفایل (اختیاری) */}
                        <div className="mb-8 flex justify-center">
                            <img
                                src="/images/profile.jpg"
                                alt="Mr. Sinre | Sobhan-SRZA"
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-400/50 shadow-lg object-cover animate-scale-in"
                            />
                        </div>

                        {/* متن درباره */}
                        <p className="text-lg sm:text-xl font-iransans text-gray-300 mb-8 leading-relaxed animate-fade-in delay-200">
                            {t("about_content")}
                        </p>

                        {/* دکمه‌های فراخوان */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-400">
                            <NavLink
                                to="/projects"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 font-iransans"
                            >
                                {t("view_projects")}
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-iransans"
                            >
                                {t("contact_me")}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;