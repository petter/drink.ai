import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white/95 rounded-3xl p-8 shadow-xl ${className}`}>
      {children}
    </div>
  );
}