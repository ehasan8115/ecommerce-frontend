import React from "react";
import AddressCard from "../adreess/AdreessCard";
import { Box, Button, Grid } from "@mui/material";
import OrderTraker from "./OrderTraker";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function OrderDetails() {
  return (
    <div className=" px-2 lg:px-20 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard />
        </Grid>
      </Grid>

      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker activeStep={3} />
          </Grid>
          <Grid item>
            <Button sx={{ color: "" }} color="error" variant="text">
              RETURN
            </Button>

            <Button sx={{ color: "#1976D2" }} variant="text">
              cancel order
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/224/224/krme93k0/track-pant/l/h/e/m-tp-12-0n-lemona-original-imag5d5hkch6p77m.jpeg?q=90"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="font-semibold">Men Slim Track Pant</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: Black</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Lemona Brand</p>
                  <p>₹345 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: "#1976D2" }}
                  className="flex items-center cursor-pointer"
                >
                  <StarBorderIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
