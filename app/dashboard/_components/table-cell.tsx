import React from 'react'

export const TableCell = ({ children, isBlue = false }: { children: React.ReactNode; isBlue?: boolean }) => (
  <td className="border border-gray-300 px-4 py-2">
    {isBlue ? <span style={{ color: 'blue' }}>{children}</span> : children}
  </td>
);