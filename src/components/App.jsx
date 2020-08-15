import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          autoComplete="none"
          name="fName"
          placeholder="First Name"
          onChange={handleInput}
        />
        <input
          autoComplete="none"
          name="lName"
          placeholder="Last Name"
          onChange={handleInput}
        />
        <input
          autoComplete="none"
          name="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
