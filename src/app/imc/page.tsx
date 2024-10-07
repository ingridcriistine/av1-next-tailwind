"use client"

import { useState } from "react";

const Imc: React.FC = () => {

    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");

    const [resultado, setResultado] = useState<number | undefined>();

    const erro = "Digite direito por favor"

    const handleAll = ({a, b}: {a:string, b:string}) => {
        const n1= parseFloat(a);
        const n2= parseFloat(b);

        if(!isNaN(n1) && (!isNaN(n2))) {
            setResultado(n2 !== 0 ? n1/n2: undefined);
        }
        else {
            setResultado(undefined);
        }
    }

    const style = {
        label: "m-3 items-center",
        input: "border-[0.5px] border-black m-3 p-1 rounded",
        div: "flex justify-center",
        div2: "w-48 flex justify-between items-center mb-2",
        h2: "flex items-center w-40",
        p: "w-15 text-black",
        button: "text-white bg-cyan-700 mt-10 rounded text-[13px] p-1 w-[100px] h-[30px] opacity-90 hover:opacity-100"
    }

    return (
        <div className="bg-black flex flex-col pt-52 items-center h-screen">
            <div className="bg-white w-[600px] rounded h-auto p-14 flex flex-col justify-center items-center">
                <h1 className="mb-10 font-bold">Cálculo IMC</h1>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Digite seu peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Digite sua altura" value={altura} onChange={(e) => setAltura(e.target.value)}/>
                </div>
                <div>
                    <button className={style.button} onClick={() => handleAll({a: peso, b:altura})}>Calcular</button>
                </div>
                <div className="flex justify-center flex-col mt-12 items-center ">
                    <div className={style.div2}>
                        <h2 className={style.h2}>Seu IMC é:</h2>
                        <p className={style.p}>{!isNaN(resultado ?? NaN) ? resultado : erro}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imc;