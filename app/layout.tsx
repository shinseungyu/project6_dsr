import type {Metadata} from 'next';
import Link from 'next/link';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'DSR 계산기 | 내 대출 한도 바로 확인',
  description: '2026년 최신 대출 규제를 반영한 부동산 대출 LTV, DSR 및 원리금 균등 상환액 계산기입니다.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://newsfixr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DSR 계산기 | 내 대출 한도 바로 확인',
    description: '2026년 최신 대출 규제를 반영한 부동산 대출 LTV, DSR 및 원리금 균등 상환액 계산기입니다.',
    url: '/',
    siteName: 'DSR 계산기 | 내 대출 한도 바로 확인',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSR 계산기 | 내 대출 한도 바로 확인',
    description: '2026년 최신 대출 규제를 반영한 부동산 대출 LTV, DSR 및 원리금 균등 상환액 계산기입니다.',
  },
  icons: {
    icon: '/favicon.ico', // 기본 아이콘 경로
  },
  other: {
    name: "google-adsense-account",
    content: "ca-pub-5378247298190063"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'DSR 계산기 | 내 대출 한도 바로 확인',
    description: '2026년 최신 대출 규제를 반영한 부동산 대출 LTV, DSR 및 원리금 균등 상환액 계산기입니다.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsfixr.com',
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="naver-site-verification" content="834ea16c71e41bf75ff1729811977e929cad5693" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900" suppressHydrationWarning>
        {/* Global Navigation Header */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 flex items-center font-bold text-black text-lg tracking-tight">
                  DSR 계산기
                </Link>
                <div className="ml-10 flex space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-600 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                    계산기
                  </Link>
                  <Link href="/sub1" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-600 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                    대출 설계 가이드
                  </Link>
                  <Link href="/sub2" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-600 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                    상환/비용 가이드
                  </Link>
                  <Link href="/qna" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-600 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                    Q&A
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
