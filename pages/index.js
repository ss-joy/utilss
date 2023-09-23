import Image from "next/image";
import { Inter } from "next/font/google";
import MainHeader from "@/components/Home/MainHeader";
import { MainBody } from "@/components/Home/MainBody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <MainBody />
    </div>
  );
}
