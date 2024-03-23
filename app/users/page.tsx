import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

type UserParams = {
  searchParams: { sortOrder: string };
};

export default async function Users({ searchParams }: UserParams) {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable searchParams={searchParams} />
      </Suspense>
    </>
  );
}
