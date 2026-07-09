export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  colors: ProductColor[];
  tag?: "New" | "Best Seller";
}

const swatch = {
  Blush: "#f0afc0",
  Berry: "#ce3a68",
  Cream: "#e9d8c8",
  Cocoa: "#5c3340",
} as const;

function color(name: keyof typeof swatch, productId: string): ProductColor {
  return {
    name,
    hex: swatch[name],
    image: `/products/${productId}-${name.toLowerCase()}.svg`,
  };
}

export const products: Product[] = [
  {
    id: "cherry-baby-tee",
    name: "Cherry Baby Tee",
    tag: "Best Seller",
    colors: [
      color("Blush", "cherry-baby-tee"),
      color("Cream", "cherry-baby-tee"),
      color("Berry", "cherry-baby-tee"),
    ],
  },
  {
    id: "blush-pleated-skirt",
    name: "Blush Pleated Skirt",
    tag: "New",
    colors: [
      color("Blush", "blush-pleated-skirt"),
      color("Cream", "blush-pleated-skirt"),
    ],
  },
  {
    id: "sweetheart-cardigan",
    name: "Sweetheart Knit Cardigan",
    colors: [
      color("Berry", "sweetheart-cardigan"),
      color("Cream", "sweetheart-cardigan"),
      color("Cocoa", "sweetheart-cardigan"),
    ],
  },
  {
    id: "sunday-linen-dress",
    name: "Sunday Linen Dress",
    tag: "New",
    colors: [
      color("Cream", "sunday-linen-dress"),
      color("Blush", "sunday-linen-dress"),
    ],
  },
  {
    id: "ribbon-crop-top",
    name: "Ribbon Crop Top",
    colors: [
      color("Berry", "ribbon-crop-top"),
      color("Blush", "ribbon-crop-top"),
    ],
  },
  {
    id: "picnic-gingham-blouse",
    name: "Picnic Gingham Blouse",
    tag: "Best Seller",
    colors: [
      color("Blush", "picnic-gingham-blouse"),
      color("Cream", "picnic-gingham-blouse"),
      color("Berry", "picnic-gingham-blouse"),
    ],
  },
];
