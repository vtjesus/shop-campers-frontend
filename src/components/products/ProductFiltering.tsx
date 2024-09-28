import { FormEvent, useEffect, useState } from "react";
import PriceFilter from "./PriceFilter";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Sorting from "./Sorting";
import { useAppDispatch } from "@/redux/features/hooks";
import {
  clearAllFilters,
  getSearchValue,
} from "@/redux/features/filter/filterSlice";
import CategoryFilter from "./CategoryFIlter";
import Aos from "aos";
import "aos/dist/aos.css";
const ProductFiltering = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedSorting, setSelectedSorting] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getSearchValue(searchTerm));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedPrice("");
    setSelectedSorting("");

    dispatch(clearAllFilters());
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col md:flex-row flex-wrap space-y-4 xl:space-y-0 lg:space-x-4 items-center justify-between p-6 md:p-10 border rounded shadow-lg my-14"
    >
      {/* Category Filter */}
      <div className="flex-grow order-1 lg:order-none w-full lg:w-auto">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Price Filter */}
      <div className="flex-grow order-2 lg:order-none w-full lg:w-auto">
        <PriceFilter
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </div>

      {/* Sorting */}
      <div className="flex-grow order-3 lg:order-none w-full lg:w-auto">
        <Sorting
          selectedSorting={selectedSorting}
          setSelectedSorting={setSelectedSorting}
        />
      </div>

      {/* Search Filter */}
      <div className="flex-grow order-4 lg:order-none w-full lg:w-auto">
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center"
        >
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search products"
            className="w-full lg:w-auto"
          />
          <Button className="bg-[#c19d60] w-full md:w-auto" type="submit">
            Search
          </Button>
        </form>
      </div>

      {/* Clear Button */}
      <div className="flex-grow order-5 lg:order-none w-full xl:w-auto">
        <Button
          onClick={clearFilters}
          className="bg-red-500 text-white w-full xl:w-auto"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default ProductFiltering;
