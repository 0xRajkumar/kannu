import { Metadata } from "next";
import { galleryMetadata } from "@/components/seo/metadata";
import ImageGrid from "@/components/gallery/image-grid";

export const metadata: Metadata = galleryMetadata;

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our fleet of buses and trucks providing transportation services across India.
            </p>
          </div>

          <ImageGrid />
        </div>
      </section>
    </>
  );
}