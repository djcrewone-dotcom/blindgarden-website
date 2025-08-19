'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [randomImages, setRandomImages] = useState<string[]>([]);

  // gallery 폴더의 이미지들
  const galleryImages = [
    '/gallery/combi shop (11).jpg',
    '/gallery/combi housing (41).jpg',
    '/gallery/combi housing (13).jpg',
    '/gallery/combi housing (44).jpg',
    '/gallery/combi housing (24).jpg',
    '/gallery/combi housing (15).jpg',
    '/gallery/combi housing (21).jpg',
    '/gallery/combi housing (22).jpg',
    '/gallery/combi housing (37).jpg',
    '/gallery/combi housing (18).jpg',
    '/gallery/combi housing (38).jpg',
    '/gallery/combi housing (43).jpg',
    '/gallery/combi housing (16).jpg',
    '/gallery/combi housing (40).jpg',
    '/gallery/combi housing (30).jpg',
    '/gallery/combi housing (17).jpg',
    '/gallery/combi housing (27).jpg',
    '/gallery/combi housing (42).jpg',
    '/gallery/combi housing (20).jpg',
    '/gallery/combi housing (26).jpg',
    '/gallery/combi housing (23).jpg',
    '/gallery/combi housing (36).jpg',
    '/gallery/combi housing (29).jpg',
    '/gallery/combi housing (14).jpg',
    '/gallery/combi housing (25).jpg',
    '/gallery/combi housing (28).jpg',
    '/gallery/combi housing (39).jpg',
    '/gallery/combi housing (34).jpg',
    '/gallery/combi housing (35).jpg',
    '/gallery/roll housing (55).jpg',
    '/gallery/roll housing (47).jpg',
    '/gallery/roll office (39).jpg',
    '/gallery/roll housing (44).jpg',
    '/gallery/roll housing (46).jpg',
    '/gallery/roll housing (41).jpg',
    '/gallery/roll shop (54).jpg',
    '/gallery/roll office (58).jpg',
    '/gallery/roll office  (59).jpg',
    '/gallery/roll office (56).jpg',
    '/gallery/roll housing (48).jpg',
    '/gallery/roll housing (34).jpg',
    '/gallery/roll shop (53).jpg',
    '/gallery/roll housing (45).jpg',
    '/gallery/roll office (40).jpg',
    '/gallery/roll housing (51).jpg',
    '/gallery/roll shop (42).jpg',
    '/gallery/roll office (43).jpg',
    '/gallery/roll housing (52).jpg',
    '/gallery/roll office (37).jpg',
    '/gallery/roll office (57).jpg',
    '/gallery/roll housing (50).jpg',
    '/gallery/roll housing (49).jpg',
    '/gallery/roll office (36).jpg',
    '/gallery/roll (35).jpg',
    '/gallery/roll shop (20).jpg',
    '/gallery/roll office (28).jpg',
    '/gallery/roll housing (25).jpg',
    '/gallery/roll housing (12).jpg',
    '/gallery/roll office (18).jpg',
    '/gallery/roll office (11).jpg',
    '/gallery/roll (29).jpg',
    '/gallery/roll shop (33).jpg',
    '/gallery/roll housing (23).jpg',
    '/gallery/roll (21).jpg',
    '/gallery/roll office (15).jpg',
    '/gallery/roll housing (32).jpg',
    '/gallery/roll housing (27).jpg',
    '/gallery/roll housing (26).jpg',
    '/gallery/roll housing (14).jpg',
    '/gallery/roll housing (16).jpg',
    '/gallery/roll (22).jpg',
    '/gallery/roll housing (17).jpg',
    '/gallery/roll office (13).jpg',
    '/gallery/roll (30).jpg',
    '/gallery/roll office (19).jpg',
    '/gallery/roll housing (24).jpg',
    '/gallery/roll (31).jpg',
    '/gallery/curtain shop (4).jpg',
    '/gallery/combi office (3).jpg',
    '/gallery/combi office (2).jpg',
    '/gallery/combi shop (4).jpg',
    '/gallery/roll shop (1).jpg',
    '/gallery/combi shop (1).jpg',
    '/gallery/curtain shop (3).jpg',
    '/gallery/combi shop (5).jpg',
    '/gallery/roll shop (2).jpg',
    '/gallery/roll (10).jpg',
    '/gallery/roll shop (4).jpg',
    '/gallery/roll office (3).jpg',
    '/gallery/roll office (9).jpg',
    '/gallery/roll shop (8).jpg',
    '/gallery/combi shop (6).jpg',
    '/gallery/roll shop (7).jpg',
    '/gallery/roll office (6).jpg',
    '/gallery/combi shop (10).jpg',
    '/gallery/combi shop (9).jpg',
    '/gallery/curtain shop (2).jpg',
    '/gallery/roll office (5).jpg',
    '/gallery/combi office (8).jpg',
    '/gallery/curtain housing (39).jpg'
  ];

  // 6개의 랜덤 이미지 선택
  useEffect(() => {
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 6));
  }, []);

  // 이미지 로드 실패 시 대체 이미지 표시
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center">
          <div class="text-center text-gray-500">
            <div class="text-2xl mb-2">📷</div>
            <p class="text-xs">이미지 로드 실패</p>
          </div>
        </div>
      `;
    }
  };
  return (
    <div className="min-h-screen">
      {/* 메인 비주얼 섹션 */}
      <section 
        className="relative min-h-[50vh] py-16 lg:py-20 bg-gradient-to-r from-[#10b981]/10 to-white flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex flex-col justify-center items-center min-h-[50vh]">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-loose">
            공간에 꼭 맞는<br />
            <span className="text-[#10b981] block mt-6">맞춤 블라인드</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
            방문 실측부터 설치, AS까지 원스톱 서비스
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-[#10b981] font-semibold mb-10 max-w-5xl mx-auto leading-relaxed">
            고품질 맞춤 블라인드 & 커튼 전문 브랜드 블라인드가든
          </p>
          
          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#10b981] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0e9f6e] transition-colors"
            >
              견적신청
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-[#10b981] text-[#10b981] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#10b981] hover:text-white transition-colors"
            >
              시공사례
            </Link>
          </div>
        </div>
      </section>

      {/* 서비스 제공 방식 */}
      <section 
        className="py-20 lg:py-0 bg-white lg:h-screen lg:flex lg:items-center lg:justify-center mt-8 lg:mt-0"
        style={{ 
          minHeight: '100vh',
          height: 'auto'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center lg:h-full lg:flex lg:items-center lg:justify-center" style={{ minHeight: 'calc(100vh - 6rem)' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              방문만 요청하세요!
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              전문 상담사가 직접 방문하여 완벽한 맞춤 서비스를 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-6">📏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">전문 상담사 방문 실측</h3>
              <p className="text-gray-600 text-base">정확한 측정으로 완벽한 맞춤 제작</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">원단·재질 직접 확인</h3>
              <p className="text-gray-600 text-base">실제 원단을 보며 디자인 매칭</p>
            </div>
                         <div className="text-center p-8 bg-gray-50 rounded-lg">
               <div className="text-5xl mb-6">⚡</div>
               <h3 className="text-xl font-semibold text-gray-900 mb-4">맞춤 제작 & 설치</h3>
               <p className="text-gray-600 text-base">빠른 제작과 신속한 설치</p>
             </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-6">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">사후 A/S 관리</h3>
              <p className="text-gray-600 text-base">설치 후에도 확실한 관리</p>
            </div>
          </div>
        </div>
      </section>

      {/* 취급 제품 라인업 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              취급 제품 라인업
            </h2>
            <p className="text-lg text-gray-600">
              다양한 공간과 스타일에 맞는 최적의 블라인드를 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 relative overflow-hidden">
                 <img 
                   src="/service/combi.jpg" 
                   alt="콤비블라인드" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       parent.innerHTML = `
                         <div class="absolute inset-0 flex items-center justify-center">
                           <div class="text-center">
                             <div class="text-4xl mb-2">🪟</div>
                             <p class="text-gray-500 text-sm">콤비블라인드 이미지</p>
                           </div>
                         </div>
                       `;
                     }
                   }}
                 />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">콤비블라인드</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   빛과 프라이버시를 자유롭게 조절할 수 있는 대중적인 타입
                 </p>
               </div>
             </div>
            
                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 relative overflow-hidden">
                 <img 
                   src="/service/roll.jpg" 
                   alt="롤스크린" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       parent.innerHTML = `
                         <div class="absolute inset-0 flex items-center justify-center">
                           <div class="text-center">
                             <div class="text-4xl mb-2">📜</div>
                             <p class="text-gray-500 text-sm">롤스크린 이미지</p>
                           </div>
                         </div>
                       `;
                     }
                   }}
                 />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">롤스크린</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   심플하고 모던한 공간 연출에 최적화된 타입
                 </p>
               </div>
             </div>
            
                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 relative overflow-hidden">
                 <img 
                   src="/service/wood.jpeg" 
                   alt="우드블라인드" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       parent.innerHTML = `
                         <div class="absolute inset-0 flex items-center justify-center">
                           <div class="text-center">
                             <div class="text-4xl mb-2">🪵</div>
                             <p class="text-gray-500 text-sm">우드블라인드 이미지</p>
                           </div>
                         </div>
                       `;
                     }
                   }}
                 />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">우드블라인드</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   자연스러운 원목 감성으로 고급스러운 분위기 연출
                 </p>
               </div>
             </div>
            
                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 relative overflow-hidden">
                 <img 
                   src="/service/curtain.jpg" 
                   alt="암막커튼" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       parent.innerHTML = `
                         <div class="absolute inset-0 flex items-center justify-center">
                           <div class="text-center">
                             <div class="text-4xl mb-2">🌙</div>
                             <p class="text-gray-500 text-sm">암막커튼 이미지</p>
                           </div>
                         </div>
                       `;
                     }
                   }}
                 />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">암막커튼</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   완벽한 차광과 아늑한 분위기를 동시에 제공
                 </p>
               </div>
             </div>
            
                                                   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 relative overflow-hidden">
                  <img 
                    src="/service/aluminum.jpg" 
                    alt="알루미늄 블라인드" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-4xl mb-2">🔧</div>
                              <p class="text-gray-500 text-sm">알루미늄 블라인드 이미지</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">알루미늄 블라인드</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    가볍고 내구성 강한 알루미늄 소재로 디자인 연출
                  </p>
                </div>
              </div>
             
                           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 relative overflow-hidden">
                  <img 
                    src="/service/iot.png" 
                    alt="IoT 블라인드" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-4xl mb-2">📱</div>
                              <p class="text-gray-500 text-sm">IoT 블라인드 이미지</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT 블라인드</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    스마트 홈 연동으로 원격 제어가 가능한 최신 기술
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

                           {/* 블라인드가든의 차별화 포인트 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                왜 블라인드가든일까요?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                다른 업체와 차별화된 블라인드가든만의 특별한 서비스
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto lg:ml-auto lg:mr-0 lg:pr-0 lg:pl-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">지역별 네트워크 유통망</h3>
                    <p className="text-gray-600 text-base leading-relaxed">빠르고 합리적인 시공으로 고객 만족도 향상</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">무료 방문 견적 & 디자인 상담</h3>
                    <p className="text-gray-600 text-base leading-relaxed">부담 없는 시작으로 편안한 상담 가능</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">평생 A/S 관리</h3>
                    <p className="text-gray-600 text-base leading-relaxed">설치 후에도 꾸준한 사후관리로 안심</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">전문가 직접 상담</h3>
                    <p className="text-gray-600 text-base leading-relaxed">실내 인테리어 최적화를 위한 전문 상담</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">합리적인 제품 가격</h3>
                    <p className="text-gray-600 text-base leading-relaxed">사전 견적 가능으로 투명한 가격 정책</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">원스톱 서비스</h3>
                    <p className="text-gray-600 text-base leading-relaxed">측정부터 설치, A/S까지 한 번에 해결</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

             {/* 고품질 소재 & 제작 */}
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               "차이가 느껴지는 원단과 부자재"
             </h2>
             <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
               엄선된 원단과 내구성 높은 부자재로 완벽한 품질 보장
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                           <div className="text-center">
                <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/service/material.jpg" 
                    alt="엄선된 원단" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                            <div class="text-center text-gray-500">
                              <div class="text-4xl mb-2">📷</div>
                              <p class="text-sm">엄선된 원단 이미지</p>
                              <p class="text-xs">(jpg/png 파일 추가 가능)</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">엄선된 원단</h3>
                <p className="text-gray-600 text-base leading-relaxed">최고 품질의 원단만을 선별하여 사용</p>
              </div>
             
                           <div className="text-center">
                <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/service/quality.png" 
                    alt="내구성 높은 부자재" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                            <div class="text-center text-gray-500">
                              <div class="text-4xl mb-2">📷</div>
                              <p class="text-sm">내구성 높은 부자재 이미지</p>
                              <p class="text-xs">(jpg/png 파일 추가 가능)</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">내구성 높은 부자재</h3>
                <p className="text-gray-600 text-base leading-relaxed">오래 사용해도 변형 없는 고품질 부자재</p>
              </div>
             
                           <div className="text-center">
                <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/service/cutting.png" 
                    alt="맞춤 재단" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                            <div class="text-center text-gray-500">
                              <div class="text-4xl mb-2">📷</div>
                              <p class="text-sm">맞춤 재단 이미지</p>
                              <p class="text-xs">(jpg/png 파일 추가 가능)</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">맞춤 재단</h3>
                <p className="text-gray-600 text-base leading-relaxed">원하는 사이즈까지 정확한 맞춤 재단</p>
              </div>
           </div>
         </div>
       </section>

             {/* IoT 블라인드 전문 */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               IoT 블라인드 전문
             </h2>
             <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
               스마트폰 하나로 열고 닫는 스마트 라이프
             </p>
           </div>
           
                                               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto lg:ml-auto lg:mr-0 lg:pr-0 lg:pl-4">
                             {/* 이미지 영역 - 1/3 비율 */}
               <div className="lg:col-span-1 flex justify-center lg:justify-start">
                 <div className="w-full max-w-xs lg:max-w-none lg:w-80 h-64 lg:h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg relative overflow-hidden shadow-lg">
                   <img 
                     src="/service/iot blind.png" 
                     alt="IoT 블라인드 시연" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       const parent = target.parentElement;
                       if (parent) {
                         parent.innerHTML = `
                           <div class="absolute inset-0 flex items-center justify-center">
                             <div class="text-center">
                               <div class="text-4xl lg:text-6xl mb-4">🏠</div>
                               <p class="text-gray-500 text-sm lg:text-base">IoT 블라인드 시연 이미지</p>
                             </div>
                           </div>
                         `;
                       }
                     }}
                   />
                 </div>
               </div>
              
              {/* 텍스트 영역 - 2/3 비율 */}
              <div className="lg:col-span-2">
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 bg-[#10b981] rounded-full mt-1"></div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">IoT 연동으로 원격 제어</h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        스마트폰 앱을 통해 언제 어디서나 블라인드를 제어할 수 있습니다
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 bg-[#10b981] rounded-full mt-1"></div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">타이머 & 음성 인식 지원</h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        설정한 시간에 자동으로 열고 닫히며, 음성 명령으로도 제어 가능합니다
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 bg-[#10b981] rounded-full mt-1"></div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">최신 주거 트렌드에 맞춘 스마트 홈 완성</h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        AI 기술과 연동하여 사용자 패턴을 학습하고 최적의 환경을 자동으로 조성합니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
       </section>

             {/* 시공 사례 갤러리 */}
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">
               시공 사례 갤러리
             </h2>
             <p className="text-lg text-gray-600 mb-6">
               수천 건의 현장 경험을 바탕으로 한 실제 시공 사례!
             </p>
             <p className="text-gray-600">
               시공 이후 촬영된 실제 시공모습들을 직접 확인해보세요
             </p>
           </div>
           
           <div className="text-center mb-12">
             <Link
               href="/gallery"
               className="inline-block bg-[#10b981] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0e9f6e] transition-colors"
             >
               시공 사례 더 보기 →
             </Link>
           </div>

                       {/* 썸네일 이미지 갤러리 */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {randomImages.map((imageSrc, index) => (
                <div key={index} className="aspect-square bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={imageSrc} 
                    alt={`시공 사례 ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
         </div>
       </section>

             {/* 고객들의 이용평 */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">
               고객들의 이용평
             </h2>
             <p className="text-lg text-gray-600">
               실제 고객들의 생생한 후기로 검증된 품질
             </p>
           </div>
           
                       {/* 고객 후기 말풍선 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="mb-4">
                    <div className="text-4xl mb-2">💬</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "커튼, 콤비, 우드 등 여러가지 종류를 한 번에 요청할 수 있어서 편리해요"
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#10b981] font-semibold text-sm">송도 유*영 고객님</p>
                  </div>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-7 border-r-7 border-t-7 border-transparent border-t-gray-200"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="mb-4">
                    <div className="text-4xl mb-2">💬</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "다녀가셨던 팀장님께서 설명도 잘해주시고 친절하시네요"
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#10b981] font-semibold text-sm">수원 김*지 고객님</p>
                  </div>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-7 border-r-7 border-t-7 border-transparent border-t-gray-200"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="mb-4">
                    <div className="text-4xl mb-2">💬</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "7년 전에 블라인드가든에서 달았었는데 품질이 좋아서 이번에 이사하면서 또 요청했어요"
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#10b981] font-semibold text-sm">시흥 박*준 고객님</p>
                  </div>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-7 border-r-7 border-t-7 border-transparent border-t-gray-200"></div>
              </div>
            </div>
           
           {/* 신뢰 지표 */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center p-6 bg-gray-50 rounded-lg">
               <div className="text-4xl mb-4">⭐</div>
               <h3 className="text-2xl font-bold text-[#10b981] mb-2">98%+</h3>
               <p className="text-gray-600">고객 만족도</p>
             </div>
             <div className="text-center p-6 bg-gray-50 rounded-lg">
               <div className="text-4xl mb-4">🔄</div>
               <h3 className="text-2xl font-bold text-[#10b981] mb-2">높은</h3>
               <p className="text-gray-600">재구매·소개율</p>
             </div>
             <div className="text-center p-6 bg-gray-50 rounded-lg">
               <div className="text-4xl mb-4">✅</div>
               <h3 className="text-2xl font-bold text-[#10b981] mb-2">검증된</h3>
               <p className="text-gray-600">품질 보장</p>
             </div>
           </div>
         </div>
       </section>

      {/* A/S 및 부가 서비스 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A/S 및 부가 서비스
            </h2>
            <p className="text-lg text-gray-600">
              설치 이후에도 안심할 수 있는 평생 관리 시스템
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">빠른 현장대처</h3>
              <p className="text-gray-600 text-sm">고장 시 신속한 A/S 수리 서비스 (자사 제품)</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">이사 시 재설치 가능</h3>
              <p className="text-gray-600 text-sm">맞는 사이즈를 찾아 재사용</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">사이즈 변경</h3>
              <p className="text-gray-600 text-sm">사이즈 변경·재단으로 재활용 가능</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">365일 상담</h3>
              <p className="text-gray-600 text-sm">언제든 문의 가능한 상담 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* 블라인드가든 이벤트 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#10b981] to-[#0e9f6e] rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">블라인드가든 이벤트</h2>
            <p className="text-lg mb-6 opacity-90">
              블라인드가든 채널을 추가하시면<br />
              진행중인 이벤트 내용을 확인하실 수 있습니다.
            </p>
            <a
              href="http://pf.kakao.com/_Pqduxl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#10b981] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              채널 추가하기
            </a>
          </div>
        </div>
      </section>

      {/* 상담 유도 (CTA) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            지금 바로 무료 방문 견적을 받아보세요!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            👉 클릭 한 번으로 실시간 빠른 방문견적 신청
          </p>
          
          <div className="flex justify-center">
            <a
              href="tel:1661-6823"
              className="bg-[#10b981] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0e9f6e] transition-colors"
            >
              무료 견적 신청하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
