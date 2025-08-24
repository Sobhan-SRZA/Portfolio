import {
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import {
    Dialog,
    DialogPanel
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: t("about"), href: "/" },
        { name: t("projects"), href: "/projects" },
        { name: t("contact"), href: "/contact" },
        { name: t("biography"), href: "/biography" },
        { name: t("social"), href: "/social" }
    ];

    return (
        <header className="ltr bg-gray-900/80 backdrop-blur-xs text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
            >
                {/* لوگو/عنوان */}
                <div className="flex flex-1">
                    <NavLink to="/" className="flex items-center space-x-2 space-x-reverse">
                        <span className="text-xl sm:text-2xl font-bold font-iransans tracking-tight text-white hover:text-blue-300 transition-colors duration-200">
                            Sobhan-SRZA
                        </span>
                        <span className="text-blue-400 text-xl sm:text-2xl">/</span>
                        <span className="ml-1 mr-1.5 text-xl sm:text-2xl font-bold font-iransans tracking-tight text-white hover:text-blue-300 transition-colors duration-200">
                            Mr. Sinre
                        </span>
                    </NavLink>
                </div>

                {/* دکمه همبرگری برای موبایل */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white focus:outline-none"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {/* ناوبری دسکتاپ */}
                <div className={`hidden lg:flex lg:gap-x-8 ltr`}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `text-sm font-semibold font-iransans px-3 py-2 rounded-md transition-colors duration-200 ${isActive
                                    ? "text-blue-400 bg-gray-800/50"
                                    : "text-gray-200 hover:text-blue-400 hover:bg-gray-800/50"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <LanguageSwitcher />
                </div>
            </nav>

            {/* منوی موبایل */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
                <DialogPanel
                    className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-gray-900/80 backdrop-blur-md p-6 transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        } ${i18n.language === "fa" ? "rtl" : "ltr"}`}
                >
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="flex items-center space-x-2 space-x-reverse">
                            <span className="text-xl font-bold font-iransans tracking-tight text-white">
                                Sobhan-SRZA / Mr. Sinre
                            </span>
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-md p-2.5 text-gray-400 hover:text-white"
                            aria-label="Close menu"
                        >
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="space-y-2 py-6">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-3 py-2 text-base font-semibold font-iransans text-white hover:bg-gray-800/50 ${isActive ? "text-blue-400" : ""
                                        }`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="px-3 py-2">
                                <LanguageSwitcher onChange={() => setMobileMenuOpen(false)} />
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;