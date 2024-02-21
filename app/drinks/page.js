const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await fetch(url);
  // Throw errors
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};

import Link from "next/link";
import DrinksList from "@/components/DrinksList";
const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">Drinks Page</h1>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
