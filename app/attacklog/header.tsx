"use client";

import { Button, Group, Title, Text } from "@mantine/core";
import {
  IconChevronsLeft,
  IconChevronsRight,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useMemo } from "react";
import { useQueryStates, parseAsInteger, parseAsString } from "nuqs";

export const Header = () => {
  const [query, setQuery] = useQueryStates({
    ids: parseAsString.withDefault(""),
    pos: parseAsInteger.withDefault(0),
    company_id: parseAsString.withDefault(""),
  });

  const idsList = useMemo(() => {
    return query.ids
      ? query.ids
          .split(",")
          .map((s) => parseInt(s, 10))
          .filter((n) => Number.isFinite(n))
      : [];
  }, [query.ids]);

  const currentIndex = useMemo(() => {
    if (idsList.length === 0) return 0;
    if (query.pos >= 0 && query.pos < idsList.length) return query.pos;
    const cid = parseInt(query.company_id, 10);
    const idx = idsList.indexOf(cid);
    return idx >= 0 ? idx : 0;
  }, [idsList, query.pos, query.company_id]);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < idsList.length - 1;
  const total = idsList.length;
  const displayIndex = total > 0 ? currentIndex + 1 : 0;

  const go = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= idsList.length) return;
    const nextId = idsList[nextIndex];
    setQuery({ pos: nextIndex, company_id: String(nextId) });
  };

  return (
    <Group justify="space-between" align="center">
      <Group gap="xs" align="center">
        <Title order={2}>アタックログ</Title>
        <Text c="dimmed" size="sm">
          {total > 0 ? `${displayIndex}/${total}` : "-"}
        </Text>
      </Group>
      <Group gap="sm">
        <Button
          leftSection={<IconChevronsLeft size={18} />}
          variant="light"
          color="green"
          disabled={!canPrev}
          onClick={() => go(currentIndex - 1)}
        >
          前
        </Button>
        <Button
          leftSection={<IconChevronsRight size={18} />}
          variant="light"
          color="green"
          disabled={!canNext}
          onClick={() => go(currentIndex + 1)}
        >
          次
        </Button>
        <Link href="/">
          <Button leftSection={<IconX size={18} />} variant="light" color="green">
            閉
          </Button>
        </Link>
      </Group>
    </Group>
  );
};
