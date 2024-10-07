"use client"

import { useState } from "react";

const Imc: React.FC = () => {

    const [n1, setN1] = useState<string>("");
    const [n2, setN2] = useState<string>("");
    const [n3, setN3] = useState<string>("");
    const [n4, setN4] = useState<string>("");
    const [n5, setN5] = useState<string>("");

    const [resultado, setResultado] = useState<number | undefined>();
    const [status, setStatus] = useState<string | undefined>("");

    const erro = "Valor inválido"

    const handleAll = ({a, b, c, d, e}: {a:string, b:string, c:string, d:string, e:string}) => {
        const nota1 = parseFloat(a);
        const nota2 = parseFloat(b);
        const nota3 = parseFloat(c);
        const nota4 = parseFloat(d);
        const nota5 = parseFloat(e);

        if(!isNaN(nota1) && (!isNaN(nota2)) && (!isNaN(nota3)) && (!isNaN(nota4)) && (!isNaN(nota5))) {
            setResultado((nota1 + nota2 + nota3 + nota4 + nota5) / 5);

            if(!(resultado === undefined)) {
                if(resultado >= 7.0) {
                  setStatus("PASSOU");
                }
                else {
                  setStatus("NÃO PASSOU");
                }
            }
        }
        else {
            setResultado(undefined);
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
        <div className="bg-black flex flex-col pt-24 items-center h-screen">
            <div className="bg-lightYellow w-[70%] rounded h-auto p-14 flex flex-col justify-center items-center sm:w-[50%] shadow-md shadow-slate-100">
                <h1 className="mb-10 font-bold">Cálculo de média</h1>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Nota 1" value={n1} onChange={(e) => setN1(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Nota 2" value={n2} onChange={(e) => setN2(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Nota 3" value={n3} onChange={(e) => setN3(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Nota 4" value={n4} onChange={(e) => setN4(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Nota 5" value={n5} onChange={(e) => setN5(e.target.value)}/>
                </div>
                <div>
                    <button className={style.button} onClick={() => handleAll({a: n1, b:n2, c:n3, d:n4, e:n5})}>Calcular</button>
                </div>
                <div className="flex justify-center flex-col mt-12 items-center bg-yellow rounded p-4">
                    <div className={style.div2}>
                        <h2 className={style.h2}>Média:</h2>
                        <p className={style.p}>{!isNaN(resultado ?? NaN) ? resultado?.toFixed(2) : erro}</p>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Status:</h2>
                        <p className={style.p}>{!isNaN(resultado ?? NaN) ? status : "Indefinido"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imc;