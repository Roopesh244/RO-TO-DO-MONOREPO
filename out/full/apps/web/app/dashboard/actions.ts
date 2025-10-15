"use server";

import { supabase } from "@/lib/supabaseClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  task_date: z.string().nullable().optional(),
  start_time: z.string().nullable().optional(),
  end_time: z.string().nullable().optional(),
});

// Add Task
export async function addTask(userId: string, data: z.infer<typeof CreateTaskSchema>) {
  await supabase.from("tasks").insert([{ ...data, user_id: userId }]);
  revalidatePath("/dashboard"); // ✅ Refresh page instantly
}

// Toggle Completion
export async function toggleTask(taskId: string, isCompleted: boolean) {
  await supabase.from("tasks").update({ is_completed: !isCompleted }).eq("id", taskId);
  revalidatePath("/dashboard");
}

// Delete Task
export async function deleteTask(taskId: string) {
  await supabase.from("tasks").delete().eq("id", taskId);
  revalidatePath("/dashboard");
}
