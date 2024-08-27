import { IconType } from "react-icons";
import { PiExamBold } from "react-icons/pi";
import {
  FaChalkboardTeacher,
  FaCode,
  FaLaptop,
  FaRegLightbulb,
} from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineAssessment } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { GoTools } from "react-icons/go";

const onlineExaminationData: {
  icon: IconType;
  title: string;
  href?: string;
  description: string;
  listItems?: { name: string; link: string }[];
}[] = [
  {
    icon: PiExamBold,
    title: "Online Examination Solution",
    description: "Conduct scalable remote exams",

    listItems: [
      {
        name: "Examination Platform",
        link: "/examinationplatform",
      },
      {
        name: "Entrance Exam",
        link: "/entranceexam",
      },
      {
        name: "Semester Exam",
        link: "/semesterplatform",
      },
      {
        name: "Online Evaluation System",
        link: "/onlineevaulationsystem",
      },
    ],
  },
  {
    icon: FaChalkboardTeacher,
    title: "Remote Proctoring Solution",
    description: "AI-based proctoring suite",

    listItems: [
      {
        name: "Secure Proctor",
        link: "/secureproctor",
      },
    ],
  },
  {
    icon: TbCertificate,
    title: "Online Certification Program",
    href: "/onlinecertplatform",
    description: "Run online certification programs",
  },
];
const remoteProctoringData: {
  icon: IconType;
  title: string;
  href?: string;
  description: string;
  listItems?: { name: string; link: string }[];
}[] = [
  {
    icon: MdOutlineAssessment,
    title: "Talent Assessments",
    description: "Assess your talent holistically",
    listItems: [
      {
        name: "Psychometric Tests",
        link: "/psychometrictesting",
      },
      {
        name: "Behavioral Tests",
        link: "/behavioraltesting",
      },
      {
        name: "Aptitude Tests",
        link: "/aptitudetesting",
      },
      {
        name: "Technical Tests",
        link: "/technicaltesting",
      },
    ],
  },
  {
    icon: FaCode,
    title: "Coding Assessments",
    description: "Find the best coders efficiently",
    listItems: [
      {
        name: "Coding Skills Tests",
        link: "",
      },
    ],
  },
  {
    icon: FaPeopleGroup,
    title: "Lateral Hiring",
    description: "Assessments to hire the best talent",
    listItems: [
      {
        name: "Technical Hiring",
        link: "/technicalhiring",
      },
      {
        name: "Sales Hiring",
        link: "/saleshiring",
      },
    ],
  },
  {
    icon: SiGoogleclassroom,
    title: "Campus Hiring",
    description: "Hire right talent from right campus",
    listItems: [
      {
        name: "Campus Intelligence",
        link: "/campusintelligence",
      },
      {
        name: "Student Engagement",
        link: "/studentengagement",
      },
      {
        name: "Screening Engagement",
        link: "/screeningengagement",
      },
    ],
  },
  {
    icon: FaRegLightbulb,
    title: "Hackathos and Ideathons",
    description: "Accelerate innovations",
    listItems: [
      {
        name: "For Corporates",
        link: "/corporatehackathon",
      },
      {
        name: "For Community",
        link: "/communityhackathon",
      },
      {
        name: "Screening Engagement",
        link: "/screeningengagement",
      },
    ],
  },
  {
    icon: VscFeedback,
    title: "360-Degree Feedback",
    href: "/feedbacktool",
    description: "Easy to use feedback tool",
  },
];
const howItWorksData: {
  icon: IconType;
  title: string;
  href?: string;
  description: string;
  listItems?: { name: string; link: string }[];
}[] = [
  {
    icon: GoTools,
    title: "Tools",
    href: "/tools",
    description:
      "How we create the best and innpvative tools in this education.",
  },
  {
    icon: FaLaptop,
    title: "Technology",
    href: "/technology",
    description:
      "How we use the best in class technology to create the best experience for your organization.",
  },
];

export { howItWorksData, remoteProctoringData, onlineExaminationData };
