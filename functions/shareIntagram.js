import Link from "next/link";
import Image from "next/image";
import ig from "../assets/img/blog/icon/instagram.png";
const shareIntagram = ({ caption, imageUrl }) => {
  const encodedCaption = encodeURIComponent(caption);
  const encodedImageUrl = encodeURIComponent(imageUrl);
  const shareUrl = `https://www.instagram.com/create/captioned/?caption=${encodedCaption}&media_url=${encodedImageUrl}`;

  return (
    <Link href={shareUrl} target="_blank" rel="noreferrer">
      <Image src={ig} alt="" width={27} height={27} />
    </Link>
  );
};

export default shareIntagram;
