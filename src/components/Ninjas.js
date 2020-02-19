import React from "react";

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div key={ninja.id} className="ninja">
        <h4>Name: {ninja.name}</h4>
        <h4>Age: {ninja.age}</h4>
        <h4>Belt: {ninja.belt}</h4>
      </div>
    );
  });

  return <div>{ninjaList}</div>;
};

export default Ninjas;
