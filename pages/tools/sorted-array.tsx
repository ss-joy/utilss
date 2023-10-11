/**
 * fix 0 appearance in inputs
 */
import React, { useEffect, useRef, useState } from "react";
import Loading from "@/components/ui/Loading";
import Head from "next/head";
import ClearButton from "@/components/ui/ClearButton";
import CreateButton from "@/components/ui/CreateButton";
import { MAX_SUPPORTED_NUMBER } from "@/utils/MAX_VALUE";
import MaxInfoHeader from "@/components/shared/MaxInfoHeader";
import useFetch from "@/hooks/useFetch";

export default function SortedArrayPage(): JSX.Element {
  const [startValue, setStartValue] = useState<number | "">("");
  const [endValue, setEndValue] = useState<number | "">("");
  const [arrayStyle, setArrayStyle] = useState<string>("styleJs");
  const [textAreaValue, setTextAreaValue] = useState("");

  const { apiResponseData, error, isLoading, useFetchFunction } = useFetch({
    url: "http://localhost:3000/api/tools/sorted-array",
    method: "POST",
    body: JSON.stringify({
      startValue,
      endValue,
    }),
  });
  useEffect(() => {
    console.log("from effect api data", apiResponseData);
    // main logic:
    // setTextAreaValue(apiResponseData?.data.toString());

    setTextAreaValue(
      `${arrayStyle === "styleJs" ? "[" : "{"}${
        apiResponseData?.data!.toString()
          ? apiResponseData!.data!.toString()
          : null
      }${arrayStyle === "styleJs" ? "]" : "}"}`,
    );
  }, [apiResponseData]);

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
  //ok
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(
    //   "submitted",
    //   startValue,
    //   typeof startValue,
    //   endValue,
    //   typeof endValue,
    // );
    //validation logic
    if (
      startValue === "" ||
      !endValue ||
      !(endValue <= startValue + MAX_SUPPORTED_NUMBER)
    ) {
      alert("Hmmm looks like you are going beyoond the range. try again");
      return;
    }

    useFetchFunction();
  }

  const showArrayBox = apiResponseData && !isLoading;
  if (error) {
    <p>Oh noo errror!!!</p>;
  }
  return (
    <div>
      <Head>
        <title>utilss | sorted array generator</title>
      </Head>
      <MaxInfoHeader />
      <div className="2xl:flex 2xl:justify-around">
        <form onSubmit={handleSubmit}>
          <section className="flex flex-col justify-between px-12 py-2">
            <label
              htmlFor="start-value"
              className="labels mx-1 sm:text-3xl lg:mx-16 lg:text-4xl xl:mx-28"
            >
              Elements starts from
            </label>
            <input
              onChange={onStartValueChange}
              className="inputs mx-2 in-range:bg-green-200 out-of-range:bg-red-200 lg:mx-16 lg:text-4xl xl:mx-28"
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
              className="inputs mx-2 in-range:bg-green-200 out-of-range:bg-red-200 lg:mx-16 lg:text-4xl xl:mx-28"
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
              className="labels mx-1 shadow-md sm:text-3xl lg:mx-16 lg:text-4xl xl:mx-28"
            >
              Choose array style
            </label>
            <select
              className="h-14 rounded bg-orange-200 px-8 font-bold text-slate-600 sm:text-2xl lg:mx-16 lg:text-4xl xl:mx-28"
              value={arrayStyle}
              onChange={onSelectChange}
              id="array-style"
            >
              <option value="styleC">C/C=++ Style {"{ }"}</option>
              <option value="styleJs">
                Javascript/Typescript Style {"[ ]"}
              </option>
            </select>
          </section>
          <section className="mt-5 flex flex-col items-center sm:text-2xl 2xl:flex-row 2xl:justify-center">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <CreateButton />
                <ClearButton clearAllInputs={clearAllinputs} />
              </>
            )}
          </section>
        </form>

        <section className="2xl:flex-grow">
          {showArrayBox && (
            <textarea
              rows={10}
              onChange={() => {}}
              value={textAreaValue}
              className="inputs mx-auto mt-14 w-4/5 p-2 text-lg font-semibold text-slate-600 lg:mt-12 xl:text-2xl 2xl:h-2/4 2xl:p-4"
              placeholder="Sorted array..."
            />
          )}
        </section>
      </div>
    </div>
  );
}
