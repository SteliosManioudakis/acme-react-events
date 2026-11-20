import { useTranslation } from 'react-i18next';

export default function EventCard({ event, onBook }) {
  const { t, i18n } = useTranslation();
  const soldOut = event.seatsLeft === 0;
  return (
    <article className="card">
      <h3>{event.title}</h3>
      <p>{new Date(event.date).toLocaleDateString(i18n.language, { timeZone: 'UTC' })}</p>
      {soldOut ? (
        <span className="badge">{t('card.soldOut')}</span>
      ) : (
        <p>{t('card.seatsLeft', { count: event.seatsLeft })}</p>
      )}
      <button disabled={soldOut} onClick={onBook} title={t('card.bookTooltip')}>
        {t('card.book')}
      </button>
    </article>
  );
}
