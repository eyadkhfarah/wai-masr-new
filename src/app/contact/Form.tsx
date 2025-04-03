"use client"
"use client";
import { FormValues } from "@/types/inputs";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { RiArrowLeftLine } from "react-icons/ri";
// import { motion } from "framer-motion";

const inputClass =
    "w-full bg-transparent border-b-4 border-0 border-b-red px-0 focus:ring-0 focus:border-b-red";
const errorInputClass = "ring-2 ring-red-500 " + inputClass;

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitSuccessful, errors, isSubmitting },
        reset,
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            await fetch("/api/notion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            // Optionally reset the form after a successful submission
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    const onError = (errors: FieldErrors<FormValues>) => {
        console.log("Please fix these errors:", errors);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full grid gap-5" name="contact" method="POST">
            <input
                {...register("fullName", { required: true })}
                type="text"
                id="fullName"
                disabled={isSubmitSuccessful}
                placeholder="اسمك الاول*"
                className={errors.fullName ? errorInputClass : inputClass}
            />
            {errors.fullName && errors.fullName.type === "required" && (
                <p className="my-2 text-red-600">اكتب اسمك الاول</p>
            )}
            <input
                {...register("lastName", { required: true })}
                type="text"
                id="lastName"
                disabled={isSubmitSuccessful}
                placeholder="اسم العائلة*"
                className={errors.fullName ? errorInputClass : inputClass}
            />
            {errors.lastName && errors.lastName.type === "required" && (
                <p className="my-2 text-red-600">اكتب اسم العائلة</p>
            )}
            <input
                {...register("email", {
                    required: true,
                    pattern: {
                        value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                    },
                })}
                type="email"
                id="email"
                disabled={isSubmitSuccessful}
                placeholder="بريدك الإلكتروني*"
                className={errors.email ? errorInputClass : inputClass}
            />
            {errors.email && errors.email.type === "required" && (
                <p className="my-2 text-red-600">اكتب بريدك الإلكتروني</p>
            )}
            <input {...register("number", { minLength: 11 })}
                type="tel"
                id="number"
                disabled={isSubmitSuccessful}
                name="number"
                placeholder="رقم الموبايل"
                className={errors.number ? errorInputClass : inputClass} />

            <input type="text" name="governorate" id="governorate" placeholder="محافظتك" className={errors.governorate ? errorInputClass : inputClass} />

            <textarea
                className={errors.message ? errorInputClass : inputClass}
                {...register("message", { required: true })}
                id="message"
                cols={30}
                disabled={isSubmitSuccessful}
                placeholder="ابعتلنا رسالتك*"
            />

            {errors.message && errors.message.type === "required" && (
                <p className="my-2 text-red-600">بعد اذنك اكتب رسالتك</p>
            )}

            {/* <input accept="application/pdf" type="file" id="actual-btn" hidden />

            <label
                for="actual-btn"
                className="input text-center p-4 font-black hover:border-b-black transition-all ease-in-out duration-300 cursor-pointer"
            >أرفع مقالتك بملف PDF <span /></label
            > */}

            {/* Submit Button with Loading State */}
            <button
                type="submit"
                disabled={isSubmitSuccessful || isSubmitting}
                 className="Blackbtn cursor-pointer w-full font-black"
            >
                {isSubmitting ? (
                    <>
                        <svg
                            className="animate-spin h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                        جارِ التحميل...
                    </>
                ) : (
                    <>
                     ابعــــت
                     <span><RiArrowLeftLine color="red" /></span>
                    </>
                )}
            </button>

            {/* Success Message */}
            <div className="flex justify-end items-center">
                {isSubmitSuccessful && (
                    <p
                        // initial={{ opacity: 0, translateY: 20 }}
                        // animate={{ opacity: 1, translateY: 0 }}
                        // transition={{ duration: 0.2 }}
                        className="text-green-500 text-center"
                    >
                       شكرا لتواصلك معانا، هنرد عليك في اقرب وقت ممكن ❤️
                    </p>
                )}
            </div>
        </form>
    )
}
