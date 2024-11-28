export default function Skills() {
    const skills = [
      {
        category: "Programming Languages",
        items: ["Python", "Java", "C++"],
      },
      {
        category: "Web Development",
        items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      },
      {
        category: "Tools & Technologies",
        items: ["Git", "Docker", "Postman", "Figma", "Flask"],
      },
    ];
  
    return (
      <section id="skills" className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {skillCategory.category}
                </h3>
                {/* Flex layout for badges with spacing */}
                <div className="flex flex-wrap gap-4"> {/* Adds space between badges */}
                  {skillCategory.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-gray-700 text-lg bg-gray-200 px-4 py-2 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  