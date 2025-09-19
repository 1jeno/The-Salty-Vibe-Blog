import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    console.log('Search triggered:', searchQuery);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    console.log('Theme toggled:', isDark ? 'light' : 'dark');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Travel', href: '/travel' },
    { name: 'Food', href: '/food' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
  ];

  const lifestyleSubcategories = [
    { key: 'beauty', label: 'Beauty' },
    { key: 'home-decor', label: 'Home Decor' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'wellness', label: 'Wellness' },
  ];

  const [, setLocation] = useLocation();

  const handleLifestyleClick = (subcategory: string) => {
    if (subcategory === 'wellness') {
      setLocation('/wellness');
    } else {
      setLocation(`/${subcategory}`);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <h1 className="font-serif text-2xl font-bold text-primary hover-elevate px-2 py-1">
              The Salty Vibe
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link href="/" data-testid="link-home">
              <span
                className={`text-sm font-medium transition-all duration-200 px-3 py-1 rounded ${
                  location === '/' 
                    ? 'text-primary border-2 border-pink-500 bg-pink-50 ring-1 ring-pink-500/30 shadow-sm' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Home
              </span>
            </Link>
            
            {/* Lifestyle Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-sm font-medium transition-all duration-200 px-3 py-1 rounded text-muted-foreground hover:text-primary"
                  data-testid="button-lifestyle-dropdown"
                >
                  Lifestyle
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border" style={{ boxShadow: 'none', backdropFilter: 'none' }}>
                {lifestyleSubcategories.map((subcategory) => (
                  <DropdownMenuItem
                    key={subcategory.key}
                    onClick={() => handleLifestyleClick(subcategory.key)}
                    className="cursor-pointer text-muted-foreground hover:text-pink-500 focus:text-pink-500 active:text-pink-500 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    data-testid={`button-lifestyle-${subcategory.key}`}
                  >
                    {subcategory.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                <span
                  className={`text-sm font-medium transition-all duration-200 px-3 py-1 rounded ${
                    location === item.href 
                      ? 'text-primary border-2 border-pink-500 bg-pink-50 ring-1 ring-pink-500/30 shadow-sm' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Search and Theme Toggle */}
          <div className="flex items-center gap-2">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48"
                data-testid="input-search"
              />
              <Button type="submit" size="icon" variant="outline" data-testid="button-search">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  <span
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent ${
                      location === item.href ? 'text-primary bg-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Mobile Lifestyle Dropdown */}
              <div className="px-3 py-2">
                <span className="block text-sm font-medium text-muted-foreground mb-2">Lifestyle</span>
                <div className="pl-3 space-y-1">
                  {lifestyleSubcategories.map((subcategory) => (
                    <button
                      key={subcategory.key}
                      onClick={() => {
                        handleLifestyleClick(subcategory.key);
                        setIsMenuOpen(false);
                      }}
                      className="block text-sm text-muted-foreground hover:text-pink-500 active:text-pink-500 transition-colors"
                      data-testid={`button-mobile-lifestyle-${subcategory.key}`}
                    >
                      {subcategory.label}
                    </button>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSearch} className="flex items-center gap-2 px-3 pt-2 sm:hidden">
                <Input
                  type="search"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                  data-testid="input-mobile-search"
                />
                <Button type="submit" size="icon" variant="outline" data-testid="button-mobile-search">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}