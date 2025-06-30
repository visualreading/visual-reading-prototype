import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        {/* 로고 이미지 */}
        <Image
          src="/logo.png"
          alt="Visual Reading Logo"
          width={500}
          height={500}
          className="mx-auto mb-6"
        />

        {/* 제목 및 설명 */}
        <h1 className="text-3xl font-bold mb-4">🎉 Visual Reading SaaS 시작!</h1>
        <p className="text-lg text-gray-700 mb-6">
          이 화면은 당신이 만든 첫 페이지입니다. 지금부터 영어를 눈으로 읽는 시대가 시작됩니다.
        </p>

        {/* 버튼: 대시보드 이동 */}
        <Link href="/dashboard">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            대시보드로 이동
          </button>
        </Link>

        {/* 추가 링크: 회사 소개 / 문의하기 등 */}
        <div className="mt-8 space-x-4 text-sm text-gray-500">
          <Link href="/about">회사 소개</Link>
          <Link href="/contact">문의하기</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
    </main>
  );
}