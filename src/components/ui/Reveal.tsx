import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

type RevealProps<T extends ElementType> = PropsWithChildren<{
  as?: T;
  className?: string;
}> &
  Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Reveal<T extends ElementType = "div">({ as, className = "", children, ...props }: RevealProps<T>) {
  const Tag = as ?? "div";
  // The cast keeps this tiny polymorphic helper ergonomic without leaking generic details into section code.
  const passthroughProps = props as ComponentPropsWithoutRef<typeof Tag>;

  return (
    <Tag className={className} data-reveal {...passthroughProps}>
      {children}
    </Tag>
  );
}
