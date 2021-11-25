var initialState = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    image:
      "https://tintuc.shopdunk.com/wp-content/uploads/2017/01/iPhone-7-nhai.jpg",
    description: "Sản phẩm do apple sản phẩm",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Iphone 8",
    image:
      "https://image-us.24h.com.vn/upload/2-2019/images/2019-06-11/1560241082-762-2-1560234445-width660height440.jpg",
    description: "Sản phẩm do samsung sản phẩm",
    price: 400,
    inventory: 15,
    rating: 3,
  },
  {
    id: 3,
    name: "Oppo F1s",
    image:
      "http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg",
    description: "Sản phẩm do china sản phẩm",
    price: 450,
    inventory: 5,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
