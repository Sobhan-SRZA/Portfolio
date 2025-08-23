import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-8">
            <div className="content" lang={t("lang")}>
                <h2 className="text-3xl font-bold mb-4">{t("about")}</h2>
                <p className="text-lg">{t("about_content")}</p>
            </div>
        </section>
    );
};

export default About;