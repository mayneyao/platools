import Link from "next/link";
import Image from "next/image";

const Brand = () => (
  <Link href="/">
    <Image src="/plato.svg" width={120} height={50} alt="Plato logo" />
  </Link>
);
export default Brand;
