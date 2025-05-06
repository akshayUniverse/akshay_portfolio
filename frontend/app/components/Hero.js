import Link from 'next/link';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="py-32 px-4 sm:px-8 bg-white flex items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          {subtitle}
        </p>
        <Link 
          href={ctaLink}
          className="inline-block rounded-2xl bg-blue-600 text-white font-semibold py-4 px-8 shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
} 