import React from "react";

interface TitleCardProps {
  title: string;
  description: string;
}

export const TitleCard: React.FC<TitleCardProps> = ({ title, description }) => {
  return (
    <section className="my-20">
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight">{title}</h1>
      <p className="text-md pt-6 text-slate-500 font-semibold tracking-tight">
        {description}
      </p>
    </section>
  );
};
