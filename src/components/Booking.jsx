import React from 'react';
import { CalendarDays, Mail, Phone, MessageCircle } from 'lucide-react';
import { contactDetails, services } from '../constants';
import SectionHeading from './SectionHeading';

export default function Booking() {
  return (
    <section id="booking" className="section booking-section">
      <div className="booking-layout">
        <div className="booking-copy">
          <SectionHeading
            align="left"
            eyebrow="Book Us"
            title="Reserve your date"
            copy="Tell us about your wedding, venue, rituals, and the kind of memories you want preserved. We will reply with availability and a tailored coverage plan."
          />

          <div className="booking-contact" data-reveal>
            <a
              href={`https://wa.me/${contactDetails.studioLine.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22} aria-hidden="true" />
              <span>
                WhatsApp Us Now
                <strong>{contactDetails.studioLine}</strong>
              </span>
            </a>
            <a href={`tel:${contactDetails.alternatePhone.replaceAll(' ', '')}`}>
              <Phone size={22} aria-hidden="true" />
              <span>
                Call Us Now
                <strong>{contactDetails.alternatePhone}</strong>
              </span>
            </a>
            <a href={`mailto:${contactDetails.email}`}>
              <Mail size={22} aria-hidden="true" />
              <span>
                Mail Us Now
                <strong>{contactDetails.email}</strong>
              </span>
            </a>
          </div>
        </div>

        <form className="booking-form" action="https://formspree.io/f/mwpeyroz" method="POST" data-reveal>
          <label>
            Your Name
            <input type="text" name="Name" placeholder="Your name" required />
          </label>
          <label>
            Your Email
            <input type="email" name="email" placeholder="name@example.com" required />
          </label>
          <label>
            Mobile
            <input type="tel" name="Mobile" placeholder="+91" required />
          </label>
          <label>
            Choose Service
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select service
              </option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Wedding Date
            <input type="date" name="date" required />
          </label>
          <label>
            Location
            <input type="text" name="location" placeholder="City or venue" required />
          </label>
          <label className="form-wide">
            Your Story
            <textarea name="details" rows="5" placeholder="Tell us about your rituals, events, guest count, and ideas" />
          </label>
          <button className="button button-primary form-wide" type="submit">
            Book Now
            <CalendarDays size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
