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
              <h2 className="text-2xl font-bold text-black mb-4">4. 상환 방식 비교 및 이자 절감 전략</h2>
              <p className="text-gray-500 mb-12 text-lg">어떤 상환 방식을 선택하느냐에 따라 총 이자 비용이 수천만 원 차이 납니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    상환 방식 3종 세트 완벽 비교
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-black mb-2">원리금균등상환</h4>
                      <p className="text-sm text-gray-600">매달 내는 금액이 일정하여 현금 흐름 관리에 유리합니다. 가장 일반적인 방식입니다.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-black mb-2">원금균등상환</h4>
                      <p className="text-sm text-gray-600">초기 부담은 크지만 시간이 갈수록 이자가 줄어듭니다. <strong>총 이자가 가장 적습니다.</strong></p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-black mb-2">체증식상환</h4>
                      <p className="text-sm text-gray-600">초기엔 이자 위주로 내고 원금 상환을 뒤로 미룹니다. 소득이 늘어날 젊은 층에 유리합니다.</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    중도상환수수료의 함정
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    목돈이 생겨 대출을 미리 갚을 때는 수수료를 따져봐야 합니다. 통상 실행 후 3년까지 최대 1.2%의 수수료가 선형으로 감소하며 부과됩니다. 3년이 지나면 대부분 면제되므로, 3년 시점에 맞춘 갈아타기(대환) 전략이 유효합니다.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    총 이자를 줄이는 최고의 팁
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    여유 자금이 생길 때마다 <strong>&apos;중도 상환&apos;</strong>을 활용하세요. 원금을 조금이라도 일찍 갚으면 남은 기간 동안 붙을 이자가 복리로 줄어드는 효과가 있어, 재테크 측면에서 매우 강력한 이익을 가져다줍니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cost Content */}
          {activeTab === 'cost' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-black mb-4">5. 취득세 및 내 집 마련 부대비용 총정리</h2>
              <p className="text-gray-500 mb-12 text-lg">집값 외에도 준비해야 할 &apos;생돈&apos;이 생각보다 많습니다.</p>
              
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    취득세 및 관련 세금 (2026 기준)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    주택 가액과 면적에 따라 1.1%에서 최대 13.2%까지 취득세율이 적용됩니다. 6억 이하 전용 85㎡ 이하는 기본 1.1%가 적용되지만, 다주택자나 법인은 취득세 중과가 적용되므로 사전에 계산기로 정확한 납부액을 뽑아 예산을 확보해야 합니다.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    놓치기 쉬운 부대비용 리스트
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-3">
                    <li><strong>채권 매입/할인 비용:</strong> 등기 시 반드시 발생하는 비용입니다.</li>
                    <li><strong>법무사 수수료:</strong> 등기 대행을 위한 수수료로, 직접 하는 &apos;셀프 등기&apos; 시 절약 가능합니다.</li>
                    <li><strong>중개 수수료(복비):</strong> 매매가에 비례하여 발생하며, 협의를 통해 요율을 조정할 수 있습니다.</li>
                    <li><strong>이사 및 청소비:</strong> 입주 전 예약이 필수이며, 현금 결제 비율이 높습니다.</li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-black uppercase tracking-wider mb-4">
                    연말정산 소득공제 (장기주택저당차입금)
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    기준시가 6억 원 이하 주택을 구입하기 위한 대출금의 이자 상환액은 연간 2,000만 원 한도로 소득공제가 가능합니다. 이는 사실상 수백만 원의 세금을 환급받는 효과가 있으므로, 대출 실행 시 소득공제 요건(무주택 세대주 등)을 반드시 확인하세요.
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
