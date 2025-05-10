"use client";

import BlogCard from './BlogCard';

type Blog = {
  category: string;
  date: string;
  title: string;
  description: string;
  bgColor: string;
  icon: JSX.Element;
  accentColor: string;
};

const BlogSection = () => {
  const blogPosts: Blog[] = [
    {
      category: 'Backend Development',
      date: 'Jun 2023',
      title: 'Designing High-Performance APIs in Go',
      description: 'Architectural patterns and optimization techniques for building low-latency APIs.',
      bgColor: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      icon: <i className="fas fa-book-open text-white text-6xl"></i>,
      accentColor: 'text-blue-500'
    },
    {
      category: 'DevOps',
      date: 'Apr 2023',
      title: 'Kubernetes Multi-Cluster Management',
      description: 'Strategies for managing multiple Kubernetes clusters with GitOps workflows.',
      bgColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
      icon: <i className="fas fa-cloud text-white text-6xl"></i>,
      accentColor: 'text-purple-500'
    },
    {
      category: 'Deep Learning',
      date: 'Feb 2023',
      title: 'Optimizing PyTorch Models for Production',
      description: 'Techniques for reducing latency and memory usage in deep learning models.',
      bgColor: 'bg-gradient-to-r from-green-600 to-teal-600',
      icon: <i className="fas fa-brain text-white text-6xl"></i>,
      accentColor: 'text-green-500'
    }
  ];

  const handleViewAllArticles = () => {
    console.log('View all articles');
  };

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.title}
              category={post.category}
              date={post.date}
              title={post.title}
              description={post.description}
              bgColor={post.bgColor}
              icon={post.icon}
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