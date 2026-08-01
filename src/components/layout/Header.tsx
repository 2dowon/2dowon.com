import Link from "next/link";
import Image from "../common/Image";
import LogoImage from "/public/static/images/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[var(--header-height)] w-full items-center bg-background/80 px-[1rem] backdrop-blur pc:px-[2rem]">
      <Link href="/" className="group flex items-center gap-x-[0.5rem]">
        <Image
          src={LogoImage}
          alt="2dowon blog logo"
          width={300}
          height={300}
          className="h-[2rem] w-[2rem] object-contain transition duration-300 ease-out group-hover:-translate-y-[2px] group-hover:drop-shadow-md group-active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover:transform-none pc:h-[2.25rem] pc:w-[2.25rem]"
        />
        {/* <h1 className="text-xl font-semibold pc:text-2xl">2dowon</h1> */}
      </Link>
    </header>
  );
};

export default Header;
