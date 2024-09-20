import React, { useState, useEffect } from 'react';

const Footer = () => {

    return (<>

        <div id='footer'>
            <div className="main_wrap">
                
                <div class="logo_wrap"><img src="home_img/logo.svg" alt="" /></div>
                <ul>
                    <li><a href="">成團專區</a></li>
                    <li><a href="">我要投票</a></li>
                    <li><a href="">聯絡我們</a></li>
                    <li><a href="">常見問題</a></li>
                    <li><a href="">會員專區</a></li>
                </ul>

                <div className="copyRight">© Mélange. All Rights Reserved.</div>
            </div>
        </div>

    </>);
};

export default Footer;
