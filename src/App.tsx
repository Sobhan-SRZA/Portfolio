// Import necessary components from react-router-dom for client-side routing.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Helmet for managing document head (meta tags, title, etc.) for SEO purposes.
import { Helmet } from "react-helmet";

// Import page components for different routes.
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

// Main App component, defined as a functional component using TypeScript.
const App: React.FC = () => {
  return (
    <Router>
      {/* Helmet manages document head for SEO and metadata */}
      <Helmet>
      </Helmet>

      {/* Main layout with dynamic font and text direction based on language */}
      <div className={`min-h-screen flex flex-col bg-gray-800`}>

        {/* Main content area with responsive container and padding */}
        <main className="">

          {/* Define routes for different pages of the application */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/404" element={<NotFound />} /> {/* Explicit 404 page route */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
          </Routes>
        </main>

      </div>

    </Router>
  );
};

// Export the App component as the default export.
export default App;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */