/**
 *
 * Solve the loading component error
 * cant see Loading  component when
 * waiting for the array to be created
 *
 *
 *
 * fix 0 appearance in inputs
 */
import React, { useEffect, useRef, useState } from "react";
import createSortedArray from "@/utils/createSortedArray";
import Loading from "@/components/ui/Loading";
import Head from "next/head";
export default function SortedArrayPage(): JSX.Element {
  const [startValue, setStartValue] = useState<number | "">("");
  const [endValue, setEndValue] = useState<number | "">("");
  const [arrayStyle, setArrayStyle] = useState<string>("styleJs");
  const [arrayBox, setArrayBox] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    console.log("effect", textAreaValue);
    if (textAreaRef.current) {
      textAreaRef.current.value = textAreaValue;
    }
  }, [textAreaValue]);

  function onStartValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStartValue(+e.target.value);
  }
  function onEndValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEndValue(+e.target.value);
  }
  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArrayStyle(e.target.value);
  }
  function clearAllinputs() {
    setStartValue("");
    setEndValue("");
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      "submitted",
      startValue,
      typeof startValue,
      endValue,
      typeof endValue
    );

    if (
      startValue === "" ||
      !endValue ||
      !(endValue <= startValue + MAX_SUPPORTED_NUMBER)
    ) {
      alert("Hmmm looks like you are going beyoond the range. try again");
      return;
    }

    // setIsLoading((prev) => {
    //   return true;
    // });
    let createdArray: number[] = [];

    if (typeof startValue === "number" && typeof endValue === "number") {
      createdArray = createSortedArray(startValue, endValue);
    }
    // setIsLoading(() => {
    //   return false;
    // });
    setArrayBox(true);
    setTextAreaValue(
      `${arrayStyle === "styleJs" ? "[" : "{"}${createdArray.toString()}${
        arrayStyle === "styleJs" ? "]" : "}"
      }`
    );
  }
  const MAX_SUPPORTED_NUMBER = 90000000;
  return (
    <div>
      <Head>
        <title>utilss | sorted array generator</title>
      </Head>
      <h2 className="text-center">
        Currently you can generate numbers upto {MAX_SUPPORTED_NUMBER} elements.
      </h2>
      <form onSubmit={handleSubmit}>
        <section className="flex justify-between p-12">
          <label htmlFor="start-value" className="labels">
            Elements starts from
          </label>
          <input
            onChange={onStartValueChange}
            className="inputs out-of-range:bg-red-200 in-range:bg-green-200"
            type="number"
            value={startValue}
            id="start-value"
            required
          />
          <label htmlFor="end-value" className="labels">
            Elements end at
          </label>
          <input
            onChange={onEndValueChange}
            className="inputs out-of-range:bg-red-200 in-range:bg-green-200"
            type="number"
            id="end-value"
            value={endValue}
            //min has to be one greater than the start value
            //so that it makes at least an array of two elements!
            min={startValue === "" ? undefined : startValue + 1}
            //start + MAX_SUPPORTED_NUMBER
            max={
              startValue === "" ? undefined : startValue + MAX_SUPPORTED_NUMBER
            }
            required
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

      <section>
        {arrayBox && (
          <textarea
            ref={textAreaRef}
            rows={10}
            className="inputs w-4/5 mx-auto mt-36 p-8 text-slate-600 font-semibold text-lg"
            placeholder="Sorted array..."
          />
        )}
      </section>
    </div>
  );
}
