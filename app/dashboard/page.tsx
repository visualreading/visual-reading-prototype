// src/app/dashboard/page.tsx
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">대시보드</h1>
      <Link href="/diagnosis" className="text-blue-500 underline">
        진단 모드로 이동
      </Link>
    </div>
  );
}