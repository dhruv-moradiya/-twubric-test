import React from "react";
import { getFormattedDate } from "../../service/helpers";
import { useAppContext } from "../../context/AppContext";

function Card({ id, username, twubric, join_date, image }) {
  const { data, setData } = useAppContext();

  const deleteUser = () => {
    setData(data.filter((item) => item.uid !== id));
  };

  return (
    <div className="w-[320px] border-2 border-white-300 rounded-md flex flex-col gap-3 p-3">
      <div className="flex items-center">
        <div className="w-full flex items-center gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <p>{username}</p>
        </div>
        <p className="font-semibold">{twubric.total}</p>
      </div>
      <ul className="w-full grid grid-cols-3 border-[1px] rounded-md border-white-300">
        <li className="flex flex-col items-center">
          <p>{twubric.friends}</p>
          <p className="text-[13.5px]">Friends</p>
        </li>
        <li className="flex flex-col items-center border-x-2 border-white-300">
          <p>{twubric.influence}</p>
          <p className="text-[13.5px]">Influence</p>
        </li>
        <li className="flex flex-col items-center ">
          <p>{twubric.chirpiness}</p>
          <p className="text-[13.5px]">Chirpiness</p>
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-semibold">
          {getFormattedDate(join_date * 1000)}
        </p>
        <button
          className="py-1 px-2 text-xs rounded-md duration-150 bg-red-500 hover:bg-red-600 text-white"
          onClick={deleteUser}
        >
          <i className="ri-delete-bin-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
