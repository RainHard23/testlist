import React from 'react';
import s from './Footer.module.scss'
import sContainer from "styles/container.module.scss";
import teg from '../../../assets/image/footer/teg.png'
import facebook from '../../../assets/image/footer/facebook.svg'
import instagram from '../../../assets/image/footer/instagram.svg'
import twitter from '../../../assets/image/footer/twitter.svg'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={sContainer.container}>

                <div className={s.footerContainer}>
                    <div className={s.footerItem}>
                        <img src={teg} alt="#"/>
                        <div className={s.footerItemSent}>
                            <p>For the best offers sign up for the Our Newsletter</p>
                        </div>
                        <div className={s.footerInput}>
                            <input type="text"
                            placeholder={"E-mail"}
                            />
                            <button>Sent</button>
                        </div>
                    </div>
                    <div className={s.footerItem}>
                        <div className={s.footerItemContainer}>
                            <div className={s.footerItemSubitem}>
                                <h4>Menu</h4>
                                <span>Services</span>
                                <span>Shop</span>
                                <span>Blog</span>
                                <span>Contact</span>
                            </div>
                            <div className={s.footerItemSubitem}>
                                <h4>USEFUL LINK</h4>
                                <span>Repair Phone</span>
                                <span>Repair Laptop & PC</span>
                                <span>Repair Tablet</span>
                                <span>Repair Smartwatch</span>
                            </div>
                            <div className={s.footerItemSubitem}>
                                <h4>CONTACT US</h4>
                                <span>Germania (Konstans) Radolfzeller Str. 24 78467 Konstanz</span>
                                <span>+49 0761 123457</span>
                                <span>reapair@hallo-handy.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.footerItem}>
                        <h4 >SOCIAL NETWORK</h4>
                        <div className={s.footerIconContainer}>
                            <img className={s.footerIcon} src={facebook} alt=""/>
                            <img className={s.footerIcon} src={instagram} alt=""/>
                            <img className={s.footerIcon} src={twitter} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={s.footerCopyright}>
                    <div className={s.copyrightLine}></div>
                    <div className={s.copyrightPolicy}>
                        <div><span>Privacy policy / Consumer’s protection /. Cookies</span></div>
                        <div><p>
                            © 2023 hallo-handy.de - All rights reserved. Powered by IXOBIT LTD.
                        </p></div>


                    </div>

                </div>
            </div>
        </div>
    );
};

