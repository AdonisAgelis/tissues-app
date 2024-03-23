"use client";

import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/users")} className="btn btn-primary">
      Create
    </button>
  );
}
