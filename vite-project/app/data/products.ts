export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  colors: ProductColor[];
  tag?: "New" | "Best Seller";
}

const swatch = {
  Blush: "#f4adc3",
  Berry: "#ec8aa9",
  Cream: "#f6e8cd",
  Cocoa: "#9c7a85",
} as const;

/** Unsplash stock photos used as product fillers until real shots are ready. */
function stock(photoId: string): string {
  return `https://images.unsplash.com/photo-${photoId}?w=900&q=80&auto=format&fit=crop`;
}

function color(name: keyof typeof swatch, photoId: string): ProductColor {
  return {
    name,
    hex: swatch[name],
    image: stock(photoId),
  };
}

export const products: Product[] = [
  {
    id: "cherry-baby-tee",
    name: "Cherry Baby Tee",
    price: "₱249",
    tag: "Best Seller",
    colors: [
      color("Blush", "1521572163474-6864f9cf17ab"),
      color("Cream", "1523381210434-271e8be1f52b"),
      color("Berry", "1567401893414-76b7b1e5a7a5"),
    ],
  },
  {
    id: "blush-pleated-skirt",
    name: "Blush Pleated Skirt",
    price: "₱349",
    tag: "New",
    colors: [
      color("Blush", "1469334031218-e382a71b716b"),
      color("Cream", "1509631179647-0177331693ae"),
    ],
  },
  {
    id: "sweetheart-cardigan",
    name: "Sweetheart Knit Cardigan",
    price: "₱449",
    colors: [
      color("Berry", "1434389677669-e08b4cac3105"),
      color("Cream", "1551488831-00ddcb6c6bd3"),
      color("Cocoa", "1544441893-675973e31985"),
    ],
  },
  {
    id: "sunday-linen-dress",
    name: "Sunday Linen Dress",
    price: "₱499",
    tag: "New",
    colors: [
      color("Cream", "1496747611176-843222e1e57c"),
      color("Blush", "1515372039744-b8f02a3ae446"),
    ],
  },
  {
    id: "ribbon-crop-top",
    name: "Ribbon Crop Top",
    price: "₱229",
    colors: [
      color("Berry", "1485462537746-965f33f7f6a7"),
      color("Blush", "1517841905240-472988babdf9"),
    ],
  },
  {
    id: "picnic-gingham-blouse",
    name: "Picnic Gingham Blouse",
    price: "₱329",
    tag: "Best Seller",
    colors: [
      color("Blush", "1550614000-4895a10e1bfd"),
      color("Cream", "1542295669297-4d352b042bca"),
      color("Berry", "1525507119028-ed4c629a60a3"),
    ],
  },
];
