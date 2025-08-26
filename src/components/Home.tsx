import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
    const { t, i18n } = useTranslation();

    const skills = [
        { name: t("skills.typescript"), level: 90 },
        { name: t("skills.nodejs"), level: 90 },
        { name: t("skills.javascript"), level: 90 },
        { name: t("skills.api"), level: 90 },
        { name: t("skills.python"), level: 50 },
        { name: t("skills.cpp"), level: 30 },
        { name: t("skills.react"), level: 50 },
        { name: t("skills.git"), level: 30 },
        { name: t("skills.debugging"), level: 90 },
        { name: t("skills.problem_solving"), level: 80 },
        { name: t("skills.mongodb"), level: 80 },
        { name: t("skills.html"), level: 90 },
        { name: t("skills.css"), level: 80 },
        { name: t("skills.sass"), level: 90 }
    ];

    return (
        <>
            <Helmet>
                <title>{t("home")} | Mr. Sinre | Sobhan-SRZA</title>
                <meta name="description" content={t("about_content").substring(0, 160)} />
            </Helmet>

            {/* Hero Section */}
            <section className="min-h-min py-16 bg-gray-800/80 rounded-3xl backdrop-blur-md flex items-center justify-center">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <div className="text-center">
                        <img
                            src="/images/profile.jpg"
                            alt="Mr. Sinre | Sobhan-SRZA"
                            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-400/50 shadow-lg object-cover mb-6 animate-scale-in"
                        />
                        <h1 className="max-[400px]:text-3xl text-4xl sm:text-5xl font-bold mb-4 font-iransans text-blue-200 animate-fade-in">
                            Mr. Sinre | Sobhan-SRZA
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 font-iransans animate-fade-in delay-200">
                            {t("hero.tagline")}
                        </p>
                        <div className="flex max-[560px]:flex-col justify-center gap-4 animate-fade-in delay-400">
                            <NavLink
                                to="/projects"
                                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 transition-all duration-200 font-iransans"
                            >
                                {t("view_projects")}
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="px-6 py-3 text-sm font-semibold text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-iransans"
                            >
                                {t("contact_me")}
                            </NavLink>
                            <a
                                href={`/resume-${i18n.language}.pdf`}
                                download="Sobhan-SRZA-Resume.pdf"
                                className="flex items-center px-6 py-3 text-sm font-semibold text-white bg-green-700 rounded-md shadow-sm hover:bg-green-600 transition-all duration-200 font-iransans"
                                aria-label={t("download_resume")}
                            >
                                <Download className="w-5 h-5 mr-2" />
                                {t("download_resume")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-800/50">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-blue-200 text-center font-iransans">
                        {t("about")}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-iransans">
                        {t("about_content")}
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-gray-800/80 backdrop-blur-md">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-blue-200 text-center font-iransans">
                        {t("skills")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-gray-800/60 p-4 rounded-lg shadow-lg">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-200 font-iransans">{skill.name}</span>
                                    <span className="text-blue-200 font-iransans">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full">
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Teaser */}
            <section className="py-16 bg-gray-800/50">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-blue-200 text-center font-iransans">
                        {t("projects")}
                    </h2>
                    <p className="text-center text-gray-300 mb-8 font-iransans">
                        {t("projects_teaser")}
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/projects"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 transition-all duration-200 font-iransans"
                        >
                            {t("view_projects")}
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Contact Teaser */}
            <section className="py-16 bg-gray-800/80 backdrop-blur-md">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-blue-200 text-center font-iransans">
                        {t("contact")}
                    </h2>
                    <p className="text-center text-gray-300 mb-8 font-iransans">
                        {t("contact_content")}
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-iransans"
                        >
                            {t("contact_me")}
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;