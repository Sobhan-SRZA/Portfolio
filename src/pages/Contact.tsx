// Contact.tsx: Component for the contact page, featuring a form for sending messages and a list of contact links, with internationalization and SEO support.

// Import icons from lucide-react for visual representation of contact methods.
import {
  Send,
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { DiscordIcon } from "../tools/icons";

// Import Dialog components from Headless UI for displaying alerts (success, error, loading).
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import useState hook from React for managing form and alert states.
import { useState } from "react";

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// Import social links from storage for rendering contact methods.
import { google_script_link, social } from "../storage";

// Contact component, defined as a functional component using TypeScript.
const Contact: React.FC = () => {
  // Access translation function and i18n instance for language support.
  const { t, i18n } = useTranslation();

  // State to track form submission loading status.
  const [loading, setLoading] = useState(false);

  // State to manage alert dialog (success, error, or loading) visibility and content.
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error" | "loading";
    message: string;
  }>({
    show: false,
    type: "loading",
    message: ""
  });

  // Function to validate form input before submission.
  const validateForm = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Check if name is at least 3 characters long.
    if (name.length < 3) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_name") });
      return false;
    }

    // Validate email format using a regex pattern.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_email") });
      return false;
    }

    // Check if message is at least 5 characters long.
    if (message.length < 5) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_message") });
      return false;
    }

    return true; // Return true if all validations pass.
  };

  // Handle form submission with validation and API request.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior.
    const formData = new FormData(e.currentTarget);

    // Validate form inputs before proceeding.
    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    setLoading(true); // Set loading state during submission.
    setAlert({ show: true, type: "loading", message: t("sending") }); // Show loading alert.

    const form = e.currentTarget;

    try {
      // Send form data to Google Apps Script endpoint.
      const res = await fetch(form.action, {
        method: "POST",
        body: new URLSearchParams([...formData] as any), // Convert FormData to URL-encoded string
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      });

      const result = await res.json();
      if (result.success) {
        // Show success alert and reset form on successful submission.
        setAlert({ show: true, type: "success", message: t("contact_error.message_success") });
        form.reset();
        return;
      }

      else {
        // Handle specific error cases (e.g., timeout).
        if (result.error.includes("30")) {
          setAlert({ show: true, type: "error", message: t("contact_error.message_timeout") });
          return;
        }

        else {
          setAlert({ show: true, type: "error", message: result.error || t("contact_error.message_error") });
          return;
        }
      }
    }

    catch (err) {
      // Handle network or unexpected errors.
      setAlert({ show: true, type: "error", message: t("contact_error.message_error") });
      return;
    }

    finally {
      setLoading(false); // Reset loading state after submission.
      return;
    }
  };

  // Array of contact methods with their respective icons and translation keys.
  const contacts = [
    {
      key: "email",
      url: `mailto:${social.email}`,
      icon: (className?: string) => <Mail className={className} /> // Email contact icon
    },
    {
      key: "telegram",
      url: social.telegram_second,
      icon: (className?: string) => <Send className={className} /> // Telegram contact icon
    },
    {
      key: "discord",
      url: social.discord_account,
      icon: (className?: string) => <DiscordIcon className={className} /> // Discord contact icon
    },
    {
      key: "instagram",
      url: social.instagram,
      icon: (className?: string) => <Instagram className={className} /> // Instagram contact icon
    },
    {
      key: "linkedin",
      url: social.linkedin,
      icon: (className?: string) => <Linkedin className={className} /> // LinkedIn contact icon
    },
    {
      key: "github",
      url: social.github,
      icon: (className?: string) => <Github className={className} /> // GitHub contact icon
    }
  ];

  // Render the contact page with form, contact links, and alert dialog.
  return (
    <>
      {/* Helmet for managing SEO metadata */}
      <Helmet>
        <title>{t("contact")} | Mr. Sinre | Sobhan-SRZA</title> {/* Page title with translated contact label */}
        <meta name="description" content={t("contact_content")} /> {/* Description for SEO */}
      </Helmet>

      {/* Main section for contact page with theme-based styling and animations */}
      <section
        id="contact"
        className="min-h-min py-16 flex items-center justify-center transition-all"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}
        >
          {/* Page title with animation and theme-based styling */}
          <h2 className="transition-colors text-3xl sm:text-4xl font-bold mb-6 text-(--primary) text-center animate-fade-in">
            {t("contact")} {/* Translated contact section title */}
          </h2>
          <p className="transition-colors text-center text-(--text) mb-12 text-lg animate-fade-in">
            {t("contact_content")} {/* Translated contact section description */}
          </p>

          {/* Grid layout for contact information and form */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="transition-colors  bg-(--card-bg)/60 p-6 rounded-lg shadow-lg border border-(--border) animate-fade-in">
              <h3 className="transition-colors text-xl font-semibold text-(--primary) mb-6">
                {t("contact_info")} {/* Translated contact info title */}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contacts.map((contact, index) => (
                  // Individual contact link with accessibility attributes and hover effects
                  <a
                    key={index} // Unique key for each contact (consider using contact.key for better uniqueness)
                    href={contact.url}
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security attributes for external links
                    className="flex items-center gap-3 p-4 bg-(--card-bg)/50 rounded-lg border border-(--border) hover:border-(--primary) hover:bg-(--card-bg) transition-all"
                    aria-label={t(`contact_links.${contact.key}`)} // Accessible label for screen readers
                  >
                    {contact.icon("transition-colors w-6 h-6 text-(--primary)")} {/* Render contact icon */}
                    <span className="transition-colors text-(--text)">{t(`contact_links.${contact.key}`)}</span> {/* Translated contact name */}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="transition-colors bg-(--card-bg)/60 p-6 rounded-lg shadow-lg border border-(--border) animate-fade-in">
              <h3 className="transition-colors text-xl font-semibold text-(--primary) mb-6">
                {t("send_message")} {/* Translated send message title */}
              </h3>
              {/* Form for submitting messages to Google Apps Script */}
              <form
                onSubmit={handleSubmit}
                action={google_script_link}
                method="POST"
                className="space-y-6"
              >

                {/* Name input field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("your_name")} // Translated placeholder
                    required
                    className="w-full p-3 rounded-md bg-(--card-bg) border border-(--border) text-(--text) placeholder:text-(--text)/50 placeholder:transition-colors focus:border-(--primary) outline-0 focus:ring-2 focus:ring-(--primary)/50 transition-all"
                  />
                </div>

                {/* Email input field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("your_email")} // Translated placeholder
                    required
                    className="w-full p-3 rounded-md bg-(--card-bg) border border-(--border) text-(--text) placeholder:text-(--text)/50 placeholder:transition-colors focus:border-(--primary) outline-0 focus:ring-2 focus:ring-(--primary)/50 transition-all"
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder={t("your_message")} // Translated placeholder
                    rows={5}
                    required
                    className="w-full p-3 rounded-md bg-(--card-bg) border border-(--border) placeholder:text-(--text)/50 placeholder:transition-colors text-(--text) focus:border-(--primary) outline-0 focus:ring-2 focus:ring-(--primary)/50 transition-all"
                  />
                </div>

                {/* Submit button with loading state */}
                <button
                  type="submit"
                  disabled={loading} // Disable button during submission
                  className="cursor-pointer flex items-center justify-center gap-2 w-full py-3 font-semibold text-black hover:text-white dark:hover:text-black dark:text-white backdrop-blur-2xl border-4 border-(--accent) bg-(--accent-hover)/30 rounded-md shadow-sm hover:bg-(--accent) transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" /> {/* Send icon */}
                  {loading ? t("sending") : t("send")} {/* Translated button text based on loading state */}
                </button>

              </form>

            </div>

          </div>
        </div>

        {/* Alert Dialog: Displays success, error, or loading messages */}
        <Dialog
          open={alert.show}
          onClose={() => setAlert({ ...alert, show: false })}
          className="relative z-50"
        >
          {/* Overlay for the dialog */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              className={`w-full max-w-md rounded-lg bg-(--card-bg)/90 backdrop-blur-md p-6 text-center transform transition-all ${alert.show ? "scale-100 opacity-100" : "scale-95 opacity-0"} ${i18n.language === "fa" ? "rtl" : "font-sans ltr"}`}
            >
              {/* Alert icon based on type (success, error, loading) */}
              <div className="flex justify-center mb-4">
                {alert.type === "success" && (
                  <svg
                    className="w-12 h-12 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    /> {/* Checkmark for success */}
                  </svg>
                )}
                {alert.type === "error" && (
                  <svg
                    className="w-12 h-12 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    /> {/* Cross for error */}
                  </svg>
                )}
                {alert.type === "loading" && (
                  <svg
                    className="w-12 h-12 text-(--primary) animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                    /> {/* Spinner for loading */}
                  </svg>
                )}
              </div>

              {/* Alert message */}
              <p className="text-lg text-(--text) mb-6">{alert.message}</p>

              {/* Close button */}
              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="cursor-pointer px-6 py-2 font-semibold text-black hover:text-white dark:hover:text-black dark:text-white backdrop-blur-2xl border-4 border-(--accent) bg-(--accent-hover)/30 rounded-md shadow-sm hover:bg-(--accent) transition-all"
                aria-label={t("close")} // Accessible label for screen readers
              >
                {t("close")} {/* Translated close button text */}
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      </section>
    </>
  );
};

// Export the Contact component as the default export.
export default Contact;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */