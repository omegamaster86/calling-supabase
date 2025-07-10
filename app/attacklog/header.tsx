
import { Button} from '@mantine/core';
import { IconChevronsLeft, IconChevronsRight, IconX } from '@tabler/icons-react';

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <p>AttackLog</p>
      <div className="flex gap-4">
        <Button leftSection={<IconChevronsLeft size={18} />}>前</Button>
        <Button leftSection={<IconChevronsRight size={18} />}>次</Button>
        <Button leftSection={<IconX size={18} />}>閉</Button>
      </div>
    </div>
  )
}
