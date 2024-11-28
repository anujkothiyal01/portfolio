import Image from 'next/image'; // Importing Image from next/image

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description:
        "A brief description of the first project. It involved building a responsive web application using React.",
      image: "/Blogging Application.png", // Replace with actual image path
      link: "https://project1.com", // Replace with project link
    },
    {
      title: "Project 2",
      description:
        "A data analysis project where I worked with large datasets to derive actionable insights using Python.",
      image: "/pro2.png", // Replace with actual image path
      link: "https://project2.com", // Replace with project link
    },
    {
      title: "Project 3",
      description:
        "This project focuses on building a personal portfolio using Next.js and Tailwind CSS to showcase projects.",
      image: "/Blogging Application.png", // Replace with actual image path
      link: "https://project3.com", // Replace with project link
    },
    {
      title: "Project 4",
      description:
        "This project focuses on building a personal portfolio using Next.js and Tailwind CSS to showcase projects.",
      image: "/pro2.png", // Replace with actual image path
      link: "https://project3.com", // Replace with project link
    },
  ];

  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Replacing <img> with Next.js Image component */}
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Set width for optimization
                height={300} // Set height for optimization
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
