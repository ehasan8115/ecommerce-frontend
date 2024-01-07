import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Order from "./Order";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import { StarIcon } from "@heroicons/react/24/outline";

export default function OrderCard() {
  const navigate = useNavigate();
  // console.log("items ", item,order,order.orderStatus);
  return (
    
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/2`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/224/224/krme93k0/track-pant/l/h/e/m-tp-12-0n-lemona-original-imag5d5hkch6p77m.jpeg?q=90"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">Track Pant</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Color: Black</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹345</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p className="space-y-2 font-semibold">
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
