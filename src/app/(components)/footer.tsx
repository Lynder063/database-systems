import Link from "next/link";

export default function Footbar() {
  return (
    <footer className="bg-muted p-6 md:py-10 w-full text-gray-50 bg-gray-400">
      <div className="flex flex-row max-w-7xl mt-6 text-md font-semibold ">
        <p className="text-center">
          Pokud jste našli nějakou chybu, prosím,{" "}
          <Link
            href="https://github.com/Lynder063/database-systems/issues"
            className="underline"
            prefetch={false}
          >
            otevřete issue na GitHubu
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
