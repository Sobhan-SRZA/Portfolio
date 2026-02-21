// Projects.tsx: Component for displaying a list of projects fetched from a remote JSON file, with internationalization and SEO support.

// Import icons from lucide-react for visual representation of project status and metadata.
import {
  AlertCircle,
  CheckCircle,
  Clock,
  PauseCircle,
  Globe,
  Lock,
  Star,
  GitFork,
  LoaderCircle,
} from "lucide-react";

// Import React hooks for managing state and side effects, along with JSX type for TypeScript.
import {
  useEffect,
  useState,
  type JSX,
} from "react";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

import { projects_link } from "../storage";

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// Interface defining the structure of a project object fetched from the JSON data.
interface Project {
  name: string; // Project name
  url: string; // Project URL (e.g., GitHub repository)
  description: string; // Default description
  description_en?: string; // English description (optional)
  description_fa?: string; // Persian description (optional)
  status: string; // Project status (e.g., Done, Working, Paused)
  private: boolean; // Whether the project is private or public
  languages: string[]; // Programming languages used in the project
  technologies: string[]; // Technologies used in the project
  organization?: string; // Optional organization the project belongs to
  stars: number; // Number of GitHub stars
  forks: number; // Number of GitHub forks
}

// Mapping of project statuses to corresponding icons for visual representation.
const statusIcons: { [key: string]: JSX.Element } = {
  "✅ Done": <CheckCircle className="transition-all w-5 h-5 text-green-600 group-hover:text-green-400" />, // Icon for completed projects
  "⚒ Working...": <Clock className="transition-all w-5 h-5 text-yellow-600 group-hover:text-yellow-400" />, // Icon for in-progress projects
  "⏸ Paused": <PauseCircle className="transition-all w-5 h-5 text-gray-600 group-hover:text-gray-400" /> // Icon for paused projects
};

