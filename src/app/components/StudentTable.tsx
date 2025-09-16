"use client";
import Link from "next/link";
import { usePortfolioStore } from "@/store/portfolioStore";

export default function StudentTable() {
  const portfolios = usePortfolioStore((s) => s.portfolios);

  return (
    <table className="min-w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">ชื่อ-นามสกุล</th>
          <th className="border px-4 py-2">GPA</th>
          <th className="border px-4 py-2">ดูเพิ่มเติม</th>
        </tr>
      </thead>
      <tbody>
        {portfolios.map((p) => (
          <tr key={p.id}>
            <td className="border px-4 py-2">{p.firstName} {p.lastName}</td>
            <td className="border px-4 py-2">{p.gpa}</td>
            <td className="border px-4 py-2">
              <Link href={`/admin/${p.id}`} className="text-blue-600 underline">รายละเอียด</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
