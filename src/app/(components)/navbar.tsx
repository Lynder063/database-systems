import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <DatabaseIcon className="w-6 h-6" />
          <span>Databázové systémy</span>
        </Link>
        <nav className="hidden space-x-4 font-medium md:flex">
          <Link
            href="/priklady"
            className="hover:bg-slate-100 hover:rounded-md hover:p-2 p-2 hover:text-black"
            prefetch={false}
          >
            Příklady
          </Link>
          <Link
            href="/vysledky"
            className="hover:bg-slate-100 hover:rounded-md hover:p-2 p-2 hover:text-black"
            prefetch={false}
          >
            Výsledky
          </Link>
          <Link
            href="/teorie"
            className="hover:bg-slate-100 hover:rounded-md hover:p-2 p-2 hover:text-black"
            prefetch={false}
          >
            Teorie
          </Link>
          <Link
            href="/otazky"
            className="hover:bg-slate-100 hover:rounded-md hover:p-2 p-2 hover:text-black"
            prefetch={false}
          >
            Otázky
          </Link>
        </nav>
      </div>
    </header>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
