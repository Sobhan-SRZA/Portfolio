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
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setIsDark(initialTheme === "dark");
        document.documentElement.dataset.theme = initialTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
        if (onChange) onChange();
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent text-[var(--text)] hover:bg-[var(--card-bg)] transition-colors duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    );
};

export default ThemeToggle;