import React, { useState } from "react";
import ContactModal from "./ContactModal";
import AboutUs from "../pages/About";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false); // Modal State
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p className="text-sm text-gray-600">
              Welcome to our platform! We aim to provide the best products and
              services for our users. Feel free to contact us for more
              information.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              We are a customer-centric company committed to delivering high-quality products with excellent customer support.
              Our mission is to provide seamless shopping experiences while ensuring product satisfaction.
            </p>
            <p className="text-sm text-gray-600">
              With years of expertise in the industry, we strive to innovate and make shopping easy, fast, and enjoyable for
              our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
            <li>
                <a
                  href="/"
                  className="text-black hover:text-blue-600"
                  title="Home"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setContactModalOpen(true)} // Open Contact Modal
                  className="text-black hover:text-blue-600"
                  title="Contact Us"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-black hover:text-blue-600"
                  title="About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-black hover:text-blue-600"
                  title="FAQ"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social Media Links with Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-2xl"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 text-2xl"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-2xl"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <i>Vibe</i>. All Rights Reserved.
        </div>
      </div>
      {isContactModalOpen && (
        <ContactModal onClose={() => setContactModalOpen(false)} />
      )}
    </footer>
  );
};

export default Footer;
