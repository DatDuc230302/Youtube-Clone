import classNames from 'classnames/bind';
import styles from './uploadHeader.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UploadForm from '../uploadForm';
import axios from 'axios';

const cx = classNames.bind(styles);
function UploadHeader() {
    const [valueSearch, setValueSearch] = useState('');
    const [token, setToken] = useState('');
    const [turnToken, setTurnToken] = useState(false);
    const [turn, setTurn] = useState(true);

    const handleSearch = async (e) => {
        const key = e.target.value;
        setValueSearch(key);
        console.log(key);
    };

    const sendToken = async () => {
        const result = await axios.post('https://server-youtube.onrender.com/users/post', { token });
        const data = result.data;
        if (data.length > 0) {
            alert('Mã token đúng');
            setTurn(false);
            setTurnToken(false);
        } else {
            alert('Mã token sai');
        }
    };

    document.onkeydown = (e) => {
        if (e.key === 'Enter') {
            if (token.length > 0) {
                sendToken();
            }
        }
    };

    return (
        <div className={cx('header')}>
            <div className={cx('action')}>
                <div className={cx('action-icon')}>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                className={cx('icon')}
                                fill="#898989"
                                d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                            ></path>
                        </g>
                    </svg>
                </div>
                <Link to={'/'} className={cx('action-logo')}>
                    <img
                        height="24"
                        alt=""
                        src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"
                    />
                </Link>
            </div>
            <div className={cx('control')}>
                <div className={cx('control-icon')}>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                fill="#717171"
                                d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                            ></path>
                        </g>
                    </svg>
                </div>
                <input
                    onChange={handleSearch}
                    value={valueSearch}
                    placeholder="Tìm kiếm video của bạn"
                    type="text"
                    className={cx('control-input')}
                />
            </div>
            <div className={cx('nav')}>
                <div className={cx('nav-help')}>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                    >
                        <g>
                            <path
                                className={cx('icon')}
                                d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                            ></path>
                        </g>
                    </svg>
                </div>
                <div
                    onClick={() => (turnToken ? setTurnToken(false) : setTurnToken(true))}
                    className={cx('nav-create')}
                >
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        width={24}
                        height={24}
                    >
                        <g>
                            <path
                                fill="#FF4E45"
                                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                            ></path>
                        </g>
                    </svg>
                    <span className={cx('navCreate-title')}>TẠO</span>
                </div>
                <img className={cx('nav-user')} src={require('./../../../assets/imgs/chaotic/user.jpg')} alt="" />
                {turnToken && (
                    <div className={cx('box-token')}>
                        <input
                            autoFocus={true}
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            type="text"
                            className={cx('token')}
                            placeholder="Token Manager"
                        />
                        <span onClick={() => sendToken()} className={cx('send-token')}>
                            Send
                        </span>
                    </div>
                )}
            </div>
            <UploadForm turn={turn} setTurn={setTurn} />
        </div>
    );
}

export default UploadHeader;
