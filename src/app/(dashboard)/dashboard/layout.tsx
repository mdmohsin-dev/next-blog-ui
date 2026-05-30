import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex">
      <Sidebar />
      <div className="flex-1 md:ml-64 overflow-y-auto">
        {children}
      </div>
    </main>
  );
}