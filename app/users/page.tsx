import UserTable from "./UserTable";

type UserParams = {
  searchParams: { sortOrder: string };
};

export default async function Users({ searchParams }: UserParams) {
  return (
    <>
      <h1>Users</h1>
      <UserTable searchParams={searchParams} />
    </>
  );
}
