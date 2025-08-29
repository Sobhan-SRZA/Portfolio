import {
    NavLink,
    useLocation,
    useNavigate
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const NotFound: React.FC = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/404") {
            navigate("/404", { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <main
            className={`min-h-min bg-[var(--sec-bg)] backdrop-blur-md grid rounded-3xl place-items-center px-6 py-24 sm:py-32 lg:px-8 animate-fade-in fade-out-transation ${i18n.language === "fa" ? "rtl" : "ltr"
                }`}
        >
            <div className="text-center">
                <p className="text-7xl font-semibold text-[var(--primary)] font-iransans">404</p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] font-iransans">
                    {t("not_found_title")}
                </h1>
                <p className="mt-6 text-lg font-medium text-[var(--text)]/70 font-iransans sm:text-xl">
                    {t("not_found_description")}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NavLink
                        to="/"
                        className="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white font-iransans shadow-sm hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] fade-out-transation"
                        aria-label={t("back_to_home")}
                    >
                        {t("back_to_home")}
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */