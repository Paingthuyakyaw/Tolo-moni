import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-[80vh] flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-3">
        <h4 className=" text-3xl">Welcome to my chatbox</h4>
        <Link
          href={"/chat"}
          className=" text-center py-2 rounded-md  bg-chatPrimary text-white w-[200px] "
        >
          Go to chat
        </Link>
      </div>
    </div>
  );
}
