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

export const TechnicalTestingMultiFeature = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Extensive Technical Assessments To Evaluate All Corporate Functions,
          Industries and Roles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="functions" className="w-full px-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="functions">Functions</TabsTrigger>
            <TabsTrigger value="industries">Industries</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
          </TabsList>
          <TabsContent value="functions">
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
          <TabsContent value="industries">
            <Card className="grid grid-cols-2 p-4">
              <CardContent className="bg-slate-500/30 backdrop-blur-sm rounded-lg"></CardContent>
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
          <TabsContent value="roles">
            <Card className="grid grid-cols-2 p-4">
              <CardContent className="bg-slate-500/30 backdrop-blur-sm rounded-lg"></CardContent>
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
