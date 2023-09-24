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
    <ul className="flex flex-col justify-between items-center mt-14 md:flex-row md:px-20 md:flex-wrap md:mt-20">
      {props.toolsLists.map((e, i) => {
        return (
          <li
            key={i}
            className="h-20 text-center bg-orange-200 rounded-lg mb-10 p-5 text-lg sm:text-2xl font-bold text-slate-500 flex justify-center items-center"
          >
            <Link href={e.link}>{e.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ToolItemsList;
