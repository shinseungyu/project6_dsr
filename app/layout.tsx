import type {Metadata} from 'next';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css'; // Global styles

export const metadata: Metadata = {
    title: 'DSR 계산기 | 내 대출 한도 바로 확인',
  description: '2026년 최신 스트레스 DSR 3단계 규제를 반영한 대출 한도 계산기입니다. LTV, 원리금 균등 상환액, 수도권 및 비규제지역 대출 가능 금액을 즉시 확인하세요.',
  keywords: ['DSR 계산기', '2026 대출 규제', '스트레스 DSR 2단계', '스트레스 DSR 3단계', 'LTV 계산기', '주택담보대출 한도', '부동산 대출 한도', '신생아 특례대출 DSR', '디딤돌 대출 LTV'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://newsfixr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DSR 계산기 | 내 대출 한도 바로 확인',
    description: '2026년 최신 스트레스 DSR 3단계 규제를 반영한 대출 한도 계산기입니다. 내 집 마련을 위한 정확한 대출 설계를 시작하세요.',
    url: '/',
    siteName: 'DSR 계산기 | 내 대출 한도 바로 확인',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://newsfixr.com/thumb.webp',
        width: 1200,
        height: 630,
        alt: 'DSR 계산기 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSR 계산기 | 내 대출 한도 바로 확인',
    description: '2026년 최신 스트레스 DSR 3단계 규제를 반영한 대출 한도 계산기입니다.',
    images: ['https://newsfixr.com/thumb.webp'],
  },
  authors: [{ name: 'DSR 계산기' }],
  publisher: 'DSR 계산기',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  verification: {
    google: '여기에_구글_인증코드_입력',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    name: "google-adsense-account",
    content: "ca-pub-5378247298190063"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'DSR 계산기',
      description: '2026년 최신 스트레스 DSR 3단계 규제를 반영한 대출 한도 계산기입니다.',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsfixr.com',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'DSR 40% 규제는 모든 대출에 적용되나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '대부분의 시중은행 대출에는 적용되지만 전세자금대출, 예적금담보대출 등은 제외됩니다. 신생아 특례대출 등은 DSR 대신 DTI 60%가 적용됩니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '스트레스 DSR 3단계란 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '미래 금리 상승 리스크를 반영해 가산 금리(1.5%)를 100% 적용하여 대출 한도를 산정하는 제도입니다. 2026년 전면 시행됩니다.'
          }
        }
      ]
    }
  ];

  return (
    <html lang="ko">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <meta name="naver-site-verification" content="834ea16c71e41bf75ff1729811977e929cad5693" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900" suppressHydrationWarning>
        {/* Global Navigation Header */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 flex items-center font-bold text-black text-lg tracking-tight">
                  <img src="/logo.webp" alt="DSR 계산기 로고" className="h-8 w-auto mr-2" />
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
