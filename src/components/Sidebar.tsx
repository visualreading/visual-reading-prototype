import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-slate-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">📘 메뉴</h2>
      <ul className="space-y-3">
        <li><Link href="/dashboard">📊 대시보드</Link></li>
        <li><Link href="/diagnosis">🧪 진단 모드</Link></li>
        <li><Link href="/training">📖 훈련 모드</Link></li>
        <li><Link href="/coaching">💬 코칭 모드</Link></li>
        <li><Link href="/together">🧡 Stronger Together</Link></li>
      </ul>
    </aside>
  );
}