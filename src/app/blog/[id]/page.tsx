interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          博客文章 {params.id}
        </h1>
        <div className="text-gray-500 dark:text-gray-400">
          发布时间: 2024年1月1日
        </div>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          这是博客文章 {params.id} 的详细内容。你可以在这里添加更多的段落和内容。
        </p>
        <p>
          这个页面使用了动态路由，URL 中的 [id] 参数会被传递到组件中。
        </p>
      </div>
      
      <div className="mt-8">
        <a 
          href="/blog"
          className="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
        >
          返回博客列表
        </a>
      </div>
    </article>
  );
} 