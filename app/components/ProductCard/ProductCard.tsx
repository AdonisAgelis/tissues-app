import AddToCart from "../AddToCart";

export default function ProductCard() {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
      <AddToCart />
    </div>
  );
}
