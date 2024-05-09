import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="min-w-[180x] py-2 px-3 cursor-pointer rounded hover:bg-[#ffffff26]"
      onClick={() => navigate(`album/${id}`)}
    >
      <img src={image} alt="" className="rounded" />
      <p className="mt-2 mb-1 font-bold">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
      {/* <p>{id}</p> */}
    </div>
  );
};

export default AlbumItem;
