import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";

import { Heading } from "@components/Products/Heading";
import { Product } from "@components/Products";
import { favoritesAtom } from "@recoil/atom/product";

import emptyCart from "@assets/images/emptyCart.png";

export const Favorites = () => {
  const prodductsFavorites = useRecoilValue(favoritesAtom);

  return (
    <>
      <div class="w-full py-16">
        <div class="max-w-container px-4">
          <Heading heading="Lista de Favoritos" />
          {prodductsFavorites.length > 0 && (
            <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-20">
              {prodductsFavorites.map((product) => (
                <div class="px-2 " key={product.id}>
                  <Product {...product} />
                </div>
              ))}
            </div>
          )}

          {prodductsFavorites.length < 1 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              class="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
            >
              <div>
                <img
                  class="w-80 rounded-lg p-4 mx-auto"
                  src={emptyCart}
                  alt="emptyCart"
                />
              </div>
              <div class="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                <h1 class="font-titleFont text-xl font-bold uppercase text-center">
                  SUA LISTA DE FAVORITOS ESTÁ VAZIA
                </h1>
                <p class="text-sm text-center px-10 -mt-2">
                  Sua lista de favoritos está aqui para te ajudar. Dê a ela um
                  propósito - encha-o com livros, eletrônicos, vídeos, etc. e a
                  faça feliz.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
