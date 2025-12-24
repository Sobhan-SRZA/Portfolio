// Header.tsx: Component for the website header, featuring a responsive navigation bar with mobile menu, language switcher, and theme toggle.

// Import icons from Heroicons for hamburger menu and close button.
import {
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";

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
    const [isAnimating, setIsAnimating] = useState(false);

    const [themeIsAnimating, themeSetIsAnimating] = useState(false);
    const [themeIsDark, themeSetIsDark] = useState(false);

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
        <>
            <header className="bg-(--sec-bg) backdrop-blur-xs text-(--text) sticky top-0 left-0 w-full z-50 shadow-md ltr transition-colors">
                <div
                    aria-label="Global" // Accessible label for navigation
                    className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
                >
                    {/* Logo or Title */}
                    <div className="flex flex-1">
                        <NavLink
                            to="/" // Link to homepage
                            className="text-2xl flex items-center space-x-2 space-x-reverse text-(--text) hover:text-(--nav-hover)"
                        >
                            <span className="font-bold tracking-tight transition-colors">
                                Sobhan-SRZA
                            </span> {/* Primary part of the logo */}
                            <span className="text-(--primary) transition-colors">/</span> {/* Separator */}
                            <span className="ml-1 mr-1.5 font-bold tracking-tight transition-colors">
                                Mr. Sinre
                            </span> {/* Secondary part of the logo */}
                        </NavLink>
                    </div>


                    {/* Desktop Navigation */}
                    <nav className="hidden min-[1097px]:flex lg:gap-x-8">
                        <div
                            ref={highlightRef}
                            className="absolute bg-(--nav-hover) rounded-md transition-all duration-300 ease-in-out"
                        />

                        {navItems.map((item, index) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) => {
                                    if (isActive)
                                        setActiveItem(item.href)

                                    return `relative text-[17px] font-semibold px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? "text-(--nav-text-hover) cursor-not-allowed" : "text-(--text) hover:text-(--nav-text-hover) hover:bg-(--nav-hover)"
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
                        <ThemeToggle
                            states={{
                                isAnimating: themeIsAnimating, setIsAnimating: themeSetIsAnimating,
                                isDark: themeIsDark,
                                setIsDark: themeSetIsDark
                            }}
                        /> {/* Theme toggle component */}
                    </nav>
                </div>


            </header>

            {/* Hamburger button for mobile menu toggle */}
            <div className="z-60 flex min-[1097px]:hidden fixed top-[2%] right-[3%]">
                <button
                    type="button"
                    onClick={() => {
                        setMobileMenuOpen(!mobileMenuOpen)
                        setIsAnimating(true);

                        setTimeout(() => setIsAnimating(false), 300);
                    }}
                    className={`cursor-pointer inline-flex items-center justify-center focus:outline-none default-transition h-11 w-11 relative rounded-full text-(--text) hover:bg-(--nav-btn-hover) hover:text-(--primary)`}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {/* Bars3 Icon with animation */}
                    <Bars3Icon className={`w-max h-max absolute top-0 left-0 transition-all duration-300 ease-in-out ${!mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-0"
                        }`} />

                    {/* XMark Icon with animation */}
                    <XMarkIcon className={`w-max h-max absolute top-0 left-0 transition-all duration-300 ease-in-out ${!mobileMenuOpen
                        ? "opacity-0 -rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                        }`} />


                    {/* Animation circle effect */}
                    {isAnimating && (
                        <span className="absolute inset-0 rounded-full bg-(--primary) opacity-20 animate-ping"></span>
                    )}
                </button>
            </div>

            {/* Overlay for mobile menu */}
            <div
                className={`fixed inset-0 bg-black/80 -z-10 transition-opacity ${mobileMenuOpen ? "opacity-100 z-50" : "opacity-0"}`} aria-hidden="true"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
            />

            {/* Mobile Menu */}
            <div className={`transition-all fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-(--sec-bg) backdrop-blur-xs p-6 duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                <nav
                    className={`flex flex-col justify-between  transition-all fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto p-6 duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Mobile menu header with logo and close button */}
                    <div className="ltr flex items-center justify-between">
                        <NavLink
                            to="/" // Link to homepage
                            onClick={() => setMobileMenuOpen(false)} // Close menu on click
                            className="flex items-center space-x-2 space-x-reverse"
                        >
                            <span className="transition-colors text-xl font-bold tracking-tight text-(--text)">
                                Sobhan-SRZA / Mr. Sinre
                            </span> {/* Mobile menu logo */}
                        </NavLink>
                    </div>

                    {/* Mobile navigation items */}
                    <div className="mx-8">
                        <div className="space-y-2 py-6 justify-items-center">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name} // Unique key for each navigation item
                                    to={item.href} // Navigation route
                                    className={({ isActive }) =>
                                        `text-center block rounded-lg px-3 py-2 w-max text-base font-semibold hover:bg-(--nav-hover) hover:text-(--nav-text-hover) ${isActive ? "bg-(--nav-hover) text-(--nav-text-hover)" : "text-(--text)"} transition-all`
                                    }
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                                >
                                    {item.name} {/* Translated navigation item name */}
                                </NavLink>
                            ))}

                        </div>

                    </div>

                    {/* Language switcher and theme toggle for mobile */}
                    <div className="flex flex-row justify-between px-3 py-2">
                        <LanguageSwitcher /> {/* Language switcher component */}
                        <ThemeToggle
                            states={{
                                isAnimating: themeIsAnimating, setIsAnimating: themeSetIsAnimating,
                                isDark: themeIsDark,
                                setIsDark: themeSetIsDark
                            }}
                        /> {/* Theme toggle component */}
                    </div>
                </nav>

            </div>
        </>
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