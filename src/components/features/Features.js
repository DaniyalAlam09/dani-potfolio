import React from 'react'
import { FaServer, FaGlobe, FaTools, FaSearch } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiCss3, SiHtml5, SiTestinglibrary } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Building responsive and interactive user interfaces using React.js, HTML, and CSS."
          icon={<SiReact />}
        />
        <Card
          title="Backend Development"
          des="Creating robust server-side applications and APIs with Node.js and Express.js."
          icon={<SiNodedotjs />}
        />
        <Card
          title="Database Management"
          des="Managing and querying databases efficiently with MongoDB and other NoSQL databases."
          icon={<SiMongodb />}
        />
        <Card
          title="Web Hosting"
          des="Deploying and hosting web applications on various cloud platforms."
          icon={<FaGlobe />}
        />
        <Card
          title="Testing and Debugging"
          des="Ensuring the quality and performance of web applications through thorough testing and debugging."
          icon={<SiTestinglibrary />}
        />
        <Card
          title="SEO Optimization"
          des="Implementing best practices for search engine optimization to improve web visibility and ranking."
          icon={<FaSearch />}
        />
      </div>
    </section>
  );
}

export default Features
