import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(135deg,#0B1220_0%,#0F172A_55%,#1E293B_100%)] backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="VYNEX Tech Hub"
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
            <span className="sr-only">VYNEX Tech Hub</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#E5E7EB] hover:text-[#D4AF37] transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#E5E7EB] hover:text-[#D4AF37] transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/disclosure"
              className="text-sm font-medium text-[#E5E7EB] hover:text-[#D4AF37] transition-colors"
            >
              Açıklama
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/turancan-bolat-87a834228/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-[#0077B5] text-white text-sm font-medium hover:brightness-110 transition"
            >
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#D4AF37] text-black text-sm font-medium hover:brightness-110 transition"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}