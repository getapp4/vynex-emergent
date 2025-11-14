import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="group h-full rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-md hover:shadow-[#D4AF37]/10 transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 mb-4 line-clamp-3">
            {post.description}
          </p>
          <div className="flex items-center text-[#D4AF37] text-sm font-medium">
            Oku
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}