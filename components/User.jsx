import Image from "next/image";
import React from "react";
import avatar from "@/public/avatr.png";
export default function User() {
  return (
    <>
      <div className="user__container">
        <div className="user__container__avatar">
          <Image
            className="user__container__avatar__img"
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className="user__container__title">
          <div className="user__container__name"> Jordan Michael</div>
          <div className="user__container__role">Admin</div>
        </div>
        <div className="user__container__svg">
          <svg
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.28 1.46667L7.9333 5.81334C7.41997 6.32668 6.57997 6.32668 6.06664 5.81334L1.71997 1.46667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
