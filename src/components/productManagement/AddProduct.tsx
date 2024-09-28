/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { useAddProductMutation } from "@/redux/api/api";
import Swal from "sweetalert2";

// Product type and category enum
type Category = "tents" | "shelter" | "camp-cooking" | "dining" | "backpacks";

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: Category | "";
  ratings: number;
  image: string;
};

const AddProduct = () => {
  const [product, setProduct] = useState<TProduct>({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    category: "",
    ratings: 0,
    image: "",
  });

  const [open, setOpen] = useState(false);

  // Handler for form inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const [addProduct, { isSuccess, isError }] = useAddProductMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire("Congratulations!", "Product has been added!", "success");
      setOpen(false);
      setProduct({
        name: "",
        price: 0,
        quantity: 0,
        description: "",
        category: "",
        ratings: 0,
        image: "",
      });
    }

    if (isError) {
      Swal.fire("Oops!", "Something went wrong!", "error");
      setOpen(false);
    }
  }, [isSuccess, isError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addProduct({
      ...product,
      price: Number(product.price),
      quantity: Number(product.quantity),
      ratings: Number(product.ratings),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 text-semibold text-white">
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Enter the product details below. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Product Name"
              />
            </div>
            {/* Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price ($)
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Product Price"
              />
            </div>
            {/* Quantity */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                value={product.quantity}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Product Quantity"
              />
            </div>
            {/* Category */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                className="col-span-3 border border-gray-300 rounded px-2 py-1"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="tents">Tents</option>
                <option value="shelter">Shelter</option>
                <option value="camp-cooking">Camp Cooking</option>
                <option value="dining">Dining</option>
                <option value="backpacks">Backpacks</option>
              </select>
            </div>
            {/* Ratings */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ratings" className="text-right">
                Ratings
              </Label>
              <Input
                id="ratings"
                name="ratings"
                type="number"
                value={product.ratings}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Product Ratings (0-5)"
                min="0"
                max="5"
                step="0.1"
              />
            </div>
            {/* Image URL */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                name="image"
                value={product.image}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Image URL"
              />
            </div>
            {/* Description (Textarea) */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Product Description"
              />
            </div>
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
