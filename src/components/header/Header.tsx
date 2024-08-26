import * as React from "react";
import Trexa_Logo from "../../assets/TrExa.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

const onlineExaminationData: {
  title: string;
  href?: string;
  description: string;
  listItems?: { name: string; link: string }[];
}[] = [
  {
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
    title: "Online Certification Program",
    href: "/onlinecertplatform",
    description: "Run online certification programs",
  },
];
const remoteProctoringData: {
  title: string;
  href?: string;
  description: string;
  listItems?: { name: string; link: string }[];
}[] = [
  {
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
    title: "360-Degree Feedback",
    href: "/feedbacktool",
    description: "Easy to use feedback tool",
  },
];
const howItWorksData: {
  title: string;
  href?: string;
  description: string;
  listItems?: { name: string; link: string }[];
}[] = [
  {
    title: "Tools",
    href: "/tools",
    description:
      "How we create the best and innpvative tools in this education.",
  },
  {
    title: "Technology",
    href: "/technology",
    description:
      "How we use the best in class technology to create the best experience for your organization.",
  },
];

export function Header() {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <Card className="p-2">
      <NavigationMenu className="relative w-full">
        <NavigationMenuList className="w-full grid items-center grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2">
          {/* Logo */}
          <NavigationMenuItem className="flex justify-start col-span-1">
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              <img src={Trexa_Logo} alt="Trexa Logo" className="h-6" />
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Menu Toggle Button */}
          <div className="lg:hidden sm:col-span-3 md:col-span-4 flex items-center justify-end">
            <button
              className="border border-solid border-slate-100 rounded-lg p-2"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <LuMenu />
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div
            className={`hidden lg:flex items-center gap-2 md:col-span-3 lg:col-span-6 ${
              menuToggle ? "block" : "hidden"
            }`}
          >
            {/* Online Examination */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal hover:font-semibold active:font-semibold aria-[expanded='true']:font-semibold">
                Online Examinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {onlineExaminationData.map((data) => (
                    <div className="flex gap-2 items-start" key={data.title}>
                      <div className="border border-solid border-slate-100 rounded-lg p-2 text-xl flex items-center justify-center">
                        <LiaRupeeSignSolid />
                      </div>
                      <ListItem title={data.title} href={data.href}>
                        {data.description}
                        {data.listItems?.map((item, index) => (
                          <ListItem
                            key={index}
                            href={
                              typeof item === "string" ? "#" : item.link || "#"
                            }
                            className="p-0"
                          >
                            <ul className="flex flex-col pl-4 list-disc gap-2">
                              <li className="font-semibold hover:text-black">
                                {typeof item === "string" ? item : item.name}
                              </li>
                            </ul>
                          </ListItem>
                        ))}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Remote Proctoring */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal hover:font-semibold active:font-semibold aria-[expanded='true']:font-semibold">
                Hiring AND L&D
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {remoteProctoringData.map((data) => (
                    <div className="flex gap-2 items-start" key={data.title}>
                      <div className="border border-solid border-slate-100 rounded-lg p-2 text-xl flex items-center justify-center">
                        <LiaRupeeSignSolid />
                      </div>
                      <ListItem title={data.title} href={data.href}>
                        {data.description}
                        {data.listItems?.map((item, index) => (
                          <ListItem
                            key={index}
                            href={
                              typeof item === "string" ? "#" : item.link || "#"
                            }
                            className="p-0"
                          >
                            <ul className="flex flex-col pl-4 list-disc gap-2">
                              <li className="font-semibold hover:text-black">
                                {typeof item === "string" ? item : item.name}
                              </li>
                            </ul>
                          </ListItem>
                        ))}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* How it Works */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal hover:font-semibold active:font-semibold aria-[expanded='true']:font-semibold">
                How It Works
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {howItWorksData.map((data) => (
                    <div className="flex gap-2 items-start" key={data.title}>
                      <div className="border border-solid border-slate-100 rounded-lg p-2 text-xl flex items-center justify-center">
                        <LiaRupeeSignSolid />
                      </div>
                      <ListItem title={data.title} href={data.href}>
                        {data.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Pricing */}
            <NavigationMenuItem className="cursor-pointer">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-normal hover:font-semibold active:font-semibold`}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>

          {/* Mobile Menu Items */}
          {menuToggle && (
            <div className="lg:hidden fixed inset-0 h-[1200px] z-50 py-4 px-6 bg-white">
              <div className="max-w-screen-md mx-auto h-auto">
                <div>
                  <h1 className="text-2xl text-left font-semibold">Menu</h1>
                </div>
                <button
                  className="border border-solid border-slate-100 rounded-lg p-2 absolute top-4 right-4 text-2xl"
                  onClick={() => setMenuToggle(false)}
                >
                  <IoIosClose />
                </button>
                <ul className="flex flex-col grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                  {/* List out your menu items here for mobile view */}
                  <NavigationMenuItem className="flex flex-col gap-4">
                    {onlineExaminationData.map((data, index) => (
                      <NavigationMenuItem
                        key={index}
                        className="flex flex-col text-slate-500 items-start font-semibold"
                      >
                        <NavigationMenuLink href={data?.href}>
                          {data.title}
                        </NavigationMenuLink>
                        <ul className="flex flex-col text-black items-start pl-4 list-disc gap-2">
                          {data.listItems?.map((list, index) => (
                            <li>
                              <NavigationMenuLink key={index} href={list?.link}>
                                {list?.name}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuItem>
                  <NavigationMenuItem className="flex flex-col gap-4">
                    {remoteProctoringData.map((data, index) => (
                      <NavigationMenuItem
                        key={index}
                        className="flex flex-col text-slate-500 items-start font-semibold"
                      >
                        <NavigationMenuLink href={data?.href}>
                          {data.title}
                        </NavigationMenuLink>
                        <ul className="flex flex-col text-black items-start pl-4 list-disc gap-2">
                          {data.listItems?.map((list, index) => (
                            <li>
                              <NavigationMenuLink key={index} href={list?.link}>
                                {list?.name}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuItem>
                  <NavigationMenuItem className="flex flex-col gap-4">
                    {howItWorksData.map((data, index) => (
                      <NavigationMenuItem
                        key={index}
                        className="flex flex-col text-slate-500 items-start font-semibold"
                      >
                        <NavigationMenuLink href={data?.href}>
                          {data.title}
                        </NavigationMenuLink>
                        <ul className="flex flex-col text-black items-start pl-4 list-disc gap-2">
                          {data.listItems?.map((list, index) => (
                            <li>
                              <NavigationMenuLink key={index} href={list?.link}>
                                {list?.name}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuItem>
                  <NavigationMenuItem className="flex flex-col gap-4">
                    <NavigationMenuItem className="flex flex-col text-slate-500 items-start font-semibold">
                      <NavigationMenuLink href="/pricing">
                        Pricing
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuItem>
                  <div className="py-4 text-left">
                    <Button>Schedule Demo</Button>
                  </div>
                </ul>
              </div>
            </div>
          )}

          {/* Schedule Demo */}
          <NavigationMenuItem className="hidden col-span-1 lg:flex justify-end">
            <Button>Schedule Demo</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Card>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
