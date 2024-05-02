import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] bg-white flex flex-col justify-center items-center">
      <Image
        src="/chatgptlogo.png"
        height={50}
        width={50}
        alt="chat GPT logo"
      />
      <div className=" text-black text-center m-5">
        <h1 className="mb-3 text-[20px]"> Welcome to ChatGPT</h1>
        <p className="text-[20px]">
          {" "}
          Log in with your Open AI account to continue
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/auth/login">
          <button className="btn bg-green-500 text-white border-white">
            Login
          </button>
        </Link>
        <Link href="/auth/signup">
          <button className="btn bg-green-500 text-white border-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
