import React from "react";
import Card from "./Card";
import { useAppContext } from "../../context/AppContext";

function Cardlist() {
  const { data } = useAppContext();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] place-items-center gap-4">
      {data.length === 0 ? (
        <p className="font-semibold text-2xl my-12">Data is not available.</p>
      ) : (
        <>
          {data.map((item, index) => (
            <Card
              key={index}
              id={item.uid}
              username={item.fullname}
              twubric={item.twubric}
              join_date={item.join_date}
              image={item.image}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Cardlist;
