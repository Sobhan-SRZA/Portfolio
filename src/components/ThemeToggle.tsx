import {
    useState,
    useEffect
} from "react";
import {
    Sun,
    Moon
} from "lucide-react";

interface ThemeToggleProps {
    onChange?: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onChange }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light") || "light";
        setIsDark(initialTheme === "dark");

        document.documentElement.dataset.theme = initialTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
        if (onChange)
            onChange();

    };

    return (
        <button
            onClick={toggleTheme}
            className="justify-self-center cursor-pointer p-2 w-max h-max rounded-full bg-transparent text-[var(--text)] hover:bg-gray-600 hover:text-white fade-out-transition"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
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