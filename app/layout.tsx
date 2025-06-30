import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Visual Reading SaaS',
  description: '시각독해 훈련 시스템',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 text-white p-6">
          <h2 className="text-lg font-bold mb-6">📘 메뉴</h2>
          <nav className="space-y-4">
            <Link href="/dashboard" className="hover:underline">📊 진단 모드</Link>
            <Link href="/training" className="hover:underline">🏋️ 훈련 모드</Link>
            <Link href="/coaching" className="hover:underline">💬 코칭 모드</Link>
            <Link href="/together" className="hover:underline text-yellow-300">🤝 Stronger Together</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-10 text-black">
          {children}
        </main>
      </body>
    </html>
  );
}