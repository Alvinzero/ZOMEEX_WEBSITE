import { useEffect, useState } from 'react';
import { ArrowLink } from '../components/ui/ArrowLink';
import { Button } from '../components/ui/Button';

const fields = [
  ['name', 'Name', 'text'],
  ['company', 'Company', 'text'],
  ['email', 'Work email', 'email'],
  ['country', 'Country / region', 'text'],
  ['quantity', 'Estimated quantity', 'text'],
];

export function QuotePage() {
  const [items, setItems] = useState([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('zomeex-quote-items') || '[]');
      if (Array.isArray(saved)) setItems(saved);
    } catch {
      setItems([]);
    }
  }, []);

  const removeItem = (id) => {
    const next = items.filter((item) => item.id !== id);
    setItems(next);
    window.localStorage.setItem('zomeex-quote-items', JSON.stringify(next));
    window.dispatchEvent(new Event('zomeex:quote-updated'));
  };

  return (
    <main className="quote-page" id="main-content">
      <section className="quote-masthead"><div className="container"><p className="eyebrow">Quote request / structured brief</p><h1>Turn a shortlist into a clear next step.</h1><p>Tell us what you are building, where it will launch, and the volume you are planning. We will confirm fit, documentation, and commercial terms with you.</p></div></section>
      <section className="container quote-layout">
        <aside className="quote-list"><div className="section-heading"><h2>Your quote list</h2><span>{items.length} selected</span></div>{items.length > 0 ? items.map((item) => <article className="quote-line" key={item.id}><img src={item.image} alt="" width="72" height="72" /><div><strong>{item.title}</strong><small>{item.sku || 'SKU to confirm'}</small></div><button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.title}`}>Remove</button></article>) : <div className="quote-empty"><h3>No products selected</h3><p>Add products from the directory to keep your brief focused, or send a general project note below.</p><ArrowLink href="/shop/">Start with the directory</ArrowLink></div>}</aside>
        <form className="quote-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="section-heading"><h2>Project context</h2><span>Required fields marked *</span></div>{sent ? <div className="quote-success" role="status"><p className="eyebrow">Brief received</p><h3>Thanks. Your request is ready for review.</h3><p>The production version will connect this form to the WordPress quote endpoint.</p><ArrowLink href="/shop/">Continue browsing</ArrowLink></div> : <><div className="form-grid">{fields.map(([name, label, type]) => <label key={name}><span>{label} *</span><input name={name} type={type} required /></label>)}</div><label className="form-field"><span>Customization, finish or packaging</span><textarea name="customization" rows="4" placeholder="Colors, branding, format, technical requirements" /></label><label className="form-field"><span>Anything else</span><textarea name="notes" rows="4" placeholder="Additional context" /></label><p className="form-note">Your details are used to respond to this request. We do not publish your brief.</p><Button type="submit" variant="solid">Send quote request <span aria-hidden="true">↗</span></Button></>}</form>
      </section>
    </main>
  );
}
