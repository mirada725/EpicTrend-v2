export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "mobilephones", label: "Mobile Phones" },
      { id: "tablets", label: "Tablets" },
      { id: "earphones", label: "Earphones/Headphones" },
      { id: "homepods", label: "Homepods" },
      { id: "other", label: "Other" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "apple", label: "Apple" },
      { id: "nokia", label: "Nokia" },
      { id: "samsung", label: "Samsung" },
      { id: "googlePixel", label: "GooglePixel" },
      { id: "redmi", label: "Redmi" },
      { id: "beats", label: "Beats" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "mobilephones",
    label: "Mobile Phones",
    path: "/shop/listing",
  },
  {
    id: "tablets",
    label: "Tablets",
    path: "/shop/listing",
  },
  {
    id: "earphones",
    label: "Earphones/Headphones",
    path: "/shop/listing",
  },
  {
    id: "homepods",
    label: "Homepods",
    path: "/shop/listing",
  },
  {
    id: "other accessories",
    label: "Other Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  mobilephones: "Mobile Phones",
  tablets: "Tablets",
  earphones: "Earphones/Headphones",
  homepods: "Homepods",
  other: "Other",
};

export const brandOptionsMap = {
  apple: "Apple",
  nokia: "Nokia",
  samsung: "Samsung",
  googlePixel: "GooglePixel",
  redmi: "Redmi",
  beats: "Beats",
};

export const filterOptions = {
  category: [
    { id: "mobilephones", label: "Mobile Phones" },
      { id: "tablets", label: "Tablets" },
      { id: "earphones", label: "Earphones/Headphones" },
      { id: "homepods", label: "Homepods" },
      { id: "other", label: "Other" },
  ],
  brand: [
    { id: "apple", label: "Apple" },
      { id: "nokia", label: "Nokia" },
      { id: "samsung", label: "Samsung" },
      { id: "googlePixel", label: "GooglePixel" },
      { id: "redmi", label: "Redmi" },
      { id: "beats", label: "Beats" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
