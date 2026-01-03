"use client";

import { addToast, Button, Input } from "@heroui/react";
import { RiAddFill } from "@remixicon/react";
import { useState, useTransition } from "react";
import { addTodo } from "./actions";

const AddTodo = () => {
  const [isPending, startTransition] = useTransition();

  // state
  const [title, setTitle] = useState("");

  // function
  const submit = () => {
    startTransition(async () => {
      try {
        await addTodo(title);
        setTitle("");
      } catch (error) {
        if (error instanceof Error) {
          addToast({
            title: error?.message,
            color: "danger",
          });
        }
      }
    });
  };

  return (
    <div className="FLEX-CENTER gap-2">
      <Input
        value={title}
        labelPlacement="outside"
        placeholder="Add todo"
        className="w-full"
        isClearable
        startContent={<RiAddFill />}
        onChange={(e) => setTitle(e?.target?.value)}
      />
      <Button color="primary" isLoading={isPending} onPress={submit}>
        {isPending ? "Adding Todo" : "Add Todo"}
      </Button>
    </div>
  );
};

export default AddTodo;
