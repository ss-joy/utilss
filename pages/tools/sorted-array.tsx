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
import ClearButton from "@/components/ui/ClearButton";
import CreateButton from "@/components/ui/CreateButton";
import { MAX_SUPPORTED_NUMBER } from "@/utils/MAX_VALUE";
import MaxInfoHeader from "@/components/shared/MaxInfoHeader";

export default function SortedArrayPage(): JSX.Element {
  const [startValue, setStartValue] = useState<number | "">("");
  const [endValue, setEndValue] = useState<number | "">("");
  const [arrayStyle, setArrayStyle] = useState<string>("styleJs");
  const [arrayBox, setArrayBox] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
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
  return (
    <div>
      <Head>
        <title>utilss | sorted array generator</title>
      </Head>
      <MaxInfoHeader />
      <div className="2xl:flex 2xl:justify-around">
        <form onSubmit={handleSubmit}>
          <section className="flex justify-between p-12 flex-col">
            <label
              htmlFor="start-value"
              className="labels mx-1 sm:text-3xl lg:mx-16 lg:text-4xl xl:mx-28"
            >
              Elements starts from
            </label>
            <input
              onChange={onStartValueChange}
              className="inputs out-of-range:bg-red-200 in-range:bg-green-200 mx-2 lg:mx-16 lg:text-4xl xl:mx-28"
              type="number"
              value={startValue}
              id="start-value"
              required
            />
            <label
              htmlFor="end-value"
              className="labels mx-1 sm:text-3xl lg:mx-16 lg:text-4xl xl:mx-28"
            >
              Elements end at
            </label>
            <input
              onChange={onEndValueChange}
              className="inputs out-of-range:bg-red-200 in-range:bg-green-200 mx-2 lg:mx-16 lg:text-4xl xl:mx-28"
              type="number"
              id="end-value"
              value={endValue}
              //min has to be one greater than the start value
              //so that it makes at least an array of two elements!
              min={startValue === "" ? undefined : startValue + 1}
              //start + MAX_SUPPORTED_NUMBER
              max={
                startValue === ""
                  ? undefined
                  : startValue + MAX_SUPPORTED_NUMBER
              }
              required
            />
            <label
              htmlFor="array-style"
              className="labels mx-1 sm:text-3xl lg:mx-16 lg:text-4xl xl:mx-28"
            >
              Choose array style
            </label>
            <select
              className="px-8 rounded bg-orange-200 text-slate-600 font-bold h-14 sm:text-2xl lg:mx-16 lg:text-4xl xl:mx-28"
              value={arrayStyle}
              onChange={onSelectChange}
              id="array-style"
            >
              <option value="styleC">C/C=++ Style</option>
              <option value="styleJs">Javascript/Typescript Style</option>
            </select>
          </section>
          <section className="flex flex-col items-center mt-5 sm:text-2xl 2xl:flex-row 2xl:justify-center">
            <CreateButton />
            <ClearButton clearAllInputs={clearAllinputs} />
          </section>
        </form>

        <section className="2xl:flex-grow">
          {arrayBox && (
            <textarea
              ref={textAreaRef}
              rows={10}
              className="inputs w-4/5 mx-auto mt-36 p-8 text-slate-600 font-semibold text-lg lg:mt-12 xl:text-2xl 2xl:h-2/4 "
              placeholder="Sorted array..."
            />
          )}
        </section>
      </div>
    </div>
  );
}
