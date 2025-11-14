import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import AdSlot from '@/components/AdSlot';
import { posts } from '@/data/posts';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-[linear-gradient(135deg,#0B1220_0%,#0F172A_55%,#1E293B_100%)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center rounded-3xl bg-white/70 backdrop-blur p-8 md:p-12 border border-slate-200">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                VYNEX Tech Hub
              </h1>
              <p className="text-xl md:text-2xl text-[#D4AF37] mb-4 font-semibold">
                TCB TECHNOLOGY
              </p>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Teknoloji dünyasının derinliklerine inin. HDMI, USB-C, PoE ve daha fazlası hakkında uzman rehberler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.youtube.com/@VYNEXdecode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#D4AF37] text-black text-base font-medium hover:brightness-110 transition"
                >
                  Videoları Keşfet
                </a>
                <a
                  href="#latest"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] text-base font-medium hover:bg-[#D4AF37]/10 transition"
                >
                  Blog Yazıları
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section id="latest" className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                En Yeni Yazılar
              </h2>
              <p className="text-lg text-slate-600">
                Teknoloji rehberleri ve pratik çözümler
              </p>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Ad Slot */}
        <AdSlot />
      </main>

      <Footer />
    </div>
  );
}