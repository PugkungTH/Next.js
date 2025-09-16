"use client";
import { usePortfolioStore } from "@/store/portfolioStore";
import { useParams } from "next/navigation";

export default function StudentDetailPage() {
  const { id } = useParams();
  const student = usePortfolioStore((s) => s.portfolios.find((p) => p.id === id));

  if (!student) return <p>ไม่พบข้อมูล</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{student.firstName} {student.lastName}</h1>
      <p>🏫 โรงเรียน: {student.school}</p>
      <p>📞 เบอร์โทร: {student.phone}</p>
      <p>📊 GPA: {student.gpa}</p>
      <p>🎯 ความสามารถ: {student.skills}</p>
      <p>📖 เหตุผล: {student.reason}</p>
      <p>📌 สาขา: {student.faculty}</p>
      <p>🎓 มหาวิทยาลัย: {student.university}</p>
      {student.image && <img src={student.image} alt="portfolio" className="w-40 mt-4 rounded" />}
    </div>
  );
}
