"use client";

import { CalendarCheck, Home, Upload } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
	href: string;
	label: string;
	Icon: React.ComponentType<{ size?: number; className?: string }>;
	matchPrefix?: boolean;
};

const navItems: NavItem[] = [
	{ href: "/", label: "ホーム", Icon: Home, matchPrefix: false },
	{
		href: "/appointment-list",
		label: "アポイント",
		Icon: CalendarCheck,
		matchPrefix: true,
	},
	{
		href: "/upload-company",
		label: "会社登録",
		Icon: Upload,
		matchPrefix: true,
	},
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="h-screen w-20 border-r">
			<nav className="flex h-full flex-col items-center py-4">
				<div className="flex flex-col items-center pt-20 gap-10">
					{navItems.map(({ href, label, Icon, matchPrefix }) => {
						const isActive = matchPrefix
							? pathname.startsWith(href)
							: pathname === href;
						return (
							<Link
								key={href}
								href={href}
								className={`group flex w-16 flex-col items-center justify-center border-2 rounded-xl py-2 ${
									isActive
										? "bg-gradient-to-r from-[#05B1FA] to-[#64D2FE]"
										: "bg-white"
								}`}
								title={label}
							>
								<Icon
									className={`${isActive ? "text-white" : "text-black"}`}
									size={22}
								/>
								<span
									className={`mt-2 text-[10px] leading-none ${isActive ? "text-white" : "text-black"}`}
								>
									{label}
								</span>
							</Link>
						);
					})}
				</div>
			</nav>
		</aside>
	);
}
