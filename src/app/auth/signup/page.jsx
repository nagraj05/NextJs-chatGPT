import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <div className="h-[100vh] bg-white flex flex-col justify-center items-center">
      <Image
        src="/chatgptlogo.png"
        height={50}
        width={50}
        alt="chat GPT logo"
      />
      <div className=" text-black text-center mt-8">
        <h1 className=" text-[30px] mb-2"> Create an account</h1>
      </div>
      <div className="flex flex-col gap-3 w-[350px]">
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
        />

        <Link href="/auth/login">
          <button className="btn bg-green-500 text-white border-white w-full">
            Continue
          </button>
        </Link>
      </div>
      <div className="mt-2">
        <p className="text-black text-sm">Don&apos;t have an account? <span className="text-green-500">Sign up</span></p>
      </div>
      {/* <div>
        <p>Or</p>
        <div>Next auth</div>
      </div> */}
    </div>
  );
}
