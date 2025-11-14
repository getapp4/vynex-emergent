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
    <main className="max-w-3xl mx-auto px-4 py-10">
      <p className="text-sm text-slate-400 mb-2">{post.category}</p>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
        {post.title}
      </h1>

      {post.cover && (
        <div className="mb-6">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-xl border border-slate-800"
          />
        </div>
      )}

      <article className="prose prose-invert prose-slate max-w-none leading-relaxed">
        <p>{post.description}</p>

        <p className="mt-4 text-sm text-slate-400">
          Bu yazı VYNEX Tech Hub için hazırlanmış teknik bir özet. Çok yakında
          her başlık için detaylı adım adım rehber metinlerini de ekleyebiliriz.
        </p>
      </article>
    </main>
  );
}
