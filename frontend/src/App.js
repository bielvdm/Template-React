import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import InitialPage from "./pages/initialPage";

function App() {

  function Login() {
    const { instance } = useMsal();
    instance.loginRedirect(loginRequest).catch(e => {
      console.error(e);
    });
  }

  return (
    <Router>
      <UnauthenticatedTemplate>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
              <Routes>
                <Route path="/" element={<InitialPage />} />
              </Routes>
      </AuthenticatedTemplate>
    </Router>
  )
}

export default App;
