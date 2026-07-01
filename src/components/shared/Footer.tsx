import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const resourceLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 sm:pt-20 pb-8 overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 60%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-white">
        {/* Link + Brand Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 py-10 sm:py-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="max-w-xs ml-auto mr-0 sm:mr-auto sm:ml-0 text-left">
              <h2 className="text-2xl font-bold mb-2">
                Next level<span className="text-indigo-400">™</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                A smart blog system for writers and readers who care about
                great content. Write, share, and grow with a community that
                reads.
              </p>
            </div>
          </div>

          {/* Resources */}
          <div className="text-left">
            <h4 className="text-sm font-semibold mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 text-left">
            <h4 className="text-sm font-semibold mb-4 text-white">
              Subscribe to our newsletter
            </h4>
            <form className="flex items-center gap-2 max-w-sm ml-auto mr-0 sm:mr-auto sm:ml-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-full h-11 px-4"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full h-11 w-11 shrink-0 bg-indigo-500 hover:bg-indigo-600"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-500 text-right sm:text-left">
          <p>© {currentYear} Next level team. All rights reserved.</p>
          <div className="flex items-center gap-3 flex-wrap justify-end sm:justify-center">
            <span className="text-sm text-gray-400 mr-1">Follow us</span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}