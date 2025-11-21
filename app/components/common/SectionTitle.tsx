import React from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
  underlineWidth?: string; 
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  underlineWidth = "w-full",
  className = "",
}) => {
  return (
    <div className={`text-center mb-8 md:mb-16 ${className}`}>
      <h3 className="group cursor-pointer text-2xl md:text-3xl font-bold text-dark-grey mb-2 relative inline-block pb-4">
        {title}
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-uwp-red rounded ${underlineWidth} scale-x-0 origin-center transition-all duration-300 ease-in-out group-hover:scale-x-100`}
        />
      </h3>

      {description && (
        <p className="text-base text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
