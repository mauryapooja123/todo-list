import React from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function About() {
  const a = useContext(noteContext);
  return (
    <>
      <p> {a}</p>
    </>
  );
}
export default About;
