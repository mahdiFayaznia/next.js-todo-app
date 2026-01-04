"use client";

import { Input } from "@heroui/react";
import { RiSearchLine } from "@remixicon/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const defaultValue = searchParams.get("q") ?? "";

  const updateQuery = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 1000);

  return (
    <Input
      isClearable
      size="lg"
      labelPlacement="outside"
      placeholder="Search todo"
      className="w-full md:max-w-xs"
      startContent={<RiSearchLine />}
      defaultValue={defaultValue}
      onChange={(e) => updateQuery(e?.target?.value)}
      onClear={() => updateQuery("")}
    />
  );
};

export default Search;
