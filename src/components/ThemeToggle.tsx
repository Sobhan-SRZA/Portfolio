import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
    onChange?: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onChange }) => {
    const [isDark, setIsDark] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light") || "light";
        setIsDark(initialTheme === "dark");

        document.documentElement.dataset.theme = initialTheme;
    }, []);

    const toggleTheme = () => {
        setIsAnimating(true);
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);

        if (onChange) onChange();

        // Reset animation after 300ms
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <button
            onClick={toggleTheme}
            className="justify-self-center cursor-pointer p-2 w-max h-max rounded-full bg-transparent text-(--text) hover:bg-(--nav-hover) hover:text-(--nav-text-hover) transition-all relative"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative w-6 h-6">
                {/* Moon Icon with animation */}
                <Moon className={`w-full h-full absolute top-0 left-0 transition-all duration-300 ease-in-out ${isDark
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 rotate-90 scale-0'
                    }`} />

                {/* Sun Icon with animation */}
                <Sun className={`w-full h-full absolute top-0 left-0 transition-all duration-300 ease-in-out ${isDark
                    ? 'opacity-0 -rotate-90 scale-0'
                    : 'opacity-100 rotate-0 scale-100'
                    }`} />
            </div>

            {/* Animation circle effect */}
            {isAnimating && (
                <span className="absolute inset-0 rounded-full bg-(--primary) opacity-20 animate-ping"></span>
            )}
        </button>
    );
};

export default ThemeToggle;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */