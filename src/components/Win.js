import { useState } from "react";
import "../styles/Win.css";

function Win() {
  return (
    <section id="Win">
      <h1>Congratulations! You've Clicked all the cards!</h1>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Restart Game
      </button>
    </section>
  );
}

export default Win;
