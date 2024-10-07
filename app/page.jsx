"use client";
import DateRange from "@/components/DateRange";
import React, { useState } from "react";
import dayjs from "dayjs";
import DashboardTable from "@/components/DashboardTable";
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
      <div className="main__cards__container">
        <div className="card__left">
          <div className="card__left__header">
            <div className="card__left__header__title">
              <div className="card__left__header__title__svg">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49001 2.75H3.81751C2.32501 2.75 1.57501 3.5075 1.57501 5.015V17H5.62501V14.1875C5.62501 13.88 5.88001 13.625 6.18751 13.625C6.49501 13.625 6.75001 13.8725 6.75001 14.1875V17H10.725V5.015C10.725 3.5075 9.98251 2.75 8.49001 2.75ZM8.06251 10.0625H4.35001C4.04251 10.0625 3.78751 9.8075 3.78751 9.5C3.78751 9.1925 4.04251 8.9375 4.35001 8.9375H8.06251C8.37001 8.9375 8.62501 9.1925 8.62501 9.5C8.62501 9.8075 8.37001 10.0625 8.06251 10.0625ZM8.06251 7.25H4.35001C4.04251 7.25 3.78751 6.995 3.78751 6.6875C3.78751 6.38 4.04251 6.125 4.35001 6.125H8.06251C8.37001 6.125 8.62501 6.38 8.62501 6.6875C8.62501 6.995 8.37001 7.25 8.06251 7.25Z"
                    fill="white"
                  />
                  <path
                    d="M17.25 16.4375H15.5475V14.1875C16.26 13.955 16.7775 13.2875 16.7775 12.5V11C16.7775 10.0175 15.975 9.215 14.9925 9.215C14.01 9.215 13.2075 10.0175 13.2075 11V12.5C13.2075 13.28 13.7175 13.94 14.415 14.18V16.4375H0.75C0.4425 16.4375 0.1875 16.6925 0.1875 17C0.1875 17.3075 0.4425 17.5625 0.75 17.5625H14.9475C14.9625 17.5625 14.97 17.57 14.985 17.57C15 17.57 15.0075 17.5625 15.0225 17.5625H17.25C17.5575 17.5625 17.8125 17.3075 17.8125 17C17.8125 16.6925 17.5575 16.4375 17.25 16.4375Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="card__left__header__title__heading">
                Total Plots
              </div>
              <div className="card__left__header__title__info">
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.545 4C4.66255 3.66583 4.89458 3.38405 5.19998 3.20457C5.50538 3.02508 5.86445 2.95947 6.21359 3.01936C6.56273 3.07924 6.87941 3.26076 7.10754 3.53176C7.33567 3.80277 7.46053 4.14576 7.46 4.5C7.46 5.5 5.96 6 5.96 6M6 8H6.005M11 5.5C11 8.26142 8.76142 10.5 6 10.5C3.23858 10.5 1 8.26142 1 5.5C1 2.73858 3.23858 0.5 6 0.5C8.76142 0.5 11 2.73858 11 5.5Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="card__left__header__num">
              <div className="card__left__header__num__plot">645</div>
              <div className="card__left__header__num__value">
                <span>
                  2.5%{" "}
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33335 6.16667L6.66669 0.833338"
                      stroke="#A5E9C9"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66669 5.86162V0.833334H1.6384"
                      stroke="#A5E9C9"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                vs last year
              </div>
            </div>
          </div>
          <div className="card__left__header__entry__row">
            <div className="card__left__header__entry__col">
              <div className="card__left__header__entry__col__title">
                Commercial plots{" "}
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.545 4C4.66255 3.66583 4.89458 3.38405 5.19998 3.20457C5.50538 3.02508 5.86445 2.95947 6.21359 3.01936C6.56273 3.07924 6.87941 3.26076 7.10754 3.53176C7.33567 3.80277 7.46053 4.14576 7.46 4.5C7.46 5.5 5.96 6 5.96 6M6 8H6.005M11 5.5C11 8.26142 8.76142 10.5 6 10.5C3.23858 10.5 1 8.26142 1 5.5C1 2.73858 3.23858 0.5 6 0.5C8.76142 0.5 11 2.73858 11 5.5Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="card__left__header__entry__col__num">420</div>
              <div className="card__left__header__num__value">
                <span>
                  2.5%{" "}
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33335 6.16667L6.66669 0.833338"
                      stroke="#A5E9C9"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66669 5.86162V0.833334H1.6384"
                      stroke="#A5E9C9"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                vs last year
              </div>
            </div>
            <div className="card__left__header__entry__col">
              <div className="card__left__header__entry__col__title">
                Commercial plots{" "}
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.545 4C4.66255 3.66583 4.89458 3.38405 5.19998 3.20457C5.50538 3.02508 5.86445 2.95947 6.21359 3.01936C6.56273 3.07924 6.87941 3.26076 7.10754 3.53176C7.33567 3.80277 7.46053 4.14576 7.46 4.5C7.46 5.5 5.96 6 5.96 6M6 8H6.005M11 5.5C11 8.26142 8.76142 10.5 6 10.5C3.23858 10.5 1 8.26142 1 5.5C1 2.73858 3.23858 0.5 6 0.5C8.76142 0.5 11 2.73858 11 5.5Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="card__left__header__entry__col__num">420</div>
              <div className="card__left__header__num__value">
                <span>
                  2.5%{" "}
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33335 6.16667L6.66669 0.833338"
                      stroke="#A5E9C9"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66669 5.86162V0.833334H1.6384"
                      stroke="#A5E9C9"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                vs last year
              </div>
            </div>
          </div>
        </div>

        <div className="main__card__right">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </div>
      <DashboardTable />
    </>
  );
}

