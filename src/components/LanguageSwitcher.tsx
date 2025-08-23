import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.documentElement.setAttribute("lang", lng);
        document.documentElement.setAttribute("dir", lng === "fa" ? "rtl" : "ltr");
    };

    return (
        <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-gray-700 text-white p-2 rounded"
        >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
        </select>
    );
};

export default LanguageSwitcher;