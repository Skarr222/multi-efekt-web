import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://multi-efekt.pl/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              height={32}
              src={require("../../public/static/logo.jpg")}
              className="h-8"
              alt="Multi-Efekt logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/p/o-nas" className="hover:underline me-4 md:me-6">
                O nas
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
