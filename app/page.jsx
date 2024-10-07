"use client";
import DateRange from "@/components/DateRange";
import React, { useState } from "react";
import dayjs from "dayjs";
export default function page() {
  const [dateRange, setDateRange] = useState({
    startDate: dayjs().subtract(1, "month").toDate(),
    endDate: new Date(),
  });
  return (
    <>
      <div className="page__header__container">
        <div className="page__header__container__heading">Plot inventory</div>
        <div className="page__header__container__col">
          <DateRange
            value={dateRange}
            onChange={(value) => setDateRange(value)}
          />
          <button className="filter__col">
            <div className="filter__col__svg">
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6.5H14M1.5 1.5H16.5M6.5 11.5H11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="filter__col__title">Filter</div>
          </button>
          <button className="export__btn">
            <div className="export__btn__svg">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0833 8.99166H14.675C12.7 8.99166 11.0916 7.38332 11.0916 5.40832V2.99999C11.0916 2.54166 10.7166 2.16666 10.2583 2.16666H6.72498C4.15831 2.16666 2.08331 3.83332 2.08331 6.80832V14.1917C2.08331 17.1667 4.15831 18.8333 6.72498 18.8333H13.275C15.8416 18.8333 17.9166 17.1667 17.9166 14.1917V9.82499C17.9166 9.36666 17.5416 8.99166 17.0833 8.99166ZM10.2333 13.65L8.56665 15.3167C8.50831 15.375 8.43331 15.425 8.35831 15.45C8.28331 15.4833 8.20831 15.5 8.12498 15.5C8.04165 15.5 7.96665 15.4833 7.89165 15.45C7.82498 15.425 7.75831 15.375 7.70831 15.325C7.69998 15.3167 7.69165 15.3167 7.69165 15.3083L6.02498 13.6417C5.78331 13.4 5.78331 13 6.02498 12.7583C6.26665 12.5167 6.66665 12.5167 6.90831 12.7583L7.49998 13.3667V9.87499C7.49998 9.53332 7.78331 9.24999 8.12498 9.24999C8.46665 9.24999 8.74998 9.53332 8.74998 9.87499V13.3667L9.34998 12.7667C9.59165 12.525 9.99165 12.525 10.2333 12.7667C10.475 13.0083 10.475 13.4083 10.2333 13.65Z"
                  fill="white"
                />
                <path
                  d="M14.525 7.84167C15.3167 7.85 16.4167 7.85 17.3583 7.85C17.8333 7.85 18.0833 7.29167 17.75 6.95834C16.55 5.75 14.4 3.575 13.1667 2.34167C12.825 2 12.2333 2.23334 12.2333 2.70834V5.61667C12.2333 6.83334 13.2667 7.84167 14.525 7.84167Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="export__btn__text">Export</div>
            <div className="export__btn__svg">
              <svg
                width="14"
                height="7"
                viewBox="0 0 14 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.28 1.46667L7.9333 5.81334C7.41997 6.32668 6.57997 6.32668 6.06664 5.81334L1.71997 1.46667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
