import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";

export default async function AppHeader() {
	return (
		<header className="fixed top-0 left-0 right-0 h-14 bg-gradient-to-r from-[#05B1FA] to-[#64D2FE] text-white">
			<div className="flex h-full items-center justify-between px-16 text-sm">
				<p className="font-bold">calling</p>
				{!hasEnvVars ? <EnvVarWarning /> : await AuthButton()}
			</div>
		</header>
	);
}
