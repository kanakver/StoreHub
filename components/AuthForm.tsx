"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useState } from "react";

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

type FormType = "sign-in" | "sign-up";



const AuthForm = ({ type }: { type: FormType }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    };
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                    <h1 className="form-title">
                        {type === "sign-in" ? "Sign in" : "Sign up"}
                    </h1>

                    {type === "sign-up" && (
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="shad-form-item">
                                            <FormLabel className="shad-form-label">Full Name</FormLabel>
                                            <FormControl>
                                            <Input placeholder="Enter Your Full Name" className="shad-input" {...field} />
                                        </FormControl>
                                        </div>
                                        <FormMessage className="shad-form-message"/>
                                    </FormItem>
                                )}
                            />)}
                            <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="shad-form-item">
                                        <FormLabel className="shad-form-label">Email Address</FormLabel>
                                        <FormControl>
                                        <Input placeholder="Enter Your Email Address" className="shad-input" {...field} />
                                    </FormControl>
                                    </div>
                                    <FormMessage className="shad-form-message"/>
                                </FormItem>
                            )}
                        />
                    <Button type="submit" className="form-submit-button">Submit</Button>
                </form>
            </Form>
        </>
    )
};

export default AuthForm;