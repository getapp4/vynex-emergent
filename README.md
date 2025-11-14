# VYNEX Pro Tech Hub

A minimal, production-ready Next.js 14 (App Router) website for technology guides and reviews. Built with Next.js 14, Tailwind CSS, and featuring a sophisticated navy-gold design theme.

## 🌟 Features

- **Modern Next.js 14 App Router** - Utilizing the latest Next.js features
- **Elegant Navy-Gold Design** - Professional color scheme with smooth gradients
- **8 Turkish Tech Posts** - Pre-loaded content about HDMI 2.1, USB-C, PoE, and more
- **Affiliate Link System** - Built-in redirect route for affiliate links (`/go/[slug]`)
- **SEO Optimized** - Complete metadata, sitemap, robots.txt
- **Google Search Console Ready** - Pre-configured verification meta tag
- **AdSense Ready** - Conditional AdSense integration (activate via env var)
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Turkish Content** - All content in Turkish language

## 📁 Project Structure

```
vynex-tech-hub/
├── app/
│   ├── layout.js              # Root layout with SEO metadata
│   ├── page.js                # Home page with hero & post grid
│   ├── about/page.js          # About page
│   ├── contact/page.js        # Contact page
│   ├── disclosure/page.js     # Affiliate disclosure
│   ├── privacy/page.js        # Privacy policy
│   ├── go/[slug]/route.js     # Affiliate redirect handler
│   ├── sitemap.xml/route.js   # XML sitemap
│   ├── robots.txt/route.js    # Robots.txt
│   └── globals.css            # Global styles
├── components/
│   ├── Header.js              # Navigation header
│   ├── Footer.js              # Footer with links
│   ├── PostCard.js            # Blog post card component
│   └── AdSlot.js              # Google AdSense slot (conditional)
├── data/
│   ├── posts.js               # 8 Turkish tech posts
│   └── affiliates.json        # Affiliate link mappings
├── public/
│   ├── logo.jpg               # Site logo (160x40)
│   ├── og.jpg                 # Open Graph image (1200x630)
│   └── covers/                # Post cover images
└── .env.example               # Environment variables template
```

## 🎨 Design System

### Color Palette
- **Navy Primary**: `#0B1220` / `#0F172A`
- **Gold Accent**: `#D4AF37` (hover: `#E5C663`)
- **Text**: `#E5E7EB`
- **Background Gradient**: `linear-gradient(135deg, #0B1220 0%, #0F172A 55%, #1E293B 100%)`

### Components
- **Cards**: Rounded with subtle borders and hover effects
- **Buttons**: Gold primary buttons with brightness hover effects
- **Header**: Sticky navigation with gradient background
- **Footer**: Three-column layout with quick links and disclaimer

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Yarn

### Installation

1. **Clone or extract the project**
   ```bash
   cd vynex-tech-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-xxxxxxxxxxxxxxxx  # Optional
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Production Build

```bash
npm run build
npm run start
```

## 🔗 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero and 8-post grid |
| `/about` | About page |
| `/contact` | Contact information |
| `/disclosure` | Affiliate disclosure |
| `/privacy` | Privacy policy |
| `/go/[slug]` | Affiliate redirect (302) |
| `/sitemap.xml` | XML sitemap |
| `/robots.txt` | Robots.txt |

## 🔄 Affiliate System

The `/go/[slug]` route provides clean affiliate redirects:

**Example**: `https://yourdomain.com/go/hdmi_ultra` → redirects to affiliate link

Configure affiliate links in `data/affiliates.json`:
```json
{
  "hdmi_ultra": {
    "title": "Ultra HDMI 2.1 Cable",
    "url": "https://example.com/hdmi",
    "img": "/covers/hdmi21.jpg"
  }
}
```

## 📝 Content Management

### Adding New Posts

Edit `data/posts.js` and add new post objects:

```javascript
{
  title: "Your Post Title",
  description: "Brief description",
  slug: "your-post-slug",
  category: "Category Name",
  cover: "/covers/your-image.jpg",
  affiliateKey: "your_affiliate_key"  // Optional
}
```

### Adding New Affiliate Links

Edit `data/affiliates.json`:

```json
{
  "your_key": {
    "title": "Product Name",
    "url": "https://affiliate-link.com/product",
    "img": "/covers/product-image.jpg"
  }
}
```

## 🔍 SEO Features

- ✅ Metadata with dynamic base URL
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ Google Search Console verification
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Semantic HTML structure

## 💰 Monetization

### Google AdSense

1. Set `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` in `.env`
2. AdSense script auto-loads in layout
3. Use `<AdSlot />` component where needed

## 🌐 Social Links

- **YouTube**: [@VYNEXdecode](https://www.youtube.com/@VYNEXdecode)
- **LinkedIn**: [Turancan Bolat](https://www.linkedin.com/in/turancan-bolat-87a834228/)
- **Email**: vynexhq.tech@gmail.com

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Content**: Turkish
- **Deployment**: Vercel-ready (or any Node.js host)

## 📄 License

© 2025 VYNEX [ TCB TECHNOLOGY ] - All rights reserved.

## 🤝 Support

For questions or support, contact us at:
- Email: vynexhq.tech@gmail.com
- YouTube: [@VYNEXdecode](https://www.youtube.com/@VYNEXdecode)

---

**Built with** ❤️ **by TCB TECHNOLOGY**
