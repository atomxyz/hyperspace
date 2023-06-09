import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
  background,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
  background: string;
}) {
  // const session = useSession();
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      {/* <SignInModal /> */}
      <div className="fixed w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={`fixed top-0 w-full bg-[#fdf8f4] ${
          scrolled
            ? "bg-[#fdf8f4]0 border-b border-gray-200 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/images/logoHyper.png"
              alt="hyper logo"
              width="50"
              height="50"
              className=" rounded-sm"
            />
          </Link>
          {/* <div>
            <AnimatePresence>
              {!session ? (
                <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Sign In
                </motion.button>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div> */}
        </div>
      </div>
      <main
        className={`flex w-full flex-col items-center justify-center py-32 ${background}`}
      >
        {children}
      </main>
      <div className="bg-background absolute w-full border-t border-gray-200 bg-[#fdf8f4] py-5 text-center">
        <p className=" text-gray-500">Atom {new Date().getFullYear()}</p>
      </div>
    </>
  );
}
