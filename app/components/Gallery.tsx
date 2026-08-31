import Image from "next/image";

export default function Gallery({
  images,
  ratio = "3/2",
  columns = 3,
}: {
  images: { src: string; alt: string }[];
  ratio?: `${number}/${number}`;
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[columns];

  return (
    <div className={`grid grid-cols-2 gap-4 ${cols}`}>
      {images.map((img) => (
        <div key={img.src} className="hu-frame relative overflow-hidden" style={{ aspectRatio: ratio }}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
