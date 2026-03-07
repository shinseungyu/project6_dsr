import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | DSR 계산기',
  description: 'DSR 계산기 서비스의 이용약관입니다.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>이용약관</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: 2026년 3월 8일</p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>제1조 (목적)</h2>
        <p>본 약관은 <strong>newsfixr.com</strong> (이하 &quot;사이트&quot;)이 제공하는 &quot;DSR 계산기&quot; 서비스의 이용 조건 및 절차, 이용자와 사이트 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>제2조 (서비스의 내용)</h2>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>DSR·LTV 기반 대출 한도 자동 계산 서비스</li>
          <li>스트레스 DSR 3단계 반영 대출 시뮬레이션</li>
          <li>대출 관련 가이드 및 정보 제공</li>
          <li>관련 광고 서비스 (Google AdSense)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>제3조 (면책 조항)</h2>
        <p>본 사이트에서 제공하는 DSR 및 대출 한도 계산 결과는 <strong>참고용</strong>이며, 법적 효력이 없습니다. 실제 대출 승인 여부 및 한도는 금융기관 심사 결과에 따라 달라질 수 있습니다. 계산 결과에 따른 금융 결정의 결과에 대해 사이트는 책임을 지지 않습니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>제4조 (이용자의 의무)</h2>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>서비스를 불법적인 목적으로 이용하는 행위 금지</li>
          <li>본 사이트의 콘텐츠를 무단으로 복제·배포하는 행위 금지</li>
          <li>자동화된 수단을 이용한 과도한 서버 요청 금지</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>제5조 (약관의 변경)</h2>
        <p>본 약관은 관련 법령 변경 또는 서비스 정책 변화에 따라 수정될 수 있습니다. 변경된 약관은 본 페이지에 게시되며, 게시 즉시 효력이 발생합니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>제6조 (문의)</h2>
        <p>이메일: <a href="mailto:tlsfkaus0711@gmail.com" style={{ color: '#2563eb' }}>tlsfkaus0711@gmail.com</a></p>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#2563eb', marginRight: '16px' }}>홈으로</a>
        <a href="/privacy-policy" style={{ color: '#2563eb', marginRight: '16px' }}>개인정보 처리방침</a>
        <a href="/cookie-policy" style={{ color: '#2563eb' }}>쿠키 정책</a>
      </div>
    </main>
  )
}
