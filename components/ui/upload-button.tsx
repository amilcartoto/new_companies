import { UploadButton as UTUploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";

interface UploadButtonProps {
  endpoint: keyof OurFileRouter;
  onUploadComplete?: (url: string) => void;
  onUploadError?: (error: Error) => void;
}

export function UploadButton({
  endpoint,
  onUploadComplete,
  onUploadError
}: UploadButtonProps) {
  return (
    <UTUploadButton<OurFileRouter, typeof endpoint>
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url && onUploadComplete) {
          onUploadComplete(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        console.error("Error uploading file:", error);
        onUploadError?.(error);
      }}
      appearance={{
        button: "bg-primary text-primary-foreground hover:bg-primary/90",
        allowedContent: "text-muted-foreground text-xs",
      }}
    />
  );
} 