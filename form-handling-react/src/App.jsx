import React from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.js";

function App() {
  return (
    <div>
      <h1>User Registration Forms</h1>
      <RegistrationForm />
      <hr style={{ margin: "2rem 0" }} />
      <FormikForm />
    </div>
  );
}

export default App;
