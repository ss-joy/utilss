import { useState } from "react";
import createSortedArray from "@/utils/createSortedArray";
import Loading from "@/components/ui/Loading";
export default function SortedArrayPage() {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [arrayStyle, setArrayStyle] = useState("styleJs");
  const [arrayBox, setArrayBox] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onStartValueChange(e) {
    setStartValue(+e.target.value);
  }
  function onEndValueChange(e) {
    setEndValue(+e.target.value);
  }
  function onSelectChange(e) {
    setArrayStyle(e.target.value);
  }
  function handleTextArea(e) {}
  function clearAllinputs() {
    setStartValue("");
    setEndValue("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(startValue, typeof startValue);
    console.log(endValue, typeof endValue);

    setIsLoading(true);
    const createdArray = createSortedArray(startValue, endValue);
    setIsLoading(false);
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
            min={`${startValue + 1}`}
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
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <textarea
            value={textAreaValue}
            type="text"
            onChange={handleTextArea}
            className="inputs w-4/5 mx-auto mt-36 p-8 text-slate-600 font-semibold text-lg"
          />
        </section>
      )}
      {!isLoading && <Loading />}
    </div>
  );
}
