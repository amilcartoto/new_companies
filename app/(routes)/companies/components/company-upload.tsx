import { useState, useCallback } from "react";
import { UploadButton } from "@/components/ui/upload-button";
import { UploadDropzone } from "@/components/ui/upload-dropzone";
import { FilePreview } from "@/components/ui/file-preview";
import { formatFileSize, MAX_FILE_SIZE } from "@/lib/utils/file-validation";

export function CompanyUpload() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [documentUrl, setDocumentUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleError = useCallback((error: Error) => {
    console.error("Error uploading file:", error);
    setError(error.message);
    setTimeout(() => setError(""), 3000);
  }, []);

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-destructive/15 text-destructive px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div>
        <h3 className="text-lg font-medium">Logo de la empresa</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Sube el logo de tu empresa en formato PNG o JPG (máx. {formatFileSize(MAX_FILE_SIZE.image)})
        </p>
        <div className="flex items-center gap-4">
          <UploadButton
            endpoint="imageUploader"
            onUploadComplete={(url) => {
              setImageUrl(url);
              setError("");
            }}
            onUploadError={handleError}
          />
          {imageUrl && (
            <FilePreview
              url={imageUrl}
              type="image"
              onRemove={() => setImageUrl("")}
            />
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium">Documentos</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Arrastra o selecciona documentos PDF (máx. {formatFileSize(MAX_FILE_SIZE.document)})
        </p>
        <UploadDropzone
          endpoint="documentUploader"
          onUploadComplete={(url) => {
            setDocumentUrl(url);
            setError("");
          }}
          onUploadError={handleError}
        />
        {documentUrl && (
          <div className="mt-4">
            <FilePreview
              url={documentUrl}
              type="document"
              onRemove={() => setDocumentUrl("")}
            />
          </div>
        )}
      </div>
    </div>
  );
} 