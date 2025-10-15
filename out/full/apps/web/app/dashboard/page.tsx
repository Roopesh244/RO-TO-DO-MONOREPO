// app/dashboard/page.tsx
"use client"; // This must be at the top

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { z } from "zod";

// ---------------- Task Type ----------------
export type TaskRow = {
  id: string;
  title: string;
  is_completed: boolean;
  task_date?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  created_at: string;
  user_id: string;
};

// ---------------- Zod schema for validation ----------------
const CreateTaskSchema = z.object({
  title: z.string().min(1, "Task title is required").max(255),
  task_date: z.string().nullable().optional(),
  start_time: z.string().nullable().optional(),
  end_time: z.string().nullable().optional(),
});

// ---------------- Dashboard Component ----------------
export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [tasks, setTasks] = useState<TaskRow[]>([]);

  const [title, setTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // ---------------- Check user authentication ----------------
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser({ id: user.id, email: user.email ?? "No Email" });
      fetchTasks(user.id);
    };
    checkUser();
  }, [router]);

  // ---------------- Fetch tasks ----------------
  const fetchTasks = async (userId: string) => {
    const { data } = await supabase
  .from("tasks")
  .select("*")
  .eq("user_id", userId)
  .order("created_at", { ascending: false });

setTasks((data ?? []) as TaskRow[]);

  };

    // ---------------- Add Task ----------------
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const parsed = CreateTaskSchema.parse({
        title,
        task_date: taskDate || null,
        start_time: startTime || null,
        end_time: endTime || null,
      });

      await supabase.from("tasks").insert({
        ...parsed,
        user_id: user.id,
      });

      setTitle("");
      setTaskDate("");
      setStartTime("");
      setEndTime("");

      fetchTasks(user.id); // Refresh tasks
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };


  // ---------------- Toggle Task Completion ----------------
  const handleToggleTask = async (task: TaskRow) => {
    await supabase
      .from("tasks")
      .update({ is_completed: !task.is_completed })
      .eq("id", task.id);

    if (user) fetchTasks(user.id);
  };

  // ---------------- Delete Task ----------------
  const handleDeleteTask = async (taskId: string) => {
    await supabase.from("tasks").delete().eq("id", taskId);
    if (user) fetchTasks(user.id);
  };

  if (!user) return <p className="text-center mt-20 text-white text-xl">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-2">Hi, {user.email}</h1>
      <p className="text-gray-400 mb-6">Manage your tasks efficiently:</p>

      {/* ---------------- Add Task Form ---------------- */}
      <form
        onSubmit={handleAddTask}
        className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Name"
          required
          className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-white"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Add Task
        </button>
      </form>

      {/* ---------------- Task List ---------------- */}
      <div className="space-y-4">
        {tasks.length ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-800 p-4 rounded flex justify-between items-center shadow hover:shadow-lg transition"
            >
              <div>
                <div
                  className={`${
                    task.is_completed ? "line-through text-gray-500" : "text-white"
                  } font-medium text-lg`}
                >
                  {task.title}
                </div>
                <div className="text-gray-400 text-sm">
                  {task.task_date && `📅 ${task.task_date} `}
                  {task.start_time && `⏱ ${task.start_time}`}
                  {task.end_time && task.start_time && ` - ${task.end_time}`}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleToggleTask(task)}
                  className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 transition"
                >
                  {task.is_completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No tasks yet. Add some above!</p>
        )}
      </div>
    </div>
  );
}
