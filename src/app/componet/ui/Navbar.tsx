"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/member">Member</Link>
      <Link href="/portfolio-form">Portfolio Form</Link>
    </nav>
  );
}
