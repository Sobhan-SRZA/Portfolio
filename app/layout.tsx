import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Mr. Sinre | Sobhan-SRZA",
  description: "Sobhan Rasoulzadeh Asl (Mr. Sinre / SRZA): Full-stack developer—Node.js, React.js, NestJS, API development, Discord & Telegram bots, modern web design. Discover my biography, projects, and social profiles.",
  keywords: "Sobhan Rasoulzadeh Asl, Sobhan Rasulzadeh, Sobhan Rasoolzadeh, Subhan Rasoulzadeh, Soban Rasoulzadeh, Rasoulzadeh-Asl, Rasoul Zadeh Asl, Rasoulzade, Rasolzadeh, Sobhan SRZA, sobhan srza, srzaa, Sobhan-SRZA, Mr. Sinre, Mr Sinre, mr.sinre, mr sinre, mr_sinre, mr-sinre, Sinre, Persian Caesar, Persian Cezar, Persian Cesar, Persian Caeser, پرشین سزار, سبحان رسول زاده اصل, سبحن رسول زاده, رسول زاده اصل, فول استک دولوپر, Full-stack developer, برنامه‌نویس فول‌استک, Node.js, Nodejs, نودجی‌اس, نود جی اس, Node.js developer, توسعه‌دهنده Node.js, JavaScript, جاوااسکریپت, TypeScript, تایپ‌اسکریپت, React, React.js, Reactjs, ری‌اکت, توسعه‌دهنده React, NestJS, Nest.js, توسعه‌دهنده NestJS, API development, توسعه API, REST API, وب‌سرویس, Website designer, طراحی وب‌سایت, Frontend developer, Backend developer, Python, Python developer, پایتون, توسعه‌دهنده پایتون, Telegram bot, ربات تلگرام, Telegram bot developer, سازنده ربات تلگرام, Discord bot, بات دیسکورد, Discord bot developer, توسعه‌دهنده بات دیسکورد, Freelancer, فریلنسر, Portfolio, نمونه‌کار, Upwork, GitHub, sobhan.rasoulzadeh.asl, Instagram sobhan.rasoulzadeh.asl, اینستاگرام سبحان, t.me/Sobhan_SRZA, Telegram Sobhan_SRZA, تلگرام سبحان, سبحان, sobhan, سبحان برنامه نویس, آرتا عمران ورق, استیل کوهستان, ارتا عمران ورق, aov, a-o-v, arta omran varag, arta omran varagh, arta omran varaq, t.me/d_opa_mine, Discord Sobhan_SRZA, discord.com/users/865630940361785345, discord.com/users/986314682547716117, استخدام, فریلنسر, freelancer, job, developer, programmer, iran, azarbaijan, ardabil, آذربایجان, ترک, اردبیل, برنامه اردبیل",
  openGraph: {
    type: "website",
    images: {
      url: "/images/og-image.jpg"
    }
  }
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}