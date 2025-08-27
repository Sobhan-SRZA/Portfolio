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
            <section className="min-h-min py-16 bg-[var(--sec-bg)] rounded-t-3xl backdrop-blur-md flex items-center justify-center transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <div className="text-center">
                        <img
                            src="/images/profile.jpg"
                            alt="Mr. Sinre | Sobhan-SRZA"
                            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[var(--primary)]/50 shadow-lg object-cover mb-6 animate-scale-in"
                        />
                        <h1 className="max-[480px]:text-3xl max-[411px]:text-[26px] max-[365px]:text-[22px] text-4xl sm:text-5xl font-bold mb-4 font-iransans text-[var(--primary)] animate-fade-in">
                            Mr. Sinre | Sobhan-SRZA
                        </h1>
                        <p className="text-xl text-[var(--text)] mb-8 font-iransans animate-fade-in delay-200">
                            {t("hero.tagline")}
                        </p>
                        <div className="flex max-[560px]:flex-col justify-center gap-4 animate-fade-in delay-400">
                            <NavLink
                                to="/projects"
                                className="px-6 py-3 text-sm font-semibold text-white bg-[var(--primary)] rounded-md shadow-sm hover:bg-[color-mix(in srgb, var(--primary) 80%, transparent)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
                            >
                                {t("view_projects")}
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="px-6 py-3 text-sm font-semibold text-[var(--primary)] border border-[var(--primary)] rounded-md hover:bg-[var(--primary)]/10 transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
                            >
                                {t("contact_me")}
                            </NavLink>
                            <a
                                href={`/resume-${i18n.language}.pdf`}
                                download="Sobhan-SRZA-Resume.pdf"
                                className="flex items-center px-6 py-3 text-sm font-semibold text-white bg-[var(--accent)] rounded-md shadow-sm hover:bg-[color-mix(in srgb, var(--accent) 50%, transparent)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
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
            <section className="py-16 bg-[var(--card-bg)]/50">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center font-iransans animate-fade-in">
                        {t("about")}
                    </h2>
                    <p className="text-lg text-[var(--text)] leading-relaxed font-iransans animate-fade-in delay-200">
                        {t("about_content")}
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-[var(--sec-bg)] backdrop-blur-md">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center font-iransans animate-fade-in">
                        {t("skills")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[var(--card-bg)] p-4 rounded-lg shadow-lg transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-[var(--text)] font-iransans">{skill.name}</span>
                                    <span className="text-[var(--primary)] font-iransans">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-[var(--border)] rounded-full">
                                    <div
                                        className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Teaser */}
            <section className="py-16 bg-[var(--card-bg)]/50">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center font-iransans animate-fade-in">
                        {t("projects")}
                    </h2>
                    <p className="text-center text-[var(--text)] mb-8 font-iransans animate-fade-in delay-200">
                        {t("projects_teaser")}
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/projects"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[var(--primary)] rounded-md shadow-sm hover:bg-[color-mix(in srgb, var(--primary) 80%, transparent)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
                        >
                            {t("view_projects")}
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Contact Teaser */}
            <section className="py-16 bg-[var(--sec-bg)] backdrop-blur-md rounded-b-3xl">
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}>
                    <h2 className="text-3xl font-bold mb-6 text-[var(--primary)] text-center font-iransans animate-fade-in">
                        {t("contact")}
                    </h2>
                    <p className="text-center text-[var(--text)] mb-8 font-iransans animate-fade-in delay-200">
                        {t("contact_content")}
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[var(--primary)] border border-[var(--primary)] rounded-md hover:bg-[var(--primary)]/10 transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
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