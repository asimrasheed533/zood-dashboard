import React from "react";
import ThemeSwitchingButton from "./ThemeSwitchingButton";

export default function Header() {
  return (
    <>
      <div className="dashboard__main__header">
        <div className="dashboard__main__header__right">
          {/* <LanguageSwitchingButton /> */}
          <ThemeSwitchingButton />
          {/* <NotificationButton /> */}
        </div>
      </div>
    </>
  );
}
