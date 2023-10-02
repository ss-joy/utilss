import React from "react";
import { MAX_SUPPORTED_NUMBER } from "@/utils/MAX_VALUE";
const InfoHeader = (): JSX.Element => {
  return (
    <h2 className="mx-8 mt-10 block rounded-md bg-orange-500 p-2 text-center text-xl text-white shadow-lg shadow-orange-400 sm:mx-10 sm:text-3xl lg:mx-16 lg:text-4xl xl:mx-28">
      Currently you can generate numbers upto {MAX_SUPPORTED_NUMBER} elements.
    </h2>
  );
};

export default InfoHeader;
