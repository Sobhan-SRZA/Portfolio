import {
  Phone,
  Mail,
  MapPin,
  Smartphone,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form) as any as string[][];

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new URLSearchParams([...formData]),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });

      const result = await res.json();
      if (result.success) {
        alert("✅ پیام شما با موفقیت ارسال شد");
        form.reset();
      }

      else {
        alert("❌ " + result.error);
      }
    }

    catch (err) {
      alert("⚠️ خطا در ارسال، لطفاً دوباره تلاش کنید");
    }

    finally {
      setLoading(false);
    }
  };

  const contacts = [
    {
      name: "Email",
      url: "mailto:sobhan.rasoulzadeh.asl@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/Sobhan_SRZA",
      icon: <Send className="w-6 h-6" />,
    },
    {
      name: "Discord",
      url: "https://discord.com/users/865630940361785345",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mr.sinre",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sobhan-rasoulzadeh-asl-a0679635b/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Sobhan-SRZA",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Telegram Bot",
      url: "https://script.google.com/macros/s/WEBHOOK_ID/exec", // واسط امن
      icon: <Send className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("contact")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("contact_content").substring(0, 160)} />
      </Helmet>

      <section
        id="contact"
        className="mt-28 py-16 rounded-3xl bg-gray-900/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-300 text-center">
            {t("contact")}
          </h2>
          <p className="text-center text-gray-300 mb-12">{t("contact_content")}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* اطلاعات تماس */}
            <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-200 mb-4">
                {t("contact_info")}
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+98 9141521205</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-green-400" />
                  <span>+98 9120561354</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>sobhan.rasoulzadeh.asl@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>اردبیل، میدان ایثار، شهرک صنعتی شماره یک</span>
                </li>
              </ul>
            </div>

            {/* فرم تماس */}
            <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-200 mb-4">
                {t("send_message")}
              </h3>
              <form
                onSubmit={handleSubmit}
                action="https://script.google.com/macros/s/WEBHOOK_ID/exec"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t("your_name")}
                  required
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("your_email")}
                  required
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
                <textarea
                  name="message"
                  placeholder={t("your_message")}
                  rows={5}
                  required
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-green-500 text-white font-semibold hover:bg-green-400 transition disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  {loading ? t("sending") : t("send")}
                </button>
              </form>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in delay-400">
              {contacts.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-green-400 hover:bg-gray-800 transition-all duration-200"
                >
                  {c.icon}
                  <span className="text-gray-200 font-iransans">{c.name}</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;