type PdfViewerProps = {
  url: string;
  title: string;
  width?: number;
  height?: number;
};
export const PdfViewer = ({
  url,
  title,
  width = 100,
  height = 500,
}: PdfViewerProps) => {
  return (
    <div>
      <iframe
        title={title}
        src={url}
        width={`${width}%`}
        height={`${height}px`}
      />
    </div>
  );
};
