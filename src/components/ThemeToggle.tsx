// ThemeToggle.tsx: Component for toggling between light and dark themes, with support for system preferences and local storage persistence.

// Import React hooks for managing state and side effects.
import {
    useState,
    useEffect
} from "react";

// Import icons from lucide-react for visual representation of light and dark modes.
import {
    Sun,
    Moon
} from "lucide-react";

// Interface for component props, allowing an optional callback for theme changes.
interface ThemeToggleProps {
    onChange?: () => void; // Optional callback function triggered on theme change
}

// ThemeToggle component, defined as a functional component using TypeScript.
const ThemeToggle: React.FC<ThemeToggleProps> = ({ onChange }) => {
    // State to track whether the dark theme is active.
    const [isDark, setIsDark] = useState(false);

    // Effect to initialize the theme based on system preferences or saved settings.
    useEffect(() => {
        // Check if the user's system prefers dark mode.
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        // Retrieve saved theme from local storage, or fallback to system preference or light mode.
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light") || "light";
        setIsDark(initialTheme === "dark"); // Update state based on initial theme
        document.documentElement.dataset.theme = initialTheme; // Set theme on document element
    }, []); // Empty dependency array ensures this runs only on mount.

    // Function to toggle between light and dark themes.
    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark"; // Determine new theme
        setIsDark(!isDark); // Update state
        document.documentElement.dataset.theme = newTheme; // Apply new theme to document
        localStorage.setItem("theme", newTheme); // Persist theme in local storage
        if (onChange) onChange(); // Trigger optional callback if provided
    };

    // Render the theme toggle button with appropriate icon and accessibility label.
    return (
        <button
            onClick={toggleTheme} // Trigger theme toggle on click
            className="justify-self-center cursor-pointer p-2 w-max h-max rounded-full bg-transparent text-[var(--text)] hover:bg-gray-600 hover:text-white fade-out-transition"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} // Accessible label for screen readers
        >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} {/* Render Sun or Moon icon based on theme */}
        </button>
    );
};

// Export the ThemeToggle component as the default export.
export default ThemeToggle;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */