import * as React from "react";

type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement>;

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`overflow-auto ${className}`} {...props} />
));
ScrollArea.displayName = "ScrollArea";

export default ScrollArea; 