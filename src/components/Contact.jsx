import React, { useMemo, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactDetails, services } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const serviceOptions = useMemo(() => services.map((service) => service.title), []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">Inquiry</p>
          <h2>Tell us about the celebration.</h2>
          <p>
            Share your wedding date, venue, and the moments you already know you never want to forget. We will reply with availability and a tailored collection.
          </p>
          <div className="contact-list">
            <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}>
              <Phone size={18} aria-hidden="true" />
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`}>
              <Mail size={18} aria-hidden="true" />
              {contactDetails.email}
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {contactDetails.location}
            </span>
          </div>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit} data-reveal>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="name@example.com" required />
          </label>
          <label>
            Wedding date
            <input name="date" type="date" required />
          </label>
          <label>
            Interested service
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select a collection
              </option>
              {serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="form-wide">
            Message
            <textarea name="message" rows="5" placeholder="Venue, guest count, traditions, and anything you want us to know" />
          </label>
          <button className="button button-primary form-wide" type="submit">
            Send Inquiry
            <MessageCircle size={18} aria-hidden="true" />
          </button>
          {submitted ? <p className="form-note form-wide">Thank you. Your inquiry is ready for follow-up.</p> : null}
        </form>
      </div>
    </section>
  );
}
