const Stripe=({obj})=>{
    const {url,num}=obj;
    return(
        <div className="text-white w-[16.66%] px-3 py-3 border-b-[1.2px] border-t-[1.2px] border-l-[1.2px] border-r-[1.2px] border-zinc-500 flex justify-between items-center">
        <img src={url} alt="" className="w-15" />
        <span className="font-semibold">{num}</span>
        </div>
    );
}
export default Stripe;