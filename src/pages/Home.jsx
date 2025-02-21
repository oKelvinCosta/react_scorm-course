import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          {" "}
          count is {count}
        </Button>
      </div>

      <div className="read-the-docs ">
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. A ordem dos tratores não altera o pão duris. Suco de
          cevadiss deixa as pessoas mais interessantis. Viva Forevis aptent
          taciti sociosqu ad litora torquent.
        </p>
        <p>
          Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
          vulputate dapibus. Quem num gosta di mé, boa gentis num é. Quem num
          gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num
          tendi nada.
        </p>
      </div>
    </>
  );
}
