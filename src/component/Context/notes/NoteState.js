import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const State = {
    name: "pppppppp",
  };

  return (
    <NoteContext.Provider value={State}>{props.childern}</NoteContext.Provider>
  );
};
export default NoteState;
