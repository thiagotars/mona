import imageUrlBuilder from "@sanity/image-url";
import client from "../../Backend_sanity/sanityClient"; // Adjust path as necessary

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).url(); // Ensure .url() is called to get the image URL as a string
}
