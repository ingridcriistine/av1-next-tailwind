import Image from "next/image";
import { Card } from "@/components/card";

import imgReact from "../../assets/react.png";
import imgTailwind from "../../assets/tailwind.jpg";
import imgNext from "../../assets/next.png";
import imgJQuery from "../../assets/jquery.png";

const dados: {title: string; text: string; section: string}[] = [
  {
    title: "React",
    text: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    section: "#react"
  },
  {
    title: "Tailwind",
    text: "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que ela não fornece uma série de classes predefinidas para elementos.",
    section: "#tailwind"
  },
  {
    title: "Next",
    text: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite várias funcionalidades.",
    section: "#next"
  },
  {
    title: "JQuery",
    text: "jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML.",
    section: "#jquery"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 justify-center bg-black">
      <h1 className="font-bold pt-16 text-white text-[20px]">CSS Responsive Flexbox Cards</h1>
      <section id="cards">
        <div className="flex flex-wrap justify-center items-center">
          {dados.map((post, index) => (
            <a href={post.section}>
              <Card key={index} title={post.title} text={post.text}/>
            </a>
          ))}
        </div>
      </section>
      <section id="react" className="flex flex-wrap items-center w-100 p-10 justify-center bg-white lg:p-36">
          <Image className="rounded lg:w-[400px]" src={imgReact} width={250} height={250} alt="img"/>
          <div className="flex flex-col justify-center items-center text-center gap-10 lg:w-[60%] lg:p-4">
            <h2 className="text-[18px] font-bold mt-10">React</h2>
            <p>O React é uma poderosa biblioteca para construção de interfaces visuais em JavaScript. Ou seja, é uma ferramenta ideal para o desenvolvimento front-end. No React, você pode adotar estruturas do HTML e do JavaScript em um só código, a fim de manipular os aspectos da apresentação de um site.</p>
          </div>
      </section>
      <section id="tailwind" className="flex flex-wrap items-center w-100 p-10 justify-center lg:p-36">
          <Image className="rounded lg:w-[400px]" src={imgTailwind} width={250} height={250} alt="img"/>
          <div className="flex flex-col justify-center items-center text-center gap-10 lg:w-[60%] lg:p-4">
            <h2 className="text-[18px] text-white font-bold mt-10">Tailwind</h2>
            <p className="text-white">Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.</p>
          </div>
      </section>
      <section id="next" className="flex flex-wrap items-center w-100 p-10 justify-center bg-white lg:p-36">
          <Image className="rounded lg:w-[400px]" src={imgNext} width={250} height={250} alt="img"/>
          <div className="flex flex-col justify-center items-center text-center gap-10 lg:w-[60%] lg:p-4">
            <h2 className="text-[18px] font-bold mt-10">Next</h2>
            <p>Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.</p>
          </div>
      </section>
      <section id="jquery" className="flex flex-wrap items-center w-100 p-10 justify-center lg:p-36">
          <Image className="rounded lg:w-[400px]" src={imgJQuery} width={250} height={250} alt="img"/>
          <div className="flex flex-col justify-center items-center text-center gap-10 lg:w-[60%] lg:p-4">
            <h2 className="text-[18px] text-white font-bold mt-10">jQuery</h2>
            <p className="text-white">jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.</p>
          </div>
      </section>
    </div>
  );
}
