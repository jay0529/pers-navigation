export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">关于我们</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          这是一个使用 Next.js 和 Tailwind CSS 构建的现代化网站。
        </p>
        <div className="mt-8">
          <a 
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
} 