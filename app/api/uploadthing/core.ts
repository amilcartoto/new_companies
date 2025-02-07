import { createUploadthing, type FileRouter } from "uploadthing/next";

import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = async () => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    return { userId };
};

handleAuth().catch(console.error); 

export const ourFileRouter = {
    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    })
      .middleware(async () => {
        const { userId } = await handleAuth();
        return { userId };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("File URL:", file.url);
        
        return { 
          url: file.url,
          userId: metadata.userId 
        };
      }),

    documentUploader: f({
        pdf: {
            maxFileSize: "8MB",
            maxFileCount: 1
        }
    })
      .middleware(async () => {
        const { userId } = await handleAuth();
        return { userId };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("File URL:", file.url);
        
        return { 
          url: file.url,
          userId: metadata.userId 
        };
      }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
