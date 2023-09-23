import React from "react";
import Link from "next/link";
export const MainBody = (): JSX.Element => {
  return (
    <main>
      <h2 className="text-center my-16 text-4xl mb-32 md:text-5xl md:mt-32 lg:mx-20">
        A collection of tools for creating arrays,random string and so on.
      </h2>
      <Link className="orange-btn" href={"/tools"}>
        Explore tools...
      </Link>
    </main>
  );
};
