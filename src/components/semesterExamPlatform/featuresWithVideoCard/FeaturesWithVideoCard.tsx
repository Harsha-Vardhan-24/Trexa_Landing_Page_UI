import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegEye } from "react-icons/fa";

export const FeaturesWithVideoCard = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Man2Web | TrExa Has 5+ Years Of Experience In Conducting End-To-End
          Virtual Semester Exams
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardHeader className="text-left">
                <FaRegEye />
                <CardTitle className="text-md font-semibold">
                  Virtual Proctored Exams
                </CardTitle>
                <CardDescription>
                  Conduct Exams With the Click of A Button
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="bg-slate-500/30 backdrop-blur-sm rounded-lg"></div>
      </CardContent>
    </Card>
  );
};
