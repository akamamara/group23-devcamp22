import React from "react";
import { Stack } from "@mui/material";

import imagePlaceholder from "../../assets/placeholder_image.jpg";
import ListHeaderMaterial from "./ListHeaderMaterial";
import ListCounterMaterial from "./ListCounterMaterial";

export default function ListMaterial({data}) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <img
          src={data.img_url}
          className="object-cover h-[4rem] w-[4rem] rounded-[8px]"
          alt="Placeholder"
        />
        <ListHeaderMaterial title={data.nama_bahan} price={`Rp. ${data.price}`} />
      </Stack>

      <ListCounterMaterial unitName={data.satuan} />
    </Stack>
  );
}
