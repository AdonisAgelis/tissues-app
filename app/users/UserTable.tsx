import Link from "next/link";
import { sort } from "fast-sort";

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UserTable({
  searchParams,
}: {
  searchParams: { sortOrder: string };
}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    searchParams.sortOrder === "email"
      ? (user) => user.email
      : (user) => user.name
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
