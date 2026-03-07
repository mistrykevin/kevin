import React from "react";

function Vision() {
  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            My <span className="text-blue-600">Vision</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Building scalable, cloud-native solutions for the future of digital products.
          </p>
        </div>

        {/* Main Vision Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side - Vision Statement */}
          <div className="grid gap-6">

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Cloud-Native Development
              </h4>
              <p className="text-gray-600">
                Designing applications ready for cloud deployment with scalable
                backend architecture and optimized database structure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Real-World Problem Solving
              </h4>
              <p className="text-gray-600">
                Understanding business challenges deeply and building structured,
                long-term digital solutions.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Continuous Growth
              </h4>
              <p className="text-gray-600">
                Improving skills in cloud computing, system design,
                performance optimization, and modern product architecture.
              </p>
            </div>

          </div>
          
          
          {/* Right Side - Vision Highlights */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Growing as a Cloud-Focused Full Stack Engineer
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              My long-term goal is to become a cloud-oriented full stack developer
              who designs scalable, secure, and production-ready applications.
              I aim to build systems that are not only functional but optimized
              for performance, scalability, and business growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In the evolving cloud era, I believe developers must think beyond
              code — understanding architecture, deployment strategies, and
              real-world business impact. My vision is to continuously grow
              in cloud architecture, distributed systems, and product-driven development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Vision;