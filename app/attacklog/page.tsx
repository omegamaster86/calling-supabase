import { Container, Grid, GridCol, Stack } from "@mantine/core";
import { createClient } from "@/lib/supabase/server";
import { AttackHistory } from "./attack-history";
import { AttackLogForm } from "./attack-log-form";
import { CompanyInformation } from "./company-info";
import { Header } from "./header";
import { PersonInfo } from "./person-info";

interface AttackLogProps {
	searchParams: { company_id: string };
}

const AttackLog = async ({ searchParams }: AttackLogProps) => {
	const supabase = await createClient();
	const { data: callingResult } = await supabase.rpc("get_calling_result");

	const selectedCompanyId = parseInt(searchParams.company_id);

	const { data: companyData } = await supabase.rpc("get_company_by_id", {
		company_id_param: selectedCompanyId,
	});
	const selectedCompany =
		companyData && companyData.length > 0 ? companyData[0] : null;

	return (
		<Container size="xl" py="lg">
			<Header />

			<Grid mt="xl" gutter="lg">
				<GridCol span={{ base: 12, lg: 6 }}>
					<Stack gap="lg">
						<CompanyInformation selectedCompany={selectedCompany} />
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
