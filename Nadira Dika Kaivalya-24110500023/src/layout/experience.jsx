import React from "react";
import Skills from "./Skills";

const Experience = () => {
  const data = [
    {
      id: 1,
      title: "Amaranthy",
      path: "",
      skill: ["Nail Art", "Manicures", "customer service"],
    },
    {
      id: 2,
      title: "Luxcia Studio",
      path: "",
      skill: ["Nail Art", "Editing", "Media Trends"],
    },
    {
      id: 3,
      title: "Inspirator Kebaikan by Mizan Amanah-Internship",
      path: "",
      skill: ["Design", "Content Editor", "Social Media"],
    },
  ];

  return (
    <section className="card-contet" id="work">
      <div className="row-content-left">
        <Skills />

      </div>
      <div className="row-content-right experience">
        <h1 className="title">Recent Work</h1>
        {data.map((items, index) => {
          return (
            <figure key={index} className="card-experience">
              <section>
                <h1>{items.title}</h1>
                <div>
                  {items.skill.map((item, idx) => (
                    <p key={idx}>
                      {item}
                      <span>-</span>
                    </p>
                  ))}
                </div>
              </section>
              
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
