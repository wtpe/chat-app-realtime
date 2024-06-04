import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { Container } from "react-bootstrap";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
      <NavBar />
      <Container className="text-secondary">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </ChatContextProvider>
  );
}

export default App;
