"use client";

import { Button, Input } from "@heroui/react";
import { RiAddFill } from "@remixicon/react";

const AddTodo = () => {
  return (
    <div className="FLEX-CENTER gap-2">
      <Input
        labelPlacement="outside"
        placeholder="Add todo"
        className="w-full"
        isClearable
        startContent={<RiAddFill />}
      />
      <Button color="primary">Add Todo</Button>
    </div>
  );
};

export default AddTodo;
