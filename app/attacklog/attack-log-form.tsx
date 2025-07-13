import {
	Button,
	Grid,
	GridCol,
	Group,
	Paper,
	Select,
	Stack,
	Text,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";

import type { CallingResultItem, CompanyInfo } from "@/app/types";

interface AttackLogFormProps {
	callingResult: CallingResultItem[];
	selectedCompany?: CompanyInfo | null;
}

export const AttackLogForm = ({
	callingResult,
	selectedCompany,
}: AttackLogFormProps) => {
	return (
		<Paper shadow="sm" p="md" radius="md" withBorder>
			<Group mb="md" pb="sm" style={{ borderBottom: "1px solid #e3f2fd" }}>
				<Title order={3} c="blue">
					アタックログ
				</Title>
				<Text size="sm" c="red">
					必須項目
				</Text>
				{selectedCompany && (
					<Text size="sm" c="gray">
						({selectedCompany.company_name})
					</Text>
				)}
			</Group>

			<Stack gap="lg">
				<Grid>
					<GridCol span={6}>
						<Select
							label="架電結果"
							placeholder="架電結果を選択"
							data={callingResult.map((result) => ({
								value: result.id.toString(),
								label: result.name,
							}))}
							styles={{
								label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
							}}
						/>
					</GridCol>

					<GridCol span={6}>
						<TextInput
							label="架電開始時間"
							type="datetime-local"
							placeholder="年/月/日 --:--"
							styles={{
								label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
							}}
						/>
					</GridCol>
				</Grid>

				<Grid>
					<GridCol span={6}>
						<TextInput
							label="担当者"
							placeholder="担当者名"
							styles={{
								label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
							}}
						/>
					</GridCol>

					<GridCol span={6}>
						<TextInput
							label="次回架電日"
							type="datetime-local"
							placeholder="年/月/日 --:--"
							styles={{
								label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
							}}
						/>
					</GridCol>
				</Grid>

				<Textarea
					label="対話内容"
					placeholder="対話内容を入力してください"
					rows={6}
					resize="none"
					styles={{
						label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
					}}
				/>

				<Group justify="center">
					<Button size="md" color="blue">
						登録
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
};
