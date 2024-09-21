import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.length === 0 ? (
        <p>No people to display</p>
      ) : (
        people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })
      )}
    </>
  );
};

export default List;
