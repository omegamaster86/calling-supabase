import AppHeader from "@/components/app-header";
import { Sidebar } from "@/components/sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <div className="pt-14 h-[calc(100vh-56px)] flex">
        <Sidebar />
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </>
  );
}

