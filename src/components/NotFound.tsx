import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <main
            className={`grid min-h-min mt-44 rounded-3xl bg-gray-900/80 backdrop-blur-md place-items-center px-6 py-24 sm:py-32 lg:px-8 ${i18n.language === 'fa' ? 'rtl' : 'ltr'
                }`}
        >
            <div className="text-center">
                <p className="text-7xl font-semibold text-blue-400 font-iransans">404</p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white font-iransans">
                    {t('not_found_title')}
                </h1>
                <p className="mt-6 text-lg font-medium text-gray-400 font-iransans sm:text-xl">
                    {t('not_found_description')}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NavLink
                        to="/"
                        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white font-iransans shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors duration-200"
                    >
                        {t('back_to_home')}
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default NotFound;