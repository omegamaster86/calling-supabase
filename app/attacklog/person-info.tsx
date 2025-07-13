import { Grid, GridCol, Paper, Stack, Text, Title } from "@mantine/core";
import type { CompanyInfo } from "@/app/types";

interface PersonInfoProps {
	selectedCompany?: CompanyInfo | null;
}

export const PersonInfo = ({ selectedCompany }: PersonInfoProps) => {
	const displayPerson = selectedCompany || {
		department_name: "",
		key_person_name: "",
		key_person_email: "",
		key_person_position: "",
		key_person_phone_number: "",
		key_person_note: "",
	};

	return (
		<Paper shadow="sm" p="md" radius="md" withBorder>
			<Title
				order={3}
				c="blue"
				mb="md"
				pb="sm"
				style={{ borderBottom: "1px solid #e3f2fd" }}
			>
				キーパーソン情報
			</Title>

			<Grid>
				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								部署名
							</Text>
							<Text c="dark">{displayPerson.department_name || ""}</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								氏名
							</Text>
							<Text c="dark">{displayPerson.key_person_name || ""}</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								メールアドレス
							</Text>
							<Text c="dark">{displayPerson.key_person_email || ""}</Text>
						</div>
					</Stack>
				</GridCol>

				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								役職
							</Text>
							<Text c="dark">
								{displayPerson.key_person_position || ""}
							</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								電話番号
							</Text>
							<Text c="dark">
								{displayPerson.key_person_phone_number || ""}
							</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								特記事項
							</Text>
							<Text c="dark">{displayPerson.key_person_note || ""}</Text>
						</div>
					</Stack>
				</GridCol>
			</Grid>
		</Paper>
	);
};
