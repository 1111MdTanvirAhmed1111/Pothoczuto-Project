import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "অবৈধ ইমেইল ঠিকানা" }),
  password: z.string().min(8, { message: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে" }),
})

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "ব্যবহারকারীর নাম কমপক্ষে ৩ অক্ষরের হতে হবে" })
      .max(30, { message: "ব্যবহারকারীর নাম ৩০ অক্ষরের বেশি হতে পারবে না" })
      .regex(/^[a-zA-Z0-9_]+$/, { message: "ব্যবহারকারীর নামে শুধুমাত্র অক্ষর, সংখ্যা এবং আন্ডারস্কোর ব্যবহার করা যাবে" }),
    email: z.string().email({ message: "অবৈধ ইমেইল ঠিকানা" }),
    password: z
      .string()
      .min(8, { message: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর, একটি সংখ্যা এবং একটি বিশেষ চিহ্ন থাকতে হবে",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "পাসওয়ার্ড মিলছে না",
    path: ["confirmPassword"],
  })

