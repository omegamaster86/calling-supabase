import React from 'react'
import type { CompanyInfo } from '../types';
import { TableHeader } from './_components/table-header';
import { TableCell } from './_components/table-cell';

interface CompanyListProps {
  companies: CompanyInfo[];
}

const CompanyList = ({ companies }: CompanyListProps) => {
  const displayCompanies = companies && companies.length > 0 ? companies : [];

  return (
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
          <tr key={company.company_id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
            <TableCell>{company.calling_result}</TableCell>
            <TableCell>{company.sales_person}</TableCell>
            <TableCell>{company.next_call_date}</TableCell>
            <TableCell isBlue>{company.company_name}</TableCell>
            <TableCell>{company.address}</TableCell>
            <TableCell>{company.registered_phone_number || company.key_person_phone_number}</TableCell>
            <TableCell>{company.department_name}</TableCell>
            <TableCell>{company.key_person_name}</TableCell>
            <TableCell>{company.department_name}</TableCell>
            <TableCell>{company.key_person_note}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CompanyList