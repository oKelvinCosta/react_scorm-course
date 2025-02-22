import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const Navigate = useNavigate();

  return (
    <nav className="my-8">
      <div className="container  text-center">
        <p className="">Navigation</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Button onClick={() => Navigate("/")}>Home</Button>
          </li>
          <li>
            <Button onClick={() => Navigate("/about")}>About</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
