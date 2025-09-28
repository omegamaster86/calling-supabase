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

import type { AttackLog, CompanyInfo } from "@/app/types";
import { formatDate } from "@/components/format-day";

interface AttackHistoryProps {
	selectedCompany: CompanyInfo;
	historyData?: AttackLog[];
}

export const AttackHistory = ({
	selectedCompany,
	historyData = [],
}: AttackHistoryProps) => {
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
				<Table
					striped
					highlightOnHover
					style={{ tableLayout: "fixed", width: "100%" }}
				>
					<colgroup>
						<col style={{ width: 180 }} />
						<col style={{ width: 160 }} />
						<col />
					</colgroup>
					<TableThead>
						<TableTr>
							<TableTh>アタック日</TableTh>
							<TableTh>架電結果</TableTh>
							<TableTh>対話内容</TableTh>
						</TableTr>
					</TableThead>
					<TableTbody>
						{historyData.map((log) => (
							<TableTr key={log.id}>
								<TableTd>{formatDate(log.next_calling_day)}</TableTd>
								<TableTd>{log.calling_result}</TableTd>
								<TableTd
									style={{
										whiteSpace: "pre-wrap",
										wordBreak: "break-word",
										overflowWrap: "anywhere",
									}}
								>
									{log.content}
								</TableTd>
							</TableTr>
						))}
					</TableTbody>
				</Table>
			</ScrollArea>
		</Paper>
	);
};
