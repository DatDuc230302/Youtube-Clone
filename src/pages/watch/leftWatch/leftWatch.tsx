import classNames from 'classnames/bind';
import styles from './leftWatch.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { alert } from '../../../redux/actions/alert';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function LeftWatch({ currentUrl }) {
    const [api, setApi] = useState([]);
    const bp1 = useMediaQuery({ maxWidth: 1456 });
    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 1128 });
    const bp3 = useMediaQuery({ maxWidth: 767 });

    const dispatch = useDispatch();

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        const result = await axios.get(`https://server-youtube.onrender.com/watches/searchOne/${currentUrl}`);
        const data = await result.data;
        setApi([...api, data]);
    };

    return (
        <div className={cx('wrapper', bp2 && 'bp2', bp3 && 'bp3')}>
            {api.map((item, index) => (
                <div key={index} className={cx('inner')}>
                    <span className={cx('header')}>{item.content}</span>
                    <div className={cx('info', bp3 && 'bp3')}>
                        <div className={cx('info-author', bp3 && 'bp3')}>
                            <img className={cx('infoAuthor-avatar')} src={item.avatar} alt="" />
                            <div className={cx('infoAuthor-detail')}>
                                <span className={cx('infoDetail-name')}>{item.name}</span>
                                <span className={cx('infoDetail-registers')}>{item.subscriber} người đăng ký</span>
                            </div>
                            <span onClick={() => dispatch(alert(true))} className={cx('infoAuthor-btn')}>
                                Đăng ký
                            </span>
                        </div>
                        <div className={cx('info-actions')}>
                            <div className={cx('infoActions-interact')}>
                                <Tippy
                                    offset={[0, 50]}
                                    render={() => <div className={cx('tooltip')}>Tôi thích video này</div>}
                                >
                                    <div onClick={() => dispatch(alert(true))} className={cx('infoInteract-btn')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 270 270"
                                            className={cx('infoInteract-icon')}
                                            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                                        >
                                            <g clipPath="url(#__lottie_element_41)">
                                                <g
                                                    clipPath="url(#__lottie_element_43)"
                                                    transform="matrix(1.0880000591278076,0,0,1.0880000591278076,69.95299530029297,67.9433822631836)"
                                                    opacity="1"
                                                >
                                                    <g transform="matrix(1,0,0,1,60,60)" opacity="1">
                                                        <path
                                                            fill="white"
                                                            strokeLinecap="butt"
                                                            strokeLinejoin="miter"
                                                            fillOpacity="0"
                                                            strokeMiterlimit="4"
                                                            stroke="rgb(255,255,255)"
                                                            strokeOpacity="1"
                                                            strokeWidth="4"
                                                            d=" M25.025999069213867,-4.00600004196167 C25.025999069213867,-4.00600004196167 5.992000102996826,-3.996999979019165 5.992000102996826,-3.996999979019165 C5.992000102996826,-3.996999979019165 11.012999534606934,-22.983999252319336 11.012999534606934,-22.983999252319336 C12.230999946594238,-26.90399932861328 13,-31.94300079345703 8.994000434875488,-31.981000900268555 C7,-32 5,-32 4.021999835968018,-31.007999420166016 C4.021999835968018,-31.007999420166016 -19.993000030517578,-5.03000020980835 -19.993000030517578,-5.03000020980835 C-19.993000030517578,-5.03000020980835 -20.027999877929688,32.025001525878906 -20.027999877929688,32.025001525878906 C-20.027999877929688,32.025001525878906 20.97599983215332,31.986000061035156 20.97599983215332,31.986000061035156 C25.010000228881836,31.986000061035156 26.198999404907227,29.562000274658203 26.99799919128418,25.985000610351562 C26.99799919128418,25.985000610351562 31.972000122070312,4.026000022888184 31.972000122070312,4.026000022888184 C33,-0.6930000185966492 30.392000198364258,-4.00600004196167 25.025999069213867,-4.00600004196167z"
                                                        ></path>
                                                    </g>
                                                    <g transform="matrix(1,0,0,1,60,60)" opacity="1">
                                                        <path
                                                            fill="white"
                                                            strokeLinecap="butt"
                                                            strokeLinejoin="miter"
                                                            fillOpacity="0"
                                                            strokeMiterlimit="4"
                                                            stroke="rgb(255,255,255)"
                                                            strokeOpacity="1"
                                                            strokeWidth="4"
                                                            d=" M-19.986000061035156,-4.03000020980835 C-19.986000061035156,-4.03000020980835 -36.020999908447266,-3.996999979019165 -36.020999908447266,-3.996999979019165 C-36.020999908447266,-3.996999979019165 -36.00199890136719,31.993000030517578 -36.00199890136719,31.993000030517578 C-36.00199890136719,31.993000030517578 -20.030000686645508,32.02299880981445 -20.030000686645508,32.02299880981445 C-20.030000686645508,32.02299880981445 -19.986000061035156,-4.03000020980835 -19.986000061035156,-4.03000020980835z"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className={cx('infoInteract-title')}>{item.likes}</span>
                                    </div>
                                </Tippy>
                                <Tippy
                                    offset={[0, 50]}
                                    render={() => <div className={cx('tooltip')}>Tôi không thích video này</div>}
                                >
                                    <div onClick={() => dispatch(alert(true))} className={cx('infoInteract-btn')}>
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            className={cx('infoInteract-icon2')}
                                        >
                                            <g>
                                                <path
                                                    fill="white"
                                                    d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                </Tippy>
                            </div>
                            <Tippy offset={[0, 50]} render={() => <div className={cx('tooltip')}>Chia sẻ</div>}>
                                <div onClick={() => dispatch(alert(true))} className={cx('infoActions-share')}>
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                        className={cx('infoShare-icon')}
                                    >
                                        <g mirror-in-rtl="">
                                            <path
                                                fill="#f1f1f1"
                                                d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span className={cx('infoShare-title')}>Chia sẻ</span>
                                </div>
                            </Tippy>
                            {!bp1 && (
                                <Tippy
                                    offset={[0, 50]}
                                    render={() => <div className={cx('tooltip')}>Tạo đoạn video</div>}
                                >
                                    <div onClick={() => dispatch(alert(true))} className={cx('infoActions-cut')}>
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            className={cx('infoCut-icon')}
                                        >
                                            <g>
                                                <path
                                                    fill="#f1f1f1"
                                                    d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"
                                                ></path>
                                            </g>
                                        </svg>
                                        <span className={cx('infoCut-title')}>Tạo đoạn video</span>
                                    </div>
                                </Tippy>
                            )}

                            <div onClick={() => dispatch(alert(true))} className={cx('infoActions-more')}>
                                <svg
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    width={24}
                                    height={24}
                                >
                                    <g>
                                        <path
                                            fill="#f1f1f1"
                                            d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={cx('detail')}>
                        <span className={cx('detail-time')}>
                            {item.views} lượt xem {item.time} trước
                        </span>
                        <span className={cx('detail-content')}>{item.description}</span>
                    </div>
                    <div className={cx('comments')}>
                        <span className={cx('comments-off')}>Tính năng bình luận đã bị tắt. </span>
                        <span className={cx('comments-more')}>Tìm hiểu thêm</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LeftWatch;
