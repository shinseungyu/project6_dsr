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
              <h2 className="text-2xl font-bold text-black mb-4">1. 주택 담보 가치 및 대출 한도 설계 (LTV & 규제 필터)</h2>
              <p className="text-gray-500 mb-12 text-lg">단순히 매매가만 넣는 게 아니라, 실제 은행 대출 심사 프로세스를 녹여내야 합니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    담보가치 산정 체계
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    &apos;KB시세&apos;를 기본값으로 하되, 시세가 없는 신축 등을 위해 &apos;감정평가액&apos;이나 &apos;분양가&apos;를 직접 입력하는 옵션을 둡니다. 여기에 방공제(소액임차보증금 차감) 설정을 추가하세요. (예: 서울 5,500만 원 차감 여부 선택)
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    지역 및 대상별 LTV 자동 필터
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    사용자가 주택 소재지(규제지역/비규제지역)를 선택하면 LTV가 자동으로 변하게 합니다. 특히 &apos;생애최초 주택구입자&apos; 체크박스를 크게 두어, 지역 상관없이 LTV 80%(한도 6억)가 적용되는 로직을 구현하면 사용자들이 아주 좋아합니다. 반대로 &apos;다주택자&apos; 체크 시 LTV가 깎이는 로직도 필요합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DSR Content */}
          {activeTab === 'dsr' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">2. DSR 정밀 진단 (가장 중요)</h2>
              <p className="text-gray-500 mb-12 text-lg">결국 대출 한도를 결정하는 건 LTV가 아니라 DSR입니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    추정소득 산정 기능
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    직장인(원천징수) 외에 프리랜서나 주부를 위해 &apos;신용카드 사용액&apos;이나 &apos;건강보험료 납부액&apos;을 입력하면 연소득으로 환산해 주는 계산기를 서브로 붙여주세요. (예: 연 카드사용액 2,000만 원 → 추정소득 약 4,000만 원 인정)
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    마이너스 통장 한도 경고
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    기존 부채 입력란에 &quot;마이너스 통장은 실제 사용액이 아닌 &apos;전체 한도&apos;를 입력해야 합니다&quot;라는 툴팁이나 경고 문구를 붉은색으로 눈에 띄게 넣어주세요. 여기서 계산 실수가 가장 많이 나옵니다.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    스트레스 DSR 적용 (최신 트렌드)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    현재 금리가 4%라도, DSR 계산 시에는 가산금리(스트레스 금리)를 더해 4.75%~5.2% 등으로 계산해야 합니다. 이 &apos;스트레스 DSR 2단계&apos; 로직을 토글 버튼으로 껐다 켤 수 있게 만들어주면 매우 전문적으로 보입니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rate Content */}
          {activeTab === 'rate' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">3. 금리 및 상품 조건 세팅</h2>
              <p className="text-gray-500 mb-12 text-lg">사용자가 유리한 대출 상품을 선택할 수 있도록 돕는 섹션입니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    혼합형 vs 주기형 선택
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    &apos;5년 고정 후 변동(혼합형)&apos;과 &apos;5년 주기형&apos;을 선택할 수 있게 하고, 현재 금융당국 지침상 주기형을 선택할 때 스트레스 DSR 가산금리가 적게 붙어 한도가 더 많이 나온다는 점을 시각적으로 보여주세요.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    우대금리 체크리스트
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    단순히 금리를 직접 타이핑하는 것 외에, 기본금리를 두고 [청약저축 가입(-0.1%p)], [급여이체(-0.1%p)], [카드사용(-0.1%p)], [전자계약(-0.1%p)] 등의 체크박스를 두어 누를 때마다 최종 금리가 내려가도록(Add-on 방식) 만들면 체류 시간이 길어집니다.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    초장기 대출 옵션
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    만기 40년, 50년 옵션을 제공하되, &quot;만 34세 이하 또는 신혼부부만 가능&quot;이라는 조건 알림을 띄워줍니다. 만기를 늘리면 DSR 한도가 얼마나 늘어나는지, 대신 총 이자는 얼마나 폭증하는지 비교해 주는 기능이 필수입니다.
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
