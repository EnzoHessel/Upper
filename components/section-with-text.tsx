import React from 'react';

interface SectionWithTextProps {
  title: string;
  subtitle?: string;
  sections: { heading: string; content: string }[];
}

export function SectionWithText({
  title,
  subtitle,
  sections,
}: SectionWithTextProps) {
  return (
    <div className="flex flex-col md:flex-row bg-foreground gap-4 px-8 py-16 rounded-lg">
      <div className="flex flex-col justify-center pb-6 w-full md:w-1/2 gap-6">
        <h2 className="text-[hsl(var(--primary-foreground))]">{title}</h2>
        {subtitle && (
          <span className="text-[hsl(var(--secondary-content))]">
            {subtitle}
          </span>
        )}
      </div>
      <div className="flex gap-4 flex-col w-full md:w-1/2 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-center h-full"
          >
            <h4 className="text-[hsl(var(--primary-foreground))]">
              {section.heading}
            </h4>
            <span className="text-[hsl(var(--secondary-content))]">
              {section.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
