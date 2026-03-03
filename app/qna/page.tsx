import React from 'react';

export default function QnaPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            자주 묻는 질문 (Q&A)
          </h1>
          <p className="text-lg text-gray-500">
            대출 규제 및 계산기 사용과 관련하여 가장 많이 궁금해하시는 내용들을 모았습니다.
          </p>
        </div>

        <div className="space-y-8">
          {/* Q1 */}
          <div className="bg-white border border-gray-200 p-8 sm:p-10">
            <h3 className="text-lg font-bold text-black mb-4 flex gap-3">
              <span className="text-blue-600">Q.</span>
              DSR 40% 규제는 모든 대출에 적용되나요? 예외는 없나요?
            </h3>
            <div className="text-gray-600 leading-loose pl-8">
              <p>
                대부분의 시중은행 대출에는 DSR 40%가 적용되지만, 일부 <strong>예외 상품</strong>이 있습니다.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>전세자금대출, 예적금담보대출, 보험계약대출 등은 DSR 산정에서 제외됩니다.</li>
                <li>정부 지원 상품인 <strong>특례보금자리론, 신생아 특례대출, 디딤돌 대출</strong> 등은 DSR 대신 DTI(총부채상환비율) 60%가 적용되어 한도가 훨씬 넉넉하게 나옵니다.</li>
              </ul>
            </div>
          </div>

          {/* Q2 */}
          <div className="bg-white border border-gray-200 p-8 sm:p-10">
            <h3 className="text-lg font-bold text-black mb-4 flex gap-3">
              <span className="text-blue-600">Q.</span>
              LTV는 지역마다 어떻게 다른가요?
            </h3>
            <div className="text-gray-600 leading-loose pl-8">
              <p>
                주택이 위치한 지역의 규제 여부에 따라 다릅니다. (2026년 기준)
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>규제지역 (강남 3구, 용산 등):</strong> 무주택자 50%, 1주택자 30% (처분조건부)</li>
                <li><strong>비규제지역 (그 외 대부분 지역):</strong> 무주택자 70%, 1주택자 60%</li>
                <li><strong>생애최초 주택구입자:</strong> 지역과 무관하게 <strong>LTV 80% (최대 6억 원 한도)</strong> 적용</li>
              </ul>
            </div>
          </div>

          {/* Q3 */}
          <div className="bg-white border border-gray-200 p-8 sm:p-10">
            <h3 className="text-lg font-bold text-black mb-4 flex gap-3">
              <span className="text-blue-600">Q.</span>
              마이너스 통장은 안 쓰고 있는데도 DSR에 포함되나요?
            </h3>
            <div className="text-gray-600 leading-loose pl-8">
              <p>
                <strong>네, 포함됩니다.</strong> 마이너스 통장(한도대출)은 실제 사용 금액이 아닌 <strong>&apos;약정된 총 한도&apos;</strong>를 기준으로 부채가 산정됩니다. 
              </p>
              <p className="mt-2 text-red-600 font-medium">
                따라서 주택담보대출을 받기 전, 사용하지 않는 마이너스 통장은 해지하거나 한도를 대폭 줄이는 것이 DSR 한도를 늘리는 가장 빠른 방법입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
