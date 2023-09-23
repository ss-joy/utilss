import { createReadStream, createWriteStream } from "fs";
import path from "path";
export default async function Handler(req, res) {
  try {
    // let target = 100000000;
    let target = 10000000;

    const uniqueFileNme = Date.now();
    const filePath = path.join(
      process.cwd(),
      "public",
      "temporary-files",
      "sorted-array",
      `${uniqueFileNme}.txt`
    );
    const tempArray = [];
    for (let i = 0; i < target; i++) {
      tempArray.push(i);
    }

    // fs.writeFileSync(filePath, "[" + tempArray.toString() + "]");

    createWriteStream()
    return res.status(200).json({
      status: "success",
      message: "sorted array created successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "failed" });
  }
}
