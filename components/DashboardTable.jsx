import Image from "next/image";
import React from "react";
import avatar from "@/public/avatr.png";
export default function DashboardTable() {
  return (
    <>
      <div className="dashboard__table__container">
        <div className="dashboard__table__header">
          <div className="dashboard__table__header__warper">
            <div className="dashboard__table__header__title">Plot Owners</div>
            <div className="dashboard__table__header__number">10</div>
          </div>
          <button className="dashboard__table__owner__add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Owner
          </button>
        </div>
        <div className="table__header__warper">
          <div className="table__header__entry">Id</div>
          <div className="table__header__entry">Name</div>
          <div className="table__header__entry">Email</div>
          <div className="table__header__entry">Phone</div>
          <div className="table__header__entry">Action</div>
        </div>
        <div className="table__body__warper__container">
          <div className="table__body__warper">
            <div className="table__body__entry">0001</div>
            <div className="table__body__entry">
              <Image
                src={avatar}
                alt="zood"
                className="table__body__entry__avatar"
              />
              <div className="table__body__entry__name">Jhon Ehatm</div>
            </div>
            <div className="table__body__entry">hammad@gamil.com</div>
            <div className="table__body__entry">+92-4563258</div>
            <div className="table__body__entry">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 18.8359H2.5C2.15833 18.8359 1.875 18.5526 1.875 18.2109C1.875 17.8693 2.15833 17.5859 2.5 17.5859H17.5C17.8417 17.5859 18.125 17.8693 18.125 18.2109C18.125 18.5526 17.8417 18.8359 17.5 18.8359Z"
                  fill="#868F98"
                />
                <path
                  d="M15.8495 3.40005C14.2328 1.78338 12.6495 1.74172 10.9912 3.40005L9.98283 4.40838C9.89949 4.49172 9.86616 4.62505 9.89949 4.74172C10.5328 6.95005 12.2995 8.71672 14.5078 9.35005C14.5412 9.35838 14.5745 9.36672 14.6078 9.36672C14.6995 9.36672 14.7828 9.33338 14.8495 9.26672L15.8495 8.25838C16.6745 7.44172 17.0745 6.65005 17.0745 5.85005C17.0828 5.02505 16.6828 4.22505 15.8495 3.40005Z"
                  fill="#868F98"
                />
                <path
                  d="M13.0089 10.1057C12.7673 9.98906 12.5339 9.8724 12.3089 9.73906C12.1256 9.63073 11.9506 9.51406 11.7756 9.38906C11.6339 9.2974 11.4673 9.16406 11.3089 9.03073C11.2923 9.0224 11.2339 8.9724 11.1673 8.90573C10.8923 8.6724 10.5839 8.3724 10.3089 8.03906C10.2839 8.0224 10.2423 7.96406 10.1839 7.88906C10.1006 7.78906 9.95892 7.6224 9.83392 7.43073C9.73392 7.30573 9.61726 7.1224 9.50892 6.93906C9.37559 6.71406 9.25892 6.48906 9.14226 6.25573C8.98929 5.92795 8.55908 5.83057 8.30331 6.08635L3.61726 10.7724C3.50892 10.8807 3.40892 11.0891 3.38392 11.2307L2.93392 14.4224C2.85059 14.9891 3.00892 15.5224 3.35892 15.8807C3.65892 16.1724 4.07559 16.3307 4.52559 16.3307C4.62559 16.3307 4.72559 16.3224 4.82559 16.3057L8.02559 15.8557C8.17559 15.8307 8.38392 15.7307 8.48392 15.6224L13.1777 10.9286C13.4284 10.678 13.3342 10.2467 13.0089 10.1057Z"
                  fill="#868F98"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5583 3.85833C15.2167 3.725 13.875 3.625 12.525 3.55V3.54166L12.3417 2.45833C12.2167 1.69166 12.0333 0.541664 10.0833 0.541664H7.89999C5.95832 0.541664 5.77499 1.64166 5.64166 2.45L5.46666 3.51666C4.69166 3.56666 3.91666 3.61666 3.14166 3.69166L1.44166 3.85833C1.09166 3.89166 0.841656 4.2 0.874989 4.54166C0.908322 4.88333 1.20832 5.13333 1.55832 5.1L3.25832 4.93333C7.62499 4.5 12.025 4.66666 16.4417 5.10833C16.4667 5.10833 16.4833 5.10833 16.5083 5.10833C16.825 5.10833 17.1 4.86666 17.1333 4.54166C17.1583 4.2 16.9083 3.89166 16.5583 3.85833Z"
                  fill="#868F98"
                />
                <path
                  d="M15.025 6.28334C14.825 6.075 14.55 5.95834 14.2667 5.95834H3.73335C3.45002 5.95834 3.16668 6.075 2.97502 6.28334C2.78335 6.49167 2.67501 6.775 2.69168 7.06667L3.20835 15.6167C3.30002 16.8833 3.41668 18.4667 6.32502 18.4667H11.675C14.5833 18.4667 14.7 16.8917 14.7917 15.6167L15.3083 7.075C15.325 6.775 15.2167 6.49167 15.025 6.28334ZM10.3833 14.2917H7.60835C7.26668 14.2917 6.98335 14.0083 6.98335 13.6667C6.98335 13.325 7.26668 13.0417 7.60835 13.0417H10.3833C10.725 13.0417 11.0083 13.325 11.0083 13.6667C11.0083 14.0083 10.725 14.2917 10.3833 14.2917ZM11.0833 10.9583H6.91668C6.57502 10.9583 6.29168 10.675 6.29168 10.3333C6.29168 9.99167 6.57502 9.70834 6.91668 9.70834H11.0833C11.425 9.70834 11.7083 9.99167 11.7083 10.3333C11.7083 10.675 11.425 10.9583 11.0833 10.9583Z"
                  fill="#868F98"
                />
              </svg>
            </div>
          </div>
          <div className="table__body__warper">
            <div className="table__body__entry">0001</div>
            <div className="table__body__entry">
              <Image
                src={avatar}
                alt="zood"
                className="table__body__entry__avatar"
              />
              <div className="table__body__entry__name">Jhon Ehatm</div>
            </div>
            <div className="table__body__entry">hammad@gamil.com</div>
            <div className="table__body__entry">+92-4563258</div>
            <div className="table__body__entry">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 18.8359H2.5C2.15833 18.8359 1.875 18.5526 1.875 18.2109C1.875 17.8693 2.15833 17.5859 2.5 17.5859H17.5C17.8417 17.5859 18.125 17.8693 18.125 18.2109C18.125 18.5526 17.8417 18.8359 17.5 18.8359Z"
                  fill="#868F98"
                />
                <path
                  d="M15.8495 3.40005C14.2328 1.78338 12.6495 1.74172 10.9912 3.40005L9.98283 4.40838C9.89949 4.49172 9.86616 4.62505 9.89949 4.74172C10.5328 6.95005 12.2995 8.71672 14.5078 9.35005C14.5412 9.35838 14.5745 9.36672 14.6078 9.36672C14.6995 9.36672 14.7828 9.33338 14.8495 9.26672L15.8495 8.25838C16.6745 7.44172 17.0745 6.65005 17.0745 5.85005C17.0828 5.02505 16.6828 4.22505 15.8495 3.40005Z"
                  fill="#868F98"
                />
                <path
                  d="M13.0089 10.1057C12.7673 9.98906 12.5339 9.8724 12.3089 9.73906C12.1256 9.63073 11.9506 9.51406 11.7756 9.38906C11.6339 9.2974 11.4673 9.16406 11.3089 9.03073C11.2923 9.0224 11.2339 8.9724 11.1673 8.90573C10.8923 8.6724 10.5839 8.3724 10.3089 8.03906C10.2839 8.0224 10.2423 7.96406 10.1839 7.88906C10.1006 7.78906 9.95892 7.6224 9.83392 7.43073C9.73392 7.30573 9.61726 7.1224 9.50892 6.93906C9.37559 6.71406 9.25892 6.48906 9.14226 6.25573C8.98929 5.92795 8.55908 5.83057 8.30331 6.08635L3.61726 10.7724C3.50892 10.8807 3.40892 11.0891 3.38392 11.2307L2.93392 14.4224C2.85059 14.9891 3.00892 15.5224 3.35892 15.8807C3.65892 16.1724 4.07559 16.3307 4.52559 16.3307C4.62559 16.3307 4.72559 16.3224 4.82559 16.3057L8.02559 15.8557C8.17559 15.8307 8.38392 15.7307 8.48392 15.6224L13.1777 10.9286C13.4284 10.678 13.3342 10.2467 13.0089 10.1057Z"
                  fill="#868F98"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5583 3.85833C15.2167 3.725 13.875 3.625 12.525 3.55V3.54166L12.3417 2.45833C12.2167 1.69166 12.0333 0.541664 10.0833 0.541664H7.89999C5.95832 0.541664 5.77499 1.64166 5.64166 2.45L5.46666 3.51666C4.69166 3.56666 3.91666 3.61666 3.14166 3.69166L1.44166 3.85833C1.09166 3.89166 0.841656 4.2 0.874989 4.54166C0.908322 4.88333 1.20832 5.13333 1.55832 5.1L3.25832 4.93333C7.62499 4.5 12.025 4.66666 16.4417 5.10833C16.4667 5.10833 16.4833 5.10833 16.5083 5.10833C16.825 5.10833 17.1 4.86666 17.1333 4.54166C17.1583 4.2 16.9083 3.89166 16.5583 3.85833Z"
                  fill="#868F98"
                />
                <path
                  d="M15.025 6.28334C14.825 6.075 14.55 5.95834 14.2667 5.95834H3.73335C3.45002 5.95834 3.16668 6.075 2.97502 6.28334C2.78335 6.49167 2.67501 6.775 2.69168 7.06667L3.20835 15.6167C3.30002 16.8833 3.41668 18.4667 6.32502 18.4667H11.675C14.5833 18.4667 14.7 16.8917 14.7917 15.6167L15.3083 7.075C15.325 6.775 15.2167 6.49167 15.025 6.28334ZM10.3833 14.2917H7.60835C7.26668 14.2917 6.98335 14.0083 6.98335 13.6667C6.98335 13.325 7.26668 13.0417 7.60835 13.0417H10.3833C10.725 13.0417 11.0083 13.325 11.0083 13.6667C11.0083 14.0083 10.725 14.2917 10.3833 14.2917ZM11.0833 10.9583H6.91668C6.57502 10.9583 6.29168 10.675 6.29168 10.3333C6.29168 9.99167 6.57502 9.70834 6.91668 9.70834H11.0833C11.425 9.70834 11.7083 9.99167 11.7083 10.3333C11.7083 10.675 11.425 10.9583 11.0833 10.9583Z"
                  fill="#868F98"
                />
              </svg>
            </div>
          </div>
          <div className="table__body__warper">
            <div className="table__body__entry">0001</div>
            <div className="table__body__entry">
              <Image
                src={avatar}
                alt="zood"
                className="table__body__entry__avatar"
              />
              <div className="table__body__entry__name">Jhon Ehatm</div>
            </div>
            <div className="table__body__entry">hammad@gamil.com</div>
            <div className="table__body__entry">+92-4563258</div>
            <div className="table__body__entry">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 18.8359H2.5C2.15833 18.8359 1.875 18.5526 1.875 18.2109C1.875 17.8693 2.15833 17.5859 2.5 17.5859H17.5C17.8417 17.5859 18.125 17.8693 18.125 18.2109C18.125 18.5526 17.8417 18.8359 17.5 18.8359Z"
                  fill="#868F98"
                />
                <path
                  d="M15.8495 3.40005C14.2328 1.78338 12.6495 1.74172 10.9912 3.40005L9.98283 4.40838C9.89949 4.49172 9.86616 4.62505 9.89949 4.74172C10.5328 6.95005 12.2995 8.71672 14.5078 9.35005C14.5412 9.35838 14.5745 9.36672 14.6078 9.36672C14.6995 9.36672 14.7828 9.33338 14.8495 9.26672L15.8495 8.25838C16.6745 7.44172 17.0745 6.65005 17.0745 5.85005C17.0828 5.02505 16.6828 4.22505 15.8495 3.40005Z"
                  fill="#868F98"
                />
                <path
                  d="M13.0089 10.1057C12.7673 9.98906 12.5339 9.8724 12.3089 9.73906C12.1256 9.63073 11.9506 9.51406 11.7756 9.38906C11.6339 9.2974 11.4673 9.16406 11.3089 9.03073C11.2923 9.0224 11.2339 8.9724 11.1673 8.90573C10.8923 8.6724 10.5839 8.3724 10.3089 8.03906C10.2839 8.0224 10.2423 7.96406 10.1839 7.88906C10.1006 7.78906 9.95892 7.6224 9.83392 7.43073C9.73392 7.30573 9.61726 7.1224 9.50892 6.93906C9.37559 6.71406 9.25892 6.48906 9.14226 6.25573C8.98929 5.92795 8.55908 5.83057 8.30331 6.08635L3.61726 10.7724C3.50892 10.8807 3.40892 11.0891 3.38392 11.2307L2.93392 14.4224C2.85059 14.9891 3.00892 15.5224 3.35892 15.8807C3.65892 16.1724 4.07559 16.3307 4.52559 16.3307C4.62559 16.3307 4.72559 16.3224 4.82559 16.3057L8.02559 15.8557C8.17559 15.8307 8.38392 15.7307 8.48392 15.6224L13.1777 10.9286C13.4284 10.678 13.3342 10.2467 13.0089 10.1057Z"
                  fill="#868F98"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5583 3.85833C15.2167 3.725 13.875 3.625 12.525 3.55V3.54166L12.3417 2.45833C12.2167 1.69166 12.0333 0.541664 10.0833 0.541664H7.89999C5.95832 0.541664 5.77499 1.64166 5.64166 2.45L5.46666 3.51666C4.69166 3.56666 3.91666 3.61666 3.14166 3.69166L1.44166 3.85833C1.09166 3.89166 0.841656 4.2 0.874989 4.54166C0.908322 4.88333 1.20832 5.13333 1.55832 5.1L3.25832 4.93333C7.62499 4.5 12.025 4.66666 16.4417 5.10833C16.4667 5.10833 16.4833 5.10833 16.5083 5.10833C16.825 5.10833 17.1 4.86666 17.1333 4.54166C17.1583 4.2 16.9083 3.89166 16.5583 3.85833Z"
                  fill="#868F98"
                />
                <path
                  d="M15.025 6.28334C14.825 6.075 14.55 5.95834 14.2667 5.95834H3.73335C3.45002 5.95834 3.16668 6.075 2.97502 6.28334C2.78335 6.49167 2.67501 6.775 2.69168 7.06667L3.20835 15.6167C3.30002 16.8833 3.41668 18.4667 6.32502 18.4667H11.675C14.5833 18.4667 14.7 16.8917 14.7917 15.6167L15.3083 7.075C15.325 6.775 15.2167 6.49167 15.025 6.28334ZM10.3833 14.2917H7.60835C7.26668 14.2917 6.98335 14.0083 6.98335 13.6667C6.98335 13.325 7.26668 13.0417 7.60835 13.0417H10.3833C10.725 13.0417 11.0083 13.325 11.0083 13.6667C11.0083 14.0083 10.725 14.2917 10.3833 14.2917ZM11.0833 10.9583H6.91668C6.57502 10.9583 6.29168 10.675 6.29168 10.3333C6.29168 9.99167 6.57502 9.70834 6.91668 9.70834H11.0833C11.425 9.70834 11.7083 9.99167 11.7083 10.3333C11.7083 10.675 11.425 10.9583 11.0833 10.9583Z"
                  fill="#868F98"
                />
              </svg>
            </div>
          </div>
          <div className="table__body__warper">
            <div className="table__body__entry">0001</div>
            <div className="table__body__entry">
              <Image
                src={avatar}
                alt="zood"
                className="table__body__entry__avatar"
              />
              <div className="table__body__entry__name">Jhon Ehatm</div>
            </div>
            <div className="table__body__entry">hammad@gamil.com</div>
            <div className="table__body__entry">+92-4563258</div>
            <div className="table__body__entry">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 18.8359H2.5C2.15833 18.8359 1.875 18.5526 1.875 18.2109C1.875 17.8693 2.15833 17.5859 2.5 17.5859H17.5C17.8417 17.5859 18.125 17.8693 18.125 18.2109C18.125 18.5526 17.8417 18.8359 17.5 18.8359Z"
                  fill="#868F98"
                />
                <path
                  d="M15.8495 3.40005C14.2328 1.78338 12.6495 1.74172 10.9912 3.40005L9.98283 4.40838C9.89949 4.49172 9.86616 4.62505 9.89949 4.74172C10.5328 6.95005 12.2995 8.71672 14.5078 9.35005C14.5412 9.35838 14.5745 9.36672 14.6078 9.36672C14.6995 9.36672 14.7828 9.33338 14.8495 9.26672L15.8495 8.25838C16.6745 7.44172 17.0745 6.65005 17.0745 5.85005C17.0828 5.02505 16.6828 4.22505 15.8495 3.40005Z"
                  fill="#868F98"
                />
                <path
                  d="M13.0089 10.1057C12.7673 9.98906 12.5339 9.8724 12.3089 9.73906C12.1256 9.63073 11.9506 9.51406 11.7756 9.38906C11.6339 9.2974 11.4673 9.16406 11.3089 9.03073C11.2923 9.0224 11.2339 8.9724 11.1673 8.90573C10.8923 8.6724 10.5839 8.3724 10.3089 8.03906C10.2839 8.0224 10.2423 7.96406 10.1839 7.88906C10.1006 7.78906 9.95892 7.6224 9.83392 7.43073C9.73392 7.30573 9.61726 7.1224 9.50892 6.93906C9.37559 6.71406 9.25892 6.48906 9.14226 6.25573C8.98929 5.92795 8.55908 5.83057 8.30331 6.08635L3.61726 10.7724C3.50892 10.8807 3.40892 11.0891 3.38392 11.2307L2.93392 14.4224C2.85059 14.9891 3.00892 15.5224 3.35892 15.8807C3.65892 16.1724 4.07559 16.3307 4.52559 16.3307C4.62559 16.3307 4.72559 16.3224 4.82559 16.3057L8.02559 15.8557C8.17559 15.8307 8.38392 15.7307 8.48392 15.6224L13.1777 10.9286C13.4284 10.678 13.3342 10.2467 13.0089 10.1057Z"
                  fill="#868F98"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5583 3.85833C15.2167 3.725 13.875 3.625 12.525 3.55V3.54166L12.3417 2.45833C12.2167 1.69166 12.0333 0.541664 10.0833 0.541664H7.89999C5.95832 0.541664 5.77499 1.64166 5.64166 2.45L5.46666 3.51666C4.69166 3.56666 3.91666 3.61666 3.14166 3.69166L1.44166 3.85833C1.09166 3.89166 0.841656 4.2 0.874989 4.54166C0.908322 4.88333 1.20832 5.13333 1.55832 5.1L3.25832 4.93333C7.62499 4.5 12.025 4.66666 16.4417 5.10833C16.4667 5.10833 16.4833 5.10833 16.5083 5.10833C16.825 5.10833 17.1 4.86666 17.1333 4.54166C17.1583 4.2 16.9083 3.89166 16.5583 3.85833Z"
                  fill="#868F98"
                />
                <path
                  d="M15.025 6.28334C14.825 6.075 14.55 5.95834 14.2667 5.95834H3.73335C3.45002 5.95834 3.16668 6.075 2.97502 6.28334C2.78335 6.49167 2.67501 6.775 2.69168 7.06667L3.20835 15.6167C3.30002 16.8833 3.41668 18.4667 6.32502 18.4667H11.675C14.5833 18.4667 14.7 16.8917 14.7917 15.6167L15.3083 7.075C15.325 6.775 15.2167 6.49167 15.025 6.28334ZM10.3833 14.2917H7.60835C7.26668 14.2917 6.98335 14.0083 6.98335 13.6667C6.98335 13.325 7.26668 13.0417 7.60835 13.0417H10.3833C10.725 13.0417 11.0083 13.325 11.0083 13.6667C11.0083 14.0083 10.725 14.2917 10.3833 14.2917ZM11.0833 10.9583H6.91668C6.57502 10.9583 6.29168 10.675 6.29168 10.3333C6.29168 9.99167 6.57502 9.70834 6.91668 9.70834H11.0833C11.425 9.70834 11.7083 9.99167 11.7083 10.3333C11.7083 10.675 11.425 10.9583 11.0833 10.9583Z"
                  fill="#868F98"
                />
              </svg>
            </div>
          </div>
          <div className="table__body__warper">
            <div className="table__body__entry">0001</div>
            <div className="table__body__entry">
              <Image
                src={avatar}
                alt="zood"
                className="table__body__entry__avatar"
              />
              <div className="table__body__entry__name">Jhon Ehatm</div>
            </div>
            <div className="table__body__entry">hammad@gamil.com</div>
            <div className="table__body__entry">+92-4563258</div>
            <div className="table__body__entry">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 18.8359H2.5C2.15833 18.8359 1.875 18.5526 1.875 18.2109C1.875 17.8693 2.15833 17.5859 2.5 17.5859H17.5C17.8417 17.5859 18.125 17.8693 18.125 18.2109C18.125 18.5526 17.8417 18.8359 17.5 18.8359Z"
                  fill="#868F98"
                />
                <path
                  d="M15.8495 3.40005C14.2328 1.78338 12.6495 1.74172 10.9912 3.40005L9.98283 4.40838C9.89949 4.49172 9.86616 4.62505 9.89949 4.74172C10.5328 6.95005 12.2995 8.71672 14.5078 9.35005C14.5412 9.35838 14.5745 9.36672 14.6078 9.36672C14.6995 9.36672 14.7828 9.33338 14.8495 9.26672L15.8495 8.25838C16.6745 7.44172 17.0745 6.65005 17.0745 5.85005C17.0828 5.02505 16.6828 4.22505 15.8495 3.40005Z"
                  fill="#868F98"
                />
                <path
                  d="M13.0089 10.1057C12.7673 9.98906 12.5339 9.8724 12.3089 9.73906C12.1256 9.63073 11.9506 9.51406 11.7756 9.38906C11.6339 9.2974 11.4673 9.16406 11.3089 9.03073C11.2923 9.0224 11.2339 8.9724 11.1673 8.90573C10.8923 8.6724 10.5839 8.3724 10.3089 8.03906C10.2839 8.0224 10.2423 7.96406 10.1839 7.88906C10.1006 7.78906 9.95892 7.6224 9.83392 7.43073C9.73392 7.30573 9.61726 7.1224 9.50892 6.93906C9.37559 6.71406 9.25892 6.48906 9.14226 6.25573C8.98929 5.92795 8.55908 5.83057 8.30331 6.08635L3.61726 10.7724C3.50892 10.8807 3.40892 11.0891 3.38392 11.2307L2.93392 14.4224C2.85059 14.9891 3.00892 15.5224 3.35892 15.8807C3.65892 16.1724 4.07559 16.3307 4.52559 16.3307C4.62559 16.3307 4.72559 16.3224 4.82559 16.3057L8.02559 15.8557C8.17559 15.8307 8.38392 15.7307 8.48392 15.6224L13.1777 10.9286C13.4284 10.678 13.3342 10.2467 13.0089 10.1057Z"
                  fill="#868F98"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5583 3.85833C15.2167 3.725 13.875 3.625 12.525 3.55V3.54166L12.3417 2.45833C12.2167 1.69166 12.0333 0.541664 10.0833 0.541664H7.89999C5.95832 0.541664 5.77499 1.64166 5.64166 2.45L5.46666 3.51666C4.69166 3.56666 3.91666 3.61666 3.14166 3.69166L1.44166 3.85833C1.09166 3.89166 0.841656 4.2 0.874989 4.54166C0.908322 4.88333 1.20832 5.13333 1.55832 5.1L3.25832 4.93333C7.62499 4.5 12.025 4.66666 16.4417 5.10833C16.4667 5.10833 16.4833 5.10833 16.5083 5.10833C16.825 5.10833 17.1 4.86666 17.1333 4.54166C17.1583 4.2 16.9083 3.89166 16.5583 3.85833Z"
                  fill="#868F98"
                />
                <path
                  d="M15.025 6.28334C14.825 6.075 14.55 5.95834 14.2667 5.95834H3.73335C3.45002 5.95834 3.16668 6.075 2.97502 6.28334C2.78335 6.49167 2.67501 6.775 2.69168 7.06667L3.20835 15.6167C3.30002 16.8833 3.41668 18.4667 6.32502 18.4667H11.675C14.5833 18.4667 14.7 16.8917 14.7917 15.6167L15.3083 7.075C15.325 6.775 15.2167 6.49167 15.025 6.28334ZM10.3833 14.2917H7.60835C7.26668 14.2917 6.98335 14.0083 6.98335 13.6667C6.98335 13.325 7.26668 13.0417 7.60835 13.0417H10.3833C10.725 13.0417 11.0083 13.325 11.0083 13.6667C11.0083 14.0083 10.725 14.2917 10.3833 14.2917ZM11.0833 10.9583H6.91668C6.57502 10.9583 6.29168 10.675 6.29168 10.3333C6.29168 9.99167 6.57502 9.70834 6.91668 9.70834H11.0833C11.425 9.70834 11.7083 9.99167 11.7083 10.3333C11.7083 10.675 11.425 10.9583 11.0833 10.9583Z"
                  fill="#868F98"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
