"use server";
import * as z from "zod";
import {ResetSchema} from "@/schema";
import { getUserByEmail } from "@/data/user";


export const reset = async (values:z.infer<typeof ResetSchema>)=>{
    const validatedFields = ResetSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid email"}
    }

    const {email} = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser)
    {
        return {error:"No user found with that email"}
    }
    // TODO:     generate token and send email  

    return {success:"Password reset link sent to your email"}

}