import cx from "classnames";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronIcon } from "../../assets/icon";

import styles from "./home.module.scss";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  console.log({ location });
  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };

  const onClickItem = (path) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <section className={styles.wrapper}>
      <h1>드롭다운</h1>
      <div className={styles.dropdownWrapper}>
        <div className={styles.dropdownInfo} onClick={onClickIcon}>
          <p>Dropdown</p>
          <ChevronIcon
            className={cx(styles.icon, { [styles.isOpen]: isOpen })}
          />
        </div>
        <menu className={cx(styles.itemWrapper, { [styles.isOpen]: isOpen })}>
          <li className={styles.item} onClick={onClickItem("/auth/login")}>
            로그인
          </li>
          <li className={styles.item} onClick={onClickItem("/auth/register")}>
            회원가입
          </li>
        </menu>
      </div>
    </section>
  );
};

export default Home;
