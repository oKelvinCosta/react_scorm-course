import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes as RoutesViews,
  useNavigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Fase1 from "./pages/Fase1";
import Fase2 from "./pages/Fase2";
import Loading from "./components/Loading";

function AppRoutes() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      navigate(savedPage);
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const myRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/fase1", element: <Fase1 /> },
    { path: "/fase2", element: <Fase2 /> },
  ];

  return (
    <>
      <Navigation />
      <RoutesViews>
        {myRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </RoutesViews>
    </>
  );
}

export default function Routes() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
