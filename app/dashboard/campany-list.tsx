import React from 'react'
import { Company } from '../types';
import { TableHeader } from './_components/table-header';
import { TableCell } from './_components/table-cell';

interface CompanyListProps {
  companies: Company[];
}

const dummyCompanies: Company[] = [
  {
    id: 1,
    location: '東京',
    calling_result: 'テスト',
    sales_person: 'マッシュ',
    next_call_date: '2024/03/24 19:14',
    company_name: 'スプン会社1',
    phone_number: '03-3333-3333',
    industry: 'IT',
    name: '田中',
    department: '情報システム',
    notes: '温厚'
  },
  {
    id: 2,
    location: '東京',
    calling_result: 'テスト',
    sales_person: 'ウォール',
    next_call_date: '2024/03/24 17:25',
    company_name: 'スプン会社1',
    phone_number: '03-3333-3333',
    industry: 'IT',
    name: '田中',
    department: '情報システム',
    notes: ''
  },
  {
    id: 3,
    location: '東京',
    calling_result: 'テスト',
    sales_person: 'レイン',
    next_call_date: '2024/03/18 22:42',
    company_name: 'スプン会社2',
    phone_number: '03-3333-3334',
    industry: 'IT',
    name: 'アドレステスト',
    department: '情報システム',
    notes: ''
  },
  {
    id: 4,
    location: '東京',
    calling_result: 'テスト',
    sales_person: 'マッシュ',
    next_call_date: '2024/03/24 21:01',
    company_name: 'スプン会社3',
    phone_number: '03-3333-3335',
    industry: 'IT',
    name: 'アドレス',
    department: '情報シス',
    notes: '会議多め'
  },
  {
    id: 5,
    location: '京都',
    calling_result: '不在',
    sales_person: 'フィン',
    next_call_date: '2024/03/10 21:05',
    company_name: 'スプン会社4',
    phone_number: '03-3334-3336',
    industry: '小売',
    name: 'マージ後確認',
    department: '生産管理',
    notes: '会議多め'
  },
  {
    id: 6,
    location: '京都',
    calling_result: 'テスト',
    sales_person: 'ランス',
    next_call_date: '2024/03/09 21:54',
    company_name: 'スプン会社6',
    phone_number: '03-3334-3338',
    industry: '小売',
    name: 'マージ後確認',
    department: '生産管理',
    notes: ''
  }
];


const CompanyList = ({ companies }: CompanyListProps) => {
  // propsで渡されたデータがない場合はダミーデータを使用
  const displayCompanies = companies && companies.length > 0 ? companies : dummyCompanies;

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <TableHeader>住所</TableHeader>
          <TableHeader>架電結果</TableHeader>
          <TableHeader>営業担当者</TableHeader>
          <TableHeader>次回予定日</TableHeader>
          <TableHeader>会社名</TableHeader>
          <TableHeader>電話番号</TableHeader>
          <TableHeader>業界</TableHeader>
          <TableHeader>名前</TableHeader>
          <TableHeader>部署</TableHeader>
          <TableHeader>特記事項</TableHeader>
        </tr>
      </thead>
      <tbody>
        {displayCompanies.map((company, index) => (
          <tr key={company.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
            <TableCell>{company.location}</TableCell>
            <TableCell>{company.calling_result}</TableCell>
            <TableCell>{company.sales_person}</TableCell>
            <TableCell>{company.next_call_date}</TableCell>
            <TableCell isBlue>{company.company_name}</TableCell>
            <TableCell>{company.phone_number}</TableCell>
            <TableCell>{company.industry}</TableCell>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.department}</TableCell>
            <TableCell>{company.notes}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CompanyList