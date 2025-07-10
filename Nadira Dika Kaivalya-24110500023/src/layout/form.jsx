import React from "react";
import Button from "../components/button";

const Form = () => {
  const data = [
    {
      id: 1,
      title: "Name",
      placeholder: "Name",
      type: "text",
      name: "name",
    },
    {
      id: 2,
      title: "Email",
      placeholder: "Email",
      type: "email",
      name: "email,"
    },
    {
      id: 3,
      title: "Subject",
      placeholder: "For web design work Enquire",
      type: "subject",
      name: "subject",
    },
    {
      id: 4,
      title: "Message",
      placeholder: "Type your Message",
      type: "textarea",
      name: "message",
    },
  ];

  return (
    <form className="card-form" action="https://formspree.io/f/xyzjklra" method="POST">
      <h1>Let’s build something cool together</h1>

      {data.map((items, index) => {
        return items.type === "textarea" ? (
          <div key={index} className="input">
            <label htmlFor={items.id}>{items.title}</label>
            <textarea
              name={items.name}
              placeholder={items.placeholder}
              id={items.id}
            />
          </div>
        ) : (
          <div key={index} className="input">
            <label htmlFor={items.id}>{items.title}</label>
            <input
              type={items.type}
              namme={items.name}
              placeholder={items.placeholder}
              id={items.id}
            />
          </div>
        );
      })}
      <button type="submit" className="button-dark">
        submit
        </button>
        </form>
  );
};

export default Form;
