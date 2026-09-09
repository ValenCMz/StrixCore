export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("http") || src.startsWith("data:")) {
    return src;
  }
  return `/StrixCore${src}`;
}
