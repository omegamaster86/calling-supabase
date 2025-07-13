import {
	Paper,
	ScrollArea,
	Table,
	TableTbody,
	TableTd,
	TableTh,
	TableThead,
	TableTr,
	Text,
	Title,
} from "@mantine/core";

import type { CompanyInfo } from "@/app/types";

interface AttackHistoryProps {
	selectedCompany?: CompanyInfo | null;
}

export const AttackHistory = ({ selectedCompany }: AttackHistoryProps) => {
	const historyData = [
		{
			date: "2025/07/24 23:45",
			result: "テスト",
			content: "マージ後テスト",
		},
		{
			date: "2025/07/25 19:01",
			result: "テスト",
			content: "最新の情報が取得できるかテスト",
		},
		{
			date: "2025/07/25 20:08",
			result: "テスト",
			content: "テスト",
		},
		{
			date: "2025/07/25 20:11",
			result: "テスト",
			content: "プルダウンテスト",
		},
		{
			date: "2025/07/25 19:14",
			result: "テスト",
			content: "usememoテスト",
		},
	];

	return (
		<Paper shadow="sm" p="md" radius="md" withBorder>
			<Title
				order={3}
				c="blue"
				mb="md"
				pb="sm"
				style={{ borderBottom: "1px solid #e3f2fd" }}
			>
				架電履歴
				{selectedCompany && (
					<Text size="sm" c="gray" display="inline" ml="sm">
						({selectedCompany.company_name})
					</Text>
				)}
			</Title>

			<ScrollArea>
				<Table striped highlightOnHover>
					<TableThead>
						<TableTr>
							<TableTh>アタック日</TableTh>
							<TableTh>架電結果</TableTh>
							<TableTh>対話内容</TableTh>
						</TableTr>
					</TableThead>
					<TableTbody>
						{historyData.map((item, index) => (
							<TableTr key={`${item.date}-${index}`}>
								<TableTd>{item.date}</TableTd>
								<TableTd>{item.result}</TableTd>
								<TableTd>{item.content}</TableTd>
							</TableTr>
						))}
					</TableTbody>
				</Table>
			</ScrollArea>
		</Paper>
	);
};
