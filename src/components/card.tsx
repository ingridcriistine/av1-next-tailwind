interface CardProps {
    title: string,
    text: string
}

export const Card: React.FC<CardProps> = ({title, text}) => {
    return(
        <div className="flex flex-col border m-10 items-center w-60 h-[350px] bg-white align-center shadow-md shadow-slate-100">
            <div className="bg-gradient-to-r from-yellow via-darkYellow to-yellow w-[100%] h-[100px] flex items-center justify-center font-bold text-white text-[18px]">
                <h2>{title}</h2>
            </div>
            <p className="p-4 text-center text-[15px] mt-4 mb-4 h-[160px]">{text}</p>
            <button className="bg-gradient-to-r from-yellow via-darkYellow to-yellow p-1 w-[85%] flex justify-center items-center text-white">Read more</button>       
        </div>
    )
}