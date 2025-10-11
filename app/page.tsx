import { createClient } from "@/lib/supabase/server";
import Dashboard from "./dashboard/dashboard";

export default async function Home() {
	const supabase = await createClient();
	const { data: companies } = await supabase.rpc("get_company_information");

	return (
		<main className="w-full flex">
			<Dashboard companies={companies} />
		</main>
	);
}
