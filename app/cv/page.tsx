'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';

import { useEffect } from 'react';

import Link from 'next/link';

const CVPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Download CV - Portfolio';
  }, []);

  const handleDownload = () => {
    // Get the file URL
    const fileUrl = '/resume.pdf';

    // Create an anchor element and set properties
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'resume.pdf');

    // Append to the document
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark px-4">
      <motion.div
        className="max-w-md w-full bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Resume / CV</h1>
          <p className="text-gray-400">
            Download my professional resume to learn more about my experience and qualifications.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center">
            <div className="mr-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">resume.pdf</h3>
              <p className="text-gray-400 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </button>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CVPage;
