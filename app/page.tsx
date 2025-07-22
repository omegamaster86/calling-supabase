import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { createClient } from "@/lib/supabase/server";
import { hasEnvVars } from "@/lib/utils";
import Dashboard from "./dashboard/dashboard";

export default async function Home() {
	const supabase = await createClient();
	const { data: companies } = await supabase.rpc("get_company_information");

	return (
		<main className="min-h-screen flex flex-col items-center">
			<div className="w-full flex flex-col items-center">
				<nav className="w-full">
					<div className="bg-blue-500 text-white p-3 px-16 text-sm flex justify-between items-center">
						<p className="font-bold">calling</p>
						{!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
					</div>
				</nav>
				<div className="w-full">
					<Dashboard companies={companies} />
				</div>
			</div>
		</main>
	);
}
