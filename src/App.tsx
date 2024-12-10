import Home from "./pages/Home/Home"
import "./app.css"
import Watch from "./pages/Watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGenres } from "./apiCalls/genres";
import { UserType } from "./types/user";


function App() {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const loadUser = async () => {
      const localUser = localStorage.getItem("user");
      const user = localUser ? JSON.parse(localUser) : null
      setUser(user)
    }
    loadUser();
  }, [])

  const fetchGenres = async () => {
    const data = await getGenres();
    localStorage.setItem("genres", JSON.stringify(data));
  }

  if (user) {
    fetchGenres();
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Navigate to={"/login"} /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to={"/"} />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch/:id" element={<Watch />} />
          </>
        )}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
