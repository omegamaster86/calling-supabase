import React from 'react'
import { Company } from '../types';

// ダミーデータ
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

interface CompanyListProps {
  companies?: Company[];
}

const CompanyList = ({ companies }: CompanyListProps) => {
  // propsで渡されたデータがない場合はダミーデータを使用
  const displayCompanies = companies && companies.length > 0 ? companies : dummyCompanies;

  return (
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">住所</th>
            <th className="border border-gray-300 px-4 py-2 text-left">架電結果</th>
            <th className="border border-gray-300 px-4 py-2 text-left">営業担当者</th>
            <th className="border border-gray-300 px-4 py-2 text-left">次回予定日</th>
            <th className="border border-gray-300 px-4 py-2 text-left">会社名</th>
            <th className="border border-gray-300 px-4 py-2 text-left">電話番号</th>
            <th className="border border-gray-300 px-4 py-2 text-left">業界</th>
            <th className="border border-gray-300 px-4 py-2 text-left">名前</th>
            <th className="border border-gray-300 px-4 py-2 text-left">部署</th>
            <th className="border border-gray-300 px-4 py-2 text-left">特記事項</th>
          </tr>
        </thead>
        <tbody>
          {displayCompanies.map((company, index) => (
            <tr key={company.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
              <td className="border border-gray-300 px-4 py-2">{company.location}</td>
              <td className="border border-gray-300 px-4 py-2">{company.calling_result}</td>
              <td className="border border-gray-300 px-4 py-2">{company.sales_person}</td>
              <td className="border border-gray-300 px-4 py-2">{company.next_call_date}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span style={{ color: 'blue' }}>{company.company_name}</span>
              </td>
              <td className="border border-gray-300 px-4 py-2">{company.phone_number}</td>
              <td className="border border-gray-300 px-4 py-2">{company.industry}</td>
              <td className="border border-gray-300 px-4 py-2">{company.name}</td>
              <td className="border border-gray-300 px-4 py-2">{company.department}</td>
              <td className="border border-gray-300 px-4 py-2">{company.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default CompanyList