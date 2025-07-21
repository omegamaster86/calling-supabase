"use client"

import { Button } from '@mantine/core';
import { useState } from 'react';

export default function ExcelUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    alert('アップロード完了');
  };

  return (
    <>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />
      <Button onClick={handleUpload} disabled={!file}>
        アップロード
      </Button>
    </>
  );
}
