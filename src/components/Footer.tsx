export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              BlindGarden
            </h3>
            <p className="text-gray-300 mb-4">
              전문적인 블라인드 시공 서비스로<br />
              아름다운 공간을 만들어드립니다.
            </p>
            <div className="text-sm text-gray-400">
              <p>사업자등록번호: 618-21-03031</p>
              <p>대표: 김민겸</p>
            </div>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 1661-6823</p>
              <p>📧 blindgarden@naver.com</p>
              <p>🏢 인천광역시 연수구 인천타워대로 323 송도센트로드 C동 23F</p>
            </div>
          </div>

          {/* 운영시간 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">운영시간</h4>
            <div className="space-y-2 text-gray-300">
              <p>평일: 09:00 - 18:00</p>
              <p>토요일: 09:00 - 15:00</p>
              <p>일요일: 휴무</p>
              <p className="text-primary font-medium">
                * 야간 시공 문의 가능
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 BlindGarden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
