import React from "react";
import ThemeSwitchingButton from "./ThemeSwitchingButton";
import NotificationButton from "./NotificationButton";
import User from "./User";
import LanguageSwitchingButton from "./LanguageSwitchingButton";

export default function Header() {
  return (
    <>
      <div className="dashboard__main__header">
        <div className="dashboard__main__header__right">
          <LanguageSwitchingButton />
          <ThemeSwitchingButton />
          <NotificationButton />
          <User />
        </div>
      </div>
    </>
  );
}
