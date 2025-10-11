"use client";

import { Input, NativeSelect } from "@mantine/core";
import Link from "next/link";
import { parseAsString, useQueryStates } from "nuqs";
import { formatDate } from "@/components/format-day";
import type { CompanyInfo } from "../types";
import { TableCell } from "./_components/table-cell";
import { TableHeader } from "./_components/table-header";

interface DashboardProps {
	companies: CompanyInfo[];
}

const Dashboard = ({ companies }: DashboardProps) => {
	// フィルター状態（URL と同期）
	const [filters, setFilters] = useQueryStates({
		callingResult: parseAsString.withDefault(""),
		companyName: parseAsString.withDefault(""),
		phoneNumber: parseAsString.withDefault(""),
		industry: parseAsString.withDefault(""),
		salesPerson: parseAsString.withDefault(""),
		nextCallDate: parseAsString.withDefault(""),
	});
	// 架電結果の選択肢を会社データから生成（重複を除去）
	const uniqueCallingResults = Array.from(
		new Set(
			companies?.map((company) => company.calling_result).filter(Boolean),
		),
	);
	const callingResultSelectData = uniqueCallingResults.map((result) => ({
		value: result,
		label: result,
	}));

	const filteredCompanies =
		companies?.filter((company) => {
			if (filters.callingResult && filters.callingResult !== "") {
				if (company.calling_result !== filters.callingResult) {
					return false;
				}
			}

			if (
				filters.companyName &&
				!company.company_name
					.toLowerCase()
					.includes(filters.companyName.toLowerCase())
			) {
				return false;
			}

			if (filters.phoneNumber) {
				const phoneToCheck =
					company.registered_phone_number ||
					company.key_person_phone_number ||
					"";
				if (!phoneToCheck.includes(filters.phoneNumber)) {
					return false;
				}
			}

			if (filters.industry) {
				const industryToCheck = company.department_name || "";
				if (
					!industryToCheck
						.toLowerCase()
						.includes(filters.industry.toLowerCase())
				) {
					return false;
				}
			}

			if (filters.salesPerson) {
				const salesPersonToCheck = company.salse_person || "";
				if (
					!salesPersonToCheck
						.toLowerCase()
						.includes(filters.salesPerson.toLowerCase())
				) {
					return false;
				}
			}

			if (filters.nextCallDate) {
				const nextCallDateToCheck = company.next_calling_day
					? formatDate(company.next_calling_day)
					: "";
				if (!nextCallDateToCheck.includes(filters.nextCallDate)) {
					return false;
				}
			}
			return true;
		}) || [];

	const displayCompanies =
		filteredCompanies.length > 0 ? filteredCompanies : [];

	// 現在の表示順の company_id 一覧（AttackLog へ受け渡し用）
	const idList = displayCompanies.map((c) => c.company_id);

	return (
		<div className="h-full min-h-0 flex flex-col w-full">
			{/* フィルター部分（常時表示） */}
			<div className="flex flex-wrap gap-4 py-4 bg-sky-300 items-center justify-center">
				<NativeSelect
					data={[{ value: "", label: "架電結果" }, ...callingResultSelectData]}
					w={150}
					value={filters.callingResult}
					onChange={(event) =>
						setFilters({ callingResult: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="会社名"
					w={150}
					value={filters.companyName}
					onChange={(event) =>
						setFilters({ companyName: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="電話番号"
					w={150}
					value={filters.phoneNumber}
					onChange={(event) =>
						setFilters({ phoneNumber: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="業界"
					w={150}
					value={filters.industry}
					onChange={(event) =>
						setFilters({ industry: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="営業担当"
					w={150}
					value={filters.salesPerson}
					onChange={(event) =>
						setFilters({ salesPerson: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="次回架電日"
					w={150}
					value={filters.nextCallDate}
					onChange={(event) =>
						setFilters({ nextCallDate: event.currentTarget.value })
					}
				/>
			</div>
			{/* テーブル部分（ここだけスクロール） */}
			<div className="flex-1 min-h-0 overflow-auto">
				<table className="w-full border-collapse border border-gray-300">
					<thead>
						<tr>
							<TableHeader>架電結果</TableHeader>
							<TableHeader>営業担当者</TableHeader>
							<TableHeader>次回予定日</TableHeader>
							<TableHeader>会社名</TableHeader>
							<TableHeader>住所</TableHeader>
							<TableHeader>電話番号</TableHeader>
							<TableHeader>業界</TableHeader>
							<TableHeader>名前</TableHeader>
							<TableHeader>部署</TableHeader>
						</tr>
					</thead>
					<tbody>
						{displayCompanies.map((company, index) => (
							<tr
								key={company.company_id}
								className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
							>
								<TableCell>{company.calling_result || "-"}</TableCell>
								<TableCell>{company.salse_person || "-"}</TableCell>
								<TableCell>
									{company.next_calling_day
										? formatDate(company.next_calling_day)
										: ""}
								</TableCell>
								<TableCell isBlue>
									<Link
										href={`/attacklog?company_id=${company.company_id}&ids=${encodeURIComponent(idList.join(","))}&pos=${index}`}
										className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
									>
										{company.company_name}
									</Link>
								</TableCell>
								<TableCell>{company.address}</TableCell>
								<TableCell>
									{company.registered_phone_number ||
										company.key_person_phone_number}
								</TableCell>
								<TableCell>{company.department_name}</TableCell>
								<TableCell>{company.key_person_name}</TableCell>
								<TableCell>{company.department_name}</TableCell>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
