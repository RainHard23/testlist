import React from 'react';
import {Search} from "common/components/Search/Search";
import s from './Nav.module.scss'
import sContainer from "styles/container.module.scss";
import phone from "../../../assets/image/header/nav/phone.svg"
import service from "../../../assets/image/header/nav/service.png"
import basket from "../../../assets/image/header/nav/basketicon.png"
import account from "../../../assets/image/header/nav/account.png"
import button from "../../../assets/image/header/nav/buttonIcon.png"
const Nav = () => {
    return (
        <div className={s.navBlock}>
            <div className={sContainer.container}>
                <div className={s.navContainer}>
                    <button className={s.navButtonCategory}>
                        <img className={s.navButtonIcon} src={button} alt="#"/>
                        <span className={s.buttonTitle}>Categories</span>
                    </button>
                    <Search />
                    <div className={s.navPhoneNumber}>
                        <img src={phone} alt="#"/>
                        <a href="#">+49 0761 123457</a>
                    </div>
                    <div className={s.navService}>
                        <a href="#">Repair Service</a>
                    </div>
                    <div className={s.navServiceIcon}>
                        <img src={service} alt="#"/>
                    </div>
                    <div className={s.navBasketIcon}>
                        <img src={basket} alt="#"/>

                    </div>
                    <div className={s.navAccount}>
                        <img src={account} alt="#"/>
                        <a href="#">My account</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;
// <Search />