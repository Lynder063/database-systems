"use client";
import Link from "next/link";
import Navbar from "./(components)/navbar";
import "highlight.js/styles/atom-one-dark.css";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar />
      <main className="flex-1 text-black">
        <section id="pravni" className="py-12 md:py-24">
          <div className="bg-red-800 text-red-200 container grid items-center gap-2 px-10 mx-auto md:px-6 lg:grid-cols-1 lg:gap-1 rounded-xl p-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
                Právní upozornění
              </h2>
              <p className="md:text-xl lg:text-base xl:text-xl text-center">
                Obsah na této webové stránce je poskytován výhradně pro
                edukativní účely. Informace zde uvedené nemusí nutně odrážet
                skutečnou realitu a mohou obsahovat vymyšlené nebo smyšlené
                prvky. Jakákoli podobnost s reálnými osobami, událostmi nebo
                místy je čistě náhodná. Autor a provozovatel této stránky
                nepřebírá žádnou zodpovědnost za správnost, úplnost ani
                aktuálnost informací uvedených na této stránce. Jakékoliv kroky
                podniknuté na základě informací z této stránky jsou výhradně na
                vlastní riziko návštěvníka. Doporučujeme si před podniknutím
                jakéhokoliv kroku ověřit informace z důvěryhodných zdrojů.
                Použitím této stránky berete na vědomí a souhlasíte s těmito
                podmínkami.
              </p>
            </div>
          </div>
        </section>

        <section id="zadani" className="py-12 md:py-12">
          <div className="container grid items-center bg-slate-50 p-12 rounded-lg justify-center gap-6 px-4 mx-auto md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Příklady
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Podívejte se na naše příklady a ukázky z oblasti databázových
                systémů.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/priklady"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium hover:text-white hover:font-semibold shadow text-black hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Zobrazit příklady
              </Link>
            </div>
          </div>
        </section>
        <section id="teorie" className="py-12 md:py-12">
          <div className="container grid items-center bg-slate-50 p-12 rounded-lg justify-center gap-6 px-4 mx-auto md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Výsledky
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Projdi si výsledky k materiálům.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/vysledky"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium hover:text-white hover:font-semibold shadow text-black hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Zobrazit výsledky
              </Link>
            </div>
          </div>
        </section>
        <section id="teorie" className="py-12 md:py-12">
          <div className="container grid items-center bg-slate-50 p-12 rounded-lg justify-center gap-6 px-4 mx-auto md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Teorie
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Prostudujte si teoretické materiály a informace k předmětu
                Databázové systémy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/teorie"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium hover:text-white hover:font-semibold shadow text-black hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Zobrazit teorii
              </Link>
            </div>
          </div>
        </section>
        <section id="teorie" className="py-12 md:py-12">
          <div className="container grid items-center bg-slate-50 p-12 rounded-lg justify-center gap-6 px-4 mx-auto md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Otázky
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Prostudujte si teoretické otázky k předmětu Databázové systémy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/otazky"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium hover:text-white hover:font-semibold shadow text-black hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Zobrazit otázky
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-10 w-full text-gray-50 bg-gray-400">
        <div className="flex flex-row max-w-7xl mt-6 text-md font-semibold ">
          <p className="text-center">
            Pokud jste našli nějakou chybu, prosím,{" "}
            <Link href="#" className="underline" prefetch={false}>
              otevřete issue na GitHubu
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
