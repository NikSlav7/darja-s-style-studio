import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { copy, media, priceGroups, story, type Language } from "@/lib/site-data";

const FACEBOOK = "https://www.facebook.com/DarjaHairstyles";
const PHONE = "+37256653706";
const WHATSAPP = "https://wa.me/37256653706";
const sections = ["work", "about", "bridal", "prices", "contact"] as const;

export function DarjaSite({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="site-shell" lang={lang}>
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Darja — home"><span className="brand-name">darja<span className="brand-dot">.</span></span><span className="brand-sub">soengud · jumestus · kulmud</span></a>
      <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`} aria-label="Main navigation">
        {sections.map((section) => <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>{t.nav[section]}</a>)}
        <a className="mobile-nav-book" href="#contact" onClick={() => setMenuOpen(false)}>{t.book} <ArrowUpRight size={16}/></a>
      </nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language"><Link to="/et" className={lang === "et" ? "active" : ""} aria-current={lang === "et" ? "page" : undefined}>ET</Link><span>/</span><Link to="/ru" className={lang === "ru" ? "active" : ""} aria-current={lang === "ru" ? "page" : undefined}>RU</Link></div><Button asChild variant="editorial" size="sm" className="header-book"><a href="#contact">{t.book} <ArrowUpRight size={14}/></a></Button><Button variant="ghost" size="icon" className="menu-trigger" aria-label={menuOpen ? t.closeMenu : t.menu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title"><img className="hero-image" src={media.darjaAtWork} alt={lang === "et" ? "Darja soengutab pruudi juukseid" : "Дарья укладывает волосы невесты"} fetchPriority="high"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow hero-eyebrow">{t.eyebrow}</p><h1 id="hero-title">{t.heroTitle}</h1><p className="hero-lead">{t.heroText}</p><div className="hero-buttons"><Button asChild variant="editorial" size="lg"><a href="#contact">{t.book}<ArrowUpRight/></a></Button><Button asChild variant="editorialOutline" size="lg" className="hero-outline"><a href="#work">{t.viewWork}<ArrowRight/></a></Button></div></div><span className="hero-side-note">{t.heroCaption}</span><a href="#work" className="hero-scroll">{t.scroll}<ArrowDown size={17}/></a></section>

      <section className="section portfolio-section" id="work"><div className="section-inner"><div className="portfolio-heading"><div><p className="eyebrow">{t.galleryKicker}</p><h2>{t.galleryTitle}</h2></div><p>{t.galleryText}</p></div><PortfolioCarousel lang={lang}/></div></section>

      <section className="section about-section" id="about"><div className="section-inner about-grid"><div className="about-visual"><img src={media.darja} alt={lang === "et" ? "Darja Slavinskaja portree" : "Портрет Дарьи Славинской"} loading="lazy"/><span className="about-photo-mark">Darja Slavinskaja <span>— Tallinn</span></span></div><div className="about-copy"><p className="eyebrow">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><div className="thin-rule"/><p className="about-opening">{story[lang].intro[0]}</p><div className="about-story">{story[lang].intro.slice(1).map((p) => <p key={p}>{p}</p>)}</div><p className="about-masters">{story[lang].masters}</p><p className="signature">{t.aboutSign}</p></div></div></section>

      <section className="bridal-section" id="bridal"><div className="section-inner bridal-layout"><div className="bridal-copy"><p className="eyebrow">{t.bridalKicker}</p><h2>{t.bridalTitle}</h2><p>{t.bridalText}</p><p className="bridal-travel">{t.bridalTravel}</p><div className="bridal-steps">{t.steps.map((step, i) => <div key={step}><span>0{i + 1}</span><span>{step}</span></div>)}</div><Button asChild variant="editorialOutline" size="lg"><a href="#contact">{t.book}<ArrowUpRight/></a></Button></div><div className="bridal-media"><img src={media.brideBack} alt={lang === "et" ? "Pruudisoeng tagantvaates" : "Свадебная причёска со спины"} loading="lazy"/><div className="bridal-work-slot"><img src={media.darjaStudio} alt={lang === "et" ? "Darja teeb kliendile jumestust stuudios" : "Дарья делает макияж клиентке в студии"} loading="lazy"/></div></div></div></section>

      <section className="section prices-section" id="prices"><div className="section-inner prices-layout"><div><p className="eyebrow">{t.pricesKicker}</p><h2>{t.pricesTitle}</h2><div className="story-block"><p className="eyebrow">{story[lang].teachKicker}</p><h3>{story[lang].teachTitle}</h3><p>{story[lang].teachIntro}</p>{story[lang].teach.map((p) => <p key={p}>{p}</p>)}</div><div className="story-block"><p className="eyebrow">{story[lang].browsKicker}</p><p>{story[lang].brows}</p></div></div><div className="price-list">{priceGroups[lang].map((group) => <div className="price-group" key={group.title}><h3 className="price-group-title">{group.title}</h3>{group.items.map((item) => <div key={item.name}><div className="price-row"><span>{item.name}</span><span className="price-dots"/><span className="price-value">{item.price}</span></div>{item.note && <p className="price-note">{item.note}</p>}</div>)}</div>)}<p className="price-booking">{story[lang].booking[0]}<a href={`tel:${PHONE}`}>+372 5665 3706</a>{story[lang].booking[1]}</p></div></div></section>

      <section className="contact-section" id="contact"><div className="section-inner"><div className="contact-heading"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p>{story[lang].closing.map((p) => <p key={p} className="story-closing">{p}</p>)}</div><div className="contact-grid"><div className="contact-info"><div className="contact-details"><div><span>{t.addressLabel}</span><p>Katusepapi 4<br/>Tallinn, Eesti</p></div><div><span>{t.hoursLabel}</span><p>{t.hours}</p></div><div><span>{t.phoneLabel}</span><a href={`tel:${PHONE}`}>+372 5665 3706</a></div><div><span>{t.emailLabel}</span><a href="mailto:darja_d@mail.ru">darja_d@mail.ru</a></div></div><Button asChild variant="editorialOutline" size="lg"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{t.whatsapp}</a></Button><iframe className="contact-map" title={t.mapTitle} src="https://www.google.com/maps?q=Katusepapi+4,+Tallinn,+Estonia&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div><BookingForm lang={lang}/></div></div></section>
    </main>
    <footer className="site-footer"><div className="section-inner footer-inner"><div><a className="footer-brand" href="#top">darja<span>.</span></a><p>{t.footer}</p></div><div className="footer-right"><div><a href={`tel:${PHONE}`}>+372 5665 3706</a><a href="mailto:darja_d@mail.ru">darja_d@mail.ru</a></div><div className="footer-langs"><Link to="/et">ET</Link><span>/</span><Link to="/ru">RU</Link></div></div></div><div className="section-inner footer-bottom">© {new Date().getFullYear()} Darja. {t.copyright}</div></footer>
    <div className="mobile-actions"><a href="#contact">{t.book}<ArrowUpRight size={17}/></a><a href={WHATSAPP} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/></a></div>

  </div>;
}
