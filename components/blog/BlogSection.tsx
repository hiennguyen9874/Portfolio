'use client';

import { personalInfo } from '@/config/personal-info';

import BlogCard from './BlogCard';

const BlogSection = () => {
  const handleViewAllArticles = () => {
    console.log('View all articles');
  };

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.blog.posts.map((post) => (
            <BlogCard
              key={post.title}
              category={post.category}
              date={post.date}
              title={post.title}
              description={post.description}
              bgColor={post.bgColor}
              icon={<i className={`${post.icon} text-white text-6xl`}></i>}
              accentColor={post.accentColor}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="inline-flex items-center px-6 py-3 border border-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition duration-300"
            onClick={handleViewAllArticles}
            tabIndex={0}
            aria-label="View all articles"
            onKeyDown={(e) => e.key === 'Enter' && handleViewAllArticles()}
          >
            <i className="fas fa-book-open mr-2"></i> View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
