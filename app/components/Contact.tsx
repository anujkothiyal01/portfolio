import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing social media icons

export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out to me through any of the platforms below:
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anujkothiyal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anujkothiyal01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 hover:text-black transition"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/anuj__kothiyal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-400 hover:text-blue-600 transition"
          >
            <FaTwitter />
          </a>

          {/* Gmail */}
          <a
            href="mailto:your-email@example.com"
            className="text-3xl text-red-600 hover:text-red-800 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
