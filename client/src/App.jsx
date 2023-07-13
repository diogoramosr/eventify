import { BrowserRouter } from "react-router-dom";

import Routes from "./routes.jsx";
import AuthProvider from "./contexts/auth.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
