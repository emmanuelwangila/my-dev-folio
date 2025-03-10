import React from "react";
import Image from "next/image";
import forlio from "../public/forlio.jpg";
import tender from "../public/tender.jpg";
import anime from "../public/anime.jpg";
import manu from "../public/manu.jpg";
import laptop from "../public/laptop.jpg";
import ayepo from "../public/ayepo-logo.jpg";
import kaziquest from "../public/KaziQuest.png";

const projects = [
  {
    id: 1,
    title: "3D Meta",
    image: forlio,
    link: "https://metacom.vercel.app/",
    description: "A 3D Meta Landing Page for Virtual Reality (Vr)",
  },
  {
    id: 2,
    title: "TenderHub",
    image: tender,
    link: "https://mern-tender-system.onrender.com/",
    description:
      "Tender is a platform for managing and submitting tenders online.",
  },
  {
    id: 3,
    title: "Anime",
    image: anime,
    link: "https://animation-clone-xi.vercel.app/",
    description:
      "Anime is a streaming service for watching anime series and movies.",
  },
  {
    id: 4,
    title: "ToDo ",
    image: manu,
    link: "https://pinia-tasks-iota.vercel.app/",
    description: "An application for to do tasks based on priority",
  },
  {
    id: 5,
    title: "KaziQuest",
    image: kaziquest,
    link: "https://kaziquest.com/",
    description:
      " KaziQuest is a job search platform connecting job seekers with employers",
  },
  {
    id: 6,
    title: "Ayepo Africa",
    image: ayepo,
    link: "https://ayepoafrica.org/",
    description:
      "Ayepo Africa is an Organization for youth empowerment and providing support to youth programs ",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 min-h-screen">
      <div className="mb-8">
        <h1 className="text-blue-500 text-3xl font-sans  font-bold">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <div
              className={`w-full h-48 ${
                project.title === "KaziQuest" ? "bg-blue-500" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold flex justify-center  font-sans text-teal-600 border border-b-2 rounded-md">
                {project.title}
              </h3>
              <p className="text-blue-500 font-sans ">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 hover:text-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
