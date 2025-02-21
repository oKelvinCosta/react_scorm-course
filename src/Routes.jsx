import { HashRouter, Route, Routes as RoutesViews } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

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
        <Navigation />
        <RoutesViews>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </RoutesViews>
      </HashRouter>
    </>
  );
}
