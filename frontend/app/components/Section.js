import Image from 'next/image';

export default function Section({ id, title, body, imageSrc, alt, reverse = false }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              {title}
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              {typeof body === 'string' ? (
                <p>{body}</p>
              ) : (
                body
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={alt || title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 