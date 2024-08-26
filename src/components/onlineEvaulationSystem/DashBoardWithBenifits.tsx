import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import ADMIN_DASH_SVG from "../../assets/illustrations/ADMIN_DASH_SVG.svg";
import STUDENT_DASH_SVG from "../../assets/illustrations/STUDENT_DASH_SVG.svg";

export const DashBoardWithBenifits = () => {
  const DASHBOARD_DATA = [
    {
      type: "ADMIN_DASHBOARD",
      data: [
        {
          text: "Intuitive Navigation: Effortlessly access and manage all exam-related tasks with a user-friendly interface designed for ease of use.",
        },
        {
          text: "Real-Time Analytics: Monitor exam performance and candidate progress with live data and insights at your fingertips.",
        },
        {
          text: "Customizable Reports: Generate detailed reports tailored to your organization’s needs, simplifying the evaluation process.",
        },
        {
          text: "Centralized Management: Manage all exams, candidates, and settings from a single, centralized dashboard, streamlining the administration process.",
        },
      ],
    },
    {
      type: "STUDENT_DASHBOARD",
      data: [
        {
          text: "Easy Access to Exams: Quickly view and access upcoming and past exams with an intuitive, student-friendly interface.",
        },
        {
          text: "Instant Notifications: Receive real-time alerts for exam schedules, results, and important updates directly on your dashboard.",
        },
        {
          text: "Personalized Study Plans: Get tailored study recommendations and track your preparation progress all in one place.",
        },
        {
          text: "Performance Insights: View detailed analytics of your exam results, helping you identify strengths and areas for improvement.",
        },
      ],
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardTitle className="py-6 px-4 text-xl lg:px-16 lg:text-2xl font-semibold">
        Real-Time Dashboards for Seamless Digital Evaluation for Administrators
        and Students
      </CardTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-left p-4">
        <div>
          <h1 className="text-xl font-semibold">
            Dashboards for Administrators
          </h1>
          <div className="pt-4">
            <ul className="flex flex-col list-disc gap-2">
              {DASHBOARD_DATA[0].data.map((point: { text: string }, index) => (
                <div key={index} className="pl-4">
                  <li key={index} className="font-sm text-slate-500">
                    {point.text}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <img src={STUDENT_DASH_SVG} className="order-first md:order-last" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-left p-4">
        <img src={ADMIN_DASH_SVG} />
        <div>
          <h1 className="text-xl font-semibold">Dashboards for Students</h1>
          <div className="pt-4">
            <ul className="flex flex-col list-disc gap-2">
              {DASHBOARD_DATA[1].data.map((point: { text: string }, index) => (
                <div key={index} className="pl-4">
                  <li key={index} className="font-sm text-slate-500">
                    {point.text}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button>Schedule Demo</Button>
    </Card>
  );
};
