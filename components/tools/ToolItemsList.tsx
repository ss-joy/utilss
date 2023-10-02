import React from "react";
import Link from "next/link";
interface Tool {
  link: string;
  title: string;
}
interface ToolItemsListProps {
  toolsLists: Tool[];
}
const ToolItemsList = (props: ToolItemsListProps): JSX.Element => {
  return (
    <ul className="mt-14 flex flex-col items-center justify-between md:mt-20 md:flex-row md:flex-wrap md:px-20">
      {props.toolsLists.map((e, i) => {
        return (
          <li
            key={i}
            className="mb-10 flex h-20 items-center justify-center rounded-lg bg-orange-200/50 p-5 text-center text-lg font-bold text-slate-500 shadow-lg shadow-orange-400 transition-all hover:shadow-xl hover:shadow-orange-400 sm:text-2xl"
          >
            <Link href={e.link}>{e.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ToolItemsList;
