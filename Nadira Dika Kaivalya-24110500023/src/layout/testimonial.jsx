import React from "react";
import test1 from "../assets/test-1.jpeg";
import test2 from "../assets/test-2.jpeg";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      image: test1,
      desc: "Nadira is super humble and friendly, making the whole experience feel like catching up with old friends. if you're looking for a new beauty spot, you should definitely come here. you'll leave happy, pampered amd looking fab!!",
      name: "S******i A****a",
      job: "Customer (based on google review)",
    },
    {
      id: 2,
      image: test2,
      desc: "Will definitely go back here for another appointment with nadira. the service is so nice and she so helpful. it's a two way communication when it comes to the process while she gave some suggestions for the design to match with our preferences .",
      name: "D**a E***h",
      job: "Customer (based on google review)",
    },
  ];

  return (
    <section className="card-contet">
      <div className="row-content-left">
        <div className="row-content-left">
          <h1 className="title">Testimonial</h1>
        </div>
      </div>
      <div className="row-content-right testimonial">
        {data.map((item, index) => {
          return (
            <figure key={index} className="card-testimonial">
              <p className="description">{item.desc}</p>
              <section>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.job}</p>
                </div>
              </section>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
