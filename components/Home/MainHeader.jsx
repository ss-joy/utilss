import Image from "next/image";
import React from "react";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="bg-orange-400 text-white p-5 flex justify-between items-center md:px-16 lg:px-20">
      <Link href={"/"}>
        <h1 className=" text-5xl">Utilss</h1>
      </Link>
      <Image
        src={"/images/main-icon.png"}
        width={80}
        height={80}
        alt="An icon for the main navbar"
      />
    </header>
  );
};

export default MainHeader;
