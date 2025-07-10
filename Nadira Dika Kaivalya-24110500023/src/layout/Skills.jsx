import React from "react";
import capcutIcon from "../assets/capcut.jpeg";
import canvaIcon from "../assets/canva.jpeg";
import ibisIcon from "../assets/ibis.jpeg";
import mswordIcon from "../assets/msword.jpeg";
import pptIcon from "../assets/ppt.jpeg";
import phpIcon from "../assets/php.jpeg";
import sqlIcon from "../assets/sql.jpeg";

const Skills = () => {
    const skillsData = [
    {
        id: 1,
        name: "Capcut",
        icon: capcutIcon,
    },
    {
        id: 2,
        name: "Canva",
        icon: canvaIcon,
    },
    {
        id: 3,
        name: "Ibis",
        icon: ibisIcon,
    },
    {
      id: 4,
      name: "Msword",
      icon: mswordIcon,
    },
    {
      id: 5,
      name: "Ppt",
      icon: pptIcon,
    },
    {
      id: 6,
      name: "Php",
      icon: phpIcon,
    },
    {
      id: 7,
      name: "Sql",
      icon: sqlIcon,
    },
    ];

    return(
        <>
        <h1 className="title">Skills</h1>
        <div className="skills-grid">
            {skillsData.map((skillItem) => (
                <div key={skillItem.id} className="skill-item">
            <img src={skillItem.icon} alt={skillItem.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

           