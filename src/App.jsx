import { useState } from 'react';
import EventCard from './components/EventCard';
import BookingDialog from './components/BookingDialog';

const EVENTS = [
  { id: 1, title: 'Jazz in the park', date: '2026-11-07', seatsLeft: 12 },
  { id: 2, title: 'Night market', date: '2026-11-14', seatsLeft: 1 },
  { id: 3, title: 'Harbour run', date: '2026-11-21', seatsLeft: 0 },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [booking, setBooking] = useState(null);
  const visible = EVENTS.filter((event) => event.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="page">
      <header>
        <h1>City Events</h1>
        <input
          type="search"
          placeholder="Search events"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </header>
      <main>
        <h2>This month</h2>
        {visible.length === 0 && <p>No events match your search.</p>}
        <div className="grid">
          {visible.map((event) => (
            <EventCard key={event.id} event={event} onBook={() => setBooking(event)} />
          ))}
        </div>
      </main>
      {booking && <BookingDialog event={booking} onClose={() => setBooking(null)} />}
      <footer>
        <p>Tickets are non-refundable.</p>
      </footer>
    </div>
  );
}
