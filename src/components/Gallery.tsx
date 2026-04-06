import Image from 'next/image';
import FadeIn from './FadeIn';

const images = [
  { src: '/food-spread.jpg', alt: 'Mr Chips food spread', large: true },
  { src: '/halloumi-fries.jpg', alt: 'Halloumi fries' },
  { src: '/breakfast-smash.jpg', alt: 'Smash burger' },
  { src: '/food-spread-2.webp', alt: 'Food spread', wide: true },
  { src: '/loaded-fries.jpg', alt: 'Loaded fries' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#FFF8E7]">
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn className="mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C0392B] mb-3">
            Straight From The Stall
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wider mb-4">
            Gallery
          </h2>
          <p className="text-gray-400">The food speaks for itself.</p>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Large item — spans 2 rows */}
            <div className="img-zoom row-span-2 rounded-2xl overflow-hidden bg-[#F5EDD0] relative min-h-[400px]">
              <Image
                src="/food-spread.jpg"
                alt="Mr Chips food spread"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Regular item */}
            <div className="img-zoom rounded-2xl overflow-hidden bg-[#F5EDD0] relative aspect-square">
              <Image
                src="/halloumi-fries.jpg"
                alt="Halloumi fries"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Regular item */}
            <div className="img-zoom rounded-2xl overflow-hidden bg-[#F5EDD0] relative aspect-square">
              <Image
                src="/breakfast-smash.jpg"
                alt="Smash burger"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Wide item — spans 2 cols */}
            <div className="img-zoom col-span-2 rounded-2xl overflow-hidden bg-[#F5EDD0] relative aspect-[16/9]">
              <Image
                src="/food-spread-2.webp"
                alt="Food spread"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                loading="lazy"
              />
            </div>

            {/* Potato skewer */}
            <div className="img-zoom rounded-2xl overflow-hidden bg-[#F5EDD0] relative aspect-square">
              <Image
                src="/images/insta-photo-1.png"
                alt="Mr Chips potato skewer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
