
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  isNew: boolean;
  isFeatured: boolean;
  availableColors: string[];
  availableSizes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Fit Crew Neck',
    price: 29.99,
    description:
      'A timeless crew neck t-shirt with a relaxed fit, crafted from premium cotton for everyday comfort.',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    category: 'Men',
    isNew: true,
    isFeatured: true,
    availableColors: ['#000000', '#FFFFFF', '#C0C0C0'],
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Urban Graphic Tee',
    price: 34.99,
    description:
      'Express your urban style with this contemporary graphic tee featuring modern design elements.',
    imageUrl:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Men',
    isNew: false,
    isFeatured: true,
    availableColors: ['#000000', '#2E2E2E', '#FFFFFF'],
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    name: 'Minimalist V-Neck',
    price: 27.99,
    description:
      'A sleek v-neck option that offers a flattering silhouette with minimalist design.',
    imageUrl:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    category: 'Women',
    isNew: false,
    isFeatured: true,
    availableColors: ['#FFFFFF', '#000000', '#F5F5DC'],
    availableSizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 4,
    name: 'Essential Scoop Neck',
    price: 25.99,
    description:
      'A versatile scoop neck t-shirt that combines elegance with casual comfort.',
    imageUrl:
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Women',
    isNew: true,
    isFeatured: true,
    availableColors: ['#FFC0CB', '#000000', '#FFFFFF'],
    availableSizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 5,
    name: 'Relaxed Fit Pocket Tee',
    price: 32.99,
    description:
      'A casual pocket t-shirt with a relaxed fit, perfect for your weekend adventures.',
    imageUrl:
      'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Men',
    isNew: false,
    isFeatured: false,
    availableColors: ['#A52A2A', '#000000', '#FFFFFF'],
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 6,
    name: 'Stripe Pattern Crew',
    price: 36.99,
    description:
      'Add some pattern to your wardrobe with this comfortable striped crew neck t-shirt.',
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2024/6/428504111/IQ/YO/LP/17988471/unisex-oversized-t-shirt.jpeg',
    category: 'Unisex',
    isNew: true,
    isFeatured: false,
    availableColors: ['#000000', '#FFFFFF'],
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    name: 'Long Line Curved Hem',
    price: 39.99,
    description:
      'A modern longline t-shirt with curved hem for a contemporary urban look.',
    imageUrl:
      'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Men',
    isNew: false,
    isFeatured: false,
    availableColors: ['#000000', '#808080', '#FFFFFF'],
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    name: 'Boyfriend Fit Tee',
    price: 31.99,
    description:
      'A relaxed boyfriend fit t-shirt with dropped shoulders for effortless style.',
    imageUrl:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Women',
    isNew: true,
    isFeatured: false,
    availableColors: ['#FFFFFF', '#000000', '#808080'],
    availableSizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 9,
    name: 'Stripe Pattern Crew',
    price: 45.99,
    description:
      'Add some pattern to your wardrobe with this comfortable striped crew neck t-shirt.',
    imageUrl:
      'https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20231/6579209/v1/l_20231-s3i826z8-flg-88-66-93-182_a.jpg',
    category: 'Unisex',
    isNew: true,
    isFeatured: false,
    availableColors: ['#000000', '#FFFFFF'],
    availableSizes: ['S', 'M', 'L', 'XL','XXL'],
  },
];
