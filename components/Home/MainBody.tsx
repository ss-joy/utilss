import React from "react";
import Link from "next/link";
export const MainBody = (): JSX.Element => {
  return (
    <main>
      <h2 className="my-16 mb-32 text-center text-4xl md:mt-32 md:text-5xl lg:mx-20">
        A collection of tools for creating arrays,random string and so on.
      </h2>
      <Link className="orange-btn" href={"/tools"}>
        Explore tools...
      </Link>
    </main>
  );
};
