"use client";

import { z } from "zod";
import { createAccount } from "@/lib/actions/user.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useState } from "react";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (type: FormType) => {
    return z.object({
        email: z.string().email("Please enter a valid email address"),
        username: type === "sign-up" ? z.string().min(2, "Username must be at least 2 characters").max(50, "Username must be less than 50 characters") : z.string().optional()
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [accountId, setAccountId] = useState(null);
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const user = await createAccount({
                fullName: values.username || "",
                email: values.email,
            });
            setAccountId(user.accountId);
        }
        catch(error){
            setErrorMessage("failed to create account. please try again.");
        }
        finally{
            setIsLoading(false);
        }
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
                                        <FormLabel className="shad-form-label">Username</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter Your Username" className="shad-input" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage className="shad-form-message" />
                                </FormItem>
                            )}
                        />)}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="shad-form-item">
                                    <FormLabel className="shad-form-label">Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter Your Email Address" className="shad-input" {...field} />
                                    </FormControl>
                                </div>
                                <FormMessage className="shad-form-message" />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="form-submit-button" disabled={isLoading}>
                        {type === "sign-in" ? "Sign in" : "Sign up"}
                        {isLoading && (
                            <img src="/assets/icons/loader.svg" alt="loader" width={24} height={24} className="ml-2 animate-spin" />
                        )}
                    </Button>
                    {errorMessage && <p className="error-message">*{errorMessage}</p>}

                    <div className="body-2 flex justify-center">
                        <p className="text-light-100">
                            {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className="ml-1 font-medium text-brand">
                            {type === "sign-in" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    )
};

export default AuthForm;