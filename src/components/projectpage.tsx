import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "To Do List",
    description: "Web untuk membuat to do list",
    imageUrl: "/todo.png",
    previewLink: "#",
    repoLink: "#",
    altText: "Todo List",
  },
  {
    title: "FayFood Salad",
    description: "Web produk salad",
    imageUrl: "/umkm.png",
    previewLink: "https://umkm-fayfood.vercel.app/",
    repoLink: "#",
    altText: "FayFood Salad",
  },
  {
    title: "Idol Company",
    description: "Web Company Profile",
    imageUrl: "/company-profile.png",
    previewLink: "https://idol-group-company.vercel.app/",
    repoLink: "#",
    altText: "Idol Company",
  },
  {
    title: "Coffee Shop",
    description: "Web produk kopi",
    imageUrl: "/kopi.png",
    previewLink: "https://coffee-shop-ten-woad.vercel.app/",
    repoLink: "#",
    altText: "Coffee Shop",
  },
];

const Projectpage = () => {
  return (
    <section
      id="project"
      className="bg-zinc-800 text-white pt-24 pb-10 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-screen mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">My Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={project.imageUrl}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.altText}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    onClick={() => window.open(project.previewLink)}
                  >
                    Preview →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-full text-white text-xs font-bold border border-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.repoLink)}
                  >
                    Repository
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectpage;
