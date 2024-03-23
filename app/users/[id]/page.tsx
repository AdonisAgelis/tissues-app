import { notFound } from "next/navigation";

type UserId = {
  id: number;
};

export default function UserDetails({ params }: { params: UserId }) {
  if (params.id > 10) notFound();

  return <div>{params.id}</div>;
}
