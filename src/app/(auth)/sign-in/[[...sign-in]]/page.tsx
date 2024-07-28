import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="py-20">
        <div className=" mx-auto max-w-sm">
            <SignIn />
        </div>
    </div>
    );
}