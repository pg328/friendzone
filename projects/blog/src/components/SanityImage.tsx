import Image from "next/image";
import SanityClient from "api/src/sanity/sanityClient";
import { useNextSanityImage } from "next-sanity-image";

const SanityImage = ({ asset }: any) => {
  const { src, loader } = useNextSanityImage(SanityClient, asset) as any;

  return (
    <div className="relative m-3 h-2/5 w-1/2 overflow-hidden rounded-lg">
      <Image src={src} loader={loader} alt="help" fill className="object-contain" />;
    </div>
  );
};

export default SanityImage
