import React from "react";

type ClearButtonProps = {
  clearAllInputs: () => void;
};
const ClearButton = (props: ClearButtonProps): JSX.Element => {
  return (
    <button
      className="blue-btn bg-red-700 text-white p-4 border-4 border-red-700 w-56"
      type="button"
      onClick={props.clearAllInputs}
    >
      clear inputs
    </button>
  );
};

export default ClearButton;
