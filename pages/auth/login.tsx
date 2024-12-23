"use client";
import Image from "next/image";
import fb from "@/common/assets/facebook.png";
import google from "@/common/assets/google.png";
import apple from "@/common/assets/apple.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Email required" })
    .min(1, { message: "Email required" }),
  password: z.string().min(4, { message: "Password must be 4 lengths" }),
});

const Login = () => {
  const { register, formState, handleSubmit } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = formState;

  return (
    <>
      <div className=" px-4  py-5 w-[400px] md:shadow-chatShadow rounded-xl md:bg-white">
        <h4 className=" font-monserrat font-bold text-xl text-center">
          <span className=" underline decoration-chatPrimary underline-offset-4">
            Log in
          </span>{" "}
          to Chatbox
        </h4>
        <p className=" py-4 font- w-[370px] px-3 text-chatGray text-center text-sm">
          Welcome back! Sign in using your social account or email to continue
          us.
        </p>

        <div className=" flex py-4 items-center justify-center gap-5">
          <Image
            src={fb}
            alt="facebook"
            width={150}
            height={150}
            className=" w-12 h-12 border p-2 rounded-full border-black "
          />

          <Image
            src={google}
            alt="Google"
            width={150}
            height={150}
            className=" w-12 h-12 border p-2 rounded-full border-black "
          />
          <Image
            src={apple}
            alt="apple"
            width={150}
            height={150}
            className=" object-contain w-12 h-12 border p-2 rounded-full border-black "
          />
        </div>

        <div className=" py-3 items-center gap-3 flex">
          <div className=" w-full border"></div>
          <p>OR</p>
          <div className=" w-full border"></div>
        </div>

        <div className=" mt-4">
          <form
            onSubmit={handleSubmit((value) => console.log(value))}
            className=" space-y-5"
          >
            <div className=" ">
              <Input
                label={
                  <span
                    className={
                      errors.email ? "text-red-500" : "text-chatPrimary"
                    }
                  >
                    Email
                  </span>
                }
                type="email"
                isInvalid={!!errors.email}
                errorMessage={
                  <p className=" text-end">{errors.email?.message}</p>
                }
                {...register("email")}
              />
            </div>

            <Input
              errorMessage={
                <p className=" text-end">{errors.password?.message}</p>
              }
              isInvalid={!!errors.password}
              label={
                <span
                  className={
                    errors.password ? "text-red-500" : "text-chatPrimary"
                  }
                >
                  Password
                </span>
              }
              type="password"
              {...register("password")}
            />

            <Button
              type="submit"
              size="lg"
              className=" w-full bg-chatPrimary text-white"
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
