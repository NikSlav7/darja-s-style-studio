import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy, gallery, type Category, type Language } from "@/lib/site-data";

const categories: Category[] = ["beforeAfter", "bridal", "hairstyles"];

export function PortfolioCarousel({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [category, setCategory] = useState<Category>("beforeAfter");
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const thumbs = useRef<HTMLDivElement>(null);
  const items = gallery.filter((item) => item.category === category);
  const active = items[index];

  const move = (step: number) => setIndex((current) => (current + step + items.length) % items.length);
  const switchCategory = (next: Category) => {
    if (next === category) return;
    setCategory(next);
    setIndex(0);
    setLightboxOpen(false);
  };
  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    const end = event.changedTouches[0];
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !end) return;
    const dx = end.clientX - start.x;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(end.clientY - start.y)) move(dx < 0 ? 1 : -1);
  };

  useEffect(() => {
    const strip = thumbs.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (strip && thumb) strip.scrollTo({ left: thumb.offsetLeft - strip.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2, behavior: "smooth" });
  }, [index, category]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightboxOpen, items.length]);

  return <div className="portfolio-carousel">
    <div className="filters" role="tablist" aria-label={t.galleryTitle}>
      {categories.map((cat) => <Button key={cat} type="button" role="tab" id={`portfolio-tab-${cat}`} aria-controls="portfolio-panel" aria-selected={category === cat} tabIndex={category === cat ? 0 : -1} variant="ghost" className={`filter-button ${category === cat ? "filter-active" : ""}`} onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const next = categories[(categories.indexOf(cat) + (event.key === "ArrowRight" ? 1 : -1) + categories.length) % categories.length];
        switchCategory(next);
        requestAnimationFrame(() => document.getElementById(`portfolio-tab-${next}`)?.focus());
      }} onClick={() => switchCategory(cat)}>{t.filters[cat]}<span className="filter-count">{String(gallery.filter((item) => item.category === cat).length).padStart(2, "0")}</span></Button>)}
    </div>
    <div id="portfolio-panel" role="tabpanel" aria-labelledby={`portfolio-tab-${category}`}>
      {items.length && active ? <>
        <div className={`carousel-stage carousel-${category}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div key={category} className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((item, i) => <Button key={item.id} type="button" variant="ghost" className="carousel-slide" tabIndex={i === index ? 0 : -1} aria-label={`${t.viewWork}: ${item.alt[lang]}`} onClick={() => setLightboxOpen(true)}><img src={item.src} alt={item.alt[lang]} loading={i === 0 ? "eager" : "lazy"}/></Button>)}
          </div>
          {items.length > 1 && <><Button type="button" variant="ghost" size="icon" className="carousel-arrow carousel-prev" aria-label={t.previous} onClick={() => move(-1)}><ArrowLeft/></Button><Button type="button" variant="ghost" size="icon" className="carousel-arrow carousel-next" aria-label={t.next} onClick={() => move(1)}><ArrowRight/></Button></>}
        </div>
        <div className="carousel-meta"><span className="carousel-count" aria-live="polite">{String(index + 1).padStart(2, "0")} <span>/</span> {String(items.length).padStart(2, "0")}</span><span className="carousel-rule"/><span className="carousel-category">{t.filters[category]}</span></div>
        <div className="carousel-thumbs" ref={thumbs} aria-label={t.filters[category]}>
          {items.map((item, i) => <Button type="button" key={item.id} variant="ghost" className={`carousel-thumb ${i === index ? "carousel-thumb-active" : ""}`} aria-label={`${i + 1} / ${items.length}: ${item.alt[lang]}`} aria-current={i === index ? "true" : undefined} onClick={() => setIndex(i)}><img src={item.src} alt="" loading="lazy"/></Button>)}
        </div>
      </> : <div className="gallery-empty">{t.noWorks}</div>}
    </div>
    <Button asChild variant="editorialOutline" size="sm" className="carousel-book"><a href="#contact">{t.book}<ArrowUpRight size={15}/></a></Button>
    {lightboxOpen && active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt[lang]} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClick={(event) => { if (event.target === event.currentTarget) setLightboxOpen(false); }}><Button variant="ghost" size="icon" className="lightbox-close" aria-label={t.close} onClick={() => setLightboxOpen(false)}><X/></Button>{items.length > 1 && <Button variant="ghost" size="icon" className="lightbox-prev" aria-label={t.previous} onClick={() => move(-1)}><ArrowLeft/></Button>}<img src={active.src} alt={active.alt[lang]}/>{items.length > 1 && <Button variant="ghost" size="icon" className="lightbox-next" aria-label={t.next} onClick={() => move(1)}><ArrowRight/></Button>}<span className="lightbox-caption">{active.alt[lang]} &nbsp; — &nbsp; {index + 1} / {items.length}</span></div>}
  </div>;
}
