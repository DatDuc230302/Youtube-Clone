import classNames from 'classnames/bind';
import styles from './currentUser.module.scss';
import { currentUserApi1 as api1, currentUserApi2 as api2, currentUserApi3 as api3 } from './currentUserApi';
import { useDispatch } from 'react-redux';
import { alert } from '../../../../redux/actions/alert';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CurrentUser() {
    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <img
                        className={cx('header-avatar')}
                        src={require('../../../../assets/imgs/chaotic/user.jpg')}
                        alt=""
                    />
                    <div className={cx('header-info')}>
                        <span className={cx('header-name')}>Đạt Đức</span>
                        <span className={cx('header-nickname')}>@atuc7750</span>
                        <span className={cx('header-manage')}>Quản lý Tài khoản Google của bạn</span>
                    </div>
                </div>
                <div className={cx('list')}>
                    {api1.map((item, index) => (
                        <div onClick={() => dispatch(alert(true))} key={index} className={cx('item')}>
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                            {!!item.more && (
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
                                            d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
                                        ></path>
                                    </g>
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
                <div className={cx('list')}>
                    {api2.map((item, index) => (
                        <div onClick={() => dispatch(alert(true))} key={index} className={cx('item')}>
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                            {!!item.more && (
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
                                            d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
                                        ></path>
                                    </g>
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
                <div className={cx('list')}>
                    {api3.map((item, index) => (
                        <div onClick={() => dispatch(alert(true))} key={index} className={cx('item')}>
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                            {!!item.more && (
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
                                            d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
                                        ></path>
                                    </g>
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
                <div className={cx('list')}>
                    <div onClick={() => dispatch(alert(true))} className={cx('item')}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                        >
                            <g>
                                <path
                                    fill="#f1f1f1"
                                    d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                                ></path>
                            </g>
                        </svg>
                        <span className={cx('item-title')}>Cài đặt</span>
                    </div>
                </div>
                <div className={cx('list')}>
                    <div onClick={() => dispatch(alert(true))} className={cx('item')}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                        >
                            <g>
                                <path
                                    fill="#f1f1f1"
                                    d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                                ></path>
                            </g>
                        </svg>
                        <span className={cx('item-title')}>Trợ giúp</span>
                    </div>
                    <div onClick={() => dispatch(alert(true))} className={cx('item')}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                        >
                            <g>
                                <path
                                    fill="#f1f1f1"
                                    d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                                ></path>
                            </g>
                        </svg>
                        <span className={cx('item-title')}>Gữi ý kiến phản hồi</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentUser;
