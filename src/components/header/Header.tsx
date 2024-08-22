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
import { PiExam } from "react-icons/pi";
import { Card } from "../ui/card";

const onlineExaminationData: {
  title: string;
  href?: string;
  description: string;
  listItems?: string[];
}[] = [
  {
    title: "Online Examination Solution",
    description: "Conduct scalable remote exams",
    listItems: [
      "Examination Platform",
      "Entrance Exam",
      "Semester Exam",
      "Online Evaluation System",
    ],
  },
  {
    title: "Remote Proctoring Solution",
    description: "AI-based proctoring suite",
    listItems: ["Secure Proctor"],
  },
  {
    title: "Online Certification Program",
    href: "/docs/primitives/progress",
    description: "Run online certification programs",
  },
];
const remoteProctoringData: {
  title: string;
  href?: string;
  description: string;
  listItems?: string[];
}[] = [
  {
    title: "Talent Assessments",
    description: "Assess your talent holistically",
    listItems: [
      "Psychometric Tests",
      "Behavioral Tests",
      "Aptitude Tests",
      "Technical Tests",
    ],
  },
  {
    title: "Coding Assessments",
    description: "Find the best coders efficiently",
    listItems: ["Coding Skills Tests"],
  },
  {
    title: "Lateral Hiring",
    description: "Assessments to hire the best talent",
    listItems: ["Technical Hiring", "Sales Hiring"],
  },
  {
    title: "Campus Hiring",
    description: "Hire right talent from right campus",
    listItems: [
      "Campus Intelligence",
      "Student Engagement",
      "Screening Engagement",
    ],
  },
  {
    title: "Hackathos and Ideathons",
    description: "Accelerate innovations",
    listItems: ["For Corporates", "For Community"],
  },
  {
    title: "360-Degree Feedback",
    href: "/docs/primitives/progress",
    description: "Easy to use feedback tool",
  },
];
const howItWorksData: {
  title: string;
  href?: string;
  description: string;
  listItems?: string[];
}[] = [
  {
    title: "Tools",
    href: "/docs/primitives/alert-dialog",
    description:
      "How we create the best and innpvative tools in this education.",
  },
  {
    title: "Technology",
    href: "/docs/primitives/hover-card",
    description:
      "How we use the best in class technology to create the best experience for your organization.",
  },
];

export function Header() {
  return (
    <Card className="px-8 py-2">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          {/* Logo */}
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <img src={Trexa_Logo} alt="Trexa Logo" className="h-6" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Online Examination */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Online Examinations</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {onlineExaminationData.map((data) => (
                  <ListItem
                    key={data.title}
                    title={data.title}
                    href={data.href}
                  >
                    {/* Map over the description array */}
                    {data.description}
                    <ul>
                      {data.listItems?.map((desc, index) => (
                        <ListItem key={index} href="#" className="p-0">
                          <div className="text-black font-normal">{desc}</div>
                        </ListItem>
                      ))}
                    </ul>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Remote Proctoring */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hiring AND L&D</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {remoteProctoringData.map((data) => (
                  <ListItem
                    key={data.title}
                    title={data.title}
                    href={data.href}
                  >
                    {/* Map over the description array */}
                    {data.description}
                    <ul>
                      {data.listItems?.map((desc, index) => (
                        <ListItem key={index} href="#" className="p-0">
                          <div className="text-black font-normal">{desc}</div>
                        </ListItem>
                      ))}
                    </ul>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* How it Works */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>How It Works</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {howItWorksData.map((data) => (
                  <ListItem
                    key={data.title}
                    title={data.title}
                    href={data.href}
                  >
                    {data.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Cert Platform */}
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Certification Platform
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Pricing */}
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
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
