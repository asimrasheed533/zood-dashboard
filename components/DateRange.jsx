"use client";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import ClickAwayListener from "react-click-away-listener";
import { DateRangePicker } from "react-date-range";
import dayjs from "dayjs";
import { useState } from "react";

export default function DateRange({
  left,
  value,
  onChange,
  disabled,
  reverse,
}) {
  const [showCalender, setShowCalender] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setShowCalender(false)}>
      <div className="date__range__wrapper">
        <div
          className="date__range__wrapper__text"
          onClick={() => {
            if (!disabled) setShowCalender(true);
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7.99601C0 8.79561 0.61146 9.40707 1.41106 9.40707H7.99601C8.79561 9.40707 9.40707 8.79561 9.40707 7.99601V4.23318H0V7.99601ZM7.99601 0.940707H7.0553V0.470354C7.0553 0.188141 6.86716 0 6.58495 0C6.30274 0 6.1146 0.188141 6.1146 0.470354V0.940707H3.29247V0.470354C3.29247 0.188141 3.10433 0 2.82212 0C2.53991 0 2.35177 0.188141 2.35177 0.470354V0.940707H1.41106C0.61146 0.940707 0 1.55217 0 2.35177V3.29247H9.40707V2.35177C9.40707 1.55217 8.79561 0.940707 7.99601 0.940707Z"
              fill="#ffc74c"
            />
          </svg>
          <span>
            {value ? (
              <>
                From: {dayjs(value.startDate).format("DD MMM YYYY")} To:{" "}
                {dayjs(value.endDate).format("DD MMM YYYY")}
              </>
            ) : (
              "Select Date Range"
            )}
          </span>
        </div>
        {showCalender && (
          <div
            className={
              left
                ? "date__range__wrapper__calender date__range__wrapper__calender__left"
                : "date__range__wrapper__calender"
            }
            style={
              reverse
                ? {
                    left: "0",
                    right: "unset",
                  }
                : {}
            }
          >
            <DateRangePicker
              onChange={(ranges) => {
                if (onChange) {
                  onChange({
                    startDate: ranges.selection.startDate || new Date(),
                    endDate: ranges.selection.endDate || new Date(),
                  });
                }
              }}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={
                value
                  ? [
                      {
                        startDate: value.startDate,
                        endDate: value.endDate,
                        key: "selection",
                      },
                    ]
                  : [
                      {
                        startDate: new Date(),
                        endDate: new Date(),
                        key: "selection",
                      },
                    ]
              }
              direction="horizontal"
              preventSnapRefocus={true}
              calendarFocus="backwards"
              rangeColors={["var(--primary)"]}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
