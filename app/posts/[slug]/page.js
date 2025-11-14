import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <p className="text-sm text-slate-400">{post.category}</p>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
        {post.title}
      </h1>

      {/* YouTube video varsa önce onu göster */}
      {post.youtubeId && (
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-800">
          <iframe
            src={`https://www.youtube.com/embed/${post.youtubeId}`}
            title={post.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Eğer YouTube yoksa kapak görselini göster */}
      {!post.youtubeId && post.cover && (
        <div>
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-xl border border-slate-800"
          />
        </div>
      )}

      <article className="prose prose-invert prose-slate max-w-none leading-relaxed">
        {post.body && post.body.length > 0 ? (
          post.body.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <p>{post.description}</p>
        )}

        <p className="mt-4 text-sm text-slate-400">
          Bu içerik VYNEX Tech Hub için hazırlanmış teknik bir özet. Zamanla bu
          sayfaya tablo, ölçüm sonuçları ve detaylı bağlantılar da eklenecek.
        </p>
      </article>
    </main>
  );
}


