import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const MultiSelect = ({ options, selectedValues, onChange }) => {
  return (
    <Select
      value={selectedValues}
      onValueChange={onChange}
      multiple
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select categories" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const MyForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoriesChange = (newCategories) => {
    setSelectedCategories(newCategories);
  };

  const categoriesOptions = [
    { label: "React", value: "React" },
    { label: "Vue", value: "Vue" },
    { label: "Svelte", value: "Svelte" },
  ];

  return (
    <form>
      <div className="space-y-4">
        <label htmlFor="categories" className="font-semibold">Select Your Categories</label>
        <MultiSelect
          options={categoriesOptions}
          selectedValues={selectedCategories}
          onChange={handleCategoriesChange}
        />
      </div>

      <button type="submit" className="mt-4 btn">Submit</button>
    </form>
  );
};

export default MyForm;
