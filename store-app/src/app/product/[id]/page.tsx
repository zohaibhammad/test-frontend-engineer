"use client";

import React, {
  CSSProperties,
  use,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/helpers";
import { Product } from "@/types/product";
import { getSingleProduct } from "@/services/products.service";
import { ClipLoader } from "react-spinners";
import { updateCart } from "@/services/cart.service";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const id = use(params).id;

  const getProduct = useCallback(async () => {
    setProduct(await getSingleProduct(id));
  }, [id, setProduct]);

  useEffect(() => {
    getProduct();
  }, [id, getProduct]);

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    updateCart(product!);
  };

  return (
    <div className="bg-white">
      {product ? (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              alt="Product image"
              src={product?.images[0]}
              className="hidden size-full rounded-lg object-cover lg:block"
            />
            {product?.images?.length > 1 && (
              <>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  {product?.images?.map(
                    (image, index) =>
                      [1, 2].includes(index) && (
                        <img
                          alt="Product image"
                          src={image}
                          className="aspect-[3/2] w-full rounded-lg object-cover"
                          key={image}
                        />
                      ),
                  )}
                </div>
                {product?.images?.length > 3 && (
                  <img
                    alt="Product image"
                    src={product?.images[3]}
                    className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
                  />
                )}
              </>
            )}
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product?.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product?.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "size-5 shrink-0",
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product?.rating} out of 5 stars</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {product?.reviews.length} reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                <button
                  onClick={addToCart}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ClipLoader
          color="#000000"
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}
