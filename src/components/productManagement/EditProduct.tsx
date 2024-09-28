/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaEdit } from "react-icons/fa";
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
import { useUpdateProductMutation } from "@/redux/api/api";
import Swal from "sweetalert2";

// Product type and category enum
type Category = "tents" | "shelter" | "camp-cooking" | "dining" | "backpacks";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: Category | "";
  ratings: number;
  image: string;
};

type EditProductProps = {
  product: TProduct;
};

const EditProduct = ({ product }: EditProductProps) => {
  const [editedProduct, setEditedProduct] = useState<TProduct>(product);

  const [open, setOpen] = useState(false);

  // Handler for form inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const [updateProduct, { isSuccess, isError }] =
    useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire("Congratulations!", "Product has been updated!", "success");
      setOpen(false);
    }

    if (isError) {
      Swal.fire("Error!", "Something went wrong!", "error");
      setOpen(false);
    }
  }, [isSuccess, isError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editedProductData = {
      ...editedProduct,
      price: Number(editedProduct.price),
      quantity: Number(editedProduct.quantity),
      ratings: Number(editedProduct.ratings),
    };

    updateProduct(editedProductData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-blue-600 hover:text-blue-800 ">
          <FaEdit className="size-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Update the product details below. Click save when you're done.
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
                value={editedProduct.name}
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
                value={editedProduct.price}
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
                value={editedProduct.quantity}
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
                value={editedProduct.category}
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
                value={editedProduct.ratings}
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
                value={editedProduct.image}
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
                name="description"
                value={editedProduct.description}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Product Description"
              />
            </div>
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Save changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;
