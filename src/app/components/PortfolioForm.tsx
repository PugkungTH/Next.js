"use client";
import { useForm } from "react-hook-form";
import { usePortfolioStore, Portfolio } from "@/store/portfolioStore";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function PortfolioForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Portfolio>();
  const addPortfolio = usePortfolioStore((s) => s.addPortfolio);

  const onSubmit = (data: Portfolio) => {
    addPortfolio({ ...data, id: uuidv4() });
    alert("✅ บันทึกเรียบร้อยแล้ว");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white shadow-md rounded">
      <input {...register("firstName", { required: true })} placeholder="ชื่อ" className="border p-2 w-full" />
      {errors.firstName && <p className="text-red-500">กรุณากรอกชื่อ</p>}

      <input {...register("lastName", { required: true })} placeholder="นามสกุล" className="border p-2 w-full" />
      <input {...register("address", { required: true })} placeholder="ที่อยู่" className="border p-2 w-full" />
      <input {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="เบอร์โทร" className="border p-2 w-full" />
      {errors.phone && <p className="text-red-500">เบอร์โทรต้องมี 10 หลัก</p>}

      <input {...register("school", { required: true })} placeholder="โรงเรียน" className="border p-2 w-full" />
      <input type="number" step="0.01" {...register("gpa", { required: true, min: 0, max: 4 })} placeholder="GPA" className="border p-2 w-full" />
      <textarea {...register("skills")} placeholder="ความสามารถพิเศษ" className="border p-2 w-full" />
      <textarea {...register("reason")} placeholder="เหตุผลในการสมัคร" className="border p-2 w-full" />

      <input {...register("faculty", { required: true })} placeholder="สาขาที่เลือก" className="border p-2 w-full" />
      <input {...register("university", { required: true })} placeholder="มหาวิทยาลัย" className="border p-2 w-full" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">บันทึก</button>
    </form>
  );
}
