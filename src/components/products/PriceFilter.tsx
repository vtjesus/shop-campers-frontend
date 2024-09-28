import { getFilterPriceValue } from "@/redux/features/filter/filterSlice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppDispatch } from "@/redux/features/hooks";

type TPriceFilterProps = {
  selectedPrice: string;
  setSelectedPrice: (value: string) => void;
};

const PriceFilter = ({
  selectedPrice,
  setSelectedPrice,
}: TPriceFilterProps) => {
  const dispatch = useAppDispatch();

  const handleFilterPrice = (value: string) => {
    setSelectedPrice(value);
    dispatch(getFilterPriceValue(value));
  };

  return (
    <Select value={selectedPrice} onValueChange={handleFilterPrice}>
      <SelectTrigger className="lg:w-[180px]">
        <SelectValue placeholder="Price Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price Filter</SelectLabel>
          <SelectItem value="100"> 0-100 </SelectItem>
          <SelectItem value="200">100-200</SelectItem>
          <SelectItem value="300">200-300</SelectItem>
          <SelectItem value="400">300-400</SelectItem>
          <SelectItem value="500">400-500</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceFilter;
