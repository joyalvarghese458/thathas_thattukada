import { useState, useMemo } from "react";
import { Search, X, UtensilsCrossed, Phone } from "lucide-react";

type MenuItem = { name: string; price: string; arabic?: string };
type MenuCategory = { category: string; emoji: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    category: "Tea & Coffee",
    emoji: "☕",
    items: [
      { name: "Karak Tea", price: "1.00" },
      { name: "Green Tea", price: "1.50" },
      { name: "Coffee", price: "2/3" },
      { name: "Ginger Tea", price: "1.00" },
      { name: "Horlicks", price: "3.00" },
      { name: "Boost", price: "3.00" },
      { name: "Samavar Tea", price: "2.00" },
    ],
  },
  {
    category: "Breakfast",
    emoji: "🍳",
    items: [
      { name: "Ghee Roast", price: "6.00" },
      { name: "Vellapam", price: "1.50" },
      { name: "Uppumavu", price: "4.00" },
      { name: "Porotta", price: "1.00" },
      { name: "Chappathi", price: "1.00" },
      { name: "Idiyappam", price: "1.00" },
      { name: "Wheat Puttu", price: "1.50" },
      { name: "Puttu", price: "1.50" },
      { name: "Vada", price: "1.00" },
      { name: "Uthappam", price: "6.00" },
      { name: "Idly Set (3 Pcs)", price: "5.00" },
      { name: "Dosa Set", price: "5.00" },
      { name: "Puttu Kadala", price: "6.00" },
      { name: "Poori Bhaji", price: "5.00" },
      { name: "Neypathal", price: "1.50" },
      { name: "Egg Curry", price: "4/8" },
      { name: "Daal", price: "3/6" },
      { name: "Chana Masala", price: "3/6" },
      { name: "Daal Fry", price: "7.00" },
      { name: "Green Pease", price: "3/6" },
      { name: "Aloo Palak", price: "8.00" },
    ],
  },
  {
    category: "Snacks",
    emoji: "🍿",
    items: [
      { name: "Banana Fry", price: "-" },
      { name: "Uzhunnu Vada", price: "-" },
      { name: "Ulivada", price: "-" },
      { name: "Parippu Vada", price: "-" },
      { name: "Cutlet", price: "-" },
      { name: "Bread Pocket", price: "-" },
      { name: "Chatti Pathil", price: "-" },
      { name: "Kaaypola", price: "-" },
      { name: "Pazham Nirachathu", price: "-" },
      { name: "Neyyappam", price: "-" },
      { name: "Unnakaya", price: "-" },
      { name: "Ela Ada", price: "-" },
      { name: "Kallumakkaya", price: "-" },
      { name: "Puffs", price: "-" },
      { name: "Kalathappam", price: "-" },
      { name: "Vattayappam", price: "-" },
      { name: "Undapori", price: "-" },
      { name: "Erachi Pathil", price: "-" },
      { name: "Sugiyan", price: "-" },
      { name: "Porichapathil", price: "-" },
      { name: "Unniyappam", price: "-" },
      { name: "Chicken Roll", price: "-" },
      { name: "Rice Unda", price: "-" },
      { name: "Elanji", price: "-" },
      { name: "Meen Kaai", price: "-" },
      { name: "Aloo Bonda", price: "-" },
      { name: "Chicken Samosa", price: "-" },
      { name: "Alu Samosa", price: "-" },
    ],
  },
  {
    category: "Porotta Sandwich",
    emoji: "🥪",
    items: [
      { name: "Chicken", price: "4.00" },
      { name: "Oman Chips / Cheese Porotta", price: "4.00" },
      { name: "Beef", price: "5.00" },
      { name: "Omelette", price: "3.00" },
      { name: "Cheese", price: "2.50" },
      { name: "Keema", price: "3.00" },
    ],
  },
  {
    category: "Chicken Dish",
    emoji: "🍗",
    items: [
      { name: "Chicken Chukka", price: "12.00" },
      { name: "Chicken Chilly", price: "13.00" },
      { name: "Chicken Dry Fry", price: "12.00" },
      { name: "Chicken Pepper", price: "12.00" },
      { name: "Chicken Kuruma", price: "12.00" },
      { name: "Chicken Roast", price: "13.00" },
      { name: "Chicken Stew", price: "12.00" },
      { name: "Chicken Mulak", price: "12.00" },
      { name: "Chi. Varutharachathu", price: "12.00" },
      { name: "Chi. Capsicum", price: "11.00" },
      { name: "Chilly Chicken", price: "13.00" },
      { name: "Chicken 65", price: "13.00" },
      { name: "Malabar Chicken Dry", price: "13.00" },
      { name: "Garlic Chicken", price: "13.00" },
      { name: "Butter Chicken", price: "13.00" },
      { name: "Chicken Meathi", price: "11.00" },
      { name: "Chicken Lollypop", price: "12.00" },
      { name: "Chicken Manchurian", price: "13.00" },
      { name: "Chicken Varattiyathu", price: "13.00" },
      { name: "Chi. Lemon Souce", price: "12.00" },
      { name: "Chicken Shappu Curry", price: "13.00" },
      { name: "Chicken Green Masala", price: "12.00" },
      { name: "Payoli Chicken", price: "13.00" },
      { name: "Chicken Kadai", price: "13.00" },
      { name: "Chicken Kondattam", price: "13.00" },
      { name: "Chicken Kanthari", price: "15.00" },
    ],
  },
  {
    category: "Mutton Dish",
    emoji: "🍖",
    items: [
      { name: "Mutton Varattiyathu", price: "18.00" },
      { name: "Mutton Pepper", price: "18.00" },
      { name: "Mutton Kuruma", price: "18.00" },
      { name: "Mutton Masala", price: "16.00" },
      { name: "Mutton Kadai", price: "18.00" },
    ],
  },
  {
    category: "Beef Dish",
    emoji: "🥩",
    items: [
      { name: "Beef Chilly Dry", price: "16.00" },
      { name: "Beef Coconut", price: "15.00" },
      { name: "Beef Pepper", price: "14.00" },
      { name: "Beef Kanathari", price: "16.00" },
      { name: "Beef Liver", price: "15.00" },
      { name: "Beef Fry", price: "14.00" },
    ],
  },
  {
    category: "Fish Dish",
    emoji: "🐟",
    items: [
      { name: "Fish Fry", price: "ASP" },
      { name: "Prawns Roast", price: "ASP" },
      { name: "Squid Roast", price: "ASP" },
      { name: "Kallumakaya Fry", price: "ASP" },
      { name: "Fish Molie", price: "ASP" },
      { name: "Natholi Masala", price: "ASP" },
      { name: "Fish Roast", price: "ASP" },
    ],
  },
  {
    category: "Duck Dish",
    emoji: "🦆",
    items: [
      { name: "Duck Roast", price: "20.00" },
      { name: "Duck Masala", price: "20.00" },
    ],
  },
  {
    category: "Egg Dish",
    emoji: "🥚",
    items: [
      { name: "Egg Masala", price: "8.00" },
      { name: "Egg Burji", price: "8.00" },
      { name: "Egg Roast", price: "8.00" },
      { name: "Egg Omelette", price: "4.00" },
    ],
  },
  {
    category: "Vegetable",
    emoji: "🥬",
    items: [
      { name: "Veg Stew", price: "8.00" },
      { name: "Paneer Butter Masala", price: "12.00" },
      { name: "Bhindi Masala", price: "9.00" },
      { name: "Green Pease Masala", price: "6.00" },
      { name: "Dal Thadka", price: "8.00" },
      { name: "Tomato Fry", price: "8.00" },
      { name: "Aloo Gobi Masala", price: "10.00" },
      { name: "Gobi Manchurian", price: "12.00" },
      { name: "Palak Paneer", price: "12.00" },
      { name: "Mix Veg.", price: "6.00" },
      { name: "Paneer Chilly", price: "14.00" },
      { name: "Paneer 65", price: "14.00" },
      { name: "Paneer Manchurian", price: "14.00" },
      { name: "Veg. Kuruma", price: "8.00" },
      { name: "Paneer Masala", price: "11.00" },
      { name: "Navaratna Kuruma", price: "12.00" },
    ],
  },
  {
    category: "Biriyani",
    emoji: "🍚",
    items: [
      { name: "Chi. Fry Biriyani", price: "12.00" },
      { name: "Ghee Rice", price: "7.00" },
      { name: "Fish Biriyani", price: "ASP" },
      { name: "Veg. Biriyani", price: "10.00" },
      { name: "Mutton Biriyani", price: "17.00" },
      { name: "Chi. Lagoon Biriyani", price: "14.00" },
      { name: "Egg Biriyani", price: "10.00" },
      { name: "Beef Biriyani", price: "14.00" },
      { name: "Chicken Dum Biriyani", price: "12.00" },
      { name: "Kappa Biriyani", price: "14.00" },
      { name: "Pothi Biriyani Chi./Beef", price: "14/16" },
      { name: "Puttu Biriyani Chi./Beef", price: "12/13" },
    ],
  },
  {
    category: "Kerala Special",
    emoji: "🌴",
    items: [
      { name: "Pothi Poratta", price: "14.00" },
      { name: "Kanji", price: "10.00" },
      { name: "Irachi Choru", price: "12.00" },
      { name: "Chatti Choru", price: "15.00" },
      { name: "Ghee Rice with Beef Curry", price: "14.00" },
      { name: "Pothi Choru", price: "14.00" },
      { name: "Paal Kappa (Chicken/Beef)", price: "13/18" },
      { name: "Paal Parotta (Chicken/Beef/Egg)", price: "16/18/14" },
      { name: "Kothu Porotta (Chicken/Beef/Egg)", price: "13/14/11" },
      { name: "Ummachi Kozhi", price: "25.00" },
      { name: "Chicken Kanthari", price: "15.00" },
      { name: "Beef Kanthari", price: "16.00" },
      { name: "Chatti Curry (Beef/Chi./Fish)", price: "16.00" },
      { name: "Neypathil Poth Varattiyathu", price: "18.00" },
      { name: "Kunji Pathil", price: "13.00" },
      { name: "Motta / Barik Set", price: "-" },
      { name: "Ottupathilum Pothin Kaalam", price: "-" },
      { name: "Muttayappam with Beef & Chicken", price: "18/16" },
    ],
  },
  {
    category: "Dinner Special",
    emoji: "🌙",
    items: [
      { name: "Poricha Pathil", price: "-" },
      { name: "Ari Dosa", price: "-" },
      { name: "Pothin Kaalu", price: "-" },
      { name: "Pothin Chaps", price: "-" },
      { name: "Poratta / Wheat Poratta / Chapathi", price: "-" },
      { name: "Vellapam / Rice Dosa", price: "-" },
      { name: "Puttu / Idiyappam", price: "-" },
      { name: "Pathiri / Wheat Dosa", price: "-" },
      { name: "Uthappam / Masala Dosa", price: "-" },
    ],
  },
  {
    category: "Fried Rice",
    emoji: "🍛",
    items: [
      { name: "Chi. Fried Rice", price: "13.00" },
      { name: "Egg Fried Rice", price: "11.00" },
      { name: "Beef Fried Rice", price: "16.00" },
      { name: "Veg. Fried Rice", price: "11.00" },
      { name: "Prawns Fried Rice", price: "16.00" },
      { name: "Mix Fried Rice", price: "16.00" },
      { name: "Schezwan Fried Rice (Chi./Veg./Prawns/Egg/Mix)", price: "15/12/17/12/18" },
    ],
  },
  {
    category: "Noodles",
    emoji: "🍜",
    items: [
      { name: "Chicken Noodles", price: "13.00" },
      { name: "Beef Noodles", price: "16.00" },
      { name: "Egg Noodles", price: "11.00" },
      { name: "Veg Noodles", price: "11.00" },
      { name: "Prawns Noodles", price: "16.00" },
      { name: "Mix Noodles", price: "16.00" },
      { name: "Schezwan Noodles (Chi./Veg./Prawns/Egg/Mix)", price: "15/12/17/12/18" },
    ],
  },
  {
    category: "Soup",
    emoji: "🍲",
    items: [
      { name: "Chicken Soup", price: "10.00" },
      { name: "Manchow Soup", price: "12.00" },
      { name: "Veg. Soup", price: "10.00" },
      { name: "Chi. Clear Soup", price: "10.00" },
      { name: "Hot and Sour Soup", price: "10.00" },
      { name: "Tomato Soup", price: "10.00" },
      { name: "Sweet Corn Soup", price: "10.00" },
    ],
  },
  {
    category: "Fresh Juices",
    emoji: "🧃",
    items: [
      { name: "Avocado", price: "7/9/11" },
      { name: "Banana", price: "4/6/8" },
      { name: "Orange", price: "7/9/11" },
      { name: "Apple", price: "7/9/11" },
      { name: "Chickoo", price: "7/9/11" },
      { name: "Grape", price: "7/9/11" },
      { name: "Pineapple", price: "7/9/11" },
      { name: "Pomegranate", price: "7/9/11" },
      { name: "Mango", price: "7/9/11" },
      { name: "Sweet Melon", price: "7/9/11" },
      { name: "Watermelon", price: "7/9/11" },
      { name: "Cocktail", price: "7/9/11" },
      { name: "Thathas Special", price: "12.00" },
      { name: "Strawberry", price: "7/9/11" },
      { name: "Pappaya", price: "7/9/11" },
      { name: "Carrot", price: "7/9/11" },
      { name: "Lemon", price: "6/8/10" },
      { name: "Lemon Mint", price: "7/9/11" },
      { name: "Avocado Thabakath", price: "12.00" },
    ],
  },
  {
    category: "Special Juices",
    emoji: "🥤",
    items: [
      { name: "Awar Al Khalb", price: "10.00" },
      { name: "Abood", price: "10.00" },
      { name: "Abbadi", price: "10.00" },
      { name: "Falooda", price: "12.00" },
      { name: "Glory", price: "12.00" },
      { name: "Fruit Salad", price: "12.00" },
      { name: "Nannari Sarbath", price: "6.00" },
      { name: "Soda Sarbath", price: "6.00" },
      { name: "Milk Sarbath", price: "10.00" },
      { name: "Grape Sarbath", price: "10.00" },
      { name: "Lassi Special", price: "10.00" },
    ],
  },
  {
    category: "Mojito",
    emoji: "🍹",
    items: [
      { name: "Blue Lime", price: "11.00" },
      { name: "Passion Fruit", price: "11.00" },
      { name: "Strawberry", price: "11.00" },
      { name: "Mint Lime", price: "10.00" },
    ],
  },
  {
    category: "Crush Milk Shake",
    emoji: "🥛",
    items: [
      { name: "Cold Coffee", price: "12.00" },
      { name: "Lotus Milk Shake", price: "12.00" },
      { name: "Nutella Milk Shake", price: "12.00" },
      { name: "Oreo Milk Shake", price: "12.00" },
      { name: "Boost", price: "12.00" },
      { name: "Galaxy Milk Shake", price: "12.00" },
      { name: "Snickers Milk Shake", price: "12.00" },
    ],
  },
  {
    category: "Avil Milk Special",
    emoji: "🍌",
    items: [
      { name: "Normal", price: "8.00" },
      { name: "Kids", price: "10.00" },
      { name: "Special", price: "10.00" },
      { name: "Boost", price: "10.00" },
      { name: "Horliks", price: "10.00" },
      { name: "Ice Cream", price: "10.00" },
      { name: "Nuts", price: "12.00" },
      { name: "Fruits", price: "12.00" },
      { name: "Royal", price: "12.00" },
      { name: "Thathas Special", price: "12.00" },
      { name: "Kulfi", price: "12.00" },
      { name: "Fruit & Nuts", price: "12.00" },
    ],
  },
  {
    category: "Burger",
    emoji: "🍔",
    items: [
      { name: "Beef Burger", price: "8.00" },
      { name: "Veg. Burger", price: "8.00" },
      { name: "Nuggets Burger", price: "9.00" },
      { name: "Tikka Burger", price: "10.00" },
      { name: "Chicken Burger", price: "7.00" },
      { name: "Zinker Burger", price: "10.00" },
      { name: "Potato Plate", price: "6.00" },
    ],
  },
  {
    category: "Club Sandwich",
    emoji: "🥪",
    items: [
      { name: "Zinker Club", price: "14.00" },
      { name: "Chicken Club", price: "12.00" },
      { name: "Veg. Club", price: "12.00" },
    ],
  },
  {
    category: "Ice Cream",
    emoji: "🍨",
    items: [
      { name: "Thathas Royal Mix Ice Cream", price: "15.00" },
    ],
  },
];

