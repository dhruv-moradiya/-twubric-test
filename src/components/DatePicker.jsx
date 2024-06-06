import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getTimeStamp } from "../service/helpers";

function DatePicker() {
  const {
    startingDate,
    setStartingDate,
    endingDate,
    setEndingDate,
    data,
    setData,
  } = useAppContext();

  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!startingDate || !endingDate) {
      setError(true);
      return;
    }

    setError(false);

    const startTimestamp = getTimeStamp(startingDate);
    const endTimestamp = getTimeStamp(endingDate);

    const filteredData = data.filter((item) => {
      const itemTimestamp = item.join_date;
      return startTimestamp <= itemTimestamp && itemTimestamp < endTimestamp;
    });

    setData(filteredData);
  }
  return (
    <div className="flex flex-col gap-3 items-center">
      <form
        className="w-full flex item-center justify-center gap-2 my-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="starting_date" className="font-semibold text-xs">
            Staring Date
          </label>
          <input
            type="date"
            className="border-2 border-slate-300 rounded-md py-1 px-3 text-xs"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ending_date" className="font-semibold text-xs">
            Ending Date
          </label>
          <input
            type="date"
            className="border-2 border-slate-300 rounded-md py-1 px-3 text-xs"
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="py-1 px-5 font-semibold text-white text-[13.5px] rounded-md bg-yellow-500 h-fit">
            Filter
          </button>
        </div>
      </form>
      {error && (
        <div className="border-2 border-red-400 px-3 py-1 rounded-md">
          <span className="text-xs">
            Please select both(Starting and Ending) dates.
          </span>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
