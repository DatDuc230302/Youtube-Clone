import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';
import {
    sidebarApi1 as api1,
    sidebarApi2 as api2,
    sidebarApi3 as api3,
    sidebarApi4 as api4,
    sidebarApi5 as api5,
    sidebarApi6 as api6,
} from './sidebarApi';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { alert } from '../../../redux/actions/alert';

const cx = classNames.bind(styles);

const links1 = [
    'Giới thiệu',
    'Báo chí',
    'Bản quyền',
    'Liên hệ với chúng tôi',
    'Người sáng tạo',
    'Quảng cáo',
    'Nhà phát triển',
];

const links2 = [
    'Điều khoản',
    'Quyền riêng tư',
    'Chính sách và an toàn',
    'Cách YouTube hoạt động',
    'Thử các tính năng mới',
];

function SidebarScroll() {
    const [limit, setLimit] = useState(false);
    const [showScroll, setShowScroll] = useState(true);

    const dispatch = useDispatch();

    return (
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
                        backgroundColor: '#0f0f0f',
                        right: '4px',
                        bottom: '2px',
                        top: '2px',
                        borderRadius: '3px',
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
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
                        backgroundColor: '#cccccc',
                        opacity: '0.5',
                    }}
                />
            )}
            style={{ width: 240, height: 709 }}
        >
            <div className={cx('inner')}>
                <div className={cx('list')}>
                    {api1.map((item, index) => (
                        <NavLink
                            key={index}
                            to={`${item.to}`}
                            className={(nav) => cx('item', { active: nav.isActive })}
                        >
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                        </NavLink>
                    ))}
                </div>
                <div className={cx('list')}>
                    {api2.map((item, index) =>
                        !!item.to ? (
                            <NavLink
                                key={index}
                                to={`${item.to}`}
                                className={(nav) => cx('item', { active: nav.isActive })}
                            >
                                {item.icon}

                                <span className={cx('item-title')}>{item.title}</span>
                            </NavLink>
                        ) : (
                            <div key={index} onClick={() => dispatch(alert(true))} className={cx('item')}>
                                {item.icon}
                                <span className={cx('item-title')}>{item.title}</span>
                            </div>
                        ),
                    )}
                </div>
                <div className={cx('list')}>
                    <span className={cx('list-header')}>Kênh đăng ký</span>
                    {api3.map(
                        (item, index) =>
                            (limit ? index < api3.length : index < 7) && (
                                <div key={index} className={cx('item')}>
                                    <img className={cx('item-img')} src={item.image} alt="" />
                                    <span className={cx('item-name')}>{item.name}</span>
                                </div>
                            ),
                    )}
                    <div onClick={() => (limit ? setLimit(false) : setLimit(true))} className={cx('item')}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                        >
                            {limit ? (
                                <g>
                                    <polygon
                                        fill="white"
                                        points="18.4,14.6 12,8.3 5.6,14.6 6.4,15.4 12,9.7 17.6,15.4 "
                                    ></polygon>
                                </g>
                            ) : (
                                <g>
                                    <path
                                        fill="white"
                                        d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"
                                    ></path>
                                </g>
                            )}
                        </svg>
                        <span className={cx('item-name')}>
                            {limit ? 'Ẩn bớt' : `Hiển thị thêm ${api3.length - 7} mục`}
                        </span>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('list-header')}>Khám phá</span>
                    {api4.map((item, index) => (
                        <div onClick={() => dispatch(alert(true))} key={index} className={cx('item')}>
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('list')}>
                    <span className={cx('list-header')}>Dịch vụ khác của YouTube</span>
                    {api5.map((item, index) => (
                        <div key={index} onClick={() => dispatch(alert(true))} className={cx('item')}>
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('list')}>
                    {api6.map((item, index) => (
                        <div onClick={() => dispatch(alert(true))} key={index} className={cx('item')}>
                            {item.icon}
                            <span className={cx('item-title')}>{item.title}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('footer')}>
                    <div className={cx('links')}>
                        {links1.map((item, index) => (
                            <a href="/" key={index} className={cx('links-item')}>
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className={cx('links')}>
                        {links2.map((item, index) => (
                            <a href="/" key={index} className={cx('links-item')}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <div className={cx('copyright')}>© 2023 Google LLC</div>
            </div>
        </Scrollbars>
    );
}

export default SidebarScroll;
