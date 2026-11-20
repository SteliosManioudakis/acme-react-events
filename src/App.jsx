import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EventCard from './components/EventCard';
import BookingDialog from './components/BookingDialog';
import { LANGUAGES } from './i18n';

const EVENTS = [
  { id: 1, titleKey: 'event.jazz.title', date: '2026-11-07', seatsLeft: 12 },
  { id: 2, titleKey: 'event.market.title', date: '2026-11-14', seatsLeft: 1 },
  { id: 3, titleKey: 'event.run.title', date: '2026-11-21', seatsLeft: 0 },
];

export default function App() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [booking, setBooking] = useState(null);
  const events = EVENTS.map((event) => ({ ...event, title: t(event.titleKey) }));
  const visible = events.filter((event) =>
    event.title.toLocaleLowerCase(i18n.language).includes(query.toLocaleLowerCase(i18n.language)),
  );

  return (
    <div className="page">
      <header>
        <h1>{t('app.title')}</h1>
        <input
          type="search"
          placeholder={t('app.searchPlaceholder')}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          aria-label={t('app.language')}
          value={i18n.resolvedLanguage}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
        >
          {Object.entries(LANGUAGES).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </header>
      <main>
        <h2>{t('app.thisMonth')}</h2>
        {visible.length === 0 && <p>{t('app.noResults')}</p>}
        <div className="grid">
          {visible.map((event) => (
            <EventCard key={event.id} event={event} onBook={() => setBooking(event)} />
          ))}
        </div>
      </main>
      {booking && <BookingDialog event={booking} onClose={() => setBooking(null)} />}
      <footer>
        <p>{t('app.footer')}</p>
      </footer>
    </div>
  );
}
