"use client";
import Image from "next/image";

export default function Gallery({
  images,
  ratio = "4/3",
}: {
  images: { src: string; alt: string }[];
  ratio?: `${number}/${number}`;
}) {
  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative overflow-hidden rounded-lg"
          style={{ aspectRatio: ratio }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 320px"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}