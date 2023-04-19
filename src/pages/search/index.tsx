import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Search() {
    const params = useParams();
    const key = params.key;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const bp1 = useMediaQuery({ maxWidth: 1456 });
    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 1128 });
    const bp3 = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        getData();
    }, [key]);

    const getData = async () => {
        // setLoading(true);
        let result = await fetch(`https://server-youtube.onrender.com/watches/search/${key}`);
        result = await result.json();
        const data: any = result;
        setData(data);
    };

    return (
        <div className={cx('wrapper', bp3 && 'bp3')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={cx('filter')}>
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
                                    d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z"
                                ></path>
                            </g>
                        </svg>
                        <span className={cx('filter-title')}>Bộ lọc</span>
                    </div>
                </div>
                {data.length < 1 && (
                    <div className={cx('result')}>
                        <span className={cx('result-title')}>Không có kết quả tương ứng với từ khóa: {key}</span>
                    </div>
                )}
                {data.length > 0 && (
                    <div className={cx('list')}>
                        {data.map((item, index) => (
                            <Link to={`/watch/${item.link}`} key={index} className={cx('item')}>
                                <img className={cx('item-img', bp3 && 'bp3')} src={item.img} alt="" />
                                <div className={cx('item-info')}>
                                    <div className={cx('content')}>
                                        <span className={cx('content-title')}>{item.content}</span>
                                        <span className={cx('content-icon')}>
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
                                                        d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <span className={cx('time')}>
                                        {item.views} Tr lượt xem • {item.time} trước
                                    </span>
                                    <div className={cx('author')}>
                                        <img className={cx('author-avatar')} src={item.avatar} alt="" />
                                        <span className={cx('author-name')}>{item.name}</span>
                                    </div>
                                    <span className={cx('description')}>{item.description}</span>
                                    <div className={cx('badge')}>Phụ đề</div>
                                </div>
                            </Link>
                        ))}
                        {/* {loading && (
                            <div className={cx('item')}>
                                <div className={cx('item-img', bp3 && 'bp3', 'loadingApi')}></div>
                                <div className={cx('item-info')}>
                                    <div className={cx('author')}>
                                        <div className={cx('author-avatar', 'loadingApi')}></div>
                                    </div>
                                    <div className={cx('content-loading', 'loadingApi')}></div>
                                    <div className={cx('content-loading', 'loadingApi')}></div>
                                    <div className={cx('content-loading', 'loadingApi')}></div>
                                    <div className={cx('content-loading', 'loadingApi')}></div>
                                </div>
                            </div>
                        )} */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
