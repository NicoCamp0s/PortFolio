import { useState } from 'react';
import styles from './contact.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_y3tjkd8', 'template_3l2x1id', templateParams, '5iclJWcGdQqt8LN4U')
    .then((response) => {
      setStatus('Mensaje enviado con éxito.');
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      setStatus('Error al enviar el mensaje.');
    });
  };

  return (
    <section id="contact" className={`${styles.contact}`}>
      <h2>Contactame</h2>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text" 
              id="name" 
              name="user_name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input 
              type="email" 
              id="email" 
              name="user_email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
