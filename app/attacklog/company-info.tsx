import { Grid, GridCol, Paper, Stack, Text, Title } from "@mantine/core";
import type { CompanyInfo } from "@/app/types";
import Link from "next/link";

interface CompanyInfoProps {
	selectedCompany?: CompanyInfo | null;
}

// 30文字以降を「...」で省略する関数
const truncateText = (text: string, maxLength: number = 30): string => {
	if (!text) return "";
	return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const CompanyInformation = ({ selectedCompany }: CompanyInfoProps) => {
	const displayCompany = selectedCompany || {
		company_name: "",
		company_website: "",
		address: "",
		registered_phone_number: "",
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
				法人情報
			</Title>

			<Grid>
				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								会社名
							</Text>
							<Text c="dark">{displayCompany.company_name}</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								会社サイト
							</Text>
							{displayCompany.company_website ? (
								<Text c="dark">
									<Link
										href={
											displayCompany.company_website.startsWith("http")
												? displayCompany.company_website
												: `https://${displayCompany.company_website}`
										}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:text-blue-800 hover:underline"
										title={displayCompany.company_website}
									>
										{truncateText(displayCompany.company_website)}
									</Link>
								</Text>
							) : (
								<Text c="dark"></Text>
							)}
						</div>
					</Stack>
				</GridCol>

				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								住所
							</Text>
							<Text c="dark">{displayCompany.address || "未設定"}</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								登記電話番号
							</Text>
							<Text c="dark">
								{displayCompany.registered_phone_number || "未設定"}
							</Text>
						</div>
					</Stack>
				</GridCol>
			</Grid>
		</Paper>
	);
};
