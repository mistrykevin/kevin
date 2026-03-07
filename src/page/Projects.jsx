import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real-world inspired applications focused on solving business problems
            with scalable full stack and cloud-ready architecture.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                S Interior Designer
              </h3>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 text-sm rounded-full">
                In Progress
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              A full stack business web application designed for an interior
              design company to establish structured digital presence.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Problem:</h4>
              <p className="text-gray-600 text-sm">
                Small interior businesses lack structured online presence,
                project showcase, and client engagement systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Solution Approach:</h4>
              <p className="text-gray-600 text-sm">
                Modern responsive website with service showcase, blog system,
                scalable backend, and cloud-ready deployment planning.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Customer Management System (CRM)
              </h3>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 text-sm rounded-full">
                In Progress
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              A scalable CRM system built to solve customer tracking and
              business workflow management challenges.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Problem:</h4>
              <p className="text-gray-600 text-sm">
                Many small businesses struggle with managing customer data,
                follow-ups, and centralized information systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Solution Approach:</h4>
              <p className="text-gray-600 text-sm">
                Structured database design, scalable API architecture,
                and cloud deployment strategy for long-term growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;