import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Conheça as Naves do Universo de Star Wars</h1>

      <p>Projeto desenvolvido no exercicio 03 do modulo next oneBitiCode </p>

      

      <p>
        <Link className="btn" href={"/spaceships"}>Ver Todas</Link>
      </p>
    </main>
  );
}