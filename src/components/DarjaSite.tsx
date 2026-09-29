import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { copy, gallery, media, services, type Category, type Language } from "@/lib/site-data";

const FACEBOOK = "https://www.facebook.com/DarjaHairstyles";
const PHONE = "+37256653706";
const WHATSAPP = "https://wa.me/37256653706";
const sections = ["work", "about", "bridal", "prices", "contact"] as const;

export function DarjaSite({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [review, setReview] = useState(0);
  const visible = gallery.filter((item) => filter === "all" || item.category === filter);
  const currentIndex = selected === null ? -1 : visible.findIndex((item) => item.id === selected);
  const selectedItem = selected === null ? null : gallery.find((item) => item.id === selected);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected(visible[(currentIndex + 1) % visible.length]?.id ?? null);
      if (event.key === "ArrowLeft") setSelected(visible[(currentIndex - 1 + visible.length) % visible.length]?.id ?? null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [selected, currentIndex, visible]);

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
      <section className="hero" aria-labelledby="hero-title"><img className="hero-image" src={media.bridePortrait} alt={gallery[0]?.alt[lang] ?? "Bridal styling"} fetchPriority="high"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow hero-eyebrow">{t.eyebrow}</p><h1 id="hero-title">{t.heroTitle}</h1><p className="hero-lead">{t.heroText}</p><div className="hero-buttons"><Button asChild variant="editorial" size="lg"><a href="#contact">{t.book}<ArrowUpRight/></a></Button><Button asChild variant="editorialOutline" size="lg" className="hero-outline"><a href="#work">{t.viewWork}<ArrowRight/></a></Button></div></div><span className="hero-side-note">{t.heroCaption}</span><a href="#work" className="hero-scroll">{t.scroll}<ArrowDown size={17}/></a></section>

      <section className="section portfolio-section" id="work"><div className="section-inner"><div className="portfolio-heading"><div><p className="eyebrow">{t.galleryKicker}</p><h2>{t.galleryTitle}</h2></div><p>{t.galleryText}</p></div><div className="filters" role="group" aria-label={t.galleryTitle}>{(["all", "bridal", "evening", "makeup", "brows"] as Category[]).map((cat) => <Button key={cat} variant="ghost" className={`filter-button ${filter === cat ? "filter-active" : ""}`} aria-pressed={filter === cat} onClick={() => setFilter(cat)}>{t.filters[cat]}</Button>)}</div>{visible.length ? <div className="gallery-grid">{visible.map((item, index) => <Button key={item.id} variant="ghost" className={`gallery-item ${item.className}`} onClick={() => setSelected(item.id)} aria-label={`${t.viewWork}: ${item.alt[lang]}`}><img src={item.src} alt={item.alt[lang]} loading={index > 1 ? "lazy" : "eager"}/><span className="gallery-overlay"><span>{t.filters[item.category]}</span><ArrowUpRight size={22}/></span></Button>)}</div> : <div className="gallery-empty">{t.noWorks}</div>}</div></section>

      <section className="section about-section" id="about"><div className="section-inner about-grid"><div className="about-visual"><img src={media.darja} alt={lang === "et" ? "Darja teeb kliendile jumestust oma stuudios" : "Дарья делает макияж клиентке в своей студии"} loading="lazy"/><div className="about-small-slot"><span>{t.futurePortrait}</span></div></div><div className="about-copy"><p className="eyebrow">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><div className="thin-rule"/><p className="about-opening">{t.aboutP1}</p><p>{t.aboutP2}</p><p className="signature">{t.aboutSign}</p></div></div></section>

      <section className="bridal-section" id="bridal"><div className="section-inner bridal-layout"><div className="bridal-copy"><p className="eyebrow">{t.bridalKicker}</p><h2>{t.bridalTitle}</h2><p>{t.bridalText}</p><p className="bridal-travel">{t.bridalTravel}</p><div className="bridal-steps">{t.steps.map((step, i) => <div key={step}><span>0{i + 1}</span><span>{step}</span></div>)}</div><Button asChild variant="editorialOutline" size="lg"><a href="#contact">{t.book}<ArrowUpRight/></a></Button></div><div className="bridal-media"><img src={media.brideBack} alt={gallery[1]?.alt[lang] ?? "Bridal hairstyle"} loading="lazy"/><div className="bridal-work-slot"><span>{t.workSlot}</span></div></div></div><div className="video-slot"><span className="video-play">▷</span><span>{t.videoSlot}</span></div></section>

      <section className="section prices-section" id="prices"><div className="section-inner prices-layout"><div><p className="eyebrow">{t.pricesKicker}</p><h2>{t.pricesTitle}</h2><p className="prices-note">{t.pricesNote}</p></div><div className="price-list">{services.map((service, i) => <div className="price-row" key={service}><span className="price-number">0{i + 1}</span><span>{t.serviceNames[service]}</span><span className="price-dots"/><span className="price-value">{t.from}</span></div>)}</div></div></section>

      <section className="section reviews-section"><div className="section-inner reviews-layout"><div><p className="eyebrow">{t.reviewsKicker}</p><h2>{t.reviewsTitle}</h2><a className="review-stat" href={FACEBOOK} target="_blank" rel="noopener noreferrer">{t.reviewStat}<ArrowUpRight size={19}/></a><a className="text-link" href={FACEBOOK} target="_blank" rel="noopener noreferrer">{t.reviewLink}<ArrowRight size={17}/></a></div><div className="review-panel"><span className="review-quote">“</span><blockquote>{t.reviewPlaceholder}</blockquote><div className="review-bottom"><span>{t.reviewLabel} &nbsp; 0{review + 1} / 03</span><div><Button variant="ghost" size="icon" aria-label={t.reviewPrev} onClick={() => setReview((review + 2) % 3)}><ChevronLeft/></Button><Button variant="ghost" size="icon" aria-label={t.reviewNext} onClick={() => setReview((review + 1) % 3)}><ChevronRight/></Button></div></div></div></div></section>

      <section className="social-section"><div className="section-inner social-heading"><div><p className="eyebrow">{t.socialKicker}</p><h2>{t.socialTitle}</h2></div><a className="text-link" href={FACEBOOK} target="_blank" rel="noopener noreferrer">{t.socialLink}<ArrowUpRight size={18}/></a></div><div className="social-strip">{gallery.map((item) => <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" key={item.id}><img src={item.src} alt={item.alt[lang]} loading="lazy"/></a>)}</div></section>

      <section className="contact-section" id="contact"><div className="section-inner"><div className="contact-heading"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contact-grid"><div className="contact-info"><div className="contact-details"><div><span>{t.addressLabel}</span><p>Katusepapi 4<br/>Tallinn, Eesti</p></div><div><span>{t.hoursLabel}</span><p>{t.hours}</p></div><div><span>{t.phoneLabel}</span><a href={`tel:${PHONE}`}>+372 5665 3706</a></div><div><span>{t.emailLabel}</span><a href="mailto:darja_d@mail.ru">darja_d@mail.ru</a></div></div><Button asChild variant="editorialOutline" size="lg"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{t.whatsapp}</a></Button><iframe className="contact-map" title={t.mapTitle} src="https://www.google.com/maps?q=Katusepapi+4,+Tallinn,+Estonia&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div><BookingForm lang={lang}/></div></div></section>
    </main>
    <footer className="site-footer"><div className="section-inner footer-inner"><div><a className="footer-brand" href="#top">darja<span>.</span></a><p>{t.footer}</p></div><div className="footer-right"><div><a href={`tel:${PHONE}`}>+372 5665 3706</a><a href="mailto:darja_d@mail.ru">darja_d@mail.ru</a></div><div className="footer-langs"><Link to="/et">ET</Link><span>/</span><Link to="/ru">RU</Link></div></div></div><div className="section-inner footer-bottom">© {new Date().getFullYear()} Darja. {t.copyright}</div></footer>
    <div className="mobile-actions"><a href="#contact">{t.book}<ArrowUpRight size={17}/></a><a href={WHATSAPP} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/></a></div>
    {selectedItem && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedItem.alt[lang]} onTouchStart={(e) => { const x = e.touches[0]?.clientX; if (x !== undefined) (e.currentTarget as HTMLElement).dataset["touchX"] = String(x); }} onTouchEnd={(e) => { const start = Number((e.currentTarget as HTMLElement).dataset["touchX"]); const end = e.changedTouches[0]?.clientX; if (end !== undefined && Math.abs(end - start) > 50) setSelected(visible[(currentIndex + (end < start ? 1 : -1) + visible.length) % visible.length]?.id ?? null); }}><Button variant="ghost" size="icon" className="lightbox-close" aria-label={t.close} onClick={() => setSelected(null)}><X/></Button><Button variant="ghost" size="icon" className="lightbox-prev" aria-label={t.previous} onClick={() => setSelected(visible[(currentIndex - 1 + visible.length) % visible.length]?.id ?? null)}><ArrowLeft/></Button><img src={selectedItem.src} alt={selectedItem.alt[lang]}/><Button variant="ghost" size="icon" className="lightbox-next" aria-label={t.next} onClick={() => setSelected(visible[(currentIndex + 1) % visible.length]?.id ?? null)}><ArrowRight/></Button><span className="lightbox-caption">{selectedItem.alt[lang]} &nbsp; — &nbsp; {currentIndex + 1} / {visible.length}</span></div>}
  </div>;
}
