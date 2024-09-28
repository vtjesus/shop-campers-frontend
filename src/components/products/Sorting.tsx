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
import { getSortingValue } from "@/redux/features/filter/filterSlice";

type TSortingProps = {
  selectedSorting: string;
  setSelectedSorting: (value: string) => void;
};

const Sorting = ({ selectedSorting, setSelectedSorting }: TSortingProps) => {
  const dispatch = useAppDispatch();

  const handleSorting = (value: string) => {
    setSelectedSorting(value);
    dispatch(getSortingValue(value));
  };

  return (
    <Select value={selectedSorting} onValueChange={handleSorting}>
      <SelectTrigger className="lg:w-[180px]">
        <SelectValue placeholder="Default Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Default Sorting</SelectLabel>
          <SelectItem value="asc">Price Ascending</SelectItem>
          <SelectItem value="desc">Price Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sorting;
