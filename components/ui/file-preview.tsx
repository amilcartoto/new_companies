interface FilePreviewProps {
  url: string;
  type: 'image' | 'document';
  onRemove?: () => void;
}

export function FilePreview({ url, type, onRemove }: FilePreviewProps) {
  return (
    <div className="relative group">
      {type === 'image' ? (
        <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-border">
          <img
            src={url}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="flex items-center p-3 rounded-lg border border-border">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-2 text-sm truncate max-w-[200px]">
            {url.split('/').pop()}
          </span>
        </div>
      )}
      
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
} 