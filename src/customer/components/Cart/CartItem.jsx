import React from "react";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export default function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/224/224/krme93k0/track-pant/l/h/e/m-tp-12-0n-lemona-original-imag5d5hkch6p77m.jpeg?q=90"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Track Pant</p>
          <p className="opacity-70">Size: M,Black</p>
          <p className="opacity-70 mt-2">Seller: XYZ</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹440</p>
            <p className="font-semibold text-lg">₹140</p>
            <p className="text-green-600 font-semibold">35% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton color="primary" aria-label="add an alarm">
            <RemoveCircleOutline />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton color="primary" aria-label="add an alarm">
            <AddCircleOutline />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button variant="text">Remove</Button>
        </div>
      </div>
    </div>
  );
}
