export default function CircleButton({children, onClick}){
    
    return <button  onClick={(e) => onClick(e)} className="py-2 px-2 cursor-pointer rounded-full bg-orange-400 outline-none border-none hover:bg-orange-300">{children}</button>
}