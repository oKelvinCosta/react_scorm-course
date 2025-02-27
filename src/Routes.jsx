import { HashRouter, Route, Routes as RoutesViews } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import ProgressBarCourse from "./components/ProgressBarCourse";

export default function Routes() {
  const myRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
  return (
    <>
      <HashRouter>
        <ProgressBarCourse />
        <Navigation />
        <RoutesViews>
          {myRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </RoutesViews>
      </HashRouter>
    </>
  );
}
