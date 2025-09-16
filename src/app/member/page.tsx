//BUS*12 Member page
import Link from "next/link";

type Member = {
    nameTH: string;
    nameEN: string;
    heightCm: number;
    age: number;
};

export interface Member {
  nameTH: string;
  nameEN: string;
  heightCm: number;
  age: number;
}

const BUS_MEMBERS: Member[] = [
  { nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23 },
  { nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22 },
  { nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22 },
  { nameTH: "อาร่า ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22 },
  { nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21 },
  { nameTH: "ไทย ชุณหนนท์ ภาคิน", nameEN: "Thai", heightCm: 178, age: 20 },
  { nameTH: "เน็กซ์ ณัฏฐ์กิตติ์ แซ่มดารา", nameEN: "Nex", heightCm: 180, age: 20 },
  { nameTH: "ภู ธัชชชัย ลิมปปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20 },
  { nameTH: "คอปเปอร์ เดวาวิจ พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19 },
  { nameTH: "เอเอ อชิรภรณ์ สุวิทยะเกียรติ", nameEN: "AA", heightCm: 178, age: 19 },
  { nameTH: "จังจี้ บุณย์สิริพงศ์", nameEN: "Jungt", heightCm: 173, age: 19 },
  { nameTH: "พีม สุภาพ พรพานนารักษ์", nameEN: "Peem", heightCm: 187, age: 19 },];

export default function MemberPage() {
    return (
        <>
            <li>
                {BUS_MEMBERS.map((member, index) => (
                    <li key={index}>
                        <Link href={`/member/${index + 1}`}>
                            {index + 1} {member.nameEN} ({member.nameTH})
                        </Link>
                    </li>
                ))}     
            </li>
        </>
    );
}