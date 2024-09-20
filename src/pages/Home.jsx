import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    ////

    const starRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const tkWrap = document.querySelector('.tk_wrap');
        const tkBox = document.querySelector('.tk_box');
        const showBox = document.querySelector('#show_box');
        if (!tkWrap || !tkBox || !showBox) {
            console.error("One of the elements (.tk_wrap, .tk_box, #show_box) not found.");
            return;
        }
        const timeoutId = setTimeout(() => {
            // 动画代码
        }, 0);

        // 處理鼠標移動的線條變色效果
        const colors = ['#ff1491', '#ff63b6', '#eae72d', '#cc24ff'];

        const handleMouseMove = (e) => {
            const index = Math.floor((e.clientX / window.innerWidth) * (colors.length - 1));
            const nextIndex = (index + 1) % colors.length;

            if (lineRef.current) {
                lineRef.current.style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[nextIndex]})`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // GSAP滾動觸發動畫
        // const scrollTriggerInstance = gsap.from('.tk_wrap', {
        //     scrollTrigger: {
        //         trigger: '.tk_box',
        //         start: 'top center',
        //         end: 'top 20%',
        //         scrub: true,
        //     },
        //     rotation: 45,
        //     yPercent: '-310',
        // });

        // 無限滾動動畫
        const infiniteScrollAnimation = gsap.to('#show_box', {
            x: -2000,
            duration: 20,
            repeat: -1,
            ease: 'none',
        });

        // 星星旋轉與縮放動畫
        if (starRef.current) {
            gsap.to(starRef.current, {
                rotation: 360,
                duration: 20,
                ease: 'linear',
                repeat: -1,
            });
            gsap.to(starRef.current, {
                scale: 1.45,
                duration: 2,
                ease: 'linear',
                yoyo: true,
                repeat: -1,
            });
        }

        // 清理事件監聽器和動畫
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);

            // 清除所有 ScrollTrigger 觸發器
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());


        };
    }, []);

    ////

    return (
        <>

            <header>
                <nav>
                    <a href="#" className="logo"><img src="/public/home_img/logo.svg" alt="" /></a>
                    <div className="btn_menu_wrap">
                        <div className="search_box"><img src="/public/home_img/icon_search.svg" /><input type="text" placeholder="搜尋 | 尋找包場" /></div>
                        <div className="vote_btn"><a href="#">發起揪團投票</a></div>
                        <div className="menu"><img src="" alt="" /></div>
                    </div>
                </nav>
            </header>
            {/* <section id="background">
                <svg>
                    <filter id="noise">
                        <feTurbulence id="turbilence" baseFrequency="0.1">
                            <animate attributeName="baseFrequency" dur="50s" values="0.9 0.9; 0.8 0.8; 0.9 0.9;"
                                repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                    </filter>
                </svg>
            </section> */}
            <section id="banner">
                <div className="title"><img src="/public/home_img/VOIN_Joy.svg" alt="" /></div>
                <div className="text">
                    <div>投出你想參加的場次</div>
                    <div>Vote for Tickets</div>
                </div>
                <div className="banner_content">
                    <div className="content_wrap">
                        <div className="tk target"><img src="/public/home_img/tk.svg" alt="" /></div>
                        <div className="line"></div>
                        <img id="star" className="star" src="/public/home_img/star.svg" alt="" />
                    </div>
                </div>
            </section>
            <section id="newGroup">
                <div className="title_wrap">
                    <div className="title_en"><span>Newest Group</span></div>
                    <div className="title_cn"><span>最新成團</span></div>
                </div>
                <div className="tk_box">
                    <div className="tk_wrap">
                        <div className="tk tk_l">
                            <div className="type_bg">
                                <div>Movie</div>
                            </div>
                        </div>
                        <div className="tk tk_md">
                            <div className="img_box"><img src="/public/home_img/item1.jpg" alt="" /></div>
                            <div className="content_box">
                                <h1>異形全系列觀影會</h1>
                                <div className="text">
                                    <p>想和喜歡異型系列的粉絲揪一場1979開始的全系列私人連映會</p>
                                </div>
                                <div className="pl"><img src="/public/home_img/seat.svg" alt="" />
                                    <p>8</p>
                                </div>
                                <div className="tag_wrap">
                                    <div className="tag">
                                        <p>放映會
                                        </p>
                                    </div>
                                    <div className="tag">
                                        <p>抱臉蟲成長日誌</p>
                                    </div>
                                    <div className="tag">
                                        <p>雷利史考特粉絲在哪裡
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tk tk_r">
                            <div className="wrap">
                                <div className="year">2024</div>
                                <div className="date">02.19</div>
                                <div className="wd">週六</div>
                                <div className="time">01:00 PM</div>
                                <div className="location"><img src="/public/home_img/location_on.svg" alt="" />台北市</div>
                            </div>
                        </div>
                        <div className="arr_more">
                            <div className="text">More</div>
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="direction">
                <div className="content">
                    <div className="sec1">
                        <div className="title_cn">想開團?</div>
                        <div className="title_main">
                            <div className="title_en">Initiate a Vote</div>
                            <div className="text_s">從意願調查到收款完整規劃, 不再擔心萬人+1 零人匯款</div>
                        </div>
                        <div className="text1"><img src="/public/home_img/Begging-Hand-Coin-2--Streamline-Ultimate.svg" alt="" />
                            <div className="slogan">自動化確認收款</div>
                        </div>
                        <div className="text2"><img src="/public/home_img/mail.svg" alt="" />
                            <div className="slogan">成團自動發信通知</div>
                        </div>
                    </div>
                    <div className="sec2">
                        <div className="title_cn">想揪團?</div>
                        <div className="title_main">
                            <div className="title_en">Just Enjoy</div>
                            <div className="text_s">隨時發起投票，想揪什麼就揪！
                                或許有其他人替你實現願望！</div>
                        </div>
                        <div className="text1"><img src="/public/home_img/vote.svg" alt="" />建立投票尋找志同道合的夥伴</div>
                        <div className="text2"><img src="/public/home_img/lead.svg" alt="" />自己開團 or 向同好發送開團腦波</div>
                    </div>

                </div>
                <div className="type_banner">
                    <div className="others">
                        <div className="en">Others</div>
                        <div className="cn">其他</div>
                    </div>
                    <div className="reading_club">
                        <div className="en">Reading Club</div>
                        <div className="cn">讀書會</div>
                    </div>
                    <div className="tea_party">
                        <div className="en">Tea Party</div>
                        <div className="cn">茶會</div>
                    </div>
                    <div className="movie">
                        <div className="en">Movie</div>
                        <div className="cn">電影</div>
                    </div>
                </div>
            </section>
            <section id="voting">
                <div className="title_wrap">
                    <div className="title_en"><span>Let's Vote</span></div>
                    <div className="title_cn"><span>正在揪團</span></div>
                </div>
                <div className="htk_wrap">

                    <div className="htk_box">
                        <div className="htk_img">
                            <div className="type_tag">Reading Club</div>
                            <div className="img_wrap"><img src="/public/home_img/cs_men.jpg" alt="" /></div>
                        </div>
                        <div className="htk_content">
                            <div className="e_title">鏈鋸人漫畫讀書分享會</div>
                            <div className="e_date">2024.3.25</div>
                            <div className="e_location"><img src="/public/home_img/location_on.svg" alt="" />台中市</div>
                        </div>
                    </div>
                    <div className="htk_box">
                        <div className="htk_img">
                            <div className="type_tag">Reading Club</div>
                            <div className="img_wrap"><img src="/public/home_img/cs_men.jpg" alt="" /></div>
                        </div>
                        <div className="htk_content">
                            <div className="e_title">鏈鋸人漫畫讀書分享會</div>
                            <div className="e_date">2024.3.25</div>
                            <div className="e_location"><img src="/public/home_img/location_on.svg" alt="" />台中市</div>
                        </div>
                    </div>
                    <div className="htk_box">
                        <div className="htk_img">
                            <div className="type_tag">Movie</div>
                            <div className="img_wrap"><img src="/public/home_img/item_xMen.jpg" alt="" /></div>
                        </div>
                        <div className="htk_content">
                            <div className="e_title">X戰警全系列電影馬拉松</div>
                            <div className="e_date">2024.11.25</div>
                            <div className="e_location"><img src="/public/home_img/location_on.svg" alt="" />台北市</div>
                        </div>
                    </div>
                </div>
                <div className="htk_btn">
                    <div className="arr_more">
                        <div className="text">Vote</div>
                        <div className="arrow"></div>
                    </div>
                </div>

            </section>
            <section id="pic_show">
                <div id="show_box">
                    <img id="pic_line" src="/public/home_img/picline.png" alt="" />
                </div>
            </section>
            <section id="follow_news">
                <div className="content">
                    <div className="half_circle">
                    </div>
                    <div className="text"><img src="/public/home_img/follow_text.svg" alt="" /></div>
                    <div className="email_box">
                        <img src="/public/home_img/mail_w.svg" alt="" />
                        <input type="text" placeholder="追蹤最新開團消息" />
                    </div>

                </div>
            </section>
        </>)
}
export default Home