import { BlogCard } from "@/components/blogs/blogCard.tsx/BlogCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const BlogsPage = () => {
  const IMAGE =
    "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D";
  const BLOGS_DESC =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const BLOGS_DATA = [
    { image: IMAGE, title: "random", description: BLOGS_DESC },
    { image: IMAGE, title: "random", description: BLOGS_DESC },
    { image: IMAGE, title: "random", description: BLOGS_DESC },
    { image: IMAGE, title: "random", description: BLOGS_DESC },
    { image: IMAGE, title: "random", description: BLOGS_DESC },
  ];
  return (
    <Card className="my-12 px-12">
      <CardHeader className="text-left grid-cols-5">
        <div className="flex-1"></div>
        <CardTitle className="text-3xl font-bold tracking-tighter">
          Blog
        </CardTitle>
        <CardDescription className="font-normal tracking-tight">
          All the latest articles and news from Trexa.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {BLOGS_DATA.map(
          (blog: { image: string; title: string; description: string }) => {
            return (
              <BlogCard
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            );
          }
        )}
      </CardContent>
    </Card>
  );
};
