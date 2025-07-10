import React from "react";
import work0 from "../assets/work-0.jpeg";
import work1 from "../assets/work-1.jpeg";
import work2 from "../assets/work-2.jpeg";
import work3 from "../assets/work-3.jpeg";
import work4 from "../assets/work-4.jpeg";
import work5 from "../assets/work-5.jpeg";
import work6 from "../assets/work-6.jpeg";
import work7 from "../assets/work-7.jpeg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      images: [
        {
          name: "work 0",
          image: work0,
        },
        {
          name: "work 1",
          image: work1,
        },
        {
          name: "work 2",
          image: work2,
        },
        {
          name: "work 3",
          image: work3,
        },
        {
          name: "work 4",
          image: work4,
        },
        {
          name: "work 5",
          image: work5,
        },
        {
          name: "work 6",
          image: work6,
        },
        {
          name: "work 7",
          image: work7,
        },
      ],
    },
  ];

  return (
    <section className="card-images" id="work">
      <div className="marquee-track">
        {[...Array(2)].map((_, repeatIndex) => (
          <figure key={repeatIndex}>
            {data.map((items, index) =>
              items.images.map((item, subIndex) => (
                <div key={`${repeatIndex}-${index}-${subIndex}`}>
                  <img src={item.image} alt={item.name} />
                </div>
              ))
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
