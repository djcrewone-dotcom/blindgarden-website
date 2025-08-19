'use client';

import { useState, useMemo, useEffect } from 'react';

// 실제 폴더에 있는 이미지 파일 목록 (모든 파일 포함)
const imageFiles = [
  // 콤비 블라인드 - 주택
  'combi housing (13).jpg',
  'combi housing (14).jpg',
  'combi housing (15).jpg',
  'combi housing (16).jpg',
  'combi housing (17).jpg',
  'combi housing (18).jpg',
  'combi housing (20).jpg',
  'combi housing (21).jpg',
  'combi housing (22).jpg',
  'combi housing (23).jpg',
  'combi housing (24).jpg',
  'combi housing (25).jpg',
  'combi housing (26).jpg',
  'combi housing (27).jpg',
  'combi housing (28).jpg',
  'combi housing (29).jpg',
  'combi housing (30).jpg',
  'combi housing (34).jpg',
  'combi housing (35).jpg',
  'combi housing (36).jpg',
  'combi housing (37).jpg',
  'combi housing (38).jpg',
  'combi housing (39).jpg',
  'combi housing (40).jpg',
  'combi housing (41).jpg',
  'combi housing (42).jpg',
  'combi housing (43).jpg',
  'combi housing (44).jpg',
  
  // 콤비 블라인드 - 사무실
  'combi office (2).jpg',
  'combi office (3).jpg',
  'combi office (8).jpg',
  
  // 콤비 블라인드 - 매장
  'combi shop (1).jpg',
  'combi shop (4).jpg',
  'combi shop (5).jpg',
  'combi shop (6).jpg',
  'combi shop (9).jpg',
  'combi shop (10).jpg',
  'combi shop (11).jpg',
  
  // 롤스크린 블라인드 - 주택
  'roll housing (12).jpg',
  'roll housing (14).jpg',
  'roll housing (16).jpg',
  'roll housing (17).jpg',
  'roll housing (23).jpg',
  'roll housing (24).jpg',
  'roll housing (25).jpg',
  'roll housing (26).jpg',
  'roll housing (27).jpg',
  'roll housing (32).jpg',
  'roll housing (34).jpg',
  'roll housing (41).jpg',
  'roll housing (44).jpg',
  'roll housing (45).jpg',
  'roll housing (46).jpg',
  'roll housing (47).jpg',
  'roll housing (48).jpg',
  'roll housing (49).jpg',
  'roll housing (50).jpg',
  'roll housing (51).jpg',
  'roll housing (52).jpg',
  'roll housing (55).jpg',
  
  // 롤스크린 블라인드 - 사무실
  'roll office (3).jpg',
  'roll office (5).jpg',
  'roll office (6).jpg',
  'roll office (9).jpg',
  'roll office (11).jpg',
  'roll office (13).jpg',
  'roll office (15).jpg',
  'roll office (18).jpg',
  'roll office (19).jpg',
  'roll office (28).jpg',
  'roll office (36).jpg',
  'roll office (37).jpg',
  'roll office (39).jpg',
  'roll office (40).jpg',
  'roll office (43).jpg',
  'roll office (56).jpg',
  'roll office (57).jpg',
  'roll office (58).jpg',
  'roll office  (59).jpg',
  
  // 롤스크린 블라인드 - 매장
  'roll shop (1).jpg',
  'roll shop (2).jpg',
  'roll shop (4).jpg',
  'roll shop (7).jpg',
  'roll shop (8).jpg',
  'roll shop (20).jpg',
  'roll shop (33).jpg',
  'roll shop (42).jpg',
  'roll shop (53).jpg',
  'roll shop (54).jpg',
  
  // 롤스크린 블라인드 - 기타 (환경이 명시되지 않은 파일들)
  'roll (10).jpg',
  'roll (21).jpg',
  'roll (22).jpg',
  'roll (29).jpg',
  'roll (30).jpg',
  'roll (31).jpg',
  'roll (35).jpg',
  
  // 커튼 블라인드 - 주택 (실제 폴더에 있는 모든 파일)
  'curtain housing (2).jpg',
  'curtain housing (3).jpg',
  'curtain housing (4).jpg',
  'curtain housing (6).jpg',
  'curtain housing (8).jpg',
  'curtain housing (10).jpg',
  'curtain housing (11).jpg',
  'curtain housing (12).jpg',
  'curtain housing (13).jpg',
  'curtain housing (14).jpg',
  'curtain housing (15).jpg',
  'curtain housing (16).jpg',
  'curtain housing (17).jpg',
  'curtain housing (18).jpg',
  'curtain housing (19).jpg',
  'curtain housing (20).jpg',
  'curtain housing (21).jpg',
  'curtain housing (22).jpg',
  'curtain housing (23).jpg',
  'curtain housing (24).jpg',
  'curtain housing (25).jpg',
  'curtain housing (26).jpg',
  'curtain housing (27).jpg',
  'curtain housing (28).jpg',
  'curtain housing (29).jpg',
  'curtain housing (30).jpg',
  'curtain housing (31).jpg',
  'curtain housing (32).jpg',
  'curtain housing (33).jpg',
  'curtain housing (34).jpg',
  'curtain housing (35).jpg',
  'curtain housing (36).jpg',
  'curtain housing (37).jpg',
  'curtain housing (38).jpg',
  'curtain housing (39).jpg',
  'curtain housing (40).jpg',
  
  // 커튼 블라인드 - 매장 (실제 폴더에 있는 모든 파일)
  'curtain shop (1).jpg',
  'curtain shop (2).jpg',
  'curtain shop (3).jpg',
  'curtain shop (4).jpg',
  'curtain shop (7).jpg',
  'curtain shop (8).jpg',
  'curtain shop (9).jpg',
  'curtain shop (10).jpg',
  'curtain shop (11).jpg',
  
  // 우드 블라인드 - 주택 (실제 폴더에 있는 모든 파일)
  'wood housing (2).jpg',
  'wood housing (3).jpg',
  'wood housing (9).jpg',
  'wood housing (15).jpg',
  'wood housing (17).jpg',
  'wood housing (18).jpg',
  'wood housing (19).jpg',
  'wood housing (20).jpg',
  'wood housing (21).jpg',
  'wood housing (22).jpg',
  'wood housing (25).jpg',
  'wood housing (26).jpg',
  'wood housing (27).jpg',
  'wood housing (28).jpg',
  'wood housing (29).jpg',
  'wood housing (30).jpg',
  'wood housing (31).jpg',
  
  // 우드 블라인드 - 매장 (실제 폴더에 있는 모든 파일)
  'wood shop (4).jpg',
  'wood shop (8).jpg'
];

// 이미지 파일명에서 환경과 타입을 추출하는 함수 (개선된 버전)
const extractImageInfo = (filename: string) => {
  const lowerFilename = filename.toLowerCase();
  
  // 환경별 키워드 매핑
  const environmentMap: { [key: string]: string } = {
    'office': '사무실',
    'housing': '주택', 
    'shop': '매장'
  };
  
  // 타입별 키워드 매핑
  const typeMap: { [key: string]: string } = {
    'combi': '콤비',
    'roll': '롤스크린',
    'wood': '우드',
    'curtain': '커튼'
  };
  
  // 환경 키워드 찾기
  let environment = '';
  let environmentKey = '';
  for (const [key, value] of Object.entries(environmentMap)) {
    if (lowerFilename.includes(key)) {
      environment = value;
      environmentKey = key;
      break;
    }
  }
  
  // 타입 키워드 찾기
  let type = '';
  let typeKey = '';
  for (const [key, value] of Object.entries(typeMap)) {
    if (lowerFilename.includes(key)) {
      type = value;
      typeKey = key;
      break;
    }
  }
  
  // 환경이 없는 경우 기본값 설정 (roll (10).jpg 같은 파일들)
  if (!environment && type === '롤스크린') {
    environment = '주택'; // 기본값으로 주택 설정
    environmentKey = 'housing';
  }
  
  // 모든 이미지가 유효하도록 설정
  const isValid = environment && type;
  
  return {
    environment,
    environmentKey,
    type,
    typeKey,
    isValid
  };
};

