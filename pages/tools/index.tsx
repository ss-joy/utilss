import ToolItemsList from "@/components/tools/ToolItemsList";
export default function AllTools(): JSX.Element {
  return (
    <main className="px-10">
      <ToolItemsList
        toolsLists={[
          { link: "/tools/sorted-array", title: "Create sorted integer array" },
          {
            link: "/tools/unsorted-array",
            title: "Create random/unsorted integer array",
          },
          { link: "/tools/string-array", title: " Create random string array" },
        ]}
      />
    </main>
  );
}
