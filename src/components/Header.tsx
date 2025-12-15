// Header.tsx: Component for the website header, featuring a responsive navigation bar with mobile menu, language switcher, and theme toggle.

// Import icons from Heroicons for hamburger menu and close button.
import {
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";

// Import Dialog components from Headless UI for the mobile menu.
import {
    Dialog,
    DialogPanel
} from "@headlessui/react";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import useState hook from React for managing mobile menu state.
import { useEffect, useRef, useState } from "react";

// Import NavLink for client-side routing.
import { NavLink } from "react-router-dom";

// Import custom components for language switching and theme toggling.
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

// Header component, defined as a functional component using TypeScript.
const Header: React.FC = () => {
    // Access translation function for internationalization.
    const { t, i18n } = useTranslation();

    // State to control the visibility of the mobile menu.
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Array of navigation items with translated names and routes.
    const navItems = [
        { name: t("home"), href: "/" }, // Home navigation link
        { name: t("projects"), href: "/projects" }, // Projects navigation link
        { name: t("contact"), href: "/contact" }, // Contact navigation link
        { name: t("biography"), href: "/biography" }, // Biography navigation link
        { name: t("social"), href: "/social" } // Social navigation link
    ];

    const [activeItem, setActiveItem] = useState<string>(window.location.pathname);

    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const highlightRef = useRef<HTMLDivElement>(null);

    // Update highlight position and width
    useEffect(() => {
        const activeIndex = navItems.findIndex((item) => item.href === activeItem);
        const activeElement = navRefs.current[activeIndex];
        if (activeElement && highlightRef.current) {
            const { offsetLeft, offsetWidth, offsetHeight } = activeElement;
            highlightRef.current.style.left = `${offsetLeft}px`;
            highlightRef.current.style.width = `${offsetWidth}px`;
            highlightRef.current.style.height = `${offsetHeight}px`;
        }
    }, [activeItem, i18n.language]);

    // Handle window resize for responsive highlight
    useEffect(() => {
        const handleResize = () => {
            const activeIndex = navItems.findIndex((item) => item.href === activeItem);
            const activeElement = navRefs.current[activeIndex];
            if (activeElement && highlightRef.current) {
                const { offsetLeft, offsetWidth, offsetHeight } = activeElement;
                highlightRef.current.style.left = `${offsetLeft}px`;
                highlightRef.current.style.width = `${offsetWidth}px`;
                highlightRef.current.style.height = `${offsetHeight}px`;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeItem]);

    // Render the header with desktop and mobile navigation.
    return (
        <header className="bg-[var(--sec-bg)] backdrop-blur-md text-[var(--text)] sticky top-0 left-0 w-full z-50 shadow-md ltr">
            <nav
                aria-label="Global" // Accessible label for navigation
                className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
            >
                {/* Logo or Title */}
                <div className="flex flex-1">
                    <NavLink
                        to="/" // Link to homepage
                        className="text-2xl max-[1074px]:text-[18px] max-[1137px]:text-[22px] flex items-center space-x-2 space-x-reverse"
                    >
                        <span className="font-bold tracking-tight text-[var(--text)] hover:text-[var(--primary-hover)] default-fade-transition">
                            Sobhan-SRZA
                        </span> {/* Primary part of the logo */}
                        <span className="text-[var(--primary)]">/</span> {/* Separator */}
                        <span className="ml-1 mr-1.5 font-bold tracking-tight text-[var(--text)] hover:text-[var(--primary-hover)] default-fade-transition">
                            Mr. Sinre
                        </span> {/* Secondary part of the logo */}
                    </NavLink>
                </div>

                {/* Hamburger button for mobile menu toggle */}
                <div className="flex min-[1032px]:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)} // Open mobile menu
                        className="inline-flex items-center justify-center rounded-md text-[var(--text)] hover:text-[var(--hover)] focus:outline-none default-fade-transition p-0"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} // Accessible label for screen readers
                    >
                        <Bars3Icon aria-hidden="true" className="h-8 w-8" /> {/* Hamburger icon */}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden min-[1032px]:flex lg:gap-x-8">
                    <div
                        ref={highlightRef}
                        className="absolute bg-[var(--nav-hover)] rounded-md transition-all duration-300 ease-in-out"
                    />

                    {navItems.map((item, index) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => {
                                if (isActive)
                                    setActiveItem(item.href)

                                return `relative text-[17px] font-semibold px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? "text-[var(--hover)] cursor-not-allowed" : "text-[var(--text)] hover:text-[var(--hover)] hover:bg-[var(--nav-hover)]"
                                    }`
                            }
                            }
                            onClick={() => setActiveItem(item.href)}
                            ref={(el) => { navRefs.current[index] = el }}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <LanguageSwitcher /> {/* Language switcher component */}
                    <ThemeToggle /> {/* Theme toggle component */}
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="min-[1032px]:hidden rtl">
                {/* Overlay for mobile menu */}
                <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
                <DialogPanel
                    className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-[var(--sec-bg)] backdrop-blur-md p-6 transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Mobile menu header with logo and close button */}
                    <div className="ltr flex items-center justify-between">
                        <NavLink
                            to="/" // Link to homepage
                            onClick={() => setMobileMenuOpen(false)} // Close menu on click
                            className="flex items-center space-x-2 space-x-reverse"
                        >
                            <span className="text-xl font-bold tracking-tight text-[var(--text)]">
                                Sobhan-SRZA / Mr. Sinre
                            </span> {/* Mobile menu logo */}
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)} // Close mobile menu
                            className="rounded-md text-[var(--text)] hover:text-[var(--hover)] default-fade-transition p-0"
                            aria-label="Close menu" // Accessible label for screen readers
                        >
                            <XMarkIcon aria-hidden="true" className="h-8 w-8" /> {/* Close icon */}
                        </button>
                    </div>
                    {/* Mobile navigation items */}
                    <div className="mt-6 flow-root">
                        <div className="space-y-2 py-6">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name} // Unique key for each navigation item
                                    to={item.href} // Navigation route
                                    className={({ isActive }) =>
                                        `text-center block rounded-lg px-3 py-2 text-base font-semibold text-[var(--text)] hover:bg-[var(--card-bg)]/50 ${isActive ? "text-[var(--primary)]" : ""} default-fade-transition`
                                    }
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                                >
                                    {item.name} {/* Translated navigation item name */}
                                </NavLink>
                            ))}
                            {/* Language switcher and theme toggle for mobile */}
                            <div className="flex flex-row justify-between px-3 py-2">
                                <LanguageSwitcher /> {/* Language switcher component */}
                                <ThemeToggle /> {/* Theme toggle component */}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

// Export the Header component as the default export.
export default Header;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */