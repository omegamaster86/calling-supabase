import { Container, Grid, GridCol, Stack } from "@mantine/core";
import { createClient } from "@/lib/supabase/server";
import { AttackHistory } from "./attack-history";
import { AttackLogForm } from "./attack-log-form";
import { CompanyInformation } from "./company-info";
import { Header } from "./header";
import { PersonInfo } from "./person-info";
import type { CompanyInfo } from "@/app/types";

interface AttackLogProps {
	searchParams: { company_id?: string };
}

const AttackLog = async ({ searchParams }: AttackLogProps) => {
	const supabase = await createClient();
	const { data: callingResult } = await supabase.rpc("get_calling_result", {});
	const { data: companies } = await supabase.rpc("get_company_information", {});

	const selectedCompanyId = searchParams.company_id
		? parseInt(searchParams.company_id)
		: null;
	const selectedCompany = selectedCompanyId
		? companies?.find((company: CompanyInfo) => company.company_id === selectedCompanyId)
		: null;

	return (
		<Container size="xl" py="lg">
			<Header />

			<Grid mt="xl" gutter="lg">
				<GridCol span={{ base: 12, lg: 6 }}>
					<Stack gap="lg">
						<CompanyInformation
							selectedCompany={selectedCompany}
						/>
						<PersonInfo selectedCompany={selectedCompany} />
						<AttackLogForm
							callingResult={callingResult || []}
							selectedCompany={selectedCompany}
						/>
					</Stack>
				</GridCol>

				<GridCol span={{ base: 12, lg: 6 }}>
					<AttackHistory selectedCompany={selectedCompany} />
				</GridCol>
			</Grid>
		</Container>
	);
};

export default AttackLog;
