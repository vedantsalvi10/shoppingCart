import Products from "./components/Products";
export default function Home() {
  return (
      <div className="w-[100%] h-screen bg-[#C9A0DC]/70 flex justify-center items-center">
        <div className="w-[1000px] h-[95%] bg-white/30 rounded-xl flex flex-col items-center p-3">
          <h1 className="text-3xl text-white mb-4">Shopping Cart</h1>
          <div className="overlay-y-scroll h-[70%] flex flex-col items-center gap-3">
          <Products />
          </div>
          <div className="w-[90%] h-[10%] p-3 flex items-center justify-between rounded-xl bg-white">
              <p className="text-2xl text-[#C9A0DC] font-bold">
                Total
              </p>
              <p className="text-2xl text-[#C9A0DC] font-bold">
                &#8377;4997
              </p>
          </div> 
        </div>
      </div>
  );
}