import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function LayOut({ children }: LayoutProps) {
  return <div className="layout">{children}</div>;
}

export default LayOut;
