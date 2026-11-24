import type { ElementType, ComponentPropsWithoutRef } from "react";

// Renders a trusted copy string from content/*.ts that may hold inline
// markup (<em>, <i>, <strong>, <br>, <span lang="zh">).
type Props<T extends ElementType> = { as?: T; html: string } & Omit<ComponentPropsWithoutRef<T>, "children" | "dangerouslySetInnerHTML">;

export function Rich<T extends ElementType = "span">({ as, html, ...rest }: Props<T>) {
  const Tag = (as ?? "span") as ElementType;
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}
