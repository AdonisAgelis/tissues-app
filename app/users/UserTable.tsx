type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UserTable() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
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
