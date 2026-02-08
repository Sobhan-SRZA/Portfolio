// Home.tsx: Component for the homepage, displaying a hero section, about section, skills, and teasers for projects and contact, with internationalization and SEO support.

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// Home component, defined as a functional component using TypeScript.
const Home: React.FC = () => {
    // Render the homepage with multiple sections, SEO metadata, and responsive layout.
    return (
        <>
            {/* Helmet for managing SEO metadata */}
            <Helmet>
            </Helmet>

            {/* Desktop */}
            <section className="p-5">
                <ul className="flex flex-wrap gap-3.5" >
                    {Array(20).fill(0).map(() => {
                        const text = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                            .split("")
                        function chooseRandom(array: Array<any>) {
                            return array[Math.round(Math.random() * array.length)]
                        }
                        let randomColor = Array(6).fill(0).map(() => chooseRandom(text)).join("");
                        return (
                            <li className={`w-20 h-20 bg-[#${randomColor}]`}></li>
                        )
                    })}
                </ul>
            </section>
        </>
    );
};

// Export the Home component as the default export.
export default Home;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */