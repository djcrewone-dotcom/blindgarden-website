'use client';

import { useState, useRef } from 'react';

const productTypes = {
  '롤스크린': { 
    price: 16000, 
    desc: '한 장의 원단이 위아래로 말아 올리고 내리는 깔끔한 타입.' 
  },
  '콤비블라인드': { 
    price: 18000, 
    desc: '원단 & 망사 교차되어 디자인 효과가 뛰어난 대중적 타입.' 
  },
  '우드블라인드': { 
    price: 45000, 
    desc: '나무 소재로 제작되어 자연스러운 연출이 가능한 고급 타입.' 
  },
  '커튼': { 
    price: 40000, 
    desc: '한쪽 면을 전체를 가려주어 깊은 숙면에 도움되는 커텐 타입' 
  }
};

interface QuoteItem {
  id: string;
  spaceName: string;
  productType: string;
  width: number;
  height: number;
  quantity: number;
  price: number;
}

export default function QuotePage() {
  const [spaceName, setSpaceName] = useState('');
  const [productType, setProductType] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [constructionMethod, setConstructionMethod] = useState('');
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const quoteRef = useRef<HTMLDivElement>(null);

  const calculateArea = (w: number, h: number) => {
    const area = (w * h) / 10000; // cm²로 변환 (mm² → cm²)
    return Math.ceil(area) < 2 ? 2 : Math.ceil(area);
  };

  const addWindow = () => {
    if (!spaceName || !productType || !width || !height) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const w = parseFloat(width);
    const h = parseFloat(height);
    
    if (w <= 0 || h <= 0) {
      alert('가로와 세로는 0보다 큰 값이어야 합니다.');
      return;
    }

    const area = calculateArea(w, h);
    const unitPrice = productTypes[productType as keyof typeof productTypes]?.price || 0;
    const price = area * unitPrice * quantity;

    const newItem: QuoteItem = {
      id: Date.now().toString(),
      spaceName,
      productType,
      width: w,
      height: h,
      quantity,
      price
    };

    // 셀프시공 선택 시 최소 주문 금액 체크
    if (constructionMethod === '셀프시공') {
      const tempTotalPrice = [...quoteItems, newItem].reduce((sum, item) => sum + item.price, 0);
      const tempVat = Math.round(tempTotalPrice * 0.1);
      const tempFinalTotal = tempTotalPrice + tempVat - 30000; // 셀프시공 할인 적용
      
      if (tempFinalTotal <= 50000) {
        alert('최소 주문 금액(5만원) 미만이므로 \'셀프시공(납품만 받기)\' 서비스를 이용하실 수 없습니다. \'방문시공\'으로 선택해 주세요^^');
        return;
      }
    }

    setQuoteItems([...quoteItems, newItem]);
    setSpaceName('');
    setProductType('');
    setWidth('');
    setHeight('');
    setQuantity(1);
  };

  const removeItem = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.id !== id));
  };

  const copyItem = (item: QuoteItem) => {
    const newItem: QuoteItem = {
      ...item,
      id: Date.now().toString()
    };
    setQuoteItems([...quoteItems, newItem]);
  };

  // 제품 타입을 간결하게 표시하는 함수
  const getShortProductType = (fullType: string) => {
    switch (fullType) {
      case '콤비블라인드': return '콤비';
      case '우드블라인드': return '우드';
      case '롤스크린': return '롤스크린';
      case '커튼': return '커튼';
      default: return fullType;
    }
  };

  const totalPrice = quoteItems.reduce((sum, item) => sum + item.price, 0);
  const vat = Math.round(totalPrice * 0.1);
  
  // 시공방법에 따른 할인/추가비 계산
  const constructionMethodFee = constructionMethod === '셀프시공' ? -30000 : 0;
  
  const finalTotal = totalPrice + vat + constructionMethodFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="min-h-[50vh] py-16 lg:py-20 bg-gradient-to-r from-primary-50 to-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center min-h-[50vh]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">문의 & 견적</h1>
          <div className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto space-y-4 leading-relaxed">
            <p className="text-primary font-semibold">블라인드가든에서 제공되는<br />제품 & 서비스는 모두<br />정가 금액으로 제공됩니다.</p>
            <p>기본 타입으로 선택 시<br />정확한 견적 금액을 확인하실 수 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">견적 입력</h2>
               
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#10b981] mb-2">
                  1. 설치될 공간명칭을 입력해 주세요 (거실, 안방, 메인홀)
                </label>
                <input
                  type="text"
                  value={spaceName}
                  onChange={(e) => setSpaceName(e.target.value)}
                  placeholder="예: 거실, 안방, 메인홀"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#10b981] mb-2">
                  2. 제품타입을 선택해 주세요
                </label>
                <div className="space-y-3">
                  {Object.entries(productTypes).map(([key, product]) => {
                    // 각 제품타입에 맞는 아이콘 매핑
                    const getIconPath = (productKey: string) => {
                      switch (productKey) {
                        case '콤비블라인드': return '/icon/combi icon.png';
                        case '우드블라인드': return '/icon/wood icon.png';
                        case '롤스크린': return '/icon/roll icon.png';
                        case '커튼': return '/icon/curtain icon.png';
                        default: return '';
                      }
                    };

                    return (
                      <button
                        key={key}
                        onClick={() => setProductType(key)}
                        className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                          productType === key ? 'border-[#10b981] bg-[#10b981]/10' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <img 
                              src={getIconPath(key)} 
                              alt={`${key} 아이콘`}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-900 mb-2">{key}</div>
                            <div className="text-sm text-gray-600">{product.desc}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#10b981] mb-2">
                  3. 가로 세로 사이즈를 입력해 주세요 (cm)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="가로 (cm)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                  />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="세로 (cm)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-[#10b981] mb-2">
                  4. 수량을 입력해 주세요
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-[#10b981] mb-2">
                  5. 시공방법을 선택해 주세요
                </label>
                <div className="space-y-3">
                  <button
                    onClick={() => setConstructionMethod('방문시공')}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                      constructionMethod === '방문시공' ? 'border-[#10b981] bg-[#10b981]/10' : 'border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-900">방문시공</div>
                        <div className="text-sm text-gray-600">(기사님 설치)</div>
                      </div>
                      <div className="text-gray-500">0원</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setConstructionMethod('셀프시공')}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                      constructionMethod === '셀프시공' ? 'border-[#10b981] bg-[#10b981]/10' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-900">셀프시공</div>
                        <div className="text-sm text-gray-600">(납품만 받기)</div>
                      </div>
                      <div className="text-[#10b981] font-bold">-30,000원</div>
                    </div>
                  </button>
                </div>
              </div>

              <button
                onClick={addWindow}
                className="w-full bg-[#10b981] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#0e9f6e] transition-colors"
              >
                창추가
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8" ref={quoteRef}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">블라인드가든 견적서</h2>

              {quoteItems.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  <div className="text-6xl mb-4">📋</div>
                  <p className="text-lg">견적 항목을 추가해주세요</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* 견적 항목들 */}
                  {(() => {
                    // 공간별로 견적 항목들을 그룹화
                    const groupedItems = quoteItems.reduce((groups, item) => {
                      if (!groups[item.spaceName]) {
                        groups[item.spaceName] = [];
                      }
                      groups[item.spaceName].push(item);
                      return groups;
                    }, {} as Record<string, typeof quoteItems>);

                    // 디버깅을 위한 로그
                    console.log('견적 항목들:', quoteItems);
                    console.log('그룹화된 항목들:', groupedItems);
                    console.log('공간명들:', Object.keys(groupedItems));

                    return Object.entries(groupedItems).map(([spaceName, items]) => (
                      <div key={spaceName} className="bg-white border-2 border-gray-200 rounded-xl shadow-md overflow-hidden">
                        <div className="flex">
                          {/* 왼쪽 컬러 바 - 공간명 세로 표시 */}
                          <div 
                            className="bg-gradient-to-b from-[#10b981] to-[#0e9f6e] w-12 flex items-center justify-center py-8 min-h-[140px] shadow-xl border-r-2 border-[#0e9f6e] relative z-10"
                            style={{
                              background: 'linear-gradient(135deg, #10b981 0%, #0e9f6e 100%)',
                              width: '48px',
                              minHeight: '140px',
                              borderRight: '2px solid #0e9f6e',
                              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                          >
                            <div className="text-white font-bold text-center flex flex-col items-center justify-center h-full">
                              {spaceName.split('').map((char, index) => (
                                <div key={index} className="text-center leading-tight mb-1 text-white font-bold text-lg tracking-wider">
                                  {char}
                                </div>
                              ))}
                            </div>
                          </div>
                           
                          {/* 오른쪽 견적 내용 */}
                          <div className="flex-1 p-6">
                            {/* 헤더 */}
                            <div className="flex gap-4 text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">
                              <div className="flex-1 text-left">사이즈(cm)</div>
                              <div className="flex-1 text-left">타입</div>
                              <div className="flex-1 text-left">개수</div>
                              <div className="w-32 text-right pr-2">가격</div>
                            </div>

                            {/* 해당 공간의 견적 항목들 */}
                            {items.map((item, index) => (
                              <div key={item.id} className={`group flex gap-4 text-sm py-4 hover:bg-gray-50 relative ${index < items.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                <div className="flex-1 text-gray-700 font-medium text-left">{item.width} × {item.height}</div>
                                <div className="flex-1 text-gray-700 font-medium text-left">{getShortProductType(item.productType)}</div>
                                <div className="flex-1 text-gray-700 font-medium text-left">{item.quantity}개</div>
                                <div className="w-32 text-gray-700 font-semibold text-right pr-2">
                                  <div className="flex items-center justify-end space-x-2">
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                                      {new Intl.NumberFormat("ko-KR").format(item.price)}원
                                    </span>
                                    <button
                                      className="w-6 h-6 text-gray-400 hover:text-gray-600 text-xs rounded transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100 flex items-center justify-center flex-shrink-0"
                                      onClick={() => removeItem(item.id)}
                                      title="삭제"
                                    >
                                      ⓧ
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ));
                  })()}

                  {/* 견적서 요약 */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b-2 border-gray-300 pb-3">
                        <span className="font-bold text-gray-800">제품:</span>
                        <span className="font-semibold text-gray-700 text-right text-right" style={{textAlign: 'right'}}>{new Intl.NumberFormat("ko-KR").format(totalPrice)}원</span>
                      </div>
                      <div className="flex justify-between border-b-2 border-gray-300 pb-3">
                        <span className="font-bold text-gray-800">VAT (10%):</span>
                        <span className="font-semibold text-gray-700 text-right text-right" style={{textAlign: 'right'}}>{new Intl.NumberFormat("ko-KR").format(vat)}원</span>
                      </div>
                      {constructionMethod && (
                        <div className="flex justify-between border-b-2 border-gray-300 pb-3">
                          <span className="font-bold text-gray-800">시공방법 ({constructionMethod}):</span>
                          <span className={`font-semibold text-right text-right ${constructionMethod === '셀프시공' ? 'text-green-600' : 'text-gray-700'}`} style={{textAlign: 'right'}}>
                            {new Intl.NumberFormat("ko-KR").format(constructionMethodFee)}원
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-xl font-bold text-[#10b981] pt-3">
                        <span>총 견적:</span>
                        <span>{new Intl.NumberFormat("ko-KR").format(finalTotal)}원</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-4 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-center font-medium">※ 모든 견적은 기본 타입 선택 기준이며, VAT와 시공비가 포함된 금액입니다.</p>
                        <p className="text-center">※ 고급 타입 선택 / 특수 시공환경의 경우 추가비용이 발생됩니다.</p>
                        <p className="text-center text-[#10b981]">(방문 실측시 한 번더 친절한 안내 도와드립니다)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}



              {/* 상담 안내 섹션 */}
              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      제품의 특성상 모두 맞춤제작으로 진행되므로<br />
                      자세한 상담은
                    </p>
                    <div className="space-y-2">
                      <p className="text-xl font-bold text-[#10b981]">
                        블라인드가든 대표번호
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        1661-6823번으로 전화주시면
                      </p>
                      <p className="text-lg text-gray-700">
                        한 번더 친절한 상담 도와드리겠습니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a
                      href="tel:1661-6823"
                      className="inline-flex items-center gap-3 bg-[#10b981] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0e9f6e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      <span className="text-2xl">📞</span>
                      <span>방문견적 신청하기</span>
                      <span className="text-sm opacity-90">(1661-6823)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
