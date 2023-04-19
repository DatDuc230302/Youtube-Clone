import classNames from 'classnames/bind';
import styles from './shorts.module.scss';
import { useState, useEffect } from 'react';
import { shortsApi as api } from '../../api/shorts';
import { useDispatch } from 'react-redux';
import { alert } from '../../redux/actions/alert';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Shorts() {
    const [mute, setMute] = useState(false);
    const [count, setCount] = useState(-1);

    const dispatch = useDispatch();

    const bp1 = useMediaQuery({ maxWidth: 1456 });
    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 1128 });
    const bp3 = useMediaQuery({ maxWidth: 767 });

    function handleAction(index: number): void {
        const video = document.getElementsByClassName(cx('video-item'))[index] as HTMLVideoElement;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    function handleMute(index: number): void {
        setCount(index);
        if (index === count) {
            setCount(-1);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('list', bp3 && 'bp3')}>
                    {api.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <div className={cx('video')}>
                                <video
                                    onClick={() => handleAction(index)}
                                    tabIndex={-1}
                                    className={cx('video-item')}
                                    src={item.video}
                                    muted={index === count}
                                    autoPlay={index === 0}
                                    loop={true}
                                ></video>
                                <div className={cx('video-info')}>
                                    <span className={cx('videoInfo-content')}>{item.content}</span>
                                    <div className={cx('videoInfo-detail')}>
                                        <img className={cx('videoDetail-avatar')} src={item.avatar} alt="" />
                                        <span className={cx('videoDetail-name')}>{item.name}</span>
                                        <div className={cx('videoDetail-btn', bp3 && 'bp3')}>
                                            <span
                                                onClick={() => dispatch(alert(true))}
                                                className={cx('videoDetail-register')}
                                            >
                                                Đăng ký
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleMute(index)} className={cx('video-volume')}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                        width={24}
                                        height={24}
                                    >
                                        <g>
                                            {index === count ? (
                                                <path
                                                    fill="#f1f1f1"
                                                    d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                                                ></path>
                                            ) : (
                                                <path
                                                    fill="#f1f1f1"
                                                    d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                                                ></path>
                                            )}
                                        </g>
                                    </svg>
                                </div>
                                {/* <div onClick={() => handleAction(index)} className={cx('video-action')}>
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                    >
                                        <g>
                                            {index === count && (
                                                <path fill="#f1f1f1" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
                                            )}

                                            {index !== count && <path fill="#f1f1f1" d="M8 5v14l11-7z"></path>}
                                        </g>
                                    </svg>
                                </div> */}
                            </div>
                            <div className={cx('actions', bp3 && 'bp3')}>
                                <div onClick={() => dispatch(alert(true))} className={cx('btn')}>
                                    <div className={cx('btn-icon')}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            width={24}
                                            height={24}
                                        >
                                            <g>
                                                <path
                                                    fill="#f1f1f1"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M25.8411 11.9977C26.6778 11.9977 27.4597 12.414 27.9268 13.1082C28.6951 14.2498 28.6876 15.745 27.908 16.8789L27.1796 17.9383L27.8546 19.5037C28.257 20.4368 28.1597 21.5102 27.596 22.3558L26.4999 24V25.9977C26.4999 27.1023 25.6044 27.9977 24.4999 27.9977L11.9999 27.9976C10.8953 27.9976 9.99987 27.1022 9.99987 25.9976V12.8264C9.99987 11.9927 10.2604 11.1799 10.7449 10.5015L15.8632 3.33586C16.0776 3.03569 16.4721 2.92531 16.8112 3.07062C18.5762 3.82706 19.5347 5.74955 19.0766 7.6144L17.9999 11.9976L25.8411 11.9977ZM5 13.4999C3.89543 13.4999 3 14.3954 3 15.4999V25.9999C3 27.1045 3.89543 27.9999 5 27.9999H8V13.4999H5Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className={cx('btn-title')}>{item.likes}</span>
                                </div>
                                <div onClick={() => dispatch(alert(true))} className={cx('btn')}>
                                    <div className={cx('btn-icon')}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            width={24}
                                            height={24}
                                        >
                                            <g>
                                                <path
                                                    fill="#f1f1f1"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6.15895 20.0023C5.32221 20.0023 4.54031 19.586 4.07317 18.8918C3.30492 17.7502 3.31241 16.255 4.09205 15.1211L4.82045 14.0617L4.14538 12.4963C3.74297 11.5632 3.84031 10.4898 4.40399 9.64424L5.50013 8.00004L5.50013 6.00231C5.50013 4.89774 6.39557 4.00231 7.50014 4.00232L20.0001 4.00239C21.1047 4.0024 22.0001 4.89783 22.0001 6.0024L22.0001 19.1736C22.0001 20.0073 21.7396 20.8201 21.2551 21.4985L16.1368 28.6641C15.9224 28.9643 15.5279 29.0747 15.1888 28.9294C13.4238 28.1729 12.4653 26.2504 12.9234 24.3856L14.0001 20.0024L6.15895 20.0023ZM27 18.5001C28.1046 18.5001 29 17.6046 29 16.5001L29 6.00006C29 4.89549 28.1046 4.00006 27 4.00006L24 4.00006L24 18.5001L27 18.5001Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className={cx('btn-title')}>Không thích</span>
                                </div>
                                <div onClick={() => dispatch(alert(true))} className={cx('btn')}>
                                    <div className={cx('btn-icon')}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            width={24}
                                            height={24}
                                        >
                                            <g>
                                                <path
                                                    fill="#f1f1f1"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.5 3C4.11929 3 3 4.11929 3 5.5V21.5C3 22.8807 4.11929 24 5.5 24H22.5L26.7474 28.5741C27.5513 29.4399 29 28.871 29 27.6895V24V5.5C29 4.11929 27.8807 3 26.5 3H5.5ZM8 10.5C8 9.67157 8.67157 9 9.5 9H22.5C23.3284 9 24 9.67157 24 10.5C24 11.3284 23.3284 12 22.5 12H9.5C8.67157 12 8 11.3284 8 10.5ZM8 16.5C8 15.6716 8.67157 15 9.5 15H18.5C19.3284 15 20 15.6716 20 16.5C20 17.3284 19.3284 18 18.5 18H9.5C8.67157 18 8 17.3284 8 16.5Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className={cx('btn-title')}>{item.comments}</span>
                                </div>
                                <div onClick={() => dispatch(alert(true))} className={cx('btn')}>
                                    <div className={cx('btn-icon')}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            width={24}
                                            height={24}
                                        >
                                            <g>
                                                <path
                                                    fill="#f1f1f1"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M17.7375 5.26556L28.6745 15.2624C29.1083 15.6589 29.1083 16.3422 28.6745 16.7387L17.7375 26.7356C17.0958 27.3222 16.0628 26.8669 16.0628 25.9975V21.6217C16.0628 21.6217 16.0627 21.6217 16.0626 21.6217C9.92564 21.6217 6.69114 23.9378 5.1615 25.5968C4.80726 25.981 3.97329 25.7343 4.00015 25.2125C4.22558 20.8321 5.86088 10.8892 16.0626 10.8892C16.0627 10.8892 16.0628 10.8892 16.0628 10.8892V6.00368C16.0628 5.13426 17.0958 4.67898 17.7375 5.26556Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className={cx('btn-title')}>Chia sẻ</span>
                                </div>
                                <div onClick={() => dispatch(alert(true))} className={cx('btn')}>
                                    <div className={cx('btn-icon')}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            width={24}
                                            height={24}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                            >
                                                <g>
                                                    <path
                                                        fill="#f1f1f1"
                                                        d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </svg>
                                    </div>
                                </div>
                                <img className={cx('btn-img')} src={item.avatar} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shorts;
