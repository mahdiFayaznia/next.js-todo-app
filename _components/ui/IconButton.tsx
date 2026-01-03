"use client";

import { Button, ButtonProps, Tooltip } from "@heroui/react";

interface Props extends ButtonProps {
  tooltip: string;
  icon: React.ReactNode;
}

const IconButton = ({ tooltip, icon, ...rest }: Props) => {
  const ariaLabel = rest["aria-label"] ?? tooltip;

  return (
    <Tooltip content={tooltip} placement="top">
      <Button isIconOnly aria-label={ariaLabel} {...rest}>
        {icon}
      </Button>
    </Tooltip>
  );
};

export default IconButton;
