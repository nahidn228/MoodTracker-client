import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Navigation</span>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/log-mood" className="link link-hover">
          Log Mood
        </a>
        <a href="/about" className="link link-hover">
          About
        </a>
        <a href="/profile" className="link link-hover">
          Profile
        </a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <a href="mailto:info@moodtracker.com" className="link link-hover">
          info@moodtracker.com
        </a>
        <a href="tel:+1234567890" className="link link-hover">
          +1 (234) 567-890
        </a>
        <p>123 Mood Street, Wellness City</p>
      </div>
      <div>
        <span className="footer-title">Follow Us</span>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FaFacebook className="text-2xl hover:text-primary" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FaTwitter className="text-2xl hover:text-primary" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FaInstagram className="text-2xl hover:text-primary" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FaLinkedin className="text-2xl hover:text-primary" />
          </a>
        </div>
      </div>
      <div className="mt-6 border-t border-base-300 w-full text-center pt-4">
        <p>&copy; 2024 MoodTracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
