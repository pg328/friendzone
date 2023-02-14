import { PortableText as PT } from "@portabletext/react";
import sanityComponents from "components/sanityComponents";

interface IPortableText {
  text: any
}

const PortableText = ({ text }: IPortableText) => (
  <PT value={text} components={sanityComponents} />
)

export default PortableText
