import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#0B1220] text-[#E5E7EB]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[#D4AF37] mb-2">VYNEX Tech Hub</h3>
            <p className="text-sm text-[#E5E7EB]/70">TCB TECHNOLOGY</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#E5E7EB]/70 hover:text-[#D4AF37] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#E5E7EB]/70 hover:text-[#D4AF37] transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-[#E5E7EB]/70 hover:text-[#D4AF37] transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="text-sm text-[#E5E7EB]/70 hover:text-[#D4AF37] transition-colors">
                  Açıklama
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Affiliate Bildirimi</h4>
            <p className="text-xs text-[#E5E7EB]/60 leading-relaxed">
              Bu sitede yer alan bazı bağlantılar affiliate linkleridir. Satın alımlarınız üzerinden komisyon kazanabiliriz, ancak bu sizin için ekstra maliyet oluşturmaz.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-[#E5E7EB]/60">
            VYNEX [ TCB TECHNOLOGY ] — © {currentYear} tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}