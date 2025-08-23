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
        { code: 'fa', name: 'فارسی' },
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        document.documentElement.setAttribute('lang', code);
        document.documentElement.setAttribute('dir', code === 'fa' ? 'rtl' : 'ltr');
        if (onChange) onChange();
    };

    return (
        <Popover className="relative inline-flex">
            <PopoverButton
                className="inline-flex items-center gap-x-1 px-3 py-1.5 text-sm font-medium text-gray-200 bg-gray-800/50 border border-gray-600 rounded-md font-iransans transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none backdrop-blur-sm"
                aria-label="Select language"
            >
                {currentLanguage.name}
                <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel
                className={`absolute top-10 z-10 w-32 rounded-md border border-gray-600 bg-gray-800/80 backdrop-blur-md shadow-sm transition-all duration-1000 ease-in-out transform data-[closed]:opacity-0 data-[closed]:scale-95 data-[enter]:opacity-100 data-[enter]:scale-100 ${i18n.language === 'fa' ? 'left-0' : 'right-0'
                    }`}
            >
                <div className="p-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="block w-full px-3 py-2 text-sm font-medium text-left text-gray-200 font-iransans rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200"
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