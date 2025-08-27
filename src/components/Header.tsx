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
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: t("home"), href: "/" },
        { name: t("projects"), href: "/projects" },
        { name: t("contact"), href: "/contact" },
        { name: t("biography"), href: "/biography" },
        { name: t("social"), href: "/social" }
    ];

    return (
        <header className="bg-[var(--sec-bg)] backdrop-blur-md text-[var(--text)] sticky top-0 left-0 w-full z-50 shadow-md ltr">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
            >
                {/* Logo or Title */}
                <div className="flex flex-1">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-2 space-x-reverse"
                    >
                        <span className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                            Sobhan-SRZA
                        </span>
                        <span className="text-[var(--primary)] text-xl sm:text-2xl">/</span>
                        <span className="ml-1 mr-1.5 text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                            Mr. Sinre
                        </span>
                    </NavLink>
                </div>

                {/* Hamburger button for mobile toggle */}
                <div className="flex min-[1028px]:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-[var(--text)] hover:text-[var(--primary)] focus:outline-none transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden min-[1028px]:flex lg:gap-x-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `text-sm font-semibold px-3 bg-transparent py-2 rounded-md transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] ${isActive
                                    ? "text-[var(--primary)]"
                                    : "text-[var(--text)] hover:text-[var(--primary)] hover:bg-[var(--card-bg)]/50"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </nav>

            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
                <DialogPanel
                    className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-[var(--sec-bg)] backdrop-blur-md p-6 transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        } ${i18n.language === "fa" ? "rtl" : "ltr"}`}
                >
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="flex items-center space-x-2 space-x-reverse">
                            <span className="text-xl font-bold tracking-tight text-[var(--text)]">
                                Sobhan-SRZA / Mr. Sinre
                            </span>
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-md p-2.5 text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]"
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
                                        `block rounded-lg px-3 py-2 text-base font-semibold text-[var(--text)] hover:bg-[var(--card-bg)]/50 ${isActive ? "text-[var(--primary)]" : ""
                                        } transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="flex flex-row justify-between px-3 py-2">
                                <LanguageSwitcher onChange={() => setMobileMenuOpen(false)} />
                                <ThemeToggle onChange={() => setMobileMenuOpen(false)} />
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;