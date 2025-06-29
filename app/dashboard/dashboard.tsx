import React from 'react'
import { NativeSelect, Input } from '@mantine/core';
import { CallingResultItem } from '../types';

const dashboard = ({ callingResult }: { callingResult: CallingResultItem[] }) => {
  // データを NativeSelect 用の形式に変換
  const selectData = callingResult?.map(item => ({
    value: item.id.toString(),
    label: item.name
  })) || [];

  return (
    <div className="flex flex-wrap gap-4 py-4 bg-sky-300 items-center justify-center mx-auto">
      <NativeSelect
        data={[
          { value: '', label: '架電結果' },
          ...selectData
        ]}
        w={150}
      />
      <Input placeholder="会社名" w={150}/>
      <Input placeholder="電話番号" w={150}/>
      <Input placeholder="業界" w={150}/>
      <Input placeholder="営業担当" w={150}/>
      <Input placeholder="次回架電日" w={150}/>
    </div>
  )
}

export default dashboard