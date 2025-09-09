// LanguageSwitcher.tsx: Component for switching between supported languages, updating the document's language and direction, with a dropdown menu.

// Import Popover components from Headless UI for creating a dropdown menu.
import {
    Popover,
    PopoverButton,
    PopoverPanel
} from "@headlessui/react";

// Import ChevronDownIcon from Heroicons for the dropdown indicator.
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Interface for component props, allowing an optional callback for language changes.
interface LanguageSwitcherProps {
    onChange?: () => void; // Optional callback function triggered on language change
}

// LanguageSwitcher component, defined as a functional component using TypeScript.
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChange }) => {
    // Access i18n instance for language management.
    const { i18n } = useTranslation();

    // Array of supported languages with their codes and display names.
    const languages = [
        { code: "en", name: "English" }, // English language option
        { code: "fa", name: "فارسی" }   // Persian language option
    ];

    // Determine the current language, defaulting to the first language (English) if not found.
    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    // Function to handle language change, updating i18n, document attributes, and local storage.
    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code); // Update the active language in i18next
        document.documentElement.setAttribute("lang", code); // Set document language attribute
        document.documentElement.setAttribute("dir", code === "fa" ? "rtl" : "ltr"); // Set text direction (RTL for Persian, LTR for others)
        localStorage.setItem("language", code); // Persist language choice in local storage
        if (onChange) onChange(); // Trigger optional callback if provided
    };

    // Render the language switcher with a popover dropdown menu.
    return (
        <Popover className="relative inline-flex">
            {/* Popover button displaying the current language */}
            <PopoverButton
                className="cursor-pointer inline-flex items-center gap-x-1 px-3 py-1.5 text-sm font-medium text-[var(--text)] bg-transparent border border-gray-600 rounded-md fade-out-transition hover:bg-gray-600 hover:text-white focus:outline-none"
                aria-label="Select language" // Accessible label for screen readers
            >
                {currentLanguage.name} {/* Display name of the current language */}
                <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" /> {/* Dropdown indicator icon */}
            </PopoverButton>
            {/* Popover panel containing language options */}
            <PopoverPanel
                className="absolute top-12 z-10 w-32 rounded-md border border-gray-600 bg-[var(--lgs-bg)] shadow-sm fade-out-transition transform data-[closed]:opacity-0 data-[closed]:scale-95 data-[enter]:opacity-100 data-[enter]:scale-100 right-0"
            >
                <div className="p-2">
                    {languages.map((lang) => (
                        // Button for each language option
                        <button
                            key={lang.code} // Unique key for each language (using language code)
                            onClick={() => handleLanguageChange(lang.code)} // Trigger language change on click
                            className="mt-1 mb-1 cursor-pointer block w-full px-3 py-2 text-sm font-medium text-left text-[var(--text)] rounded-md hover:bg-gray-600 hover:text-white fade-out-transition"
                            role="menuitem" // ARIA role for accessibility
                        >
                            {lang.name} {/* Display name of the language */}
                        </button>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    );
};

// Export the LanguageSwitcher component as the default export.
export default LanguageSwitcher;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */