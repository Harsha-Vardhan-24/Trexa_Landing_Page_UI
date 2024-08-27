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
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import {
  howItWorksData,
  onlineExaminationData,
  remoteProctoringData,
} from "./headerData";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "../ui/accordion";

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
                        <data.icon />
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
                        <data.icon />
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
                        <data.icon />
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
            <div className="lg:hidden fixed inset-0 h-[800px] z-50 py-4 px-6 bg-white">
              <div className="max-w-screen-md mx-auto h-auto">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl text-left font-semibold">Menu</h1>
                  <button
                    className="flex items-center justify-center border border-solid border-slate-100 rounded-lg p-2 text-2xl shadow-lg"
                    onClick={() => setMenuToggle(false)}
                  >
                    <IoIosClose />
                  </button>
                </div>
                <ul className="flex flex-col grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full lg:px-16 py-4 text-left"
                  >
                    <AccordionItem
                      value="onlineExaminationData"
                      className="flex flex-col gap-4"
                    >
                      {onlineExaminationData.map((data, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${data.title}`}
                          className="flex flex-col text-slate-500 items-start font-semibold"
                        >
                          {data.listItems && (
                            <AccordionTrigger>
                              <NavigationMenuLink href={data?.href}>
                                {data.title}
                              </NavigationMenuLink>
                            </AccordionTrigger>
                          )}
                          <AccordionContent>
                            <ul className="flex flex-col text-black items-start pl-4 list-disc gap-2">
                              {data.listItems?.map((list, index) => (
                                <li>
                                  <NavigationMenuLink
                                    key={index}
                                    href={list?.link}
                                  >
                                    {list?.name}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </AccordionItem>
                    <AccordionItem
                      value="remoteProctoringData"
                      className="flex flex-col gap-4"
                    >
                      {remoteProctoringData.map((data, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${data.title}`}
                          className="flex flex-col text-slate-500 items-start font-semibold"
                        >
                          {data.listItems && (
                            <AccordionTrigger>
                              <NavigationMenuLink href={data?.href}>
                                {data.title}
                              </NavigationMenuLink>
                            </AccordionTrigger>
                          )}
                          <AccordionContent>
                            <ul className="flex flex-col text-black items-start pl-4 list-disc gap-2">
                              {data.listItems?.map((list, index) => (
                                <li>
                                  <NavigationMenuLink
                                    key={index}
                                    href={list?.link}
                                  >
                                    {list?.name}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </AccordionItem>
                    <AccordionItem
                      value="howItWorksData"
                      className="flex flex-col gap-4"
                    >
                      {howItWorksData.map((data, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${data.title}`}
                          className="flex flex-col text-slate-500 items-start font-semibold"
                        >
                          {data.listItems && (
                            <AccordionTrigger>
                              <NavigationMenuLink href={data?.href}>
                                {data.title}
                              </NavigationMenuLink>
                            </AccordionTrigger>
                          )}
                        </AccordionItem>
                      ))}
                    </AccordionItem>
                    <div className="flex flex-col font-semibold gap-4">
                      <NavigationMenuLink href="/onlinecertplatform">
                        Online Certification Program
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/feedbacktool">
                        360-Degree Feedback
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/technology">
                        Technology
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/tools">
                        Tools
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/pricing">
                        Pricing
                      </NavigationMenuLink>
                    </div>
                    <div className="py-4 text-left">
                      <Button>Schedule Demo</Button>
                    </div>
                  </Accordion>
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
