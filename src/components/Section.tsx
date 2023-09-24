// React 18以前的写法:

import { ReactNode } from "react";

/* import React from "react";

export const Section: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}; */

// React 18

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = "My SubHeading",
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
