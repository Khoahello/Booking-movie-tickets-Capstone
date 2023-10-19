import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/TicketRoom/ListChair.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Layout from "./template/Layout";
import Signup from "./pages/Signup/Signup";
import TicketRoom from "./pages/TicketRoom/TicketRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Layout>
              <DetailMovie />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/ticketroom/:id"
          element={
            <Layout>
              <TicketRoom />
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