function DashboardCard({}) {
  return (
    <div className="main__card__right__card">
      <div className="main__card__right__card__header">
        <div className="main__card__right__card__header__title">326</div>
        <div className="main__card__right__card__header__subtitle">
          Total Sold Plots
        </div>
      </div>
      <div className="main__right__card__text__warper">
        <div className="main__right__card__text__warper__col">
          <div className="main__right__card__text__warper__col__svg">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 4.92501L9.95834 2.39168C9.45834 2.12501 8.86667 2.12501 8.36667 2.39168L3.66667 4.92501C3.325 5.11668 3.10834 5.48335 3.10834 5.88335C3.10834 6.29168 3.31667 6.65835 3.66667 6.84168L8.375 9.37501C8.625 9.50835 8.9 9.57502 9.16667 9.57502C9.43334 9.57502 9.71667 9.50835 9.95834 9.37501L14.6667 6.84168C15.0083 6.65835 15.225 6.29168 15.225 5.88335C15.225 5.48335 15.0083 5.11668 14.6667 4.92501Z"
                fill="#149F5D"
              />
              <path
                d="M7.6 10.2583L3.225 8.07501C2.88334 7.90001 2.5 7.92501 2.175 8.11668C1.85834 8.31668 1.66667 8.65835 1.66667 9.03335V13.1667C1.66667 13.8833 2.06667 14.525 2.70834 14.85L7.08334 17.0333C7.23334 17.1083 7.4 17.15 7.56667 17.15C7.75834 17.15 7.95834 17.0917 8.13334 16.9917C8.45001 16.7917 8.64167 16.45 8.64167 16.075V11.9417C8.63334 11.225 8.23334 10.5833 7.6 10.2583Z"
                fill="#149F5D"
              />
              <path
                d="M16.6667 9.03335V11.0833C16.2667 10.9667 15.8417 10.9167 15.4167 10.9167C14.2833 10.9167 13.175 11.3083 12.3 12.0083C11.1 12.95 10.4167 14.375 10.4167 15.9167C10.4167 16.325 10.4667 16.7333 10.575 17.125C10.45 17.1083 10.325 17.0583 10.2083 16.9833C9.89167 16.7917 9.7 16.45 9.7 16.075V11.9417C9.7 11.225 10.1 10.5833 10.7333 10.2583L15.1083 8.07501C15.45 7.90001 15.8333 7.92501 16.1583 8.11668C16.475 8.31668 16.6667 8.65835 16.6667 9.03335Z"
                fill="#149F5D"
              />
              <path
                d="M18.3167 13.5583C17.6333 12.7167 16.5917 12.1833 15.4167 12.1833C14.5333 12.1833 13.7167 12.4917 13.075 13.0083C12.2083 13.6917 11.6667 14.75 11.6667 15.9333C11.6667 16.6333 11.8667 17.3 12.2083 17.8667C12.4333 18.2417 12.7167 18.5667 13.05 18.8333H13.0583C13.7 19.3667 14.525 19.6833 15.4167 19.6833C16.3667 19.6833 17.225 19.3333 17.8833 18.75C18.175 18.5 18.425 18.2 18.625 17.8667C18.9667 17.3 19.1667 16.6333 19.1667 15.9333C19.1667 15.0333 18.85 14.2 18.3167 13.5583ZM17.3 15.4667L15.3 17.3167C15.1833 17.425 15.025 17.4833 14.875 17.4833C14.7167 17.4833 14.5583 17.425 14.4333 17.3L13.5083 16.375C13.2667 16.1333 13.2667 15.7333 13.5083 15.4917C13.75 15.25 14.15 15.25 14.3917 15.4917L14.8917 15.9917L16.45 14.55C16.7 14.3167 17.1 14.3333 17.3333 14.5833C17.575 14.8417 17.5583 15.2333 17.3 15.4667Z"
                fill="#149F5D"
              />
            </svg>
          </div>
          <div className="main__right__card__text__warper__col__text">
            <div className="main__right__card__text__warper__col__text__title">
              Commercial plots{" "}
            </div>
            <div className="main__right__card__text__warper__col__text__subtitle">
              176
            </div>
          </div>
        </div>

        <div className="main__right__card__text__warper__col__text">
          <div className="main__right__card__text__warper__col__text__title">
            Commercial plots{" "}
          </div>
          <div className="main__right__card__text__warper__col__text__subtitle">
            176
          </div>
        </div>
      </div>
    </div>
  );
}
