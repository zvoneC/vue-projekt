import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://dummyjson.com',
})

export interface Product {
  id?: number
  title: string
  description?: string
  price?: number
  category?: string
  brand?: string
}

export async function fetchProducts(params: { q?: string; limit?: number; skip?: number; category?: string }) {
  const { q, limit = 10, skip = 0, category } = params
  const url = category ? `/products/category/${encodeURIComponent(category)}` : '/products/search'
  const { data } = await api.get(url, { params: { q: q || '', limit, skip } })
  return data // { products, total, skip, limit }
}

export async function fetchCategories() {
  const { data } = await api.get('/products/categories')
  return data
}

export async function createProduct(payload: Product) {
  const { data } = await api.post('/products/add', payload)
  return data
}

export async function updateProduct(id: number, payload: Product) {
  const { data } = await api.put(`/products/${id}`, payload)
  return data
}

export async function deleteProduct(id: number) {
  const { data } = await api.delete(`/products/${id}`)
  return data
}