import { profileImageLink } from "@/utils/const/url.const";
import Link from "next/link";
import Image from "../common/Image";

const Header = () => {
  return (
    <header className="w-full p-[1rem] pc:p-[2rem] pc:pb-[1rem]">
      <Link href="/" className="flex items-center gap-x-[0.5rem]">
        <Image
          src={profileImageLink}
          alt="profile"
          width={300}
          height={300}
          className="h-[3rem] w-[3rem] rounded-full object-contain"
        />
        <h1 className="text-2xl font-semibold">2dowon' log</h1>
      </Link>
    </header>
  );
};

export default Header;
