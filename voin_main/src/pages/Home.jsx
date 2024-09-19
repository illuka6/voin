import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        // 處理鼠標移動的線條變色效果
        const colors = ['#ff1491', '#ff63b6', '#eae72d', '#cc24ff'];

        const handleMouseMove = (e) => {
            const index = Math.floor((e.clientX / window.innerWidth) * (colors.length - 1));
            const nextIndex = (index + 1) % colors.length;

            document.querySelector('.line').style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[nextIndex]})`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // GSAP滾動觸發動畫
        gsap.from('.tk_wrap', {
            scrollTrigger: {
                trigger: '.tk_box',
                start: 'top center',
                end: 'top 20%',
                scrub: true,
            },
            rotation: 45,
            yPercent: '-310',
        });

        // 無限滾動動畫
        gsap.to('#show_box', {
            x: -2000,
            duration: 20,
            repeat: -1,
            ease: 'none',
        });

        // 星星旋轉與縮放動畫
        const star = document.querySelector('.star');
        gsap.to(star, {
            rotation: 360,
            duration: 20,
            ease: 'linear',
            repeat: -1,
        });
        gsap.to(star, {
            scale: 1.45,
            duration: 2,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
        });

        // 清理事件監聽器和動畫
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            ScrollTrigger.kill();
        };
    }, []);



    return (
        <>

            <header>
                <nav>
                    <a href="#" class="logo"><img src="./img/banner/logo.svg" alt="" /></a>
                    <div class="btn_menu_wrap">
                        <div class="search_box"><img src="./img/banner/icon_search.svg" /><input type="text" placeholder="搜尋 | 尋找包場" /></div>
                        <div class="vote_btn"><a href="#">發起揪團投票</a></div>
                        <div class="menu"><img src="" alt="" /></div>
                    </div>
                </nav>
            </header>
            <section id="background">
                <svg>
                    <filter id="noise">
                        <feTurbulence id="turbilence" baseFrequency="0.1">
                            <animate attributeName="baseFrequency" dur="50s" values="0.9 0.9; 0.8 0.8; 0.9 0.9;"
                                repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                    </filter>
                </svg>
            </section>
            <section id="banner">
                <div class="title"><img src="./img/banner/VOIN_Joy.svg" alt="" /></div>
                <div class="text">
                    <div>投出你想參加的場次</div>
                    <div>Vote for Tickets</div>
                </div>
                <div class="banner_content">
                    <div class="content_wrap">
                        <div class="tk target"><img src="./img/banner/tk.svg" alt="" /></div>
                        <div class="line"></div>
                        <img id="star" class="star" src="./img/banner/star.svg" alt="" />
                    </div>
                </div>
            </section>
            <section id="newGroup">
                <div class="title_wrap">
                    <div class="title_en"><span>Newest Group</span></div>
                    <div class="title_cn"><span>最新成團</span></div>
                </div>
                <div class="tk_box">
                    <div class="tk_wrap">
                        <div class="tk tk_l">
                            <div class="type_bg">
                                <div>Movie</div>
                            </div>
                        </div>
                        <div class="tk tk_md">
                            <div class="img_box"><img src="./img/banner/item1.jpg" alt="" /></div>
                            <div class="content_box">
                                <h1>異形全系列觀影會</h1>
                                <div class="text">
                                    <p>想和喜歡異型系列的粉絲揪一場1979開始的全系列私人連映會</p>
                                </div>
                                <div class="pl"><img src="./img/banner/seat.svg" alt="" />
                                    <p>8</p>
                                </div>
                                <div class="tag_wrap">
                                    <div class="tag">
                                        <p>放映會
                                        </p>
                                    </div>
                                    <div class="tag">
                                        <p>抱臉蟲成長日誌</p>
                                    </div>
                                    <div class="tag">
                                        <p>雷利史考特粉絲在哪裡
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="tk tk_r">
                                <div class="wrap">
                                    <div class="year">2024</div>
                                    <div class="date">02.19</div>
                                    <div class="wd">週六</div>
                                    <div class="time">01:00 PM</div>
                                    <div class="location"><img src="./img/banner/location_on.svg" alt="" />台北市</div>
                                </div>
                            </div>
                        </div>
                        <div class="arr_more">
                            <div class="text">More</div>
                            <div class="arrow"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="direction">
                <div class="content">
                    <div class="sec1">
                        <div class="title_cn">想開團?</div>
                        <div class="title_main">
                            <div class="title_en">Initiate a Vote</div>
                            <div class="text_s">從意願調查到收款完整規劃, 不再擔心萬人+1 零人匯款</div>
                        </div>
                        <div class="text1"><img src="./img/banner/Begging-Hand-Coin-2--Streamline-Ultimate.svg" alt="" />
                            <div class="slogan">自動化確認收款</div>
                        </div>
                        <div class="text2"><img src="./img/banner/mail.svg" alt="" />
                            <div class="slogan">成團自動發信通知</div>
                        </div>
                    </div>
                    <div class="sec2">
                        <div class="title_cn">想揪團?</div>
                        <div class="title_main">
                            <div class="title_en">Just Enjoy</div>
                            <div class="text_s">隨時發起投票，想揪什麼就揪！
                                或許有其他人替你實現願望！</div>
                        </div>
                        <div class="text1"><img src="./img/banner/vote.svg" alt="" />建立投票尋找志同道合的夥伴</div>
                        <div class="text2"><img src="./img/banner/lead.svg" alt="" />自己開團 or 向同好發送開團腦波</div>
                    </div>

                </div>
                <div class="type_banner">
                    <div class="others">
                        <div class="en">Others</div>
                        <div class="cn">其他</div>
                    </div>
                    <div class="reading_club">
                        <div class="en">Reading Club</div>
                        <div class="cn">讀書會</div>
                    </div>
                    <div class="tea_party">
                        <div class="en">Tea Party</div>
                        <div class="cn">茶會</div>
                    </div>
                    <div class="movie">
                        <div class="en">Movie</div>
                        <div class="cn">電影</div>
                    </div>
                </div>
            </section>
            <section id="voting">
                <div class="title_wrap">
                    <div class="title_en"><span>Let's Vote</span></div>
                    <div class="title_cn"><span>正在揪團</span></div>
                </div>
                <div class="htk_wrap">

                    <div class="htk_box">
                        <div class="htk_img">
                            <div class="type_tag">Reading Club</div>
                            <div class="img_wrap"><img src="./img/banner/鏈鋸人.jpg" alt="" /></div>
                        </div>
                        <div class="htk_content">
                            <div class="e_title">鏈鋸人漫畫讀書分享會</div>
                            <div class="e_date">2024.3.25</div>
                            <div class="e_location"><img src="./img/banner/location_on.svg" alt="" />台中市</div>
                        </div>
                    </div>
                    <div class="htk_box">
                        <div class="htk_img">
                            <div class="type_tag">Reading Club</div>
                            <div class="img_wrap"><img src="./img/banner/鏈鋸人.jpg" alt="" /></div>
                        </div>
                        <div class="htk_content">
                            <div class="e_title">鏈鋸人漫畫讀書分享會</div>
                            <div class="e_date">2024.3.25</div>
                            <div class="e_location"><img src="./img/banner/location_on.svg" alt="" />台中市</div>
                        </div>
                    </div>
                    <div class="htk_box">
                        <div class="htk_img">
                            <div class="type_tag">Movie</div>
                            <div class="img_wrap"><img src="./img/banner/item_xMen.jpg" alt="" /></div>
                        </div>
                        <div class="htk_content">
                            <div class="e_title">X戰警全系列電影馬拉松</div>
                            <div class="e_date">2024.11.25</div>
                            <div class="e_location"><img src="./img/banner/location_on.svg" alt="" />台北市</div>
                        </div>
                    </div>
                </div>
                <div class="htk_btn">
                    <div class="arr_more">
                        <div class="text">Vote</div>
                        <div class="arrow"></div>
                    </div>
                </div>

            </section>
            <section id="pic_show">
                <div id="show_box">
                    <img id="pic_line" src="./img/banner/picline.png" alt="" />
                </div>
            </section>
            <section id="follow_news">
                <div class="content">
                    <div class="half_circle">
                    </div>
                    <div class="text"><img src="./img/banner/follow_text.svg" alt="" /></div>
                    <div class="email_box">
                        <img src="./img/banner/mail_w.svg" alt="" />
                        <input type="text" placeholder="追蹤最新開團消息" />
                    </div>

                </div>
            </section>
        </>)
}
export default Home