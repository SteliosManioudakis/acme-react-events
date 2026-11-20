import { useState } from 'react';

export default function BookingDialog({ event, onClose }) {
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="dialog">
        <p>{`Thanks, ${name}! Your seat for ${event.title} is booked.`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  return (
    <div className="dialog">
      <h3>Book a seat</h3>
      <label>
        Your name
        <input value={name} onChange={(change) => setName(change.target.value)} placeholder="First and last name" />
      </label>
      <button disabled={!name} onClick={() => setDone(true)}>Confirm booking</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
