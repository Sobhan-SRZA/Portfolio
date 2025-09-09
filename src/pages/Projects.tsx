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
} from "lucide-react";

// Import React hooks for managing state and side effects, along with JSX type for TypeScript.
import {
  useEffect,
  useState,
  type JSX,
} from "react";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

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
  "✅ Done": <CheckCircle className="fade-out-transition w-5 h-5 text-green-600 group-hover:text-green-400" />, // Icon for completed projects
  "⚒ Working...": <Clock className="fade-out-transition w-5 h-5 text-yellow-600 group-hover:text-yellow-400" />, // Icon for in-progress projects
  "⏸ Paused": <PauseCircle className="fade-out-transition w-5 h-5 text-gray-600 group-hover:text-gray-400" /> // Icon for paused projects
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
    Python: "bg-blue-500 group-hover:bg-blue-400",
    JavaScript: "bg-yellow-500 group-hover:bg-yellow-400",
    TypeScript: "bg-blue-700 group-hover:bg-blue-500",
    React: "bg-cyan-500 group-hover:bg-cyan-400",
    Django: "bg-green-600 group-hover:bg-green-500",
    HTML: "bg-orange-500 group-hover:bg-orange-400",
    CSS: "bg-blue-400 group-hover:bg-blue-400",
    "C++": "bg-pink-700 group-hover:bg-pink-500",
    "Node.js": "bg-green-700 group-hover:bg-green-500",
    NPM: "bg-red-500 group-hover:bg-red-400",
    default: "bg-gray-600 group-hover:bg-gray-500" // Fallback color for unknown technologies
  };

  // Effect to fetch projects from a remote JSON file.
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch project data from GitHub with CORS mode enabled.
        const response = await fetch(
          "https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/projects.json",
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
      } catch (err) {
        // Handle errors by setting an error message and clearing projects.
        setError(t("error_fetch"));
        setProjects([]);
        setLoading(false);
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
    <div className="max-w-[225px] max-[534px]:min-w-full flex flex-col justify-between gap-4 p-6 bg-[var(--card-bg)]/60 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] hover:-translate-y-1 animate-pulse">
      {/* Placeholder for project name */}
      <div className="text-center h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
      {/* Placeholder for description lines */}
      <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full w-3/4"></div>
      <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full w-2/5"></div>
      <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full w-1/4"></div>
      <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full w-1/2"></div>
      {/* Placeholder for status, stars, forks, and access icons */}
      <div className="flex justify-between mt-2 gap-3">
        <div className="h-8 w-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
        <div className="flex gap-5">
          <div className="h-8 w-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
          <div className="h-8 w-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
        </div>
        <div className="h-8 w-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
      </div>
      {/* Placeholder for language badges */}
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        <div className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
        <div className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
      </div>
      {/* Placeholder for technology badges */}
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        <div className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
        <div className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
        <div className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
      </div>
    </div>
  );

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
        className="min-h-min py-16 bg-[var(--sec-bg)] rounded-3xl backdrop-blur-md flex items-center justify-center fade-out-transition"
      >
        {/* Container for responsive layout with language-based text direction */}
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}
        >
          {/* Page title with animation and theme-based styling */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in fade-out-transition">
            {t("projects")} {/* Translated title for the projects section */}
          </h2>

          {/* Page description with animation and theme-based styling */}
          <p className="text-center text-[var(--text)] mb-12 text-lg animate-fade-in delay-200 fade-out-transition">
            {t("projects_content")} {/* Translated description of the projects section */}
          </p>

          {/* Loading state: Display skeleton placeholders while fetching data */}
          {loading && (
            <>
              <div className="text-center text-[var(--text)] animate-pulse mb-5">
                {t("loading")} {/* Translated loading message */}
              </div>
              <div className="flex flex-wrap justify-center gap-5 animate-fade-in delay-400">
                {Array(4).fill(0).map((_, index) => (
                  <LoadingSkeleton key={index} /> // Render 4 skeleton placeholders
                ))}
              </div>
            </>
          )}
          {/* Error state: Display error message if fetch fails */}
          {error && (
            <div className="text-center text-red-400 flex items-center justify-center gap-2">
              <AlertCircle className="w-6 h-6" /> {/* Error icon */}
              {error} {/* Translated error message */}
            </div>
          )}

          {/* Projects list: Render projects when data is loaded and no error occurs */}
          {!loading && !error && (
            <div className="flex flex-wrap justify-center gap-5 justify-items-center animate-fade-in delay-400">
              {projects.map((project, index) => (
                // Individual project card with accessibility attributes and hover effects
                <a
                  key={index} // Unique key for each project (consider using project.name for better uniqueness)
                  href={project.url}
                  target="_blank" // Open project URL in a new tab
                  rel="noopener noreferrer" // Security attributes for external links
                  className="max-w-[225px] max-[534px]:min-w-full flex flex-col justify-between gap-4 p-6 bg-[var(--card-bg)]/60 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] hover:-translate-y-1 fade-out-transition group"
                  aria-label={t(`project_${project.name.toLowerCase().replace(/\s+/g, "_")}`) || project.name} // Accessible label for screen readers
                >
                  {/* Project name with hover effect */}
                  <h3 className="fade-out-transition text-center text-xl font-semibold text-[var(--primary)] group-hover:text-[var(--primary-hover)] font-sans">
                    {project.name}
                  </h3>

                  {/* Project description with hover effect */}
                  <p className="fade-out-transition text-[var(--text)] text-sm group-hover:text-[var(--hover)]">
                    {getDescription(project) || t("no_description")} {/* Language-specific or fallback description */}
                  </p>

                  {/* Project status and access indicators */}
                  <div className="flex justify-between text-sm text-[var(--text)] ltr">
                    {/* Project status icon */}
                    <span className="fade-out-transition flex items-center gap-2">
                      {statusIcons[project.status] || project.status} {/* Render status icon or fallback to status text */}
                    </span>

                    {/* Stars and forks for public projects */}
                    {!project.private && (
                      <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2">
                          <Star className="fade-out-transition w-5 h-5 text-[var(--text)] group-hover:text-[var(--hover)]" /> {/* Star icon */}
                          <span className="fade-out-transition text-sm text-[var(--text)] group-hover:text-[var(--hover)]">
                            {project.stars} {/* Number of stars */}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GitFork className="fade-out-transition w-5 h-5 text-[var(--text)] group-hover:text-[var(--hover)]" /> {/* Fork icon */}
                          <span className="fade-out-transition text-sm text-[var(--text)] group-hover:text-[var(--hover)]">
                            {project.forks} {/* Number of forks */}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Public/private indicator */}
                    <span className="flex items-center gap-2">
                      {project.private ? (
                        <Lock className="fade-out-transition w-5 h-5 text-[var(--text)] group-hover:text-[var(--hover)]" /> // Private project icon
                      ) : (
                        <Globe className="fade-out-transition w-5 h-5 text-[var(--primary)] group-hover:text-[var(--primary-hover)]" /> // Public project icon
                      )}
                    </span>
                  </div>

                  {/* Programming languages used in the project */}
                  <div className="flex flex-wrap gap-2 justify-center ltr">
                    {project.languages && project.languages.length > 0 ? (
                      project.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className={`fade-out-transition px-2 py-1 text-xs rounded-full text-white ${techColors[lang] || techColors.default} group-hover:scale-105`} // Language badge with color and hover scaling
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
                          className={`fade-out-transition px-2 py-1 text-xs rounded-full text-white ${techColors[tech] || techColors.default} group-hover:scale-105 transition-transform duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]`} // Technology badge with color and hover scaling
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <></> // Render nothing if no technologies are specified
                    )}
                  </div>
                </a>
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