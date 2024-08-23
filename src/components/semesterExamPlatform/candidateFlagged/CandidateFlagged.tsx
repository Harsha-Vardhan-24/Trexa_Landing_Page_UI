import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegEye } from "react-icons/fa";

export const CandidateFlagged = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Candidates Are Flagged Or Interrupted In The Following Cases
        </CardTitle>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="flex gap-2 items-center text-left p-4">
                <FaRegEye />
                <CardDescription className="font-semibold text-black">
                  Different ID card
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
};
