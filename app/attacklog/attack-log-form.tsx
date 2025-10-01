"use client";

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
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CallingResultItem, CompanyInfo } from "@/app/types";
import { createClient } from "@/lib/supabase/client";

interface AttackLogFormProps {
	callingResult: CallingResultItem[];
	selectedCompany?: CompanyInfo | null;
}

export const AttackLogForm = ({
	callingResult,
	selectedCompany,
}: AttackLogFormProps) => {
	const router = useRouter();
	const supabase = createClient();

	const [callingResultValue, setCallingResultValue] = useState<string | null>(
		null,
	);
	const [callingStart, setCallingStart] = useState<string>("");
	const [nextCallingDay, setNextCallingDay] = useState<string>("");
	const [salsePerson, setSalsePerson] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async () => {
		if (!selectedCompany?.company_id) return;

		setSubmitting(true);
		const { error } = await supabase.rpc("insert_calling_log", {
			company_id_param: selectedCompany.company_id,
			calling_start_param: callingStart
				? new Date(callingStart).toISOString()
				: null,
			next_calling_day_param: nextCallingDay
				? new Date(nextCallingDay).toISOString()
				: null,
			calling_result_param: callingResultValue,
			content_param: content || null,
			salse_person_param: salsePerson || null,
		});

		setSubmitting(false);
		if (error) {
			console.error(error);
			return;
		}

		// 成功: 画面を再検証して履歴を更新
		router.refresh();
		// 入力をリセット
		setCallingResultValue(null);
		setCallingStart("");
		setNextCallingDay("");
		setSalsePerson("");
		setContent("");
	};

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
								value: result.name,
								label: result.name,
							}))}
							value={callingResultValue}
							onChange={setCallingResultValue}
							styles={{
								label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
							}}
						/>
					</GridCol>

					<GridCol span={6}>
						<TextInput
							label="架電開始時間"
							type="datetime-local"
							placeholder="年/月/日"
							value={callingStart}
							onChange={(e) => setCallingStart(e.currentTarget.value)}
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
							value={salsePerson}
							onChange={(e) => setSalsePerson(e.currentTarget.value)}
							styles={{
								label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
							}}
						/>
					</GridCol>

					<GridCol span={6}>
						<TextInput
							label="次回架電日"
							type="datetime-local"
							placeholder="年/月/日"
							value={nextCallingDay}
							onChange={(e) => setNextCallingDay(e.currentTarget.value)}
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
					value={content}
					onChange={(e) => setContent(e.currentTarget.value)}
					styles={{
						label: { color: "#1976d2", fontSize: "14px", fontWeight: 500 },
					}}
				/>

				<Group justify="center">
					<Button
						size="md"
						color="blue"
						onClick={handleSubmit}
						loading={submitting}
					>
						登録
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
};
