import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingDialog({ event, onClose }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="dialog">
        <p>{t('booking.success', { name, event: event.title })}</p>
        <button onClick={onClose}>{t('booking.close')}</button>
      </div>
    );
  }
  return (
    <div className="dialog">
      <h3>{t('booking.title')}</h3>
      <label>
        {t('booking.nameLabel')}
        <input
          value={name}
          onChange={(change) => setName(change.target.value)}
          placeholder={t('booking.namePlaceholder')}
        />
      </label>
      <button disabled={!name} onClick={() => setDone(true)}>
        {t('booking.confirm')}
      </button>
      <button onClick={onClose}>{t('booking.cancel')}</button>
    </div>
  );
}
