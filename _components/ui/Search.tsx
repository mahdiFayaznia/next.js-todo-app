"use client";

import { Input } from "@heroui/react";
import { RiSearchLine } from "@remixicon/react";

const Search = () => {
  return (
    <Input
      isClearable
      size="lg"
      labelPlacement="outside"
      placeholder="Search todo"
      className="w-full md:max-w-xs"
      startContent={<RiSearchLine />}
    />
  );
};

export default Search;
