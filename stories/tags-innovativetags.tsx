import React from "react";
import { Badge } from "@/registry/default/ui/badge";

export interface InnovativeTagsProps {
  variants?: Array<'default' | 'secondary' | 'destructive' | 'outline'>;
  spacing?: string;
}

export function InnovativeTags({ variants = ['default', 'secondary', 'destructive', 'outline'], spacing = '10px' }: InnovativeTagsProps) {
  return (
    <>
      {variants.map((variant, index) => (
        <Badge key={index} variant={variant} style={{ marginLeft: index === 0 ? 0 : spacing }}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Badge>
      ))}
    </>
  );
}

export default InnovativeTags;
