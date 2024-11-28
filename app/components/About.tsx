import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="./1.jpg" // Replace with your image path in the "public" folder
            alt="About Me"
            className="rounded-lg shadow-lg"
            width={384} // Adjust width as needed (e.g., 384px for w-96)
            height={384} // Adjust height as needed (e.g., 384px for w-96)
            priority // Ensures image is loaded immediately (useful for critical images)
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold mb-4">Hi, I am <span className="text-lime-600">Anuj Kothiyal</span></h2>
          <p className="text-gray-700 text-lg mb-4">
          I am a passionate Data Analyst skilled in transforming complex datasets into actionable insights. 
          I specialize in data cleaning, statistical analysis, and creating visualizations to help businesses make informed decisions. 
          Always eager to learn and explore new tools, I’m committed to staying at the forefront of data analytics.
          </p>
          <p className="text-gray-700 text-lg">
            When I’m not coding, you can find me reading, learning about AI, 
            or working on personal projects. Let’s connect and build something 
            amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
