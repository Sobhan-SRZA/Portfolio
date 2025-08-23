import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Sobhan-SRZA / Mr. Sinre</h1>
                <nav className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <ul className="flex space-x-4 space-x-reverse">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-400" : "hover:text-blue-400"
                                }
                            >
                                {t("about")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-400" : "hover:text-blue-400"
                                }
                            >
                                {t("projects")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-400" : "hover:text-blue-400"
                                }
                            >
                                {t("contact")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/biography"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-400" : "hover:text-blue-400"
                                }
                            >
                                {t("biography")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/social"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-400" : "hover:text-blue-400"
                                }
                            >
                                {t("social")}
                            </NavLink>
                        </li>
                        <li>
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;