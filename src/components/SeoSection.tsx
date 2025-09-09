// SeoSection.tsx: Component for enhancing SEO by providing multilingual meta descriptions and hidden content for search engine indexing.

// Import ReactElement type for TypeScript to define the return type of the component.
import type { ReactElement } from "react";

// Import Helmet for managing document head (meta tags) for SEO purposes.
import { Helmet } from "react-helmet";

// SeoSection component, defined as a functional component using TypeScript, returning a ReactElement.
const SeoSection: React.FC = (): ReactElement => {
    // Render hidden SEO content with meta tags and structured data in Persian and English.
    return (
        <>
            {/* Helmet for managing SEO metadata */}
            <Helmet>
                {/* Persian meta description for search engines */}
                <meta
                    name="description"
                    lang="fa"
                    content="سبحان رسول زاده اصل (Mr. Sinre/SRZA) — فول‌استک دولوپر: Node.js، React.js، NestJS، توسعه API، ساخت ربات دیسکورد و تلگرام، طراحی و توسعه وب‌سایت."
                />
                {/* English meta description for search engines */}
                <meta
                    name="description"
                    lang="en"
                    content="Sobhan Rasoulzadeh Asl (Mr. Sinre / SRZA): Full-stack developer—Node.js, React.js, NestJS, API development, Discord & Telegram bots, modern web design."
                />
            </Helmet>
            {/* Hidden section for SEO content, not visible to users */}
            <section id="seo" style={{ display: "none", visibility: "hidden" }}>
                {/* Persian SEO content */}
                <div lang="fa">
                    <h1>سبحان رسول زاده اصل | Mr. Sinre | Sobhan-SRZA</h1> {/* Persian name and aliases */}
                    <p>
                        سبحان رسول زاده اصل (متولد ۱۳۸۴/۲۰۰۵)، برنامه‌نویس فول‌استک و توسعه‌دهنده حرفه‌ای، با لقب‌های
                        Mr.Sinre، Sobhan-SRZA، SobhanSRZA، SRZA، S.R.Z.A، S.R.Z.A Gamer، S.R.Z.A Action، Action Club،
                        Sezar Club، Persian Caesar (پرشین سزار). متخصص در توسعه وب، طراحی رابط کاربری، ساخت ربات‌های دیسکورد
                        و تلگرام، و پروژه‌های متن‌باز.
                    </p> {/* Biography summary in Persian */}
                    <p>
                        مهارت‌ها: جاوااسکریپت (JavaScript)، تایپ‌اسکریپت (TypeScript)، نود جی‌اس (Node.js)، ری‌اکت (React.js)،
                        نکست‌جی‌اس (Next.js)، NestJS، توسعه API (REST & GraphQL)، MongoDB، Python، C++، HTML، CSS، SASS،
                        Git، دیباگینگ (Debugging)، حل مسئله (Problem Solving).
                    </p> {/* Skills list in Persian */}
                    <p>
                        بیوگرافی: فعالیت از سال ۲۰۱۸ با تولید محتوا (S.R.Z.A Action)، سپس ورود به بازی‌سازی و کانتنت یوتیوب
                        (S.R.Z.A Gamer)، و در نهایت توسعه ربات‌های دیسکورد (DJ BOY، Ordak Farangi، Ticker Boy، Padio، HyCom).
                        در حال حاضر دانشجوی دانشگاه آزاد و فریلنسر حرفه‌ای با تمرکز بر پروژه‌های وب و اپلیکیشن.
                    </p> {/* Detailed biography in Persian */}
                    <p>
                        پروژه‌ها: توسعه وب‌سایت‌های مدرن، ساخت ربات‌های دیسکورد و تلگرام، مشارکت در پروژه‌های متن‌باز
                        (GitHub)، و کار با فناوری‌های پیشرفته مثل React و Node.js.
                    </p> {/* Projects overview in Persian */}
                    <p>
                        شبکه‌های اجتماعی: گیت‌هاب (https://github.com/Sobhan-SRZA)، لینکدین (https://linkedin.com/in/Sobhan-SRZA)،
                        اینستاگرام (https://instagram.com/SobhanSRZA)، تلگرام (https://t.me/SobhanSRZA)، دیسکورد، یوتیوب، توییچ،
                        آپ‌ورک، گیت‌لب، npm.
                    </p> {/* Social profiles in Persian */}
                    <p>
                        اطلاعات تماس: صفحه تماس (https://srza.ir/contact) برای همکاری و پروژه‌ها.
                    </p> {/* Contact information in Persian */}
                    <p>
                        هشتگ‌ها:
                        #سبحان_رسول_زاده_اصل #برنامه_نویس #SobhanSRZA #MrSinre #SRZA #پرشین_سزار #Nodejs #Reactjs #NestJS
                        #Fullstack #برنامه_نویس_فول_استک #DiscordBot #TelegramBot #API #JavaScript #TypeScript #Python
                        #فریلنسر #توسعه_دهنده_وب #OpenSource #IranianDeveloper
                    </p> {/* Hashtags in Persian for SEO */}
                </div>

                {/* English SEO content */}
                <div lang="en">
                    <h1>Sobhan Rasoulzadeh Asl | Mr. Sinre | Sobhan-SRZA</h1> {/* English name and aliases */}
                    <p>
                        Sobhan Rasoulzadeh Asl (born 2005), a professional full-stack developer known as Mr.Sinre, Sobhan-SRZA,
                        SobhanSRZA, SRZA, S.R.Z.A, S.R.Z.A Gamer, S.R.Z.A Action, Action Club, Sezar Club, Persian Caesar.
                        Specializing in web development, UI design, Discord and Telegram bot creation, and open-source projects.
                    </p> {/* Biography summary in English */}
                    <p>
                        Skills: JavaScript, TypeScript, Node.js, React.js, Next.js, NestJS, API Development (REST & GraphQL),
                        MongoDB, Python, C++, HTML, CSS, SASS, Git, Debugging, Problem Solving.
                    </p> {/* Skills list in English */}
                    <p>
                        Biography: Began in 2018 with content creation (S.R.Z.A Action), transitioned to gaming and YouTube
                        (S.R.Z.A Gamer), then ventured into Discord bot development (DJ BOY, Ordak Farangi, Ticker Boy, Padio, HyCom).
                        Currently a university student and professional freelancer focused on web and app projects.
                    </p> {/* Detailed biography in English */}
                    <p>
                        Projects: Modern website development, Discord and Telegram bots, contributions to open-source projects
                        (GitHub), and work with cutting-edge technologies like React and Node.js.
                    </p> {/* Projects overview in English */}
                    <p>
                        Social Profiles: GitHub (https://github.com/Sobhan-SRZA), LinkedIn (https://linkedin.com/in/Sobhan-SRZA),
                        Instagram (https://instagram.com/SobhanSRZA), Telegram (https://t.me/SobhanSRZA), Discord, YouTube, Twitch,
                        Upwork, GitLab, npm.
                    </p> {/* Social profiles in English */}
                    <p>
                        Contact: Visit the contact page (https://srza.ir/contact) for collaborations and projects.
                    </p> {/* Contact information in English */}
                    <p>
                        Hashtags:
                        #SobhanRasoulzadehAsl #Developer #SobhanSRZA #MrSinre #SRZA #PersianCaesar #Nodejs #Reactjs #NestJS
                        #FullStackDeveloper #DiscordBot #TelegramBot #APIDevelopment #JavaScript #TypeScript #Python
                        #Freelancer #WebDeveloper #OpenSource #IranianDeveloper
                    </p> {/* Hashtags in English for SEO */}
                </div>
            </section>
        </>
    );
};

// Export the SeoSection component as the default export.
export default SeoSection;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */