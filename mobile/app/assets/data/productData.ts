// Type
interface Product {
  id: string;
  title: string;
  description: string;
  count: number;
  price: string;
  image: {};
  screen: string;
}

const productData = [
  {
    id: "1",
    title: "Claymore",
    description:
      "Strong hold / Natural finish\n\nWhat Is Claymore\nA truly exceptional styling clay that is extra tough and gritty. A strong hold and a natural finish creates a semi-matte texture that leaves hair looking rough and ready.\t\nFormulation\nContains a precise blend of naturally occurring kaolin & bentonite clays that actually absorb excess oils.\t\n\nHow To Use:\nFor maximum texture, work a fingerfull between your palms until soft and apply to blow-dried hair using your fingertips to create a strong separation.\n\nSmells Like\nClean laundry \n\nIngredients:\n Beeswax/Cera Alba/Cire d'abeille, Kaolin Petrolatum, Aqua (water/eau), Ethylhexyl Stearate, Hydrogenated Castor Oil, VP/VA Copolymer Bentonite",
    count: 30,
    price: "$24.00",
    image: require("../products/claymore_web_224x224.png"),
    screen: "ProductScreen",
  },
  {
    id: "2",
    title: "Dry Grooming Cream",
    description:
      "Soft hold / Matte finish\n\nWhat Is Dry Grooming Cream\nDitch the greasy finish, fight frizz like a champ and create natural-feeling separation with this marvelously moisturizing, valuably versatile and miraculously matte styling cream. Formulation Contains moisturizing baobab oil\n\nHow To Use:\nApply it to wet hair and blow-dry it in for unbelievable control. Apply it to damp curls for an exceptionally soft and natural finish. Apply it to longer locks for that frizz free & fresh from the ocean feel. Apply it to dry hair for super soft separation and subtle style.\n\nSmells Like\nCola & Cucumber\n\nIngredients:\nWater/Aqua, Polyglyceryl-3, Stearate/Citrate, Polyglyceryl-4, Isostearate Heptyl, Undecyclenate, Maltoodextrine/VP copolymer, Cetearyl Alcohol, Ricinus, Communis(Castor), Seed Oil, Hydrogenated Castor Oil",
    count: 13,
    price: "$23.00",
    image: require("../products/dry_grooming_cream_224x224.png"),
    screen: "ProductScreen",
  },
  {
    id: "3",
    title: "Pomade",
    description:
      "Firm hold / High shine\n\nWhat is Pomade\nA classic, water-soluble pomade with an aggressive hold and a handsome aroma. Suitable for all hair types to create a smooth polished look that would make your grandfather proud.\n\nMore Details\nContains violet pigment that keeps blonde and silver hair shining bright.\nRinses completely clean from the hair without shampoo.\n\nHow to use:\nFor smoothest results, apply a fingerful to towel-dried hair and comb it into the desired style.\n\nSmells like\nGrandpa’s pipe tobacco",
    count: 6,
    price: "$21.00",
    image: require("../products/pomade-web_224x224.png"),
    screen: "ProductScreen",
  },
  {
    id: "4",
    title: "Primer",
    description:
      "Volume & Texture Tonic\n\nMake your hair feel thicker, fuller, and healthier using the miraculous PRIMER Volume & Texture Tonic.  This nourishing styling spray is packed full of powerful botanicals and oceanic extracts that'll provide you with some serious backbone to your blow-dry.\n\nHow to use:\nSpray a generous amount into damp or towel dried hair and let it dry naturally for a subtle surf-style finish or hit it with a blowdryer to add serious power to that pomp.",
    count: 8,
    price: "$23.00",
    image: require("../products/primer_224x224.png"),
    screen: "ProductScreen",
  },
  {
    id: "5",
    title: "Super-Dry",
    description:
      "Medium hold / Matte finish\n\nWhat is Super-dry\nA gravity-defying texture paste with a woodsy fragrance and an extra-dry finish. Ideal for creating perfectly disheveled hairstyles that look effortlessly cool.\n\nFormulation:\nRevolutionary oil-free formula that feels weightless and stays matte.\n\nHow To Use:\nLayer it on and re-apply Super-Dry for added texture and control without the extra weight.\nFor optimal results, work a fingerful between your palms until soft, apply to blow-dried hair.\n\nSmells Like\nA log cabin",
    count: 33,
    price: "$23.00",
    image: require("../products/super-dry_512x512.png"),
    screen: "ProductScreen",
  },
  {
    id: "6",
    title: "Wash",
    description:
      "Hair & beard cleanser\n\nYour Daily Detox for Hair and Beard Care\n\nWhat is Wash\nA revolutionary one step WASH packed full of botanicals and activated charcoal to cleanse, condition and detoxify your hair and beard without stripping away natural oils.\nWhile most detoxifying shampoo's strip away natural oils leaving puffy, dried-out hair in their wake, Victory WASH uses natural conditioning oils and gentle plant based cleansers, achieving clean and soft feeling hair in just one single step. Utilizing the natural detoxifying properties of activated charcoal, this gentle wash is your daily detoxifying cleanser that won't leave you 'high and dry'.\n\nDirections:\nWork evenly into damp hair until a soft and subtle lather forms. Wait 30-60 seconds before rinsing. Suitable for all hair types.\n\nIngredients:\nActivated Charcoal: Activated charcoal is a powerful Antioxidant that helps remove dirt, bacteria and harmful toxins from the scalp.\n\nBaobab Oil: Filled with vitamins A, E & F, Baobab oil is highly moisturizing, helps to repair signs of damaged hair and soothes itchy or irritated scalp.",
    count: 50,
    price: "$21.00",
    image: require("../products/wash_224x224.png"),
    screen: "ProductScreen",
  },
];

export default productData;
