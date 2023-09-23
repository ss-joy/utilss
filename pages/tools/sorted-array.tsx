/**
 *
 * Solve the loading component error
 * cant see Loading  component when
 * waiting for the array to be created
 */
import React, { useState } from "react";
import createSortedArray from "@/utils/createSortedArray";
import Loading from "@/components/ui/Loading";
export default function SortedArrayPage(): JSX.Element {
  const [startValue, setStartValue] = useState<number | "">("");
  const [endValue, setEndValue] = useState<number | "">("");
  const [arrayStyle, setArrayStyle] = useState<string>("styleJs");
  const [arrayBox, setArrayBox] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onStartValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStartValue(+e.target.value);
  }
  function onEndValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEndValue(+e.target.value);
  }
  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArrayStyle(e.target.value);
  }
  // function handleTextArea(e) {}
  function clearAllinputs() {
    setStartValue("");
    setEndValue("");
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("form submitted");
    console.log(startValue, typeof startValue);
    console.log(endValue, typeof endValue);

    setIsLoading((prev) => {
      return true;
    });
    let createdArray: number[] = [];
    if (startValue && endValue) {
      createdArray = createSortedArray(startValue, endValue);
    }
    console.log(createdArray);
    setIsLoading(() => {
      return false;
    });
    setArrayBox(true);
    setTextAreaValue(
      `${arrayStyle === "styleJs" ? "[" : "{"}${createdArray.toString()}${
        arrayStyle === "styleJs" ? "]" : "}"
      }`
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="flex justify-between p-12">
          <label htmlFor="start-value" className="labels">
            Start from
          </label>
          <input
            onChange={onStartValueChange}
            className="inputs out-of-range:bg-red-200 in-range:bg-green-200"
            type="number"
            // min={0}
            value={startValue}
            id="start-value"
          />
          <label htmlFor="end-value" className="labels">
            End to
          </label>
          <input
            onChange={onEndValueChange}
            className="inputs out-of-range:bg-red-200 in-range:bg-green-200"
            type="number"
            id="end-value"
            value={endValue}
            // min={`${startValue + 1}`}
            min={isNaN(startValue) ? Number(startValue) + 1 : startValue + 1}
            max={1000000}
          />
          <label htmlFor="array-style" className="labels">
            Choose array style
          </label>
          <select
            name=""
            className="px-8 rounded bg-orange-200 text-slate-600 font-bold"
            value={arrayStyle}
            onChange={onSelectChange}
            id="array-style"
          >
            <option value="styleC">C/C=++ Style</option>
            <option value="styleJs">Javascript/Typescript Style</option>
          </select>
        </section>
        <section className="flex justify-center mt-16">
          <button className="blue-btn block mx-8 p-4">Create array here</button>
          <button className="blue-btn block mx-8 p-4">
            Download file with the array
          </button>
          <button
            className="blue-btn bg-red-700 text-white block mx-8 p-4 border-4 border-red-700"
            type="button"
            onClick={clearAllinputs}
          >
            Clear inputs
          </button>
        </section>
      </form>
      {isLoading && !arrayBox ? (
        <Loading />
      ) : (
        <section>
          <textarea
            rows={10}
            value={textAreaValue}
            type="text"
            onChange={handleTextArea}
            className="inputs w-4/5 mx-auto mt-36 p-8 text-slate-600 font-semibold text-lg"
          />
        </section>
      )}
    </div>
  );
}
