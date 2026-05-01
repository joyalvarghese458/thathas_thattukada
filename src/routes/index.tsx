import { createFileRoute } from "@tanstack/react-router";
import MenuSection from "../components/MenuSection";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  UtensilsCrossed,
  IndianRupee,
  Zap,
  Users,
  ChefHat,
  MessageCircle,
  Facebook,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

import heroBg from "../assets/hero-bg.jpg";
import menuTea from "../assets/menu-tea.jpg";
import menuCutlet from "../assets/menu-cutlet.jpg";
import menuPorotta from "../assets/menu-porotta.jpg";
import menuBiryani from "../assets/menu-biryani.jpg";
import menuSnacks from "../assets/menu-snacks.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ───── Sticky Header ───── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#hero" className="font-display text-xl font-bold text-white">
          Thathaas<span className="text-warm-accent"> Thattukada</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:065728525"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-warm-dark/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:065728525"
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ───── Hero Section ───── */
function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Kerala street food spread"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
          <Clock size={14} className="text-warm-accent" />
          <span className="text-xs font-medium tracking-wide text-white/90">OPEN 24 HOURS</span>
        </div>

        <h1
          className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Thathaas
          <br />
          <span className="text-warm-accent">Thattukada</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 sm:text-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Authentic Kerala Street Food — Fresh, Flavorful & Affordable meals anytime in Sharjah
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition hover:scale-105 hover:bg-primary/90"
          >
            <UtensilsCrossed size={16} />
            View Menu
          </a>
          <a
            href="tel:065728525"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/20"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-white/60">
          <div className="flex items-center gap-1.5 text-xs">
            <MapPin size={14} />
            <span>Al Qasimia, Sharjah</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Star size={14} className="fill-warm-accent text-warm-accent" />
            <span>3.5/5 (300+ reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── About Section ───── */
function AboutSection() {
  const highlights = [
    { icon: Clock, label: "Open 24 Hours" },
    { icon: UtensilsCrossed, label: "Dine-in, Takeaway & Delivery" },
    { icon: IndianRupee, label: "AED 1–50 Range" },
  ];

  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Us</span>
          <h2
            className="mt-2 text-3xl font-black text-foreground sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Street Food, <span className="text-primary">Kerala Style</span>
          </h2>
        </div>

        <p
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Thathaas Thattukada is a popular Kerala-style street food spot in Al Qasimia, Sharjah.
          Known for its delicious evening snacks, biryani, porotta, and traditional Malabar
          flavors — all at budget-friendly prices.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <h.icon size={22} className="text-primary" />
              </div>
              <span className="text-sm font-semibold text-card-foreground">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Menu Section ───── */
const menuItems = [
  { name: "Karak Tea", desc: "Strong, sweet & milky chai", price: "AED 1", img: menuTea },
  { name: "Cutlet", desc: "Crispy golden Kerala cutlets", price: "AED 3", img: menuCutlet },
  { name: "Porotta & Curry", desc: "Flaky layered bread with curry", price: "AED 8", img: menuPorotta },
  { name: "Biryani", desc: "Fragrant Malabar-style biryani", price: "AED 15", img: menuBiryani },
  { name: "Kerala Snacks", desc: "Pazham Nirachathu, Vatta Appam & more", price: "AED 5", img: menuSnacks },
];

function MenuSection() {
  return (
    <section id="menu" className="bg-warm-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-warm-accent">Our Menu</span>
          <h2
            className="mt-2 text-3xl font-black text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Taste the <span className="text-warm-accent">Favourites</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <span className="rounded-full bg-warm-accent/20 px-3 py-0.5 text-sm font-bold text-warm-accent">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:065728525"
            className="inline-flex items-center gap-2 rounded-full border-2 border-warm-accent/30 px-6 py-3 text-sm font-bold text-warm-accent transition hover:bg-warm-accent/10"
          >
            <Phone size={16} />
            Call for Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── Why Choose Us ───── */
const reasons = [
  { icon: Clock, title: "Open 24/7", desc: "Hungry at midnight? We've got you covered." },
  { icon: IndianRupee, title: "Budget Friendly", desc: "Full meals starting from just AED 1." },
  { icon: ChefHat, title: "Authentic Kerala Taste", desc: "Traditional Malabar recipes & flavors." },
  { icon: Zap, title: "Fast Takeaway", desc: "Quick service for on-the-go meals." },
  { icon: Users, title: "Popular Local Spot", desc: "Loved by the Sharjah community." },
];

function WhyChooseUsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Us</span>
          <h2
            className="mt-2 text-3xl font-black text-foreground sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose <span className="text-primary">Thathaas</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <r.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Reviews Section ───── */
const reviews = [
  {
    name: "Ahmed K.",
    text: "Best cutlets and porotta in Sharjah! The food tastes just like home-cooked Kerala meals. Incredible value for money.",
    rating: 4,
  },
  {
    name: "Fathima R.",
    text: "We come here every weekend for biryani and snacks. Super affordable and always crowded — a sign of great food!",
    rating: 4,
  },
  {
    name: "Rahul M.",
    text: "The karak tea here is the best I've had. Love that they're open 24 hours — perfect late-night food spot.",
    rating: 3,
  },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="bg-warm-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Reviews</span>
          <h2
            className="mt-2 text-3xl font-black text-foreground sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What People <span className="text-primary">Say</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <Star key={i} size={20} className="fill-warm-accent text-warm-accent" />
            ))}
            <Star size={20} className="fill-warm-accent/50 text-warm-accent" />
            <Star size={20} className="text-warm-accent/30" />
            <span className="ml-2 text-sm font-semibold text-muted-foreground">3.5 / 5 (300+ reviews)</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < r.rating
                        ? "fill-warm-accent text-warm-accent"
                        : "text-border"
                    }
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <p className="mt-4 text-sm font-bold text-card-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Location & Contact ───── */
function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Find Us</span>
          <h2
            className="mt-2 text-3xl font-black text-foreground sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Visit <span className="text-primary">Thathaas</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map placeholder */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              title="Thathaas Thattukada Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6!2d55.38!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiTiA1NcKwMjInNDguMCJF!5e0!3m2!1sen!2sae!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">Al Qasimia, Sharjah, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">06 572 8525</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">Open 24 Hours — Every Day</p>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://maps.google.com/?q=Al+Qasimia+Sharjah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <a
                href="tel:065728525"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary/5"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Footer ───── */
function Footer() {
  return (
    <footer className="bg-warm-dark py-10 text-white/70">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <h3
          className="text-lg font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Thathaas <span className="text-warm-accent">Thattukada</span>
        </h3>
        <p className="mt-1 text-sm">Authentic Kerala Street Food • Open 24 Hours</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
        </div>
        <p className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Thathaas Thattukada. All rights reserved. Demo website.
        </p>
      </div>
    </footer>
  );
}

/* ───── WhatsApp FAB ───── */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97165728525"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}

/* ───── Main Page ───── */
function Index() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
