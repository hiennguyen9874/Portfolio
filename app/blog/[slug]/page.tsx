'use client';

import { motion } from 'framer-motion';

import { useParams, useRouter } from 'next/navigation';

import { personalInfo } from '@/config/personal-info';
import { slugify } from '@/lib/utils';

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Find the post that matches the slug
  const post = personalInfo.blog.posts.find((post) => slugify(post.title) === slug);

  // If no post is found, show not found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The article you are looking for does not exist.</p>
          <button
            onClick={() => router.push('/blog')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            tabIndex={0}
            aria-label="Go back to all articles"
            onKeyDown={(e) => e.key === 'Enter' && router.push('/blog')}
          >
            Back to All Articles
          </button>
        </div>
      </div>
    );
  }

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handleGoBack}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition duration-300"
            tabIndex={0}
            aria-label="Go back"
            onKeyDown={(e) => e.key === 'Enter' && handleGoBack()}
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </button>

          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-400 mb-3">
              <span className={post.accentColor}>{post.category}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          </div>

          <div className={`h-64 ${post.bgColor} rounded-xl mb-8 flex items-center justify-center`}>
            <i className={`${post.icon} text-white text-8xl`}></i>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{post.description}</p>

            {/* Placeholder content - in a real app, this would be replaced with the actual blog content */}
            <p className="text-gray-300 leading-relaxed mb-6">
              This is a detailed article about {post.title}. In a real application, this would
              contain the full content of the blog post, including text, images, code examples, and
              more.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              The article would dive deep into the topic, providing valuable insights and practical
              advice for readers interested in {post.category}.
            </p>

            <div className="bg-gray-800 p-6 rounded-xl my-8">
              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>First important point about {post.category}</li>
                <li>Second key insight from this article</li>
                <li>Third practical tip for implementation</li>
                <li>Fourth consideration for advanced users</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              For more information about {post.category}, check out the other articles in this
              section.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInfo.blog.posts
                .filter((relatedPost) => relatedPost.title !== post.title)
                .slice(0, 2)
                .map((relatedPost) => (
                  <motion.div
                    key={relatedPost.title}
                    className="bg-gray-800 rounded-xl p-6 cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => router.push(`/blog/${slugify(relatedPost.title)}`)}
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && router.push(`/blog/${slugify(relatedPost.title)}`)
                    }
                  >
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span>{relatedPost.category}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{relatedPost.title}</h4>
                    <p className="text-gray-400 text-sm">{relatedPost.description}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogDetailPage;
