import React from 'react'

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="border border-gray-300 px-4 py-2 text-left">
    {children}
  </th>
);