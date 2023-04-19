import classNames from 'classnames/bind';
import styles from './notify.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { notifysApi as api } from '../../../../api/notifys';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { alert } from '../../../../redux/actions/alert';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Notify() {
    const [showScroll, setShowScroll] = useState(true);
    const dispatch = useDispatch();

    const bp1 = useMediaQuery({ maxWidth: 1456 });
    // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const bp3 = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={cx('wrapper', bp3 && 'bp3')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <span className={cx('header-title')}>Thông báo</span>
                    <div onClick={() => dispatch(alert(true))} className={cx('header-icon')}>
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
                                    d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <Scrollbars
                    onMouseOver={() => setShowScroll(false)}
                    onMouseLeave={() => setShowScroll(true)}
                    autoHide={showScroll}
                    className={cx('scrollbar')}
                    renderTrackVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                backgroundColor: '#282828',
                                right: '4px',
                                bottom: '0',
                                top: '0px',
                                width: '4px',
                            }}
                        />
                    )}
                    renderThumbVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                width: '8px',
                                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
                                backgroundColor: '#ccc',
                                opacity: '0.5',
                            }}
                        />
                    )}
                    style={{ width: bp3 ? 390 : 490, height: 603.2 }}
                >
                    <div className={cx('list')}>
                        {api.map((item, index) => (
                            <NavLink to={`/watch/${item.link}`} key={index} className={cx('item')}>
                                <img className={cx('item-avatar')} src={item.avatar} alt="" />
                                <div className={cx('item-info')}>
                                    <span className={cx('item-content')}>{item.content}</span>
                                    <span className={cx('item-time')}>{item.time} trước</span>
                                </div>
                                <div className={cx('item-thumb')}>
                                    <img className={cx('item-contentImg')} src={item.img} alt="" />
                                </div>
                                <div className={cx('item-more')}>
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
                                                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Notify;
