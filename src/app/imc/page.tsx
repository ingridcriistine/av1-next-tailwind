"use client"

import { useState } from "react";

const Imc: React.FC = () => {

    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");

    const [resultado, setResultado] = useState<number | undefined>();
    const [descImc, setDescImc] = useState<string | undefined>();

    const erro = "Valor inválido"

    const handleAll = ({a, b}: {a:string, b:string}) => {
        const peso = parseFloat(a);
        const altura = parseFloat(b);

        if(!isNaN(peso) && (!isNaN(altura))) {
            setResultado(altura !== 0 ? (peso / (altura * altura)) * 10000 : undefined);
        }
        else {
            setResultado(undefined);
        }

        if(!(resultado === undefined) && !(peso === undefined) && !(altura === undefined)) {
          if(resultado < 18.5) {
            setDescImc("Magreza");
          }
          else if(resultado >= 18.5 && resultado < 24.9) {
            setDescImc("Normal");
          }
          else if(resultado >= 24.9 && resultado < 30) {
            setDescImc("Sobrepeso");
          }
          else {
            setDescImc("Obesidade");
          }
        }
    }

    const style = {
        label: "m-3 items-center",
        input: "border-[0.5px] border-black m-3 p-1 rounded sm:w-[250px]",
        div: "flex justify-center items-center",
        div2: "w-54 flex justify-between items-center mb-",
        h2: "flex items-center w-24",
        p: "w-24 text-black p-1",
        button: "opacity-90 hover:opacity-100 text-white bg-blue mt-10 rounded text-[13px] p-1 w-[150px] h-[30px] opacity-90 hover:opacity-100"
    }

    return (
        <div className="bg-black flex flex-col pt-36 items-center h-screen">
            <div className="bg-white w-[70%] rounded h-auto p-14 flex flex-col justify-center items-center sm:w-[50%] shadow-md shadow-slate-100">
                <h1 className="mb-10 font-bold">Cálculo IMC</h1>
                <div className={style.div}>
                    <input type="number" className={style.input} placeholder="Digite seu peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                    <p>kg</p>
                </div>
                <div className={style.div}>
                    <input type="number" className={style.input} placeholder="Digite sua altura" value={altura} onChange={(e) => setAltura(e.target.value)}/>
                    <p>cm</p>
                </div>
                <div>
                    <button className={style.button} onClick={() => handleAll({a: peso, b:altura})}>Calcular</button>
                </div>
                <div className="flex justify-center flex-col mt-12 items-center bg-yellow rounded p-4">
                    <div className={style.div2}>
                        <h2 className={style.h2}>Seu IMC é:</h2>
                        <p className={style.p}>{!isNaN(resultado ?? NaN) ? resultado?.toFixed(2) : erro}</p>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Categoria:</h2>
                        <p className={style.p}>{!isNaN(resultado ?? NaN) ? descImc : "Indefinido"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imc;