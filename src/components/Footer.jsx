import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Kevin<span className="text-blue-500">.Dev</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Building scalable full stack applications with a strong focus on 
              cloud computing and real-world problem solving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                About Me
              </li>
              <li
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                Projects
              </li>
              <li
                onClick={() => scrollToSection("vision")}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                Vision
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                Contact
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex space-x-4">
              <a
                href="https://github.com/mistrykevin"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-mistry-89969b2b2/"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mistrykevin1774@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Mail size={20} />
              </a>
            </div>

            <p className="mt-4 text-gray-400 text-sm">
              Open to full stack & cloud-focused opportunities.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Kevin Mistry. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;