import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { BlogsPage } from "./pages/blogsPage/BlogsPage";
import { Layout } from "./pages/layout/Layout";
import { Examinationplatform } from "./pages/examinationSolution/Examinationplatform";
import { SemesterExamPlatform } from "./pages/examinationSolution/SemesterExamPlatform";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/examinationplatform",
          element: <Examinationplatform />,
        },
        {
          path: "/semesterplatform",
          element: <SemesterExamPlatform />,
        },
      ],
    },
  ]);

  return (
    <section className="py-2 px-4 md:py-8 md:px-[25em] overflow-scroll absolute inset-0 h-full w-full backdrop-blur-lg bg-white/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
