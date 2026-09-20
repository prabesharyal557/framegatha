export const initialProducts = [
 {id:'wood',name:'The Classic Wood Frame',category:'Photo frames',price:1200,detail:'8 × 10 in · Natural wood finish',image:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&auto=format&fit=crop',style:'wood'},
 {id:'canvas',name:'Your Story on Canvas',category:'Canvas prints',price:2200,detail:'12 × 16 in · Gallery-wrapped canvas',image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop',style:'canvas'},
 {id:'stone',name:'A Memory Set in Stone',category:'Stone & glass',price:1500,detail:'6 × 8 in · Printed photo slate',image:'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop',style:'stone'},
 {id:'glass',name:'The Glass Keepsake',category:'Stone & glass',price:1800,detail:'6 × 8 in · Glass photo print',image:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&auto=format&fit=crop',style:'glass'},
 {id:'cup',name:'Your Everyday Photo Mug',category:'Personalized gifts',price:650,detail:'325 ml · White ceramic mug',image:'',style:'mug'},
 {id:'shirt',name:'Wear Your Own Story',category:'Personalized gifts',price:950,detail:'Custom printed T-shirt · Size confirmed by phone',image:'',style:'shirt'}
];
export type Product=typeof initialProducts[number];

// Existing catalog records with no uploaded image use these studio mockups.
export const giftProductImages:Record<string,string>={cup:'/products/printed-mug.png',shirt:'/products/printed-tshirt.png'};
