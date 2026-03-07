import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '쿠키 정책 | DSR 계산기',
  description: 'DSR 계산기 서비스의 쿠키 정책입니다.',
  alternates: { canonical: '/cookie-policy' },
}

export default function CookiePolicyPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>쿠키 정책</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: 2026년 3월 8일</p>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>1. 쿠키란 무엇인가요?</h2>
        <p>쿠키(Cookie)는 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일입니다. 방문 기록, 환경 설정 등을 저장하여 더 나은 사용자 경험을 제공하는 데 활용됩니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>2. 사용하는 쿠키의 종류</h2>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>① 필수 쿠키</h3>
        <p>서비스 기본 기능을 위해 반드시 필요한 쿠키입니다.</p>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>② 분석/통계 쿠키 (Google Analytics)</h3>
        <p>방문자 수, 페이지 조회수 등을 익명으로 수집합니다.</p>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>③ 광고 쿠키 (Google AdSense)</h3>
        <p>맞춤형 광고 제공 및 광고 성과 측정을 위해 사용합니다. Google의 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>개인정보처리방침</a>을 따릅니다.</p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>3. 쿠키 관리 방법</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Chrome:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
          <li><strong>Firefox:</strong> 설정 → 개인정보 보호 → 쿠키 및 사이트 데이터</li>
          <li><strong>Safari:</strong> 환경설정 → 개인정보 보호</li>
          <li><strong>Edge:</strong> 설정 → 쿠키 및 사이트 권한</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Google 광고 설정</a>에서 맞춤 광고를 끌 수 있습니다.
        </p>
        <p style={{ marginTop: '8px', backgroundColor: '#eff6ff', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
          ⚠️ 쿠키를 비활성화하면 일부 서비스 기능이 정상적으로 작동하지 않을 수 있습니다.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>4. 제3자 쿠키</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #eee' }}>서비스</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #eee' }}>목적</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #eee' }}>정책</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #eee' }}>Google AdSense</td>
              <td style={{ padding: '10px', border: '1px solid #eee' }}>광고 제공</td>
              <td style={{ padding: '10px', border: '1px solid #eee' }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>보기</a></td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '10px', border: '1px solid #eee' }}>Google Analytics</td>
              <td style={{ padding: '10px', border: '1px solid #eee' }}>사이트 분석</td>
              <td style={{ padding: '10px', border: '1px solid #eee' }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>보기</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>5. 문의</h2>
        <p>이메일: <a href="mailto:tlsfkaus0711@gmail.com" style={{ color: '#2563eb' }}>tlsfkaus0711@gmail.com</a></p>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#2563eb', marginRight: '16px' }}>홈으로</a>
        <a href="/privacy-policy" style={{ color: '#2563eb', marginRight: '16px' }}>개인정보 처리방침</a>
        <a href="/terms-of-service" style={{ color: '#2563eb' }}>이용약관</a>
      </div>
    </main>
  )
}
