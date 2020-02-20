import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div key={ninja.id} className="ninja">
        <h4>Name: {ninja.name}</h4>
        <h4>Age: {ninja.age}</h4>
        <h4>Belt: {ninja.belt}</h4>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          x
        </button>
      </div>
    );
  });

  return <div>{ninjaList}</div>;
};

export default Ninjas;
