import {
    Popover,
    PopoverButton,
    PopoverPanel
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    onChange?: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChange }) => {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fa', name: 'فارسی' }
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        document.documentElement.setAttribute('lang', code);
        document.documentElement.setAttribute('dir', code === 'fa' ? 'rtl' : 'ltr');
        localStorage.setItem("language", code);

        if (onChange)
            onChange();
    };

    return (
        <Popover className="relative inline-flex">
            <PopoverButton
                className="cursor-pointer inline-flex items-center gap-x-1 px-3 py-1.5 text-sm font-medium text-[var(--text)] bg-transparent border border-gray-600 rounded-md fade-out-transition hover:bg-gray-600 hover:text-white focus:outline-none"
                aria-label="Select language"
            >
                {currentLanguage.name}
                <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel
                className="absolute top-12 z-10 w-32 rounded-md border border-gray-600 bg-[var(--lgs-bg)] shadow-sm fade-out-transition transform data-[closed]:opacity-0 data-[closed]:scale-95 data-[enter]:opacity-100 data-[enter]:scale-100 right-0">
                <div className="p-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="mt-1 mb-1 cursor-pointer block w-full px-3 py-2 text-sm font-medium text-left text-[var(--text)] rounded-md hover:bg-gray-600 hover:text-white fade-out-transition "
                            role="menuitem"
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    );
};

export default LanguageSwitcher;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */