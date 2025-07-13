"use client";

import { Input, NativeSelect } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import type { CallingResultItem, CompanyInfo } from "../types";
import { TableCell } from "./_components/table-cell";
import { TableHeader } from "./_components/table-header";

interface DashboardProps {
	callingResult: CallingResultItem[];
	companies: CompanyInfo[];
}

const Dashboard = ({ callingResult, companies }: DashboardProps) => {
	// フィルター状態
	const [filters, setFilters] = useState({
		callingResult: "",
		companyName: "",
		phoneNumber: "",
		industry: "",
		salesPerson: "",
		nextCallDate: "",
	});

	const selectData =
		callingResult?.map((item) => ({
			value: item.id.toString(),
			label: item.name,
		})) || [];

	const filteredCompanies =
		companies?.filter((company) => {
			// 架電結果（完全一致）
			if (filters.callingResult && filters.callingResult !== "") {
				// 実際の架電結果データがないため、この条件はスキップ
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

			if (filters.industry && company.department_name !== filters.industry) {
				return false;
			}

			if (filters.salesPerson) {
				// 実際の営業担当データがないため、この条件はスキップ
			}

			if (filters.nextCallDate) {
				// 実際の次回架電日データがないため、この条件はスキップ
			}

			return true;
		}) || [];

	const displayCompanies =
		filteredCompanies.length > 0 ? filteredCompanies : [];

	return (
		<div>
			{/* フィルター部分 */}
			<div className="flex flex-wrap gap-4 py-4 bg-sky-300 items-center justify-center mx-auto">
				<NativeSelect
					data={[{ value: "", label: "架電結果" }, ...selectData]}
					w={150}
					value={filters.callingResult}
					onChange={(event) =>
						setFilters({ ...filters, callingResult: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="会社名"
					w={150}
					value={filters.companyName}
					onChange={(event) =>
						setFilters({ ...filters, companyName: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="電話番号"
					w={150}
					value={filters.phoneNumber}
					onChange={(event) =>
						setFilters({ ...filters, phoneNumber: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="業界"
					w={150}
					value={filters.industry}
					onChange={(event) =>
						setFilters({ ...filters, industry: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="営業担当"
					w={150}
					value={filters.salesPerson}
					onChange={(event) =>
						setFilters({ ...filters, salesPerson: event.currentTarget.value })
					}
				/>
				<Input
					placeholder="次回架電日"
					w={150}
					value={filters.nextCallDate}
					onChange={(event) =>
						setFilters({ ...filters, nextCallDate: event.currentTarget.value })
					}
				/>
			</div>

			{/* テーブル部分 */}
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
						<TableHeader>特記事項</TableHeader>
					</tr>
				</thead>
				<tbody>
					{displayCompanies.map((company, index) => (
						<tr
							key={company.company_id}
							className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
						>
							<TableCell>-</TableCell>
							<TableCell>-</TableCell>
							<TableCell>-</TableCell>
							<TableCell isBlue>
								<Link
									href={`/attacklog?company_id=${company.company_id}`}
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
							<TableCell>{company.key_person_note}</TableCell>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
