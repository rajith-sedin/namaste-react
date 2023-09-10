export const RES_NAMES = [
  {
    resName: "Renuka Foods",
    cusine: "Biriyani - South Indian - Andhra",
    rating: "4.8",
    deliveryTime: "15min",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_h9jnbbU68EkTUiiSi1ETNwCf60_AztCALY5dmyJW-dIrOLbKGuqhbTBUjOVk6_N3-lw&usqp=CAU",
  },
  {
    resName: "KFC",
    cusine: "Fast Food - Chicken - American",
    rating: "4.5",
    deliveryTime: "25min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdcd233971b7c81bf77e1fa4471280eb",
  },
  {
    resName: "Dominos",
    cusine: "Pizza - American",
    rating: "3.1",
    deliveryTime: "45min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hfyi3cfcxqzoncwjgetz",
  },
  {
    resName: "McDonalds",
    cusine: "Burger - Chicken - American",
    rating: "4.8",
    deliveryTime: "20min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/yheal0ldgbdwqw9gz3uu",
  },
];

export const LOGO_URL =
  "https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018";

export const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.957216&lng=80.24188989999999&restaurantId=";

export const ITEM_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const DEFAULT_ITEM_IMG =
  "https://media.istockphoto.com/id/1005990944/vector/dish-icon-vector-icon-simple-element-illustration-dish-symbol-design-can-be-used-for-web-and.jpg?s=170667a&w=0&k=20&c=Y7WtorulQ2rf4if0yUpfdIbj-w6TSdimhpg_cebGivE=";

export const VEG_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcrjJrSsELQXtu0dpkhVzWZcA4D2lEpqvbQ&usqp=CAU";

export const NONVEG_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU";

// Function to format time in 24-hour format

export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
