"use client";

import { FormValues } from "@/types/inputs";
import { useTheme } from "next-themes";
import React from "react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TbMail } from "react-icons/tb";

export default function Email() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const { theme } = useTheme();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await fetch("/api/subscribe/notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      reset(); // إعادة تعيين الحقول بعد نجاح الإرسال
    } catch (error) {
      console.error(error);
    }
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Please fix these errors:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      method="POST"
      id="subscribe"
      name="subscribe"
      className="flex flex-col sm:flex-row gap-3 w-full items-center"
    >
      <div className="flex items-center gap-2 px-3 py-1 rounded-md w-full bg-light dark:bg-gray-900">
        <TbMail size={22} className="text-gray-600 dark:text-gray-300" />
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "يرجى إدخال البريد الإلكتروني",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/,
              message: "بريد إلكتروني غير صالح",
            },
          })}
          name="email"
          defaultValue=""
          className="border-none w-full bg-transparent focus:outline-none focus:ring-0 text-sm placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="بريدك الإلكتروني"
        />
      </div>

      {/* عرض رسالة خطأ إذا كان هناك مشكلة */}
      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

      <button
        type="submit"
        disabled={isSubmitSuccessful || isSubmitting}
        className={`flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-4 py-2 rounded-md transition-all w-full sm:w-auto bg-light dark:bg-gray-900 dark:text-light text-primary`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-primary dark:text-light"
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
            اشترك دلوقتي
            <RiArrowLeftSLine size={20} />
          </>
        )}
      </button>
    </form>
  );
}
