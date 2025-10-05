"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

// ルート配下のうち、サイドバーを非表示にしたいパスのプレフィックス
const HIDE_SIDEBAR_PREFIXES = ["/auth"]; // ログイン/サインアップ等

export default function AppShell({ children }: Props) {
  const pathname = usePathname();
  const hideSidebar = HIDE_SIDEBAR_PREFIXES.some((p) => pathname.startsWith(p));

  if (hideSidebar) return <>{children}</>;

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}

