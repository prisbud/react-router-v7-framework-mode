// import { useLoaderData } from "react-router-dom";

// export async function productsLoader() {
//   const response = await fetch("https://dummyjson.com/products");
//   return response.json();
// }

// export default function Products() {
//   const data = useLoaderData();

//   return (
//     <div>
//       <h2>Products (Framework)</h2>
//       {data.products.map((p) => (
//         <div key={p.id}>{p.title}</div>
//       ))}
//     </div>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../helper/queryClient";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export async function productsLoader() {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return null;
}

export default function Products() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div>
      <h2>Products (Framework + TanStack)</h2>
      {data.products.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
