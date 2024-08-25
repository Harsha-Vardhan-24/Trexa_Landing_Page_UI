import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { BlogsPage } from "./pages/blogsPage/BlogsPage";
import { Layout } from "./pages/layout/Layout";
import { Examinationplatform } from "./pages/examinationSolution/Examinationplatform";
import { SemesterExamPlatform } from "./pages/examinationSolution/SemesterExamPlatform";
import { EntranceExam } from "./pages/examinationSolution/EntranceExam";
import { OnlineEvaulationSystem } from "./pages/examinationSolution/OnlineEvaulationSystem";
import { SecureProctor } from "./pages/examinationSolution/SecureProctor";
import { OnlineCertPlatform } from "./pages/examinationSolution/OnlineCertificationPlatform";
import { PsychometricTesting } from "./pages/hiringAndL&D/PsychometricTesting";
import { BehavioralTesting } from "./pages/hiringAndL&D/BehavioralTesting";
import { AptitudeTesting } from "./pages/hiringAndL&D/AptitudeTesting";
import { TechnicalTesting } from "./pages/hiringAndL&D/TechnicalTesting";
import { ComingSoon } from "./components/common/ComingSoon";
import { FeedbackTool } from "./pages/tools/FeedbackTool";
import { Tools } from "./pages/howItWorks/Tools";
import { Technology } from "./pages/howItWorks/Technology";
import { Pricing } from "./pages/pricing/Pricing";

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
        {
          path: "/entranceexam",
          element: <EntranceExam />,
        },
        {
          path: "/onlineevaulationsystem",
          element: <OnlineEvaulationSystem />,
        },
        {
          path: "/secureproctor",
          element: <SecureProctor />,
        },
        {
          path: "/onlinecertplatform",
          element: <OnlineCertPlatform />,
        },
        {
          path: "/psychometrictesting",
          element: <PsychometricTesting />,
        },
        {
          path: "/behavioraltesting",
          element: <BehavioralTesting />,
        },
        {
          path: "/aptitudetesting",
          element: <AptitudeTesting />,
        },
        {
          path: "/technicaltesting",
          element: <TechnicalTesting />,
        },
        {
          path: "/technicalhiring",
          element: <ComingSoon />,
        },
        {
          path: "/saleshiring",
          element: <ComingSoon />,
        },
        {
          path: "/corporatehackathon",
          element: <ComingSoon />,
        },
        {
          path: "/communityhackathon",
          element: <ComingSoon />,
        },
        {
          path: "/campusintelligence",
          element: <ComingSoon />,
        },
        {
          path: "/studentengagement",
          element: <ComingSoon />,
        },
        {
          path: "/screeningengagement",
          element: <ComingSoon />,
        },
        {
          path: "/feedbacktool",
          element: <FeedbackTool />,
        },
        {
          path: "/tools",
          element: <Tools />,
        },
        {
          path: "/technology",
          element: <Technology />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
      ],
    },
  ]);

  return (
    <section className="py-2 px-4 md:px-[10%] lg:px-[5%] xl:px-[10%] 2xl:px-[20%] overflow-scroll absolute inset-0 h-full w-full backdrop-blur-lg bg-white/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
