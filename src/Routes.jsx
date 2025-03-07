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

// Route configuration component
function RouteConfig() {
  const myRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/fase1", element: <Fase1 /> },
    { path: "/fase2", element: <Fase2 /> },
  ];

  return (
    <>
      <RoutesViews>
        {myRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </RoutesViews>
    </>
  );
}

// Main AppRoutes component
function AppRoutes() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to handle navigation based on saved page in localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      navigate(savedPage);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    // setIsLoading(false);
  }, [navigate]);

  // Show loading component while loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
      <RouteConfig /> {/* Use the RouteConfig component */}
    </>
  );
}

// Main Routes component with HashRouter
export default function Routes() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
