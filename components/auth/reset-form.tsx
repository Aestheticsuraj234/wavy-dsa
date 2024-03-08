"use client";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetSchema } from "@/schema";

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
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/global/form-error";
import { FormSuccess } from "@/components/global/form-success";

import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { reset } from "@/actions/reset";


const ResetForm = () => {
 
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");


  const [isPending , startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ResetSchema>) => {
    setError("")
    setSuccess("")

    startTransition(()=>{
      reset(data)
      .then((data)=>{
        setError(data?.error)
        setSuccess(data?.success)
  
      })
    })
   

  }


  return (
    <CardWrapper
      headerLabel="Forgot your Password!"
      backButtonLabel="Back to Login"
      backButtonHref="/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="jhon.doe@emaple.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
          disabled={isPending}
          type="submit"
          className="w-full"
          >
            Send Resend Email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetForm;