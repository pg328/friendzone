import Image from "next/image";
import SanityClient from "api/src/sanity/sanityClient";
import { useNextSanityImage } from "next-sanity-image";

interface ISanityImageProps {
  asset: any,
  alt: string
  fit?: string,
  priority?: boolean
}

const SanityImage = ({ asset, priority, fit, alt }: ISanityImageProps) => {
  const { src, loader } = useNextSanityImage(SanityClient, asset) as any;

  return <Image src={src} loader={loader} priority={priority} sizes="(max-width: 800px) 100vw, 800px, 400px" alt={alt} fill className={fit ?? "object-contain"} />
};

export default SanityImage
