import React from "react";

function Tickler() {
  function tickle() {
    alert("Teehee!");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
