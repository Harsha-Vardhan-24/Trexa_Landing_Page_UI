import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import TREXA_LOGO from "../../../assets/TrExa.png";
import { IoClose } from "react-icons/io5";
import { formSchema } from "@/schema/profileFormSchema";

type ProfileFormProps = {
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ProfileForm({ setToggleForm }: ProfileFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_Name: "",
      email: "",
      phone_Number: "",
      designation: "",
      organization: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Card className="max-w-[400px] left-[20%] right-[20%] top-[20%] mx-auto fixed z-10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <img src={TREXA_LOGO} alt="Trexa_logo" className="h-6 mx-auto" />
          <Button
            onClick={() => setToggleForm(false)}
            variant="outline"
            className="flex flex-end text-lg"
          >
            <IoClose />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-left"
          >
            <FormField
              control={form.control}
              name="full_Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Harsha Vardhan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your email</FormLabel>
                  <FormControl>
                    <Input placeholder="harshavardhan@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_Number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+918970977098" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input placeholder="Organizer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Man2Web Technologies" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
