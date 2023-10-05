import React from "react";

const App = () => {
  const showAlert = () => alert("Button clicked!");
  return (
    <section>
      <h1>User profile</h1>
      <button onClick={() => showAlert()} type="button">
        Button in React
      </button>
    </section>
  );
};

export default App;
