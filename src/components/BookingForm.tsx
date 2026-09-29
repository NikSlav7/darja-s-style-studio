import { useState } from "react";
import { ArrowUpRight, Loader2, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_ENDPOINT, PHONE_TEL, WHATSAPP_URL } from "@/lib/booking-config";
import { copy, type Language } from "@/lib/site-data";

type Errors = { name?: string; phone?: string; consent?: string };

export function BookingForm({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const whatsappText = encodeURIComponent(
    [name && `${t.name}: ${name}`, phone && `${t.phone}: ${phone}`, date && `${t.date}: ${date}`, type && `${t.type}: ${type}`, message && `${t.message}: ${message}`]
      .filter(Boolean)
      .join("\n"),
  );

  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = t.errName;
    const digits = phone.replace(/\D/g, "");
    if (!phone.trim() || digits.length < 6 || !/^[+\d][\d\s\-()]*$/.test(phone.trim())) next.phone = t.errPhone;
    if (!consent) next.consent = t.errConsent;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    try {
      await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ name, phone, date, type, message, lang, website }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <p className="form-success-title">{t.thanksTitle}</p>
        <p>{t.thanksText}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        {t.name}
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          aria-invalid={!!errors.name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="field-error" role="alert">{errors.name}</span>}
      </label>
      <label>
        {t.phone}
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          aria-invalid={!!errors.phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span className="field-error" role="alert">{errors.phone}</span>}
      </label>
      <div className="form-row">
        <label>
          {t.date}
          <input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          {t.type}
          <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">{t.typeOptions[0]}</option>
            {t.typeOptions.slice(1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        {t.message}
        <textarea name="message" rows={4} maxLength={500} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <label className="consent-row">
        <input
          type="checkbox"
          checked={consent}
          aria-invalid={!!errors.consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>{t.consent}</span>
      </label>
      {errors.consent && <span className="field-error" role="alert">{errors.consent}</span>}
      {/* Honeypot — real users never see or fill this */}
      <input
        type="text"
        name="website"
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      {status === "error" && (
        <div className="form-error" role="alert">
          <p>{t.sendError}</p>
          <div className="form-error-actions">
            <Button asChild variant="editorialOutline" size="sm">
              <a href={`tel:${PHONE_TEL}`}><Phone size={15} />{t.call}</a>
            </Button>
            <Button asChild variant="editorialOutline" size="sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} />WhatsApp</a>
            </Button>
          </div>
        </div>
      )}
      <Button variant="editorial" size="lg" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="spin" /> : null}
        {status === "sending" ? t.sending : t.send}
        {status === "sending" ? null : <ArrowUpRight />}
      </Button>
      <div className="form-alt">
        <a className="text-link" href={`${WHATSAPP_URL}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} />{t.whatsappAlt}
        </a>
        <a className="text-link" href={`tel:${PHONE_TEL}`}>
          <Phone size={16} />{t.call}
        </a>
      </div>
    </form>
  );
}
