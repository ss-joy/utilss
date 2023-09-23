import Link from "next/link";
export default function AllTools(): JSX.Element {
  return (
    <main className="px-10">
      <ul className="flex flex-col justify-between items-center mt-14 md:flex-row md:px-20 md:flex-wrap md:mt-20">
        <li className="h-20 text-center bg-orange-200 rounded-lg mb-10 px-5 text-2xl font-bold text-slate-500 flex justify-center items-center md:w-72 ">
          <Link href={"/tools/sorted-array"}> Create sorted integer array</Link>
        </li>
        <li className="h-20 text-center bg-orange-200 rounded-lg mb-10 px-5 text-2xl font-bold text-slate-500 flex justify-center items-center md:w-72 ">
          <Link href={"/tools/unsorted-array"}>
            Create random integer array
          </Link>
        </li>
        <li className="h-20 text-center bg-orange-200 rounded-lg mb-10 px-5 text-2xl font-bold text-slate-500 flex justify-center items-center md:w-72 ">
          <Link href={"/tools/string-array"}> Create random string array</Link>
        </li>
      </ul>
    </main>
  );
}
