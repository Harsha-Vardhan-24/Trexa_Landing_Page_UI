import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRegEye } from "react-icons/fa";

export const MultiFeatureWithAnimation = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Our AI-Augmented Proctoring Ensures 95% accuracy in cheating detection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="autoProctor" className="w-full px-6">
          <TabsList className="grid w-full h-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="autoProctor">Auto Proctor</TabsTrigger>
            <TabsTrigger value="liveProctor">Live Proctor</TabsTrigger>
            <TabsTrigger value="recordAndReviewProctor">
              Record and Review Proctor
            </TabsTrigger>
          </TabsList>
          <TabsContent value="autoProctor">
            <Card className="grid grid-cols-1 md:grid-cols-2 p-4">
              <CardContent className="min-h-[200px] bg-slate-500/30 backdrop-blur-sm rounded-lg"></CardContent>
              <CardContent className="flex flex-col gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div>
                      <FaRegEye />
                    </div>
                    <CardDescription className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </CardDescription>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="liveProctor">
            <Card className="grid grid-cols-1 md:grid-cols-2 p-4">
              <CardContent className="min-h-[200px] bg-slate-500/30 backdrop-blur-sm rounded-lg"></CardContent>
              <CardContent className="flex flex-col gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div>
                      <FaRegEye />
                    </div>
                    <CardDescription className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </CardDescription>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recordAndReviewProctor">
            <Card className="grid grid-cols-1 md:grid-cols-2 p-4">
              <CardContent className="min-h-[200px] bg-slate-500/30 backdrop-blur-sm rounded-lg"></CardContent>
              <CardContent className="flex flex-col gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div>
                      <FaRegEye />
                    </div>
                    <CardDescription className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </CardDescription>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center">
        <Button size="sm" variant="outline">
          Start Free Trail
        </Button>
        <Button size="sm">Schedule Demo</Button>
      </CardFooter>
    </Card>
  );
};
