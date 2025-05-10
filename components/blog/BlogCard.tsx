"use client";

import { ReactNode } from 'react';

type BlogCardProps = {
  category: string;
  date: string;
  title: string;
  description: string;
  bgColor: string;
  icon: ReactNode;
  accentColor: string;
};

const BlogCard = ({
  category,
  date,
  title,
  description,
  bgColor,
  icon,
  accentColor
}: BlogCardProps) => {
  const handleReadArticle = () => {
    console.log(`Read article: ${title}`);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden project-card">
      <div className={`h-48 ${bgColor} flex items-center justify-center`}>
        {icon}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span>{category}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">
          {description}
        </p>
        <button
          className={`${accentColor} hover:opacity-80 text-sm font-medium flex items-center`}
          onClick={handleReadArticle}
          tabIndex={0}
          aria-label={`Read article: ${title}`}
          onKeyDown={(e) => e.key === 'Enter' && handleReadArticle()}
        >
          Read Article <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogCard; 