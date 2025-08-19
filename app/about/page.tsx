import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 - BlindGarden',
  description: 'BlindGarden의 회사 소개, 연혁, 핵심 가치를 확인하세요.',
};

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: '전문성',
      description: '11년간 축적된 블라인드 시공 노하우'
    },
    {
      icon: '🤝',
      title: '신뢰성',
      description: '고객 만족을 최우선으로 하는 서비스'
    },
    {
      icon: '✨',
      title: '품질',
      description: '최고급 자재와 정교한 시공 기술'
    }
  ];

  const history = [
    { year: '2013', event: '회사 설립' },
    { year: '2016', event: 'ISO 품질인증 획득' },
    { year: '2019', event: '전국 시공망 확장' },
    { year: '2021', event: '디지털 견적 시스템 도입' },
    { year: '2023', event: '친환경 자재 라인업 확대' },
    { year: '2024', event: '11주년 기념 서비스 개편' }
  ];

  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-[#10b981]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 lg:mb-12">
            회사소개
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            BlindGarden은 2013년 설립 이후 관공서, 기업, 공공기관, 학교는 물론 상가와 주택까지 폭넓은 시공 경험을 쌓아온 블라인드 맞춤 시공 전문 기업입니다. 다양한 현장에서 쌓은 노하우로 고객에게 신뢰받는 파트너로 자리매김해왔습니다.
          </p>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                전문성과 신뢰성을 바탕으로
              </h2>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  BlindGarden은 창문과 공간의 특성을 세심하게 분석하여 가장 어울리는 블라인드 솔루션을 제안하고 시공합니다. 단순히 제품을 설치하는 것에 그치지 않고, 공간 전체의 분위기와 조화를 고려한 종합적인 인테리어 솔루션을 제공합니다.
                </p>
                <p>
                  또한, 엄선된 고품질 원단과 부자재를 사용해 오래도록 변함없이 사용할 수 있는 고품격 제품과 서비스를 제공하며, 고객님께 한 차원 높은 만족감을 선사합니다.
                </p>
                <p>
                  저희는 시공이 끝난 순간부터가 진짜 시작이라고 생각합니다. 시공 후에도 꾸준한 관리와 신속한 A/S를 통해 고객님의 공간이 오랫동안 아름답고 편리하게 유지될 수 있도록 최선을 다합니다.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-2 lg:p-3 text-center shadow-sm border border-gray-200">
              <img 
                src="/company/company.jpg" 
                alt="BlindGarden 회사 전경" 
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 lg:p-10 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl lg:text-6xl mb-6">{value.icon}</div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 블라인드가든 시공사례 */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            블라인드가든 시공사례
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="text-center space-y-6">
                <div className="text-5xl lg:text-6xl mb-6">🏢</div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                  다양한 공간에서의 시공 경험
                </h3>
                <div className="text-base lg:text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    서울대학교, 명지대학교, 용인대학교, 유한대학교, 석호중학교, 의정부초교, 율전초교, 
                    산재요양보호사교육원, 수원KBS, 인천공단소방서, KT MNS 남부지사, 국제라이온스협회, 
                    동부화재, 충주휴게소, 아산시청, 통일제지 등
                  </p>
                  <p className="font-semibold text-[#10b981]">
                    다수의 관공서, 기업, 상가, 사무실, 아파트 주택 등 수천여 시공 진행
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 및 오시는 길 */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            연락처 및 오시는 길
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* 연락처 - 인천 */}
            <div className="space-y-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-8 text-center">
                연락처 정보
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[#10b981] text-2xl">📞</span>
                  <span className="text-gray-700 text-lg">1661-6823</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[#10b981] text-2xl">📧</span>
                  <span className="text-gray-700 text-lg">blindgarden@naver.com</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[#10b981] text-2xl">🏢</span>
                  <span className="text-gray-700 text-lg">인천광역시 연수구 인천타워대로 323 송도센트로드 C동 23F</span>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 text-center">
                  운영시간
                </h4>
                <div className="space-y-3 text-gray-700 text-base lg:text-lg text-center">
                  <p>평일: 09:00 ~ 18:00</p>
                  <p>토요일: 09:00 ~ 15:00</p>
                  <p>일요일: 휴무 (사전 상담 및 견적상담 예약가능)</p>
                  <p className="text-[#10b981] font-medium">* 야간 시공 문의 가능</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
