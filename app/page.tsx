import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-screen text-center text-3xl flex justify-center items-center">
      <main className="space-y-4">
        <h1>Badal 🌧️</h1>
        <Button>rain</Button>
      </main>
    </section>
  );
}
