"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  type: "bus" | "truck";
}

const galleryImages: GalleryImage[] = [
  // Bus Images
  {
    id: 1,
    src: "https://images.pexels.com/photos/31952894/pexels-photo-31952894.png",
    alt: "Kannu Transport luxury bus with scenic mountain backdrop",
    type: "bus",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/31952936/pexels-photo-31952936.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern Kannu Transport bus with distinctive red and white design",
    type: "bus",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/31952904/pexels-photo-31952904.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Kannu Transport bus in urban setting",
    type: "bus",
  },
  // Truck Images
  {
    id: 4,
    src: "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Commercial cargo truck on highway",
    type: "truck",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Logistics truck fleet",
    type: "truck",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2827308/pexels-photo-2827308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Truck driver in cabin",
    type: "truck",
  },
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [open, setOpen] = useState(false);

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="bus">Bus Fleet</TabsTrigger>
            <TabsTrigger value="truck">Truck Fleet</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openImage(image)}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bus" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages
              .filter((image) => image.type === "bus")
              .map((image) => (
                <div
                  key={image.id}
                  onClick={() => openImage(image)}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="truck" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages
              .filter((image) => image.type === "truck")
              .map((image) => (
                <div
                  key={image.id}
                  onClick={() => openImage(image)}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-0">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover rounded-lg"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    priority
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-lg">
                  <p className="text-white text-sm md:text-base">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGrid;
