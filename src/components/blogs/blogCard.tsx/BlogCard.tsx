import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

export const BlogCard = ({ image, title, description }: BlogCardProps) => {
  return (
    <Card>
      <CardContent className="text-left">
        <img src={image} alt="blog image" className="rounded-lg my-4" />
        <h1 className="font-semibold text-2xl pb-2">{title}</h1>
        <p className="text-slate-400 text-md tracking-tight truncate overflow-hidden">
          {description}
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <Button variant="outline">Know More</Button>
        </div>
        <div>
          <p className="text-slate-400 text-sm tracking-tight">Aug 21, 2024</p>
        </div>
      </CardFooter>
    </Card>
  );
};
