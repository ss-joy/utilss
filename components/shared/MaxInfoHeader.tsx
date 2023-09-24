import React from "react";
import { MAX_SUPPORTED_NUMBER } from "@/utils/MAX_VALUE";
const InfoHeader = (): JSX.Element => {
  return (
    <h2 className="text-center block shadow-lg rounded-md text-xl p-2 shadow-orange-400 bg-orange-500 mt-10 mx-8 text-white sm:text-3xl sm:mx-10 lg:text-4xl lg:mx-16 xl:mx-28">
      Currently you can generate numbers upto {MAX_SUPPORTED_NUMBER} elements.
    </h2>
  );
};

export default InfoHeader;
