import React from "react";

type ClearButtonProps = {
  clearAllInputs: () => void;
};
const ClearButton = (props: ClearButtonProps): JSX.Element => {
  return (
    <button
      className="blue-btn w-56 border-4 border-red-700 bg-red-700 p-4 text-white"
      type="button"
      onClick={props.clearAllInputs}
    >
      clear inputs
    </button>
  );
};

export default ClearButton;
