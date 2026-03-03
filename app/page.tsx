'use client';

import React, { useState } from 'react';

export default function HomeCalculator() {
  // Input States
  const [housePrice, setHousePrice] = useState<string>('');
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [annualIncome, setAnnualIncome] = useState<string>('');
  const [existingLoan, setExistingLoan] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');

  // Format number with commas
  const formatNumber = (num: number | string) => {
    if (!num) return '';
    return Number(num).toLocaleString('ko-KR');
  };

  // Parse formatted string to number
  const parseNumber = (str: string) => {
    return Number(str.replace(/,/g, '')) || 0;
  };

  // Handle input changes with formatting
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (/^\d*\.?\d*$/.test(rawValue)) {
      setter(rawValue);
    }
  };

  // Calculate results during render
  const pHousePrice = parseNumber(housePrice) * 10000;
  const pLoanAmount = parseNumber(loanAmount) * 10000;
  const pAnnualIncome = parseNumber(annualIncome) * 10000;
  const pExistingLoan = parseNumber(existingLoan) * 10000;
  const pLoanTerm = parseNumber(loanTerm);
  const pInterestRate = parseNumber(interestRate);

  // 1. Monthly Repayment (원리금 균등 상환)
  let monthlyRepayment = 0;
  if (pLoanAmount > 0 && pLoanTerm > 0 && pInterestRate > 0) {
    const monthlyRate = pInterestRate / 100 / 12;
    const totalMonths = pLoanTerm * 12;
    monthlyRepayment =
      (pLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else if (pInterestRate === 0 && pLoanTerm > 0) {
    monthlyRepayment = pLoanAmount / (pLoanTerm * 12);
  }

  // 2. DSR Calculation
  const annualRepayment = monthlyRepayment * 12;
  const totalAnnualDebt = annualRepayment + pExistingLoan;
  let dsr = 0;
  if (pAnnualIncome > 0) {
    dsr = (totalAnnualDebt / pAnnualIncome) * 100;
  }
  const isDsrPass = dsr <= 40;

  // 3. Implicit LTV Calculation
  const currentLtv = pHousePrice > 0 ? (pLoanAmount / pHousePrice) * 100 : 0;
  const isLtvWarning = currentLtv > 80;

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            DSR 계산기 | 내 대출 한도 바로 확인
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Input Form */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-gray-200 p-8">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                대출 조건 입력
              </h2>
              
              <div className="space-y-6">
                {/* House Price */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    주택 가격
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={formatNumber(housePrice)}
                      onChange={handleInputChange(setHousePrice)}
                      className="block w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 transition-colors text-right font-medium text-lg outline-none"
                      placeholder="0"
                    />
                    <span className="absolute right-4 text-gray-400 font-medium pointer-events-none">만원</span>
                  </div>
                </div>

                {/* Loan Amount */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    대출 신청 금액
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={formatNumber(loanAmount)}
                      onChange={handleInputChange(setLoanAmount)}
                      className="block w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 transition-colors text-right font-medium text-lg outline-none"
                      placeholder="0"
                    />
                    <span className="absolute right-4 text-gray-400 font-medium pointer-events-none">만원</span>
                  </div>
                </div>

                {/* Annual Income */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    연소득
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={formatNumber(annualIncome)}
                      onChange={handleInputChange(setAnnualIncome)}
                      className="block w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 transition-colors text-right font-medium text-lg outline-none"
                      placeholder="0"
                    />
                    <span className="absolute right-4 text-gray-400 font-medium pointer-events-none">만원</span>
                  </div>
                </div>

                {/* Existing Loan */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    기존 대출 연간 상환액
                  </label>
                  <p className="text-[10px] text-gray-400 mb-2">※ 대출 원금 전체가 아닌, 1년 동안 갚는 원금+이자만 입력하세요.</p>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={formatNumber(existingLoan)}
                      onChange={handleInputChange(setExistingLoan)}
                      className="block w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 transition-colors text-right font-medium text-lg outline-none"
                      placeholder="0"
                    />
                    <span className="absolute right-4 text-gray-400 font-medium pointer-events-none">만원</span>
                  </div>
                </div>

                {/* Grid for Term, Rate */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      대출 기간
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        value={formatNumber(loanTerm)}
                        onChange={handleInputChange(setLoanTerm)}
                        className="block w-full pl-4 pr-8 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 transition-colors text-right font-medium text-lg outline-none"
                        placeholder="0"
                      />
                      <span className="absolute right-4 text-gray-400 font-medium pointer-events-none">년</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      대출 금리
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        value={interestRate}
                        onChange={handleInputChange(setInterestRate)}
                        className="block w-full pl-4 pr-8 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 transition-colors text-right font-medium text-lg outline-none"
                        placeholder="0.0"
                      />
                      <span className="absolute right-4 text-gray-400 font-medium pointer-events-none">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Ad Section */}
            <div className="hidden">
              <span>[AD] 구글 애드센스 광고 영역</span>
            </div>
          </div>

          {/* Right Column: Results Dashboard */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-gray-200 p-8 sm:p-12">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-12">
                계산 결과
              </h2>
              
              <div className="space-y-16">
                {/* LTV Result (Implicit) */}
                {pHousePrice > 0 && pLoanAmount > 0 && (
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">LTV (주택담보대출비율)</h3>
                      <span className={`text-sm font-bold ${isLtvWarning ? 'text-red-600' : 'text-blue-600'}`}>
                        {isLtvWarning ? '한도 초과 주의 (80% 초과)' : '적정 수준'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 border-b border-gray-200 pb-6">
                      <span className={`text-7xl sm:text-8xl font-light tracking-tighter ${isLtvWarning ? 'text-red-600' : 'text-black'}`}>
                        {currentLtv.toFixed(1)}
                      </span>
                      <span className="text-3xl font-light text-gray-400">%</span>
                    </div>
                    <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                      입력하신 주택 가격 대비 대출 신청 금액의 비율입니다. 통상적으로 LTV 70%~80%를 초과하면 대출 승인이 어려울 수 있습니다.
                    </p>
                  </div>
                )}

                {/* DSR Result */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">DSR (총부채원리금상환비율)</h3>
                    <span className={`text-sm font-bold ${isDsrPass ? 'text-blue-600' : 'text-red-600'}`}>
                      {isDsrPass ? '통과 (40% 이하)' : '한도 초과 (40% 초과)'}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 border-b border-gray-200 pb-6">
                    <span className={`text-7xl sm:text-8xl font-light tracking-tighter ${isDsrPass ? 'text-black' : 'text-red-600'}`}>
                      {dsr.toFixed(2)}
                    </span>
                    <span className="text-3xl font-light text-gray-400">%</span>
                  </div>
                  <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                    연소득 대비 연간 갚아야 할 모든 대출의 원리금 비율입니다. 현재 규제상 40%를 초과하면 대출이 제한될 수 있습니다.
                  </p>
                  {dsr > 100 && (
                    <p className="mt-2 text-xs text-red-500 font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                      ⚠️ DSR이 비정상적으로 높습니다. 대출 기간(년)이 너무 짧게 입력되었거나, 기존 대출 항목에 &apos;1년 상환액&apos;이 아닌 &apos;대출 원금 전체&apos;를 입력하지 않았는지 확인해 주세요.
                    </p>
                  )}
                </div>

                {/* Monthly Repayment */}
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">월별 원리금 균등 상환액</h3>
                  <div className="flex items-baseline gap-2 border-b border-gray-200 pb-6">
                    <span className="text-6xl sm:text-7xl font-light tracking-tighter text-black">
                      {formatNumber(Math.round(monthlyRepayment / 10000))}
                    </span>
                    <span className="text-2xl font-light text-gray-400">만원</span>
                  </div>
                  <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                    매월 납부해야 할 원금과 이자의 합계입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Ad Section */}
            <div className="hidden">
              <span>[AD] 구글 애드센스 광고 영역</span>
            </div>
          </div>
        </div>
      </main>

      {/* SEO Rich Text Footer */}
      <footer className="bg-white border-t border-gray-200 py-20 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="text-xl font-bold text-black mb-6">부동산 대출 핵심 용어 정리 (LTV, DSR)</h2>
            <div className="text-gray-600 space-y-6 text-sm leading-loose">
              <p>
                주택담보대출을 준비하시나요? 성공적인 내 집 마련을 위해서는 복잡한 대출 규제와 용어를 정확히 이해하는 것이 필수입니다. 2026년 최신 대출 규제에 맞춰 꼭 알아야 할 핵심 개념인 <strong>LTV(주택담보대출비율)</strong>와 <strong>DSR(총부채원리금상환비율)</strong>에 대해 자세히 설명해 드립니다.
              </p>
              
              <div>
                <h3 className="text-base font-bold text-black mb-2">1. LTV (Loan To Value ratio) - 주택담보대출비율</h3>
                <p>
                  LTV는 &apos;집값을 기준으로 얼마까지 대출을 받을 수 있는지&apos;를 나타내는 비율입니다. 예를 들어, 5억 원짜리 아파트를 구매할 때 LTV가 70%라면, 최대 3억 5천만 원까지 대출이 가능하다는 의미입니다. 지역(투기과열지구, 조정대상지역 등)과 주택 유형, 생애최초 주택구입 여부에 따라 LTV 적용 비율이 다르게 설정되므로, 본인에게 적용되는 정확한 LTV 비율을 확인하는 것이 중요합니다.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-black mb-2">2. DSR (Debt Service Ratio) - 총부채원리금상환비율</h3>
                <p>
                  DSR은 &apos;내 연소득 대비 1년 동안 갚아야 하는 모든 대출의 원금과 이자(원리금)의 비율&apos;을 뜻합니다. 주택담보대출뿐만 아니라 신용대출, 자동차 할부금, 카드론 등 <strong>모든 부채</strong>를 포함하여 계산합니다. 현재 금융권에서는 가계부채 관리를 위해 강력한 DSR 규제(일반적으로 40%)를 적용하고 있습니다. 즉, 연소득이 5,000만 원인 경우, 1년간 갚아야 할 총 대출 원리금이 2,000만 원(40%)을 넘을 수 없습니다. 아무리 LTV 한도가 넉넉하더라도 DSR 한도에 걸리면 원하는 만큼 대출을 받을 수 없으므로, 대출 전 반드시 DSR 계산기를 통해 본인의 한도를 점검해야 합니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-6">대출 실행 전 주의사항 및 꿀팁</h2>
            <div className="bg-gray-50 border border-gray-200 p-8">
              <ul className="space-y-6 text-gray-600 text-sm leading-loose list-disc pl-5">
                <li>
                  <strong className="text-black">기존 부채 정리하기:</strong> DSR 한도를 늘리기 위한 가장 확실한 방법은 마이너스 통장이나 금리가 높은 신용대출 등 기존 부채를 미리 상환하는 것입니다. 사용하지 않는 마이너스 통장도 한도 전체가 부채로 잡히므로 해지하는 것이 유리합니다.
                </li>
                <li>
                  <strong className="text-black">대출 기간 길게 설정하기:</strong> 대출 기간(만기)을 30년, 40년, 50년 등으로 길게 설정하면 매월 납부하는 원리금이 줄어들어 DSR 비율을 낮추는 효과가 있습니다. 단, 총 납부해야 할 이자액은 늘어나므로 신중한 선택이 필요합니다.
                </li>
                <li>
                  <strong className="text-black">스트레스 DSR 규제 확인:</strong> 최근 도입된 &apos;스트레스 DSR&apos; 제도는 향후 금리 인상 리스크를 반영하여 실제 금리보다 높은 가산 금리를 적용해 DSR을 계산하는 방식입니다. 이로 인해 실제 대출 한도는 예상보다 더 줄어들 수 있으므로 보수적인 자금 계획이 필요합니다.
                </li>
                <li>
                  <strong className="text-black">정부 지원 대출 상품 우선 검토:</strong> 디딤돌 대출, 보금자리론, 신생아 특례대출 등 정부에서 지원하는 정책 모기지 상품은 일반 시중은행 대출보다 금리가 낮고 DSR 규제가 완화되어 적용되는 경우가 많습니다. 자격 요건이 된다면 가장 먼저 알아보는 것이 좋습니다.
                </li>
              </ul>
            </div>
          </section>
          
          <div className="text-center text-xs text-gray-400 pt-12 border-t border-gray-200">
            <p>본 계산기의 결과는 참고용이며, 실제 금융기관의 대출 심사 결과와 다를 수 있습니다. 정확한 한도 및 금리는 해당 금융기관에 문의하시기 바랍니다.</p>
            <p className="mt-2">&copy; 2026 부동산 대출 및 DSR 계산기. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
