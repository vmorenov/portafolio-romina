import type { ReactNode } from "react";

type SectionTitleProps = {
  icon: ReactNode;
  title: string;
};

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="section-title__icon">{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

