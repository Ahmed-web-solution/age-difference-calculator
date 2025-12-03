import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import logo from '@/assets/fincalcbox-logo.webp';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
    { to: '/disclaimer', label: 'Disclaimer' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="
        sticky top-0 z-50 
        bg-background/95 backdrop-blur 
        supports-[backdrop-filter]:bg-background/80 
        border-b border-border
        shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.6)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity rounded-2xl p-1"
          >
            <img 
              src={logo} 
              alt="Age Calculator Logo" 
              className="h-14 w-auto sm:h-16 sm:w-36 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium 
                  transition-all duration-200
                  text-foreground/85
                  mx-1
                  ${isActive(link.to)
                    ? "text-primary shadow-[inset_4px_4px_10px_rgba(0,0,0,0.18),inset_-4px_-4px_10px_rgba(255,255,255,0.7)]"
                    : "shadow-[4px_4px_8px_rgba(0,0,0,0.15),_-4px_-4px_8px_rgba(255,255,255,0.6)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="
                ml-2 rounded-xl
                shadow-[4px_4px_8px_rgba(0,0,0,0.15),_-4px_-4px_8px_rgba(255,255,255,0.6)]
                hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]
              "
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="
                rounded-xl
                shadow-[4px_4px_8px_rgba(0,0,0,0.15),_-4px_-4px_8px_rgba(255,255,255,0.6)]
                hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]
              "
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="
                    rounded-xl
                    shadow-[4px_4px_8px_rgba(0,0,0,0.15),_-4px_-4px_8px_rgba(255,255,255,0.6)]
                    hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]
                  "
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">

                  {/* Mobile Logo */}
                  <Link
                    to="/"
                    className="flex items-center gap-3 mb-4 p-2 rounded-xl 
                    shadow-[6px_6px_12px_rgba(0,0,0,0.15),_-6px_-6px_12px_rgba(255,255,255,0.6)]"
                  >
                    <img 
                      src={logo} 
                      alt="Age Calculator Logo" 
                      className="h-12 w-auto object-contain"
                    />
                  </Link>

                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        className="
                          px-4 py-3 rounded-xl text-sm font-medium 
                          text-foreground/80 hover:text-foreground transition-colors
                          shadow-[4px_4px_8px_rgba(0,0,0,0.15),_-4px_-4px_8px_rgba(255,255,255,0.6)]
                          hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]
                        "
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
