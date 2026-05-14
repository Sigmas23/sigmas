import Image from "next/image";
import Logo from "./components/Logo/Logo";
import Loading from "./components/Loading/Loading";

export default function Home() {
  return (
    <div className="">
      <main className="">
          <Logo />

          <Loading />

      </main>
    </div>
  );
}
