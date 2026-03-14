import { useEffect, useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const emptyForm = {
  name: "",
  email: "",
  destination: "",
  travel_date: ""
};

function App() {
  const [form, setForm] = useState(emptyForm);
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("Loading bookings...");
  const [submitting, setSubmitting] = useState(false);

  const loadBookings = async () => {
    try {
      const response = await fetch(`${API_URL}/api/bookings`);
      const data = await response.json();
      setBookings(data);
      setMessage(data.length ? "" : "No bookings yet.");
    } catch (error) {
      setMessage("Could not connect to backend.");
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      setForm(emptyForm);
      setMessage("Booking created successfully.");
      await loadBookings();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>HackoWac Booking Demo</h1>
        <p className="subtitle">
          Small full-stack app for a DevOps CI/CD portfolio project
        </p>

        <div className="grid">
          <div className="card">
            <h2>Create Booking</h2>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={form.destination}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="travel_date"
                value={form.travel_date}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Book Now"}
              </button>
            </form>
          </div>

          <div className="card">
            <h2>Recent Bookings</h2>

            {message && <p className="message">{message}</p>}

            <div className="booking-list">
              {bookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                  <strong>{booking.name}</strong>
                  <span>{booking.email}</span>
                  <span>{booking.destination}</span>
                  <span>{booking.travel_date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;