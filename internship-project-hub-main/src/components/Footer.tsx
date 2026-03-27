import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3">
      <div>
        <h3 className="font-display text-sm font-bold text-foreground">ShopVerse</h3>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          Your one-stop destination for premium electronics, clothing &amp; accessories.
        </p>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
        <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
          <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
          <li><a href="#products" className="hover:text-foreground transition-colors">Products</a></li>
          <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Contact Info</h4>
        <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2"><MapPin className="h-3 w-3" /> 123 Store Street, City</li>
          <li className="flex items-center gap-2"><Phone className="h-3 w-3" /> +1 (555) 123-4567</li>
          <li className="flex items-center gap-2"><Mail className="h-3 w-3" /> hello@shopverse.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-[11px] text-muted-foreground">
      © 2026 ShopVerse. All rights reserved.
    </div>
  </footer>
);

export default Footer;
