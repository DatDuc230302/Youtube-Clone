import classNames from 'classnames/bind';
import styles from './upload.module.scss';
import UploadHeader from './uploadHeader';
import { useDispatch } from 'react-redux';
import { alert } from '../../redux/actions/alert';
import UploadMain from './uploadMain';

const cx = classNames.bind(styles);
interface obj {
    icon: any;
}
const sidebarIcons: obj[] = [
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path fill="#FF4E45" d="M4 5.99982H3V20.9998H18V19.9998H4V5.99982Z"></path>
                    <path
                        fill="#FF4E45"
                        d="M6 2.99982V17.9998H21V2.99982H6ZM11 13.9998V6.99982L17 10.4998L11 13.9998Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M9 17H7V10H9V17ZM13 7H11V17H13V7ZM17 14H15V17H17V14ZM20 4H4V20H20V4ZM21 3V21H3V3H21Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M8 7H16V9H8V7ZM8 13H13V11H8V13ZM5 3V16H15H15.41L15.7 16.29L19 19.59V3H5ZM4 2H20V22L15 17H4V2Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M5 11H7V13H5V11ZM15 15H5V17H15V15ZM19 15H17V17H19V15ZM19 11H9V13H19V11ZM22 6H2V20H22V6ZM3 7H21V19H3V7Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M10.57 10.96C10.62 10.66 10.72 10.4 10.84 10.17C10.96 9.94 11.15 9.75 11.38 9.61C11.6 9.47 11.87 9.41 12.21 9.4C12.42 9.41 12.61 9.45 12.78 9.52C12.96 9.6 13.13 9.71 13.25 9.85C13.38 9.99 13.48 10.15 13.56 10.33C13.64 10.51 13.68 10.71 13.69 10.91L15.32 10.91C15.3 10.48 15.22 10.09 15.06 9.73C14.91 9.37 14.7 9.06 14.42 8.81C14.14 8.56 13.82 8.35 13.44 8.21C13.07 8.06 12.65 8 12.18 8C11.59 8 11.07 8.1 10.63 8.31C10.19 8.52 9.83 8.79 9.54 9.15C9.25 9.5 9.03 9.91 8.89 10.39C8.75 10.87 8.67 11.36 8.67 11.88L8.67 12.13C8.67 12.66 8.74 13.15 8.88 13.62C9.02 14.09 9.24 14.5 9.53 14.85C9.82 15.2 10.19 15.48 10.62 15.68C11.06 15.88 11.58 15.99 12.17 15.99C12.6 15.99 13 15.92 13.37 15.78C13.74 15.64 14.07 15.45 14.35 15.21C14.63 14.96 14.86 14.68 15.02 14.35C15.18 14.02 15.28 13.68 15.29 13.3L13.66 13.3C13.65 13.49 13.61 13.66 13.52 13.83C13.43 14 13.33 14.13 13.19 14.25C13.05 14.37 12.9 14.46 12.72 14.52C12.55 14.58 12.36 14.6 12.17 14.61C11.84 14.6 11.57 14.54 11.36 14.4C11.13 14.25 10.95 14.06 10.82 13.84C10.69 13.61 10.59 13.34 10.55 13.04C10.51 12.74 10.48 12.43 10.48 12.13L10.48 11.88C10.5 11.56 10.52 11.26 10.57 10.96ZM12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M8 7V10C8 10.55 8.45 11 9 11H15C16.1 11 17 11.9 17 13V17C17 18.1 16.1 19 15 19H13V21H11V19H7V18H15C15.55 18 16 17.55 16 17V13C16 12.45 15.55 12 15 12H9C7.9 12 7 11.1 7 10V7C7 5.9 7.9 5 9 5H11V3H13V5H17V6H9C8.45 6 8 6.45 8 7Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M6.71 7.2L7.89 5.1L6.71 3L8.81 4.18L10.91 3L9.74 5.1L10.92 7.2L8.82 6.02L6.71 7.2ZM18.9 14.26L16.8 13.08L17.98 15.18L16.8 17.28L18.9 16.1L21 17.28L19.82 15.18L21 13.08L18.9 14.26ZM21 3L18.9 4.18L16.8 3L17.98 5.1L16.8 7.2L18.9 6.02L21 7.2L19.82 5.1L21 3ZM17.14 10.02L6.15 21L3 17.85L14 6.85L17.14 10.02ZM6.15 19.59L13.7 12.04L11.96 10.3L4.41 17.85L6.15 19.59Z"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path
                        fill="#909090"
                        d="M16 6L16 8L14 8L14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C12.37 11 12.7 11.11 13 11.28L13 6L16 6ZM18 20L4 20L4 6L3 6L3 21L18 21L18 20ZM21 3L6 3L6 18L21 18L21 3ZM7 4L20 4L20 17L7 17L7 4Z"
                    ></path>
                </g>
            </svg>
        ),
    },
];
function Upload() {
    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <UploadHeader />
                <div className={cx('body')}>
                    <div className={cx('sidebar')}>
                        <img
                            className={cx('sidebar-avatar')}
                            src={require('./../../assets/imgs/chaotic/user.jpg')}
                            alt=""
                        />
                        <div className={cx('sidebar-list')}>
                            {sidebarIcons.map((item, index) => (
                                <div
                                    onClick={() => dispatch(alert(true))}
                                    key={index}
                                    className={cx('sidebarList-item', index === 1 && 'active')}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                        <div className={cx('sidebar-end')}>
                            <div onClick={() => dispatch(alert(true))} className={cx('sidebarList-item')}>
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                >
                                    <g>
                                        <path
                                            fill="#909090"
                                            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                            <div onClick={() => dispatch(alert(true))} className={cx('sidebarList-item')}>
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                >
                                    <g>
                                        <path
                                            fill="#909090"
                                            d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <UploadMain />
                </div>
            </div>
        </div>
    );
}

export default Upload;
