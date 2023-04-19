import classNames from 'classnames/bind';
import styles from './searchHeader.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
function SearchHeader({ data, loading }) {
    const [turn, setTurn] = useState(false);

    return (
        <div className={cx('wrapper', turn && 'turn')}>
            <div className={cx('inner')}>
                {loading && <span className={cx('no-result')}>Đang kết nối với Server ...</span>}
                {!loading &&
                    (data.length > 0 ? (
                        data.map((item, index) => (
                            <Link
                                onClick={() => setTurn(true)}
                                to={`/search/${item.content}`}
                                key={index}
                                className={cx('item')}
                            >
                                <div className={cx('item-icon')}>
                                    <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 22 22"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                    >
                                        <g>
                                            <path
                                                fill="black"
                                                d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <span className={cx('item-title')}>{item.content}</span>
                            </Link>
                        ))
                    ) : (
                        <span className={cx('no-result')}>Không tìm thấy kết quả</span>
                    ))}
            </div>
        </div>
    );
}

export default SearchHeader;
