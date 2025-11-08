"use client";
import { addProduct } from "@/app/actions/product/product";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";

const addProductPage = () => {
  const [state, action, ispending] = useActionState(addProduct, null);
  return (
    <div className="md:p-4 ">
      <h1 className="md:text-xl font-semibold text-muted-foreground capitalize">
        add product
      </h1>
      <div className="md:py-4">
        <form action={action}>
          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-4 capitalize">
                <Field className=" col-span-3 md:col-span-2">
                  <FieldLabel htmlFor="title" className="text-[16px]">
                    Title
                  </FieldLabel>
                  <Input
                    name="title"
                    id="title"
                    autoComplete="off"
                    placeholder="Evil Rabbit"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="category" className="text-[16px]">
                    category
                  </FieldLabel>
                  <Input
                    name="category"
                    id="category"
                    autoComplete="off"
                    placeholder="Category"
                  />
                </Field>
                <Field className="col-span-3">
                  <FieldLabel htmlFor="description" className="text-[16px]">
                    description
                  </FieldLabel>
                  <Textarea
                    name="description"
                    id="description"
                    placeholder="Description"
                    rows={4}
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="price" className="text-[16px]">
                    price
                  </FieldLabel>
                  <Input
                    name="price"
                    id="price"
                    autoComplete="off"
                    placeholder="Price"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="stock" className="text-[16px]">
                    stock
                  </FieldLabel>
                  <Input
                    name="stock"
                    id="stock"
                    autoComplete="off"
                    placeholder="Stock"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="tags" className="text-[16px]">
                    Tags
                  </FieldLabel>
                  <div className="flex gap-2">
                    <Input
                      name="tags"
                      id="tags"
                      autoComplete="off"
                      placeholder="Tags"
                    />
                    <Input
                      name="tags"
                      id="tags"
                      autoComplete="off"
                      placeholder="Tags"
                    />
                  </div>
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="brand" className="text-[16px]">
                    Brand
                  </FieldLabel>
                  <Input
                    name="brand"
                    id="brand"
                    autoComplete="off"
                    placeholder="Brand"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="weight" className="text-[16px]">
                    Weight
                  </FieldLabel>
                  <Input
                    name="weight"
                    id="weight"
                    autoComplete="off"
                    placeholder="Weight"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel
                    htmlFor="warrantyInformation"
                    className="text-[16px]"
                  >
                    Warranty Information
                  </FieldLabel>
                  <Input
                    name="warrantyInformation"
                    id="warrantyInformation"
                    autoComplete="off"
                    placeholder="Warranty Information"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel
                    htmlFor="shippingInformation"
                    className="text-[16px]"
                  >
                    Shipping Information
                  </FieldLabel>
                  <Input
                    name="shippingInformation"
                    id="shippingInformation"
                    autoComplete="off"
                    placeholder="Shipping Information"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="availableStatus" className="text-[16px]">
                    Available Status
                  </FieldLabel>
                  <Input
                    name="availableStatus"
                    id="availableStatus"
                    autoComplete="off"
                    placeholder="Available Status"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="productAge" className="text-[16px]">
                    Product Age
                  </FieldLabel>
                  <Input
                    name="productAge"
                    id="productAge"
                    autoComplete="off"
                    placeholder="Product Age"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="returnPolicy" className="text-[16px]">
                    Return Policy
                  </FieldLabel>
                  <Input
                    name="returnPolicy"
                    id="returnPolicy"
                    autoComplete="off"
                    placeholder="Return Policy"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel
                    htmlFor="minimumOrderQuantity"
                    className="text-[16px]"
                  >
                    MinimumOrder Quantity
                  </FieldLabel>
                  <Input
                    name="minimumOrderQuantity"
                    id="minimumOrderQuantity"
                    autoComplete="off"
                    placeholder="MinimumOrder Quantity"
                  />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="thumbnail" className="text-[16px]">
                    Thumbnail
                  </FieldLabel>
                  <Input name="thumbnail" id="thumbnail" type="file" />
                </Field>
                <Field className="col-span-3 md:col-span-1">
                  <FieldLabel htmlFor="images" className="text-[16px]">
                    Images
                  </FieldLabel>
                  <Input name="images" id="images" type="file" multiple />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default addProductPage;
