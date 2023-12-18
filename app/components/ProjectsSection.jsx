"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Airbnb react native clone",
    description: "Project 1 description",
    image: "https://private-user-images.githubusercontent.com/93613316/286756834-4d565767-7364-4ac5-9181-d8599fc6c573.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjU4NDQsIm5iZiI6MTcwMjkyNTU0NCwicGF0aCI6Ii85MzYxMzMxNi8yODY3NTY4MzQtNGQ1NjU3NjctNzM2NC00YWM1LTkxODEtZDg1OTlmYzZjNTczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NTIyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNjNmRiMTQxYjhkZjQ3NWNlM2Q5ZjY3MTI2NzQzZmE1YTgyOWY4ODkxMDQ5MGJlMjE2OTQ3NWEzNzhmNGI5ZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hcscAv7n4pnDfcP5aKltg1kkxqbTmAbrnMZ7Fw1kuWg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ham12-3/Airbnb-reactnative-clone.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Anglaar Blog website",
    description: "A website that allows you to write blogs",
    image: "https://private-user-images.githubusercontent.com/93613316/285680025-27f83809-120f-4170-86f4-0e6b9b30c381.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjU4ODIsIm5iZiI6MTcwMjkyNTU4MiwicGF0aCI6Ii85MzYxMzMxNi8yODU2ODAwMjUtMjdmODM4MDktMTIwZi00MTcwLTg2ZjQtMGU2YjliMzBjMzgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NTMwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTllZDM1ZmFiZjIwMTk1MmIxZjczZWU4MjcyNmI5MTZhZDlkZDk3YmFmYWFjN2ZmMjI5MTBlYTQ2NTBmMjZhOTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.KThg1IHh-GSqCZts9SrWRcCP-m5l9lmj8rgghBiAG88",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/next-blog",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Clothing E-commerce Application",
    description: "web-app where you can order clothes",
    image: "https://private-user-images.githubusercontent.com/93613316/278710664-62b1a377-bcf9-4025-98c1-d3b3358b6cd4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjU1NTcsIm5iZiI6MTcwMjkyNTI1NywicGF0aCI6Ii85MzYxMzMxNi8yNzg3MTA2NjQtNjJiMWEzNzctYmNmOS00MDI1LTk4YzEtZDNiMzM1OGI2Y2Q0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NDczN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRkMjA1MzBlYWM1NTFlYTVjZWQ0Yjc5ZTExZmVkMmE0MGNmN2ZkMDg3MTk4ZjUyZTU5NTA0M2E3YTY4NGEzODEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.91V_8t_WLYZ7IvbrZy0I9lDIYKUViei2tOo8aNbQpSg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/clothing-ecommerce",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Mobile app similar to Delivroo",
    image: "https://private-user-images.githubusercontent.com/93613316/278715296-fd77b322-416a-44ef-85b6-5599a49a0520.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjU3NDMsIm5iZiI6MTcwMjkyNTQ0MywicGF0aCI6Ii85MzYxMzMxNi8yNzg3MTUyOTYtZmQ3N2IzMjItNDE2YS00NGVmLTg1YjYtNTU5OWE0OWEwNTIwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NTA0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0OGQxYTE3MDE3YjA2ZDNkNDA2NjQyN2RhMjA4YzdkZjUzYTM1ZDg5NTNjOTRkZjM1M2I2Zjg3NTM3NzA0NGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zxP3qSTuByrTrLgVYmzfYy-E2Wmo6xsxDcK0lgIFvPY",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ham12-3/delivroo-clone-react-native",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Taxi Ordering Mobile app",
    description: "A mobile app similar to the Uber mobile app",
    image: "https://private-user-images.githubusercontent.com/93613316/278717276-623516fa-00a5-416c-ace3-882a93974882.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjUxMjMsIm5iZiI6MTcwMjkyNDgyMywicGF0aCI6Ii85MzYxMzMxNi8yNzg3MTcyNzYtNjIzNTE2ZmEtMDBhNS00MTZjLWFjZTMtODgyYTkzOTc0ODgyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg1OGZjNThjYjIzZWE2MzU2NjQyMzM5MjM1ZDY3MGM0ZTBmOWY2ZGE4ODhmOWU3Y2Q3OGIwMjk3MGI2ZTRiNDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.aY02JN2yhTkxBkqGsxV8txzW7nMrftvT-6RnAVECrVk",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ham12-3/Uber-Clone-react-native",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ive-book social media web-app",
    description: "A social media web app similar to facebook",
    image: "https://private-user-images.githubusercontent.com/93613316/278741233-8fee43a2-3a26-4c30-bb19-457bdbfd6494.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjUyMjEsIm5iZiI6MTcwMjkyNDkyMSwicGF0aCI6Ii85MzYxMzMxNi8yNzg3NDEyMzMtOGZlZTQzYTItM2EyNi00YzMwLWJiMTktNDU3YmRiZmQ2NDk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NDIwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMwM2Q1NjRiNzQ2ZTNmMzYzNTZlZWY5MGQ0MjA4NzA1YjRlMjkyODM5ZjVhMjNhM2JlNzE5YmJlMTUxYmJlYzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.o3yirbgjmBVOZ0XrQlZH8m0JxyL4LhRgWF0Al7W3Crw",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/facebook-frontend",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Ive-book social media app backend API",
    description: "the backend of the Ive-book social media web app",
    image: "https://private-user-images.githubusercontent.com/93613316/278740525-57706cce-4304-4004-bb0f-6f54b872ac5a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MjUzNTcsIm5iZiI6MTcwMjkyNTA1NywicGF0aCI6Ii85MzYxMzMxNi8yNzg3NDA1MjUtNTc3MDZjY2UtNDMwNC00MDA0LWJiMGYtNmY1NGI4NzJhYzVhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE4VDE4NDQxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJiZWQ2NmEzZTE5NTVmNjM4ZjI4MGYzNDM3NTc0MGE4ZGUyZTFhYWZlYTI2ODU5ZDIyZTY2ZmQ0ZTFjMDhiN2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dq1Yph3uJkrkI7Rdi4jiZWWQ3jGLXM3Jdb_XKT-ENfk",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ham12-3/facebook-clone-django-backend",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
