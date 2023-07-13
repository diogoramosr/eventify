import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import { AuthContext } from "./contexts/auth";

import PageHome from "./pages/Home";
import PageEvento from "./pages/Event";
import PageDetailsEvent from "./pages/DetailsEvent";
import PageSignIn from "./pages/SignIn";
import PageSignUp from "./pages/SignUp";
import PageFavorite from "./pages/Favorite";

// ROTAS PRIVADAS
import PageProfile from "./pages/Profile";
import PageUserEvents from "./pages/UserEvents";

export default function RoutesApp() {
  const { user } = useContext(AuthContext);

  function RequireAuth({ children }) {
    if (!user) {
      return <PageSignIn />;
    }
    return children;
  }

  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/event" element={<PageEvento />} />
      <Route path="/signin" element={<PageSignIn />} />
      <Route path="/signup" element={<PageSignUp />} />
      <Route path="/favorite" element={<PageFavorite />} />

      <Route path="/event/:id" element={<PageDetailsEvent />} />

      {/* ROTAS PRIVADAS */}
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <PageProfile />
          </RequireAuth>
        }
      />
      <Route
        path="/user-events"
        element={
          <RequireAuth>
            <PageUserEvents />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
