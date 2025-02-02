"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FormCreateCustomProps } from "./FormCreateCompanies.types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; 

import { UploadButton } from "@/utils/uploadthing";

import { Toast } from "@/components/ui/toast";



const formSchema = z.object({
  name: z.string(),
  country: z.string().min(2),
  website: z.string().min(2),
  phone: z.string().min(6),
  cif: z.string().min(6),
  profileimage: z.string(),
});

export function FormCreateCompanies() {
  const [photo, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileimage: "",
    },
  });


  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name..." type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ar">Argentina</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="mx">Mexico</SelectItem>
                      <SelectItem value="br">Brazil</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
                  
              )}
            />
            <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                        <Input placeholder="www.example.com" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                        <Input placeholder="+54 111 111 111" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="cif"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>CIF</FormLabel>
                    <FormControl>
                        <Input placeholder="B-1234567" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="profileimage"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Profile Image</FormLabel>
                    <FormControl>
                      { photo ? (
                        <p className="text-sa">Image upload!</p>) : (
                    <UploadButton
                         className="bg-slate-600/20 text-slate-500 rounded-lg outline-dotted outline-2" 
                         {...field}
                       endpoint="profileImage"
                       onClientUploadComplete={(res)  => {
                          form.setValue("profileimage", res?.[0].url);
                          setPhotoUploaded(true);
                          Toast ({
                            title: "Image uploaded",
                          })
                       }}
                       onUploadError={() => { 
                        Toast({
                          title: "error uploading image",
                        }) 
                       }}
                       /> 
                      )}
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
                
        </div>
        <Button type="submit" disabled={!isValid}>Submit</Button>
        </form>
     </Form>
    </div>
);
}
