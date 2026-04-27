import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div class="flex">
          <ButtonComponent content="Click" />
          <ButtonComponent content="Delete" />
          <ButtonComponent content="Save" />
        </div>
        <div class="flex">
          <ImageComponent
            url="https://placecats.com/400/400"
            alt="Cat 400x400"
          />
          <ImageComponent
            url="https://placecats.com/300/300"
            alt="Cat 300x300"
          />
          <ImageComponent
            url="https://placecats.com/500/500"
            alt="Cat 500x500"
          />
        </div>
      </section>
    </>
  );
}

export default App;
