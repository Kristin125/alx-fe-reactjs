import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', textAlign: 'center' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        style={{ padding: '0.5rem', marginRight: '1rem', borderRadius: '5px', border: '1px solid #646cff' }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;


