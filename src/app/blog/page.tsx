export default function BlogPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-3">第一篇博客文章</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          这是第一篇博客文章的摘要内容...
        </p>
        <a 
          href="/blog/1"
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          阅读更多 →
        </a>
      </article>
      
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-3">第二篇博客文章</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          这是第二篇博客文章的摘要内容...
        </p>
        <a 
          href="/blog/2"
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          阅读更多 →
        </a>
      </article>
    </div>
  );
} 