import React from "react";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="section-header">
      <div className="flex justify-center">
        <h2 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </h2>
      </div>
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h1>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
};
