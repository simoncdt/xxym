import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import img1 from "@/assets/gallery/aminata.jpg";
import img2 from "@/assets/gallery/barbara.jpg";
import img3 from "@/assets/gallery/gallery1.png";
import img4 from "@/assets/gallery/gallery2.png";
import img5 from "@/assets/gallery/gallery3.png";
import img6 from "@/assets/gallery/gallery4.png";
import img7 from "@/assets/gallery/gallery5.png";
import img8 from "@/assets/gallery/gallery6.png";
import img9 from "@/assets/gallery/gallery8.jpg";

const photos = [
  { src: img1, alt: "Aminata Semega" },
  { src: img2, alt: "Barbara Alcius" },
  { src: img3, alt: "XOYAM Atelier 1" },
  { src: img4, alt: "XOYAM Atelier 2" },
  { src: img5, alt: "XOYAM Atelier 3" },
  { src: img6, alt: "XOYAM Atelier 4" },
  { src: img7, alt: "XOYAM Atelier 5" },
  { src: img8, alt: "XOYAM Atelier 6" },
  { src: img9, alt: "Portrait — XOYAM" },
];

export function PhotoGallery() {
  return (
    <section className="container-x mt-20 sm:mt-28 pb-8">
      <div className="mb-8 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-[color:var(--magenta)]" />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
          Galerie · Communauté XOYAM
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {photos.map((p, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer overflow-hidden rounded-2xl bg-secondary aspect-[3/4]">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    Voir
                  </span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
              <div className="w-full flex items-center justify-center">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="max-h-[90vh] max-w-full rounded-lg object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}


