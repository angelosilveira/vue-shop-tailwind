import React, { useCallback, useEffect, useState } from "react";
import { ProductInfo } from "@components/ProductInfo";
import { ProductType } from "@interfaces/Product";
import { getProduct } from "@services/product";
import { useParams } from "react-router-dom";

const tabs = [
  {
    id: "info",
    label: "Ficha Técnica",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    id: "description",
    label: "Descrição",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];

export const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const loadProduct = useCallback(async () => {
    try {
      const response = await getProduct(Number(id)!);
      setProduct(response);
    } catch (err) {
      console.log("🚀 ~ loadProducts ~ err:", err);
    }
  }, [setProduct, id]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  return (
    <div class="w-full mx-auto border-b-[1px] border-b-gray-300 py-20">
      <div class="max-w-container mx-auto px-4">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div class="h-full xl:col-span-2">
            <img
              class="w-full h-full "
              src={product.image}
              alt={product.title}
            />
          </div>
          <div class="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo product={product} />
          </div>
        </div>
        <div>
          <div class=" space-x-4  pt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                class={`${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } py-2 px-4  focus:outline-none`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div class="my-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                class={activeTab === tab.id ? "" : "hidden"}
              >
                <p>{tab.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
