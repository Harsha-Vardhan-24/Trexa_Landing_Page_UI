import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";
import { FaMobileAlt, FaRegEye, FaUsers } from "react-icons/fa";
import { FiCameraOff } from "react-icons/fi";
import { LiaIdCard } from "react-icons/lia";
import { MdNoiseAware } from "react-icons/md";
import { PiBrowsersDuotone } from "react-icons/pi";
import { TiMessageTyping } from "react-icons/ti";

export const CandidateFlagged = () => {
  const FLAG_REASONS = [
    {
      icon: LiaIdCard,
      title: "Different ID Card",
    },
    {
      icon: MdNoiseAware,
      title: "Loud Noise",
    },
    {
      icon: FaUsers,
      title: "Multiple People Detected",
    },
    {
      icon: FaMobileAlt,
      title: "Unauthorized Device Usage",
    },
    {
      icon: TiMessageTyping,
      title: "Inconsistent Typing Patterns",
    },
    {
      icon: FaRegEye,
      title: "Suspicious Eye Movement",
    },
    {
      icon: PiBrowsersDuotone,
      title: "Attempt to Access External Resources",
    },
    {
      icon: FiCameraOff,
      title: "Camera Obstruction",
    },
  ];

  return (
    <Card className="md:px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Candidates Are Flagged Or Interrupted In The Following Cases
        </CardTitle>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {FLAG_REASONS.map(
            (item: { icon: IconType; title: string }, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="flex flex-col gap-2 items-center text-left p-4">
                  <div className="text-2xl">
                    <item.icon />
                  </div>
                  <CardDescription className="text-center font-semibold text-black">
                    {item.title}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          )}
        </CardContent>
      </CardHeader>
    </Card>
  );
};
