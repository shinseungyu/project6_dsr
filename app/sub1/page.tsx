'use client';

import React, { useState } from 'react';

export default function Sub1Page() {
  const [activeTab, setActiveTab] = useState('ltv');

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            대출 설계 가이드
          </h1>
          <p className="text-lg text-gray-500">
            실제 은행 대출 심사 프로세스를 반영한 대출 한도 및 금리 설계 가이드입니다.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-12 overflow-x-auto">
          <nav className="-mb-px flex space-x-12 min-w-max" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('ltv')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'ltv'
                  ? 'border-blue-600 text-black'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-gray-300'
              }`}
            >
              1. LTV & 규제 필터
            </button>
            <button
              onClick={() => setActiveTab('dsr')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'dsr'
                  ? 'border-blue-600 text-black'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-gray-300'
              }`}
            >
              2. DSR 정밀 진단
            </button>
            <button
              onClick={() => setActiveTab('rate')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'rate'
                  ? 'border-blue-600 text-black'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-gray-300'
              }`}
            >
              3. 금리 & 상품 조건
            </button>
          </nav>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white border border-gray-200 p-8 sm:p-16 min-h-[500px]">
          {activeTab === 'ltv' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">1. 주택 담보 가치 및 대출 한도 산정 (2026 LTV 가이드)</h2>
              <p className="text-gray-500 mb-12 text-lg">내 집 마련의 첫 단추, 담보 가치 평가와 지역별 LTV 규제를 정확히 파악해야 합니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    담보가치 산정 기준 (KB시세 vs 감정가)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    은행은 대출 한도를 정할 때 매매가가 아닌 <strong>&apos;담보가치&apos;</strong>를 기준으로 합니다. 아파트는 주로 <strong>KB부동산 시세</strong>의 일반평균가를 활용하며, 시세가 없는 신축 빌라나 나홀로 아파트는 별도의 감정평가를 거칩니다. 이때 실제 매매가보다 낮게 책정될 수 있으므로 보수적인 접근이 필요합니다.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    2026년 지역별 LTV 적용 비율
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-bold">
                        <tr>
                          <th className="px-4 py-3 border-b">대상 지역</th>
                          <th className="px-4 py-3 border-b">무주택자 / 1주택자</th>
                          <th className="px-4 py-3 border-b">다주택자</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-black">규제지역 (서울 3구+용산)</td>
                          <td className="px-4 py-3">50% (서민/실수요자 70%)</td>
                          <td className="px-4 py-3">30% (처분조건)</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-black">비규제지역 (수도권/지방)</td>
                          <td className="px-4 py-3">70% (생애최초 80%)</td>
                          <td className="px-4 py-3">60%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs text-gray-400">※ 생애최초 주택구입자는 지역과 상관없이 LTV 80% (한도 6억 원)가 적용됩니다.</p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    방공제 (소액임차보증금 차감) 주의사항
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    LTV 한도에서 주택임대차보호법상 <strong>소액임차보증금(방공제)</strong>이 차감될 수 있습니다. 서울의 경우 약 5,500만 원이 대출 한도에서 줄어들게 되는데, 이를 방지하기 위해 &apos;MCI(모기지신용보험)&apos;나 &apos;MCG(모기지신용보증)&apos; 가입이 가능한지 확인해야 합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DSR Content */}
          {activeTab === 'dsr' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">2. DSR 정밀 진단 및 스트레스 금리 적용</h2>
              <p className="text-gray-500 mb-12 text-lg">2026년은 스트레스 DSR 3단계 전면 시행으로 대출 한도 관리가 더욱 치밀해져야 합니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    DSR 40%의 벽, 어떻게 넘을까?
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    DSR은 나의 연봉 대비 연간 상환하는 원리금의 비중입니다. 연봉 5,000만 원이라면 1년에 2,000만 원만 갚을 수 있습니다. <strong>신용대출, 마이너스 통장</strong>은 한도 전체가 부채로 잡히므로 대출 전 반드시 불필요한 한도를 줄이거나 해지하여 DSR 여유를 확보해야 합니다.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    스트레스 DSR 3단계 전면 시행 (2026)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    스트레스 DSR은 향후 금리 인상을 대비해 실제 금리에 가산금리를 더해 한도를 깎는 제도입니다. 2026년에는 100% 반영되는 3단계가 시행되어, 실제 체감 한도는 예전보다 <strong>10~15%가량 대폭 축소</strong>될 전망입니다. 특히 변동금리보다 주기형(고정형) 금리를 선택하는 것이 한도 확보에 유리합니다.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    추정소득 활용 팁
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    직장인이 아니더라도 최근 1년 <strong>신용카드 사용액</strong>이나 <strong>건강보험료 납부액</strong>을 통해 소득을 추정할 수 있습니다. 카드를 많이 사용하거나 건보료 납부액이 높다면, 이를 원천징수 영수증 대신 증빙하여 대출 한도를 더 높게 산정받을 수 있는 기회가 있습니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rate Content */}
          {activeTab === 'rate' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">3. 금리 선택 및 정부 지원 상품 활용</h2>
              <p className="text-gray-500 mb-12 text-lg">금리 0.1%p 차이가 수천만 원의 이자를 결정합니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    금리 유형 선택 가이드 (주기형 vs 혼합형)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    최근 금융당국은 안정적인 <strong>주기형(5년 고정)</strong> 금리 상품을 권장하고 있습니다. 주기형은 스트레스 금리가 낮게 적용되어 대출 한도가 더 많이 나오며, 우대 금리 혜택도 더 큰 경우가 많습니다. 중장기적인 상환 계획이 있다면 주기형을 우선 고려하세요.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    정부 특례 대출 및 정책 모기지
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    <strong>신생아 특례대출, 디딤돌 대출, 보금자리론</strong>은 시중보다 현저히 낮은 금리를 제공합니다. 특히 이 상품들은 일반 DSR 규제에서 제외되거나 완화된 기준을 적용받으므로, 자격 요건(소득, 자산 기준)이 된다면 가장 먼저 신청해야 하는 최고의 금융 상품입니다.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    우대금리 챙기기 (부수거래 전략)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    급여 이체, 신용카드 실적, 청약 저축 가입, 자동 이체 설정 등을 통해 최대 0.5%p 이상의 우대 금리를 받을 수 있습니다. 주거래 은행뿐만 아니라 조건이 좋은 타 행의 우대 조건을 꼼꼼히 비교하여 최종 실행 금리를 낮추는 것이 필수입니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
