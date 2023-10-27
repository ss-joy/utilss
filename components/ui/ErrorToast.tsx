import React from "react";
type ErrorToastProp = {
  text: string | null;
};
const ErrorToast = ({
  text = "Something happend. Please try again",
}: ErrorToastProp) => {
  return (
    <div className="mx-auto flex w-96 flex-col gap-4 rounded-md p-8 shadow-md shadow-orange-400">
      <h1 className="rounded-md border-2 border-red-700 bg-red-100/90 px-1 py-3 text-5xl font-bold text-red-500">
        Error!!!
      </h1>
      <p className="rounded-md border-2  px-1 py-3 text-red-500">{text}</p>
    </div>
  );
};

export default ErrorToast;
