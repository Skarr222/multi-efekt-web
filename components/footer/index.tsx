import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 w-full">
      <div className="max-w-screen-xl mx-auto p-4 md:py-6">
        <div className="flex flex-wrap items-center justify-between">
          <a
            href="https://multi-efekt.pl/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              height={32}
              src={require("../../public/static/logo.png")}
              className="h-8"
              alt="Multi-Efekt logo"
            />
          </a>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-700 dark:text-gray-400">
            <li>
              <Link
                href="/p/o-nas"
                className="hover:underline px-4 py-2 md:px-6"
              >
                O nas
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline px-4 py-2 md:px-6">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline px-4 py-2 md:px-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline px-4 py-2 md:px-6">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
