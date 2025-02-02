
import { createUploadthing, type FileRouter } from "uploadthing/next";

import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handlerAuth = async () => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    return {};
};

handlerAuth().catch(console.error); 



export const ourFileRouter = {
    profileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
      .onUploadComplete(({ file }) => {
        console.log("✅ File uploaded:", file);
            })
      } satisfies FileRouter;

;

export type OurFileRouter = typeof ourFileRouter;
