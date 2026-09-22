export default function GuideVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[2.2rem] border-4 border-brand-navy-soft bg-brand-navy shadow-2xl">
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        className="block aspect-[9/16] w-full bg-black object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
