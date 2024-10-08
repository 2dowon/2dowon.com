import Link from "next/link";
import Title from "./_components/common/Title";

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <div>
        <Title>2dowon</Title>
        <div>
          <p>Frontend Developer</p>
          <p>깊이 파기 위해 넓게 삽질하고 있습니다.</p>
        </div>
        <Link
          href="https://sneaky-dewberry-efa.notion.site/Dowon-Lee-5d8a2bc7a6234b63ad24abfd895ee4e9?pvs=74"
          className="text-base text-zinc-500"
        >
          More about me →
        </Link>
        <div className="mt-[2rem] text-zinc-600 text-sm">
          2023년도 이전 글은
          <Link href="https://2dowon-log.netlify.app/" className="underline">
            {" "}
            이전 블로그
          </Link>
          에서 확인할 수 있습니다!
        </div>
      </div>

      {/* <div className="mt-[5rem]">
        <p className="text-lg font-bold">Recent Posts ✨</p>
      </div> */}
    </section>
  );
}
