// "use server"; // Removed for static export

import fs from "fs/promises";
import path from "path";
import { PortfolioData } from "./portfolio";
// import { revalidatePath } from "next/cache";

const dataPath = path.join(process.cwd(), "src/data/portfolio.json");

export async function getPortfolioData(): Promise<PortfolioData> {
    const file = await fs.readFile(dataPath, "utf8");
    return JSON.parse(file);
}

// export async function updatePortfolioData(data: PortfolioData) {
//     await fs.writeFile(dataPath, JSON.stringify(data, null, 2), "utf8");
//     revalidatePath("/");
//     revalidatePath("/admin");
//     return { success: true };
// }
