type ProductSlug = {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
};

export default function ProductDetails({ params, searchParams }: ProductSlug) {
  return (
    <>
      <h1>Products</h1>
      <div>{params.slug}</div>
    </>
  );
}