// 동적으로 갤러리 데이터 생성
const generateGalleryData = () => {
  return imageFiles
    .map((filename, index) => {
      const info = extractImageInfo(filename);
      if (!info.isValid) return null;
      
      return {
        id: index + 1,
        title: `${info.type} 블라인드 - ${info.environment} (${index + 1})`,
        description: `${info.environment}에 설치된 고급스러운 ${info.type} 블라인드`,
        filename,
        environment: info.environmentKey,
        type: info.typeKey,
        image: `/gallery/${filename}`,
        tags: [info.environment, info.type]
      };
    })
    .filter(Boolean) as Array<{
      id: number;
      title: string;
      description: string;
      filename: string;
      environment: string;
      type: string;
      image: string;
      tags: string[];
    }>;
};

// 환경별 및 타입별 매핑
const environmentMap = {
  'office': '사무실',
  'housing': '주택', 
  'shop': '매장'
};

const typeMap = {
  'combi': '콤비',
  'roll': '롤스크린',
  'wood': '우드',
  'curtain': '커튼'
};

const environments = Object.values(environmentMap);
const types = Object.values(typeMap);

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'environment' | 'type'>('environment');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [galleryData, setGalleryData] = useState<any[]>([]);

  // 컴포넌트 마운트 시 갤러리 데이터 생성
  useEffect(() => {
    const data = generateGalleryData();
    console.log('=== 갤러리 데이터 생성 완료 ===');
    console.log('Total images:', data.length);
    console.log('Images by environment:', {
      office: data.filter(item => item.environment === 'office').length,
      housing: data.filter(item => item.environment === 'housing').length,
      shop: data.filter(item => item.environment === 'shop').length
    });
    console.log('Images by type:', {
      combi: data.filter(item => item.type === 'combi').length,
      roll: data.filter(item => item.type === 'roll').length,
      wood: data.filter(item => item.type === 'wood').length,
      curtain: data.filter(item => item.type === 'curtain').length
    });
    console.log('=== 상세 이미지 목록 ===');
    data.forEach((item, index) => {
      console.log(`${index + 1}. ${item.filename} -> ${item.environment} (${item.type})`);
    });
    console.log('=== 필터링 테스트 ===');
    console.log('롤스크린 + 우드 필터 결과:', data.filter(item => 
      item.type === 'roll' || item.type === 'wood'
    ).length);
    setGalleryData(data);
  }, []);

  // 필터링된 데이터 계산
  const filteredData = useMemo(() => {
    if (selectedFilters.length === 0) return galleryData;
    
    return galleryData.filter(item => {
      if (activeTab === 'environment') {
        // 환경별 필터링: 선택된 환경에 해당하는 항목들
        return selectedFilters.some(filter => {
          const envKey = Object.keys(environmentMap).find(key => environmentMap[key as keyof typeof environmentMap] === filter);
          return envKey && item.environment === envKey;
        });
      } else {
        // 타입별 필터링: 선택된 타입에 해당하는 항목들
        return selectedFilters.some(filter => {
          const typeKey = Object.keys(typeMap).find(key => typeMap[key as keyof typeof typeMap] === filter);
          return typeKey && item.type === typeKey;
        });
      }
    });
  }, [activeTab, selectedFilters, galleryData, environmentMap, typeMap]);

  // 필터 토글 함수 (단일 선택 방식으로 변경)
  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? [] // 이미 선택된 필터를 클릭하면 선택 해제
        : [filter] // 새로운 필터를 선택하면 기존 선택을 모두 해제하고 새 필터만 선택
    );
  };

  // 필터 초기화
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  // 이미지 모달 열기
  const openImageModal = (item: any) => {
    setSelectedImage(item);
  };

  // 이미지 모달 닫기
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // 새로고침 함수 (폴더에 새 이미지 추가 시 사용)
  const refreshGallery = () => {
    const data = generateGalleryData();
    console.log('Refreshed gallery data:', data);
    setGalleryData(data);
  };

  // 디버깅용: 현재 데이터 상태 출력
  useEffect(() => {
    console.log('=== 현재 상태 ===');
    console.log('Gallery Data:', galleryData.length);
    console.log('Filtered Data:', filteredData.length);
    console.log('Active Tab:', activeTab);
    console.log('Selected Filter:', selectedFilters[0] || '없음');
    
    if (selectedFilters.length > 0) {
      const selectedFilter = selectedFilters[0];
      console.log('=== 필터링 상세 분석 ===');
      
      if (activeTab === 'type') {
        const typeKey = Object.keys(typeMap).find(key => typeMap[key as keyof typeof typeMap] === selectedFilter);
        const count = galleryData.filter(item => item.type === typeKey).length;
        console.log(`선택된 타입 필터 "${selectedFilter}" (${typeKey}): ${count}개 이미지`);
        
        // 우드 필터 특별 디버깅
        if (selectedFilter === '우드') {
          console.log('=== 우드 필터 상세 분석 ===');
          const woodItems = galleryData.filter(item => item.type === 'wood');
          console.log('우드 타입 이미지들:', woodItems.map(item => item.filename));
        }
      } else {
        const envKey = Object.keys(environmentMap).find(key => environmentMap[key as keyof typeof environmentMap] === selectedFilter);
        const count = galleryData.filter(item => item.environment === envKey).length;
        console.log(`선택된 환경 필터 "${selectedFilter}" (${envKey}): ${count}개 이미지`);
      }
    }
  }, [galleryData, filteredData, activeTab, selectedFilters, environmentMap, typeMap]);

  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <section className="min-h-[50vh] py-16 lg:py-20 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center min-h-[50vh]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            시공갤러리
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            BlindGarden의 다양한 시공 사례를 확인하세요.<br />
            실제 고객님들의 공간에 설치된 블라인드들을 만나보실 수 있습니다.
          </p>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 탭 */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('environment')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'environment'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                현장별
              </button>
              <button
                onClick={() => setActiveTab('type')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'type'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                타입별
              </button>
            </div>
          </div>

          {/* 필터 칩 */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {(activeTab === 'environment' ? environments : types).map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilters.includes(filter)
                    ? 'bg-[#10b981] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* 필터 상태 및 초기화 */}
          <div className="flex justify-center items-center gap-4">
            {selectedFilters.length > 0 && (
              <span className="text-sm text-gray-600">
                선택된 필터: {selectedFilters[0]}
              </span>
            )}
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#10b981] hover:text-[#0e9f6e] underline"
              >
                필터 초기화
              </button>
            )}
            {/* 새로고침 버튼 */}
            <button
              onClick={refreshGallery}
              className="text-sm text-[#10b981] hover:text-[#0e9f6e] underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              새로고침
            </button>
          </div>
        </div>
      </section>

      {/* 갤러리 그리드 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === 'environment' ? '현장별' : '타입별'} 갤러리
            </h2>
            <span className="text-gray-600">
              총 {filteredData.length}개의 사례
            </span>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600 mb-2">
                검색 결과가 없습니다
              </p>
              <p className="text-gray-500">
                다른 필터를 선택해보세요
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => openImageModal(item)}
                >
                  {/* 썸네일 이미지 */}
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        // 이미지 로드 실패 시 fallback 표시
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 flex items-center justify-center">
                              <div class="text-center">
                                <div class="text-3xl mb-2">🖼️</div>
                                <p class="text-gray-500 text-sm">${item.filename}</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            {/* 모달 닫기 버튼 */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* 이미지 */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* 이미지 정보 */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-gray-200">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedImage.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-primary/80 text-white px-2 py-1 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
