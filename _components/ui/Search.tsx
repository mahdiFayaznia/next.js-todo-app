"use client";

import { Input } from "@heroui/react";
import { RiSearchLine } from "@remixicon/react";

const Search = () => {
  return (
    <Input
      labelPlacement="outside"
      placeholder="Search todo"
      className="w-full md:max-w-xs"
      isClearable
      startContent={<RiSearchLine />}
    />
  );
};

export default Search;
