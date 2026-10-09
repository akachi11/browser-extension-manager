import Header from "@/components/Header";
import FilterTabs from "@/components/FilterTabs";
import ExtensionGrid from "@/components/ExtensionGrid";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-10 md:px-8">
      <Header />
      <main className="mt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Extensions List
          </h2>
          <FilterTabs />
        </div>
        <div className="mt-6">
          <ExtensionGrid />
        </div>
      </main>
    </div>
  );
}
