const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function fetchProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
