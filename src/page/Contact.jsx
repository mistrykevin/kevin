import React from "react";
import { Mail, MapPin, Linkedin, Briefcase } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Simple Validation
    if (!name || !email || !message) {
      setStatus("All fields are required.");
      return;
    }

    emailjs
      .sendForm(
        "service_wumixs2",
        "template_0hj6l53",
        form.current,
        "3xaLYi0zR3DoV1gMs",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-br from-blue-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let’s connect and build scalable solutions for the cloud era. I’m
            open to collaboration and opportunities.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Let’s Build Something Meaningful
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether it's a full stack project, a cloud-based application, or a
              product-focused collaboration — I am always interested in solving
              real-world problems through technology.
            </p>

            <div className="space-y-5 text-gray-700">
              {/* Email */}
              <a
                href="mailto:mistrykevin1774@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Mail size={20} />
                mistrykevin1774@gmail.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kevin-mistry-89969b2b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Linkedin size={20} />
                kevin mistry
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/place/India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <MapPin size={20} />
                India
              </a>

              {/* Work Status */}
              <div className="flex items-center gap-3">
                <Briefcase size={20} />
                Open to Entry-Level & Cloud-Focused Roles
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-xl"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-gray-600">{status}</p>
            )}

          </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;