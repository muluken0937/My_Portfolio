function Projects() {
    const projects = [
      { name: "Real Estate ERP", description: "A complete ERP system for real estate management.", link: "#" },
      { name: "Inventory System", description: "A role-based inventory management system.", link: "#" },
      { name: "Drug Finder App", description: "A mobile app to locate drugs in pharmacies.", link: "#" }
    ];
  
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg bg-white shadow">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  