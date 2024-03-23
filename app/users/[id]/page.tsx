type UserId = {
  id: string;
};

export default function UserDetails({ params }: { params: UserId }) {
  return <div>{params.id}</div>;
}
