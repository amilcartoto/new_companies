import { UploadDropzone as UTUploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";

interface UploadDropzoneProps {
  endpoint: keyof OurFileRouter;
  onUploadComplete?: (url: string) => void;
  onUploadError?: (error: Error) => void;
}

export function UploadDropzone({
  endpoint,
  onUploadComplete,
  onUploadError
}: UploadDropzoneProps) {
  return (
    <UTUploadDropzone<OurFileRouter, typeof endpoint>
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
        label: "text-muted-foreground",
        allowedContent: "text-muted-foreground text-xs",
        container: "border-dashed border-2 border-muted-foreground/25 rounded-lg min-h-[220px]",
      }}
      content={{
        label: "Arrastra archivos aquí o haz clic para seleccionar",
      }}
    />
  );
} 