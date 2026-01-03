"use client";

import { IconButton } from "@/_components/ui";
import { ICON_SIZE } from "@/_constants";
import { addToast, Input } from "@heroui/react";
import {
  RiCloseLine,
  RiDeleteBin2Line,
  RiPencilLine,
  RiSaveLine,
} from "@remixicon/react";
import { useState, useTransition } from "react";
import { deleteTodo, updateTodo } from "./actions";

interface Todo {
  id: string;
  title: string;
}

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition();

  // state
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(todo?.title);

  // function
  const startEdit = () => {
    setDraftTitle(todo?.title); // reset draft from persisted value
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraftTitle(todo?.title); // rollback
    setIsEditing(false);
  };

  const saveEdit = () => {
    startTransition(async () => {
      try {
        await updateTodo(todo?.id, draftTitle);
        setIsEditing(false);
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

  const onDelete = () => {
    startTransition(async () => {
      await deleteTodo(todo?.id);
    });
  };

  return (
    <li className="border-default-200 flex items-center gap-2 border-b p-2">
      {isEditing && (
        <>
          <Input
            autoFocus
            size="sm"
            className="flex-1 pr-2"
            disabled={isPending}
            value={draftTitle}
            onChange={(e) => setDraftTitle(e?.target?.value)}
          />
          <IconButton
            tooltip="update todo"
            icon={<RiSaveLine size={ICON_SIZE} />}
            variant="light"
            onPress={saveEdit}
            disabled={isPending}
          />
          <IconButton
            tooltip="cancel edit"
            icon={<RiCloseLine size={ICON_SIZE} />}
            variant="light"
            onPress={cancelEdit}
            disabled={isPending}
          />
        </>
      )}
      {!isEditing && (
        <>
          <span className="flex-1">{todo?.title}</span>
          <IconButton
            tooltip="edit todo"
            icon={<RiPencilLine size={ICON_SIZE} />}
            variant="light"
            onPress={startEdit}
          />
          <IconButton
            tooltip="delete todo"
            icon={<RiDeleteBin2Line size={ICON_SIZE} />}
            variant="light"
            color="danger"
            onPress={onDelete}
            disabled={isPending}
          />
        </>
      )}
    </li>
  );
};

export default TodoItem;
