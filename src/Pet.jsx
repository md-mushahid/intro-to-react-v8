import React from "react";

const Pet = (object) => {
    return (
        <div>
            <h1>{ object.name }</h1>
            <h2>{ object.animal}</h2>
            <h2>{ object.breed }</h2>
        </div>
    )
};
  
export default Pet;