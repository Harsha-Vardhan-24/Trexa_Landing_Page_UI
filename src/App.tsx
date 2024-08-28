import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";

function App() {
  return (
    <section className="py-2 md:py-4 px-4 md:px-[10%] lg:px-[5%] xl:px-[10%] 2xl:px-[20%] overflow-scroll absolute inset-0 h-full w-full backdrop-blur-lg bg-white/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
