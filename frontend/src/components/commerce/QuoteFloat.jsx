import { useEffect, useState } from 'react';

const STORAGE_KEY = 'zomeex-quote-items';

function readCount() {
  try {
    const items = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(items) ? items.length : 0;
  } catch {
    return 0;
  }
}

export function QuoteFloat() {
  const [count, setCount] = useState(readCount);

  useEffect(() => {
    const refresh = () => setCount(readCount());
    window.addEventListener('storage', refresh);
    window.addEventListener('zomeex:quote-updated', refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('zomeex:quote-updated', refresh);
    };
  }, []);

  return <a className="quote-float" href="/quote-request/"><span className="quote-float__count" hidden={count === 0}>{count}</span>Quote list <span aria-hidden="true">↗</span></a>;
}
