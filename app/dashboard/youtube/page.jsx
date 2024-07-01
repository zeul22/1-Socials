"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Youtube = () => {
  const { user } = useUser();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onFormSubmit = async (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const formData = [
    {
      label: "Video Title",
      placeholder: "Please add Youtube Video Title",
      type: "text",
    },
    {
      label: "Video Description",
      placeholder: "Please add Youtube Video Description",
      type: "text",
    },
    {
      label: "Playlist",
      placeholder: "Please add Playlist name (optional)",
      type: "text",
    },
    {
      label: "Schedule",
      placeholder: "Schedule your upload",
      type: "date",
    },
    {
      label: "Upload Video",
      placeholder: "Please Upload your video",
      type: "file",
    },
  ];

  return (
    <div>
      <div className="p-6 font-bold text-3xl">Upload Youtube Videos</div>
      <div className="flex flex-col gap-3 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-8 p-3 md:mx-auto md:w-[600px] lg:w-[800px]"
          >
            {formData.map((item, index) => (
              <FormField
                key={index}
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={item.type}
                        placeholder={item.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="items-center text-center flex justify-center w-full">
              <Button type="submit" className="w-full flex md:w-[100px] lg:w-[300px]">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Youtube;
