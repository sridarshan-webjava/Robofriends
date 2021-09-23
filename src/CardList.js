import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(user => {
        const { name, email, id } = user;
        return <Card key={id} name={name} email={email} id={id} />;
      })}
    </div>
  );
};

export default CardList;
