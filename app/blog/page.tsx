'use client';

import { motion } from 'framer-motion';

import { useRouter } from 'next/navigation';

import { personalInfo } from '@/config/personal-info';
import { slugify } from '@/lib/utils';

const BlogListPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  const handleReadArticle = (title: string) => {
    router.push(`/blog/${slugify(title)}`);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handleGoBack}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition duration-300"
            tabIndex={0}
            aria-label="Go back to home"
            onKeyDown={(e) => e.key === 'Enter' && handleGoBack()}
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </button>

          <h1 className="text-4xl font-bold mb-8">Technical Articles</h1>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Thoughts and insights on software engineering, DevOps, and machine learning. Browse
            through these articles to learn more about best practices and advanced techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.blog.posts.map((post) => (
              <motion.div
                key={post.title}
                className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleReadArticle(post.title)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleReadArticle(post.title)}
              >
                <div className={`h-48 ${post.bgColor} flex items-center justify-center`}>
                  <i className={`${post.icon} text-white text-6xl`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <div
                    className={`${post.accentColor} hover:opacity-80 text-sm font-medium flex items-center`}
                  >
                    Read Article <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder for future articles - in a real app, this would be dynamic */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">More Articles Coming Soon</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay tuned for upcoming articles on cloud infrastructure, microservices architecture,
              and advanced deep learning techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogListPage;
