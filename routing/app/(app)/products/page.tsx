import SortProducts from "@/components/sortProducts";
import LocaleSwitcher from "@/components/switchLocale";

export default function Products() {
  return (
    <div>
      <h1>products</h1>
      <SortProducts />
      <LocaleSwitcher />
    </div>
  );
}
