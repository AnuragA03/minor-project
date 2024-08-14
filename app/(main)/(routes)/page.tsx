import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


const state = true;
export default function Home() {
  return (
    <div className="flex justify-between">
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>


      <ModeToggle />
    </div>
  )
}
