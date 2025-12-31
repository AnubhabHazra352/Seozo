import Logo from "@/assets/logo.svg";
import XScoial from "@/assets/social-x.svg";
import Instacoial from "@/assets/social-instagram.svg";
import YTcoial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 ml-5 lg:flex-row lg:items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="w-6 h-6" />
            <div className="font-medium">AI-Startup Landing Page</div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-5 text-xs md:text-sm lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white transition">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Developers
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Company
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Blog
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Changelog
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XScoial className="text-white/40 hover:text-white transition cursor-pointer" />
            <Instacoial className="text-white/40 hover:text-white transition cursor-pointer" />
            <YTcoial className="text-white/40 hover:text-white transition cursor-pointer" />
          </div>

        </div>
      </div>
    </footer>
  );
};
