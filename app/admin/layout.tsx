type AdminProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminProps) {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin Siderbar</aside>
      <div>{children}</div>
    </div>
  );
}
