import React from "react";
interface CountProps {
  start: number | "";
  end: number | "";
}

const Count = ({ start, end }: CountProps): JSX.Element => {
  let count;
  if (start === "" || end === "") {
    count = 0;
  } else {
    count = end - start + 1;
  }
  return (
    <div className="m-2 flex h-24 w-24 items-center justify-center rounded-lg border-4 border-orange-400 bg-orange-300/30 font-bold text-orange-600 shadow-md sm:h-32 sm:w-32">
      <div className="text-center">{count} elements</div>
    </div>
  );
};

export default Count;