export default function MenuSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return menuData
      .map((cat) => {
        const matchingItems = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            cat.category.toLowerCase().includes(q)
        );
        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [search]);

  const displayed = activeCategory
    ? filtered.filter((c) => c.category === activeCategory)
    : filtered;

  const totalItems = menuData.reduce((s, c) => s + c.items.length, 0);

  return (
    <section id="menu" className="bg-warm-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-warm-accent">
            Our Menu
          </span>
          <h2
            className="mt-2 text-3xl font-black text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Taste the <span className="text-warm-accent">Favourites</span>
          </h2>
          <p className="mt-2 text-sm text-white/50">
            {totalItems}+ items • All prices in AED
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveCategory(null);
              }}
              placeholder="Search menu… e.g. biriyani, porotta, juice"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-10 text-sm text-white placeholder-white/30 outline-none backdrop-blur-sm transition focus:border-warm-accent/50 focus:ring-1 focus:ring-warm-accent/30"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              activeCategory === null
                ? "bg-warm-accent text-warm-dark"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            All
          </button>
          {(search ? filtered : menuData).map((cat) => (
            <button
              key={cat.category}
              onClick={() =>
                setActiveCategory(
                  activeCategory === cat.category ? null : cat.category
                )
              }
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                activeCategory === cat.category
                  ? "bg-warm-accent text-warm-dark"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.emoji} {cat.category}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        {displayed.length === 0 ? (
          <div className="mt-16 text-center">
            <UtensilsCrossed size={40} className="mx-auto text-white/20" />
            <p className="mt-4 text-white/40">
              No items found for "{search}"
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-10">
            {displayed.map((cat) => (
              <div key={cat.category}>
                <h3 className="mb-4 flex items-center gap-2 border-b border-white/10 pb-2 text-lg font-bold text-white">
                  <span className="text-xl">{cat.emoji}</span>
                  {cat.category}
                  <span className="ml-auto text-xs font-normal text-white/30">
                    {cat.items.length} items
                  </span>
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <div
                      key={`${cat.category}-${item.name}`}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 transition hover:bg-white/[0.07]"
                    >
                      <span className="text-sm text-white/80">
                        {item.name}
                      </span>
                      <span className="ml-4 shrink-0 rounded-full bg-warm-accent/15 px-2.5 py-0.5 text-xs font-bold text-warm-accent">
                        {item.price === "-" || item.price === "ASP"
                          ? item.price
                          : `AED ${item.price}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:065728525"
            className="inline-flex items-center gap-2 rounded-full border-2 border-warm-accent/30 px-6 py-3 text-sm font-bold text-warm-accent transition hover:bg-warm-accent/10"
          >
            <Phone size={16} />
            Call for Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
