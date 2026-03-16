"use client";

const imageLogos = [
  { src: "/icons/aws.svg", name: "AWS" },
  { src: "/icons/Postman.png", name: "Postman" },
  { src: "/icons/Azure Devops.png", name: "Azure DevOps" },
  { src: "/icons/Slack.png", name: "Slack" },
  { src: "/icons/Python.png", name: "Python" },
  { src: "/icons/Git.png", name: "Git" },
  { src: "/icons/GitHub.png", name: "GitHub" },
  { src: "/icons/sql.png", name: "SQL" },
  { src: "/icons/Swagger.png", name: "Swagger" },
  { src: "/icons/TypeScript.png", name: "TypeScript" },
  { src: "/icons/Visual Studio Code (VS Code).png", name: "VS Code" },
  { src: "/icons/JavaScript.png", name: "JavaScript" },
  { src: "/icons/GitHub Actions.png", name: "GitHub Actions" },
  { src: "/icons/docker-mark-blue.png", name: "Docker" },
  { src: "/icons/windows.svg", name: "Windows/IIS" },
  { src: "/icons/n8n.png", name: "n8n" },
];

function tools() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[50vh] py-16 overflow-x-hidden mt-0 lg">
      <div className="text-center w-full max-w-3xl mx-auto px-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-textMain">
          Tools I Use
        </h2>
        <div className="w-16 h-[3px] bg-teal mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4 mt-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {imageLogos.map((logo, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 rounded-full border border-white/5 bg-elevated text-textMuted text-sm inline-flex items-center gap-2 hover:border-teal/30 hover:text-textMain transition-all shadow-sm cursor-default"
            >
              <img src={logo.src} className="w-4 h-4" alt="" aria-hidden="true" />
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default tools;