// Projects component, defined as a functional component using TypeScript.
const Projects: React.FC = () => {
  // Access translation function and i18n instance for language support.
  const { t, i18n } = useTranslation();

  // State to store the list of projects fetched from the JSON file.
  const [projects, setProjects] = useState<Project[]>([]);

  // State to track loading status during data fetching.
  const [loading, setLoading] = useState(true);

  // State to store any error messages during data fetching.
  const [error, setError] = useState<string | null>(null);

  // Mapping of technologies/languages to background colors for badges, with hover effects.
  const techColors: { [key: string]: string } = {
    python: "text-white bg-[#0000FF] group-hover:scale-105",
    javascript: "text-black bg-[#FAE500] group-hover:scale-105",
    typescript: "text-white bg-[#004ECC] group-hover:scale-105",
    "react.js": "text-black bg-[#00A9CC] group-hover:scale-105",
    "react native": "text-black bg-[#00A9CC] group-hover:scale-105",
    "nest.js": "text-black bg-[#F16A86] group-hover:scale-105",
    "discord.js": "text-white bg-[#2600ff] group-hover:scale-105",
    "telegraf.js": "text-black bg-[#FF6161] group-hover:scale-105",
    telegram: "text-black bg-[#00aeff] group-hover:scale-105",
    discord: "text-black bg-[#2600ff] group-hover:scale-105",
    django: "text-white bg-[#3A5F40] group-hover:scale-105",
    html: "text-black bg-[#ff4800] group-hover:scale-105",
    css: "text-white bg-[#7D1CD4] group-hover:scale-105",
    "c++": "text-black bg-[#FF6176] group-hover:scale-105",
    "node.js": "text-black bg-[#04c404] group-hover:scale-105",
    npm: "text-white bg-[#B30000] group-hover:scale-105",
    "next.js": "text-white bg-black group-hover:scale-105",
    "tailwind css": "text-black bg-[#00aeff] group-hover:scale-105",
    "express": "text-black bg-[#33ff69] group-hover:scale-105",
    default: "text-white bg-gray-600 group-hover:scale-105" // Fallback color for unknown technologies
  };

  // Effect to fetch projects from a remote JSON file.
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch project data from GitHub with CORS mode enabled.
        const response = await fetch(
          projects_link,
          { mode: "cors" }
        );

        if (!response.ok) {
          throw new Error(t("error_fetch")); // Throw translated error message on failure
        }

        // Parse the JSON response into an array of Project objects.
        const data: Project[] = await response.json();

        // Ensure stars and forks have default values of 0 if undefined.
        const initialProjects = data.map((project) => ({
          ...project,
          stars: project.stars ?? 0,
          forks: project.forks ?? 0
        }));

        setProjects(initialProjects);
        setLoading(false);
      }

      catch (err) {
        // Handle errors by setting an error message and clearing projects.
        setError(t("error_fetch"));
        setProjects([]);
        setLoading(false);
        console.error(err)
      }
    };

    fetchProjects();
  }, [t]); // Dependency on t ensures re-fetch if translation changes.

  // Helper function to select the appropriate project description based on language.
  const getDescription = (project: Project) => {
    if (!project.description_en && !project.description_fa)
      return project.description; // Fallback to default description if no localized version exists
    return i18n.language === "fa" ? project.description_fa : project.description_en; // Return language-specific description
  };

  // Component to render a loading skeleton for projects while data is being fetched.
  const LoadingSkeleton = () => (
    <div className="max-w-56.25 max-[534px]:min-w-full flex flex-col justify-between gap-4 p-6 bg-(--card-bg)/60 rounded-lg border border-(--border) hover:border-(--primary) hover:bg-(--card-bg] hover:-translate-y-1 animate-pulse transition-all cursor-pointer">

      {/* Placeholder for project name */}
      <div className="self-center w-30 h-5 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full"></div>

      {/* Placeholder for description lines */}
      <div className="h-1 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full w-3/4"></div>
      <div className="h-1 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full w-2/5"></div>
      <div className="h-1 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full w-1/4"></div>
      <div className="h-1 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full w-1/2"></div>
      <div className="h-1 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full w-2/5"></div>

      {/* Placeholder for status, stars, forks, and access icons */}
      <div className="flex justify-between mt-2 gap-3">
        {Array(2).fill(0).map(() => (
          <span className="flex gap-2">
            {Array(2).fill(0).map(() => (
              <div className="h-7 w-7 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full"></div>
            ))}
          </span>
        ))}

      </div>

      {/* Placeholder for language badges */}
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {Array(2).fill(0).map(() => (
          <div className="h-5 w-12 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full"></div>
        ))}
      </div>

      {/* Placeholder for technology badges */}
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {Array(3).fill(0).map(() => (
          <div className="h-5 w-14 bg-linear-to-r bg-(--loding-item) bg-size-[200%_100%] animate-shimmer rounded-full"></div>
        ))}
      </div>
    </div>
  );

  const groupedByOrg = projects.reduce<Record<string, Project[]>>(
    (acc, project) => {
      const org = project.organization ?? "Personal";

      if (!acc[org]) {
        acc[org] = [];
      }

      acc[org].push(project);
      return acc;
    },
    {}
  );

  const sortedOrganizations = Object.keys(groupedByOrg).sort().reverse();

  // Render the projects page with SEO metadata and responsive layout.
  return (
    <>
      {/* Helmet for managing SEO metadata */}
      <Helmet>
        <title>{t("projects")} | Mr. Sinre | Sobhan-SRZA</title> {/* Page title with translated projects label */}
        <meta name="description" content={t("projects_content").substring(0, 160)} /> {/* Truncated description for SEO */}
      </Helmet>

      {/* Main section for projects with theme-based styling and animations */}
      <section
        id="projects"
        className="min-h-min py-16 flex items-center justify-center transition-all"
      >
        {/* Container for responsive layout with language-based text direction */}
        <div
          className={`container mx-auto ${i18n.language === "fa" ? "rtl" : "ltr"}`}
        >
          {/* Page title with animation and theme-based styling */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-(--primary) text-center animate-fade-in transition-colors">
            {t("projects")} {/* Translated title for the projects section */}
          </h2>

          {/* Page description with animation and theme-based styling */}
          <p className="text-center text-(--text) mb-12 text-lg animate-fade-in transition-colors">
            {t("projects_content")} {/* Translated description of the projects section */}
          </p>

          {/* Loading state: Display skeleton placeholders while fetching data */}
          {loading && (
            <>
              <div className="text-(--text) animate-pulse mb-5 flex gap-2 justify-center transition-colors">
                <LoaderCircle className="text-(--hover) animate-spin transition-colors" />
                <p>
                  {t("loading")} {/* Translated loading message */}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-5 animate-fade-in delay-400 transition-all">
                {Array(4).fill(0).map((_, index) => (
                  <LoadingSkeleton key={index} /> // Render 4 skeleton placeholders
                ))}
              </div>
            </>
          )}

          {/* Error state: Display error message if fetch fails */}
          {error && (
            <div className="text-center text-(--error-message) flex items-center justify-center gap-2 transition-colors">
              <AlertCircle className="w-6 h-6" /> {/* Error icon */}
              {error} {/* Translated error message */}
            </div>
          )}

          {/* Projects list: Render projects when data is loaded and no error occurs */}
          {!loading && !error && (
            <div className="flex flex-col justify-center gap-25 justify-items-center animate-fade-in delay-400">
              {sortedOrganizations.map((org) => (
                <section key={org} className="max-w-max even:px-5 py-16 transition-all even:bg-(--sec-bg) even:rounded-3xl even:backdrop-blur-md even:mx-auto">

                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-(--primary) text-center animate-fade-in transition-colors">
                    {t(`projects_org.${org.toLowerCase()}.name`)} ({groupedByOrg[org].length})
                  </h2>

                  <div
                    className={`transition-colors rounded-md bg-(--accent-hover)/10 mx-9 sm:mx-11 lg:mx-43 py-5 mb-12 w-fit place-self-center ${i18n.language === "fa"
                      ? " pr-5 border-r-4 border-r-(--accent)"
                      : " pl-5 border-l-4 border-l-(--accent)"}`}
                  >
                    <p
                      className={`text-(--text) mx-5 text-lg animate-fade-in transition-colors ${i18n.language === "fa"
                        ? "text-right"
                        : "text-left"
                        }`}
                    >
                      {t(`projects_org.${org.toLowerCase()}.describe`)}
                    </p>
                  </div>

                  <ul className="px-4 sm:px-6 lg:px-8 max-w-5xl justify-self-center flex flex-wrap justify-center gap-5 justify-items-center animate-fade-in delay-400">
                    {groupedByOrg[org].map((project, index) => {
                      const Wrapper = project.private ? "div" : "a";

                      return (

                        // Individual project card with accessibility attributes and hover effects
                        <Wrapper
                          {...(!project.private && {
                            href: project.url,
                            target: "_blank",
                            rel: "noopener noreferrer" // Security attributes for external links
                          })}
                          key={index} // Unique key for each project (consider using project.name for better uniqueness)
                          className={"max-w-56.25 max-[534px]:min-w-full flex flex-col justify-between gap-4 p-6 rounded-lg border border-(--border) transition-all group " + `${project.private ? "border-dashed bg-(--card-bg)/30 opacity-80 cursor-not-allowed" : "bg-(--card-bg)/60 hover:border-(--primary) hover:bg-(--card-bg)] hover:-translate-y-1"}`}
                          aria-label={t(`project_${project.name.toLowerCase().replace(/\s+/g, "_")}`) || project.name} // Accessible label for screen readers
                        >
                          {/* Project name with hover effect */}
                          <h3 className="transition-all text-center text-xl font-semibold text-(--primary) group-hover:text-(--primary-hover) font-sans">
                            {project.name}
                          </h3>

                          {/* Project description with hover effect */}
                          <p className="transition-all text-(--text) text-sm">
                            {getDescription(project) || t("no_description")} {/* Language-specific or fallback description */}
                          </p>

                          {/* Project status and access indicators */}
                          <div className="flex justify-between text-sm text-(--text) ltr">

                            {/* Project status icon */}
                            <span className="transition-all flex items-center gap-2">
                              {statusIcons[project.status] || project.status} {/* Render status icon or fallback to status text */}
                            </span>

                            {/* Stars and forks for public projects */}
                            {!project.private && (
                              <div className="flex justify-center gap-4">
                                <div className="flex items-center gap-2">
                                  <Star className="transition-all w-5 h-5 text-(--text) group-hover:text-(--hover)" /> {/* Star icon */}
                                  <span className="transition-all text-sm text-(--text) group-hover:text-(--hover)">
                                    {project.stars} {/* Number of stars */}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <GitFork className="transition-all w-5 h-5 text-(--text) group-hover:text-(--hover)" /> {/* Fork icon */}
                                  <span className="transition-all text-sm text-(--text) group-hover:text-(--hover)">
                                    {project.forks} {/* Number of forks */}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Public/private indicator */}
                            <span className="flex items-center gap-2">
                              {project.private ? (
                                <Lock className="transition-all w-5 h-5 text-(--text) group-hover:text-(--hover)" /> // Private project icon
                              ) : (
                                <Globe className="transition-all w-5 h-5 text-(--primary) group-hover:text-(--primary-over)]" /> // Public project icon
                              )}
                            </span>
                          </div>

                          {/* Programming languages used in the project */}
                          <div className="flex flex-wrap gap-2 justify-center ltr">
                            {project.languages && project.languages.length > 0 ? (
                              project.languages.map((lang, idx) => (
                                <span
                                  key={idx}
                                  className={`transition-all px-2 py-1 text-[13px] font-bold rounded-full ${techColors[lang.toLowerCase()] || techColors.default} group-hover:scale-105`} // Language badge with color and hover scaling
                                >
                                  {lang}
                                </span>
                              ))
                            ) : (
                              <></> // Render nothing if no languages are specified
                            )}
                          </div>

                          {/* Technologies used in the project */}
                          <div className="flex flex-wrap gap-2 justify-center ltr">
                            {project.technologies && project.technologies.length > 0 ? (
                              project.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className={`transition-all px-2 py-1 text-[13px] font-bold rounded-full ${techColors[tech.toLowerCase()] || techColors.default} group-hover:scale-105 transition-transform duration-(--default-transition-duration)] ease-(--default-transition-timing-function)]`} // Technology badge with color and hover scaling
                                >
                                  {tech}
                                </span>
                              ))
                            ) : (
                              <></> // Render nothing if no technologies are specified
                            )}
                          </div>
                        </Wrapper>
                      )
                    })}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Export the Projects component as the default export.
export default Projects;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */