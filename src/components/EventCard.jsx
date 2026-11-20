export default function EventCard({ event, onBook }) {
  const soldOut = event.seatsLeft === 0;
  return (
    <article className="card">
      <h3>{event.title}</h3>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      {soldOut ? (
        <span className="badge">Sold out</span>
      ) : (
        <p>{`${event.seatsLeft} seats left`}</p>
      )}
      <button disabled={soldOut} onClick={onBook} title="Book a seat for this event">
        Book
      </button>
    </article>
  );
}
