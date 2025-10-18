import React from "react";

export default function Formcomponent() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </form>
    </div>
  );
}
