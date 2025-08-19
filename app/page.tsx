'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);



  const faqs = [
    {
      question: '블라인드 시공에 얼마나 걸리나요?',
      answer: '일반적으로 1-2시간 내에 완료됩니다. 규모와 복잡도에 따라 달라질 수 있습니다.'
    },
    {
      question: '시공 후 A/S는 어떻게 받을 수 있나요?',
      answer: '시공 완료 후 1년간 무상 A/S를 제공하며, 이후에도 합리적인 비용으로 서비스를 받으실 수 있습니다.'
    },
    {
      question: '맞춤 제작이 가능한가요?',
      answer: '네, 창문 크기에 맞춰 정확한 사이즈로 제작하여 시공합니다.'
    },
    {
      question: '견적은 어떻게 받을 수 있나요?',
      answer: '전국 대표번호 1661-6823으로 전화주시면 친절한 안내 도와드립니다.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-28 md:py-36 lg:py-44 overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main6.png"
            alt="블라인드가 설치된 현대적인 공간"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          {/* 어두운 오버레이 - 이미지를 조금 어둡게 보정 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center" style={{ minHeight: '100%' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight md:leading-tight">
            블라인드&middot;커튼 전문<br />
            <span className="text-primary-300 mt-2 md:mt-3 block">블라인드가든</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed md:leading-loose">
            오랜 노하우로 방문 실측, 디자인 매칭, 시공, AS관리까지<br />
            품격있는 블라인드 서비스를 제공해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center">
            <Link
              href="/services"
              className="bg-[#10b981] text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-lg md:text-xl hover:bg-[#0e9f6e] transition-colors"
            >
              서비스보기
            </Link>
            <Link
              href="/quote"
              className="border-2 border-white text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-lg md:text-xl hover:bg-white hover:text-gray-900 transition-colors"
            >
              견적문의
            </Link>
          </div>
        </div>
      </section>

      {/* 진행절차 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            진행절차
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                견적시청
              </h3>
              <p className="text-gray-600">방문날짜와 시간을 조율합니다.</p>
            </div>
            
            <div className="flex md:hidden items-center justify-center text-3xl text-[#10b981] font-bold my-4">
              ▼
            </div>
            <div className="hidden md:flex items-center justify-center text-3xl text-[#10b981] font-bold">
              ▶
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                방문실측
              </h3>
              <p className="text-gray-600">시공환경 실측 &amp; 디자인 상담을 진행합니다.</p>
            </div>
            
            <div className="flex md:hidden items-center justify-center text-3xl text-[#10b981] font-bold my-4">
              ▼
            </div>
            <div className="hidden md:flex items-center justify-center text-3xl text-[#10b981] font-bold">
              ▶
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                방문설치
              </h3>
              <p className="text-gray-600">맞춤제작된 제품을 설치합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
