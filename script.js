(function () {
    const
        languageSwitcher = document.getElementById("language-switcher"),
        allContent = document.querySelectorAll(".content"),
        urlParams = new URLSearchParams(window.location.search),
        dataKeys = document.querySelectorAll("[data-key]");

    function switchLanguage(lang) {
        allContent.forEach((content) => {
            if (lang === "fa")
                content.classList.add("rtl");

            else
                content.classList.remove("rtl");
        });
        const translations = {
            en: {
                about: "About",
                projects: "Projects",
                contact: "Contact",
                biography: "Biography",
                social: "Social Profiles",
                about_content: "From a young age, I was captivated by the magic of technology—where lines of code transform ideas into reality. Born in 2005, my journey into the world of programming began in 2018. Initially driven by pure curiosity, I soon discovered that coding was a passion that fueled my desire to build innovative solutions. Over the years, I’ve delved into diverse languages such as Python, JavaScript, and even experimented with C++, all while developing creative projects ranging from dynamic Discord bots to compelling web experiences. Every project is a new opportunity to learn, experiment, and push the boundaries of digital creativity.",
                biography_content: "From endless nights spent debugging code to the thrill of launching my first project, my journey has been a mosaic of challenges, learning, and triumphs. Each line of code I write echoes my passion for innovation and commitment to excellence. As I continue to evolve in this ever-changing digital landscape, my mission remains clear: to craft experiences that not only solve real-world problems but also inspire others to explore the boundless possibilities of technology.",
                contact_content: "Feel free to reach out for any collaboration or just to connect!",
                padio: "Padio - A versatile radio bot with easy setup and high-quality streaming.",
                hycom: "HyCom - A modern technology news website and programming education platform.",
                ticker: "Ticker Boy - A Discord bot dedicated to managing server tickets.",
                djboy: "DJ Boy - Music management and streaming for Discord servers."
            },
            fa: {
                about: "درباره",
                projects: "پروژه‌ها",
                contact: "تماس",
                biography: "زندگی نامه",
                social: "پروفایل های مجازی",
                about_content: "درود برتو من سبحان هستم که با نام Mr.Sinre فعالیت می‌کنم و گاهی ممکن است بنده را با نام Sobhan-SRZA نیز ببینید. از سال 1397 فعالیت خود را آغاز کردم و در کنار برنامه‌نویسی، به فیلم، انیمه و گیمر نیز علاقمندم.",
                biography_content: "درود برتو من سبحان هستم که با نام Mr.Sinre فعالیت می‌کنم و گاهی ممکن است بنده را با نام Sobhan-SRZA نیز ببینید. از سال 1397 مسیر برنامه‌نویسی را آغاز کردم و قدم به قدم با چالش‌ها، یادگیری و پیشرفت همراه بودم. هدفم ایجاد تجربیات نوآورانه و الهام‌بخش در دنیای دیجیتال است.",
                contact_content: "برای همکاری یا آشنایی بیشتر خوشحال می‌شوم در ارتباط باشیم!",
                padio: "پادیو - یک بات رادیو همه‌کاره با تنظیمات آسان و پخش با کیفیت بالا.",
                hycom: "های کام - وبسایت اخبار تکنولوژی های مدرن و آموزش برنامه نویسی.",
                ticker: "تیکربوی - یک ربات دیسکوردی مخصوص مدیریت تیکت های سرور.",
                djboy: "دی‌جی بوی - مدیریت موسیقی و پخش برای سرورهای دیسکورد."
            }
        };

        dataKeys.forEach((element) => {
            element.textContent = translations[lang][element.getAttribute("data-key")];
        });
    }

    languageSwitcher.addEventListener("change", (e) => {
        const value = e.target.value;
        switchLanguage(value);
    });


    addEventListener("DOMContentLoaded", () => {
        const language = urlParams.get("lang") || languageSwitcher.value;
        languageSwitcher.value = language
        switchLanguage(language);
    });
})();
/**
 * Copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */