import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const Navigate = useNavigate();

  const handleSaveState = (currentPage) => {
    localStorage.setItem("currentPage", currentPage);
  };

  return (
    <nav className="my-8">
      <div className="container  text-center">
        <p className="">Navigation</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Button
              onClick={() => {
                handleSaveState("/");
                Navigate("/");
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/about");
                Navigate("/about");
              }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/fase1");
                Navigate("/fase1");
              }}
            >
              Fase 1
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                handleSaveState("/fase2");
                Navigate("/fase2");
              }}
            >
              Fase 2
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
