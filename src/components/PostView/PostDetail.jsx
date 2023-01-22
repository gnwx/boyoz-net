import React from "react";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const PostDetail = () => {
  return (
    <div className=" bg-white/90 shadow-md max-w-5xl h-max  p-8 rounded-sm  ">
      <div>
        <h1 className="text-2xl font-boldish">How to fatch KDE on FreeBSD?</h1>
        <p className="text-[13px] text-gray-600 pb-4 pt-1 ">
          19 December 2020 19:35
        </p>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nemo
      aliquid autem inventore eum suscipit magni, reiciendis vero praesentium
      enim officiis saepe. Animi nihil illum error ducimus numquam cupiditate
      iusto?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
      nemo aliquid autem inventore eum suscipit magni, reiciendis vero
      praesentium enim officiis saepe. Animi nihil illum error ducimus numquam
      cupiditate iusto?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Magnam nemo aliquid autem inventore eum suscipit magni, reiciendis vero
      praesentium enim officiis saepe. Animi nihil illum error ducimus numquam
      cupiditate iusto?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Magnam nemo aliquid autem inventore eum suscipit magni, reiciendis vero
      praesentium enim officiis saepe. Animi nihil illum error ducimus numquam
      cupiditate iusto?
      <div className="justify-between flex mt-1 items-center ">
        <div className="">
          <Button size="small" variant="text">
            Javascript
          </Button>
          <Button size="small" variant="text">
            Linux
          </Button>
          <Button size="small" variant="text">
            overflow
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="items-center flex gap-2">
            <ThumbUpIcon />
            <span>155</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
