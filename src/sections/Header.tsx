import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-xl md:border md:border-white/15 md:p-2.5 rounded-xl max-w-2xl max-auto relative">
          <div className="flex items-center justify-between">
            <div className="absolute inset-0 backdrop-blur -z-18 hidden md:block"></div>
            {/* Logo */}
            <div className="h-10 w-10 rounded-lg border border-white/15 flex items-center justify-center">
              <LogoIcon className="h-8 w-8" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="text-white/70 hover:text-white transition">Developers</a>
              <a className="text-white/70 hover:text-white transition">Pricing</a>
              <a className="text-white/70 hover:text-white transition">Changelog</a>
              <a className="text-white/70 hover:text-white transition">Features</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button>Join waitlist</Button>

              {/* Mobile Menu */}
              <MenuIcon
                className="h-5 w-5 text-white cursor-pointer md:hidden"
                aria-label="Open menu"
              />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
