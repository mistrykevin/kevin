import React from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Full Stack Developer exploring cloud-native architecture,
            product thinking, and real-world problem-solving.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side - Description */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Building Scalable Solutions for the Cloud Era
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I am currently exploring Full Stack Development with a strong 
              focus on Cloud Computing and modern application architecture. 
              My goal is to design scalable, efficient, and business-driven 
              digital solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I believe in understanding real-world business problems before 
              writing code. My approach combines technical skills, product 
              thinking, and system design to create impactful applications.
              My projects are currently in progress, built with a long-term 
              production-ready mindset.
            </p>
          </div>

          {/* Right Side - Highlight Cards */}
          <div className="grid gap-6">

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Full Stack Development
              </h4>
              <p className="text-gray-600">
                Designing responsive frontend interfaces and scalable backend 
                APIs with modern technologies.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Cloud Computing
              </h4>
              <p className="text-gray-600">
                Learning deployment strategies, Azure services, and building 
                applications ready for cloud environments.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Product Thinking
              </h4>
              <p className="text-gray-600">
                Solving real business problems by focusing on user needs, 
                scalability, and long-term impact.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;