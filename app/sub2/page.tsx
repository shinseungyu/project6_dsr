'use client';

import React, { useState } from 'react';

export default function Sub2Page() {
  const [activeTab, setActiveTab] = useState('repayment');

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            상환 시뮬레이션 및 부대비용 가이드
          </h1>
          <p className="text-lg text-gray-500">
            대출 실행 후의 지출 관리와 최종 필요 자금을 상세히 예측해 보세요.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-12 overflow-x-auto">
          <nav className="-mb-px flex space-x-12 min-w-max" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('repayment')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'repayment'
                  ? 'border-blue-600 text-black'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-gray-300'
              }`}
            >
              4. 상환 시뮬레이션
            </button>
            <button
              onClick={() => setActiveTab('cost')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'cost'
                  ? 'border-blue-600 text-black'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-gray-300'
              }`}
            >
              5. 취득 비용 & 세무
            </button>
          </nav>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white border border-gray-200 p-8 sm:p-16 min-h-[500px]">
          {activeTab === 'repayment' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">4. 상환 시뮬레이션 및 미래 비용 예측 (지출 관리)</h2>
              <p className="text-gray-500 mb-12 text-lg">단순 결과값이 아니라 30년 치의 &apos;로드맵&apos;을 보여주는 섹션입니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    상환 방식 3종 비교
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    원리금균등, 원금균등, 그리고 젊은 층이 선호하는 <strong>체증식 상환(초기엔 이자 위주, 나중에 원금)</strong>을 나란히 비교해 줍니다. &quot;원금균등을 선택하면 총 이자가 2,000만 원 절약됩니다&quot; 같은 코멘트를 자동 생성하세요.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    중도상환 수수료 시뮬레이터
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    1년 뒤, 2년 뒤에 목돈이 생겨 갚았을 때 수수료가 얼마인지 계산해 줍니다. 보통 3년 지나면 면제되는 슬라이딩 방식(날짜가 지날수록 수수료 감소)을 적용하세요.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    월별 상환 스케줄표
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    1회차부터 마지막 회차까지 원금과 이자가 어떻게 비중이 바뀌는지 표나 그래프로 상세히 출력합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cost Content */}
          {activeTab === 'cost' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">5. 취득 비용 및 세무/환급 혜택 (최종 필요 자금)</h2>
              <p className="text-gray-500 mb-12 text-lg">대출금 외에 &apos;내 주머니에서 나갈 생돈&apos;을 계산해 주는 섹션입니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    취득세 및 부대비용 자동 계산
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    주택 가격과 면적(85㎡ 초과 여부)에 따른 취득세, 교육세, 농특세를 산출합니다. 여기에 법무사 수수료(평균 요율), 국민주택채권 매입 비용 등을 포함해 <strong>&apos;입주 시 필요한 현금 합계&apos;</strong>를 딱 짚어줍니다.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    연말정산 소득공제 시뮬레이션
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    대출 조건이 &apos;소득공제 대상(기준시가 6억 이하 등)&apos;에 해당한다면, 연간 이자 상환액에 대해 내년 연말정산 시 대략 얼마를 돌려받을 수 있는지(예: 약 100만 원 환급 예상)를 보여주어 사용자에게 긍정적인 심리를 심어줍니다.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    인테리어 및 복비 예산
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    매매가의 일정 비율을 중개 수수료와 이사/인테리어 예산으로 별도 표시해 주면 더욱 친절한 서비스가 됩니다.
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
