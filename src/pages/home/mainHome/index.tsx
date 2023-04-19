import classNames from 'classnames/bind';
import styles from './mainHome.module.scss';
import { NavLink } from 'react-router-dom';
import { mainApi as apiMain } from '../../../api/main';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

const arrLoading: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function MainHome({ typeProps = '' }) {
    const [api, setApi] = useState([]);
    const logic = useSelector((state: any) => state.menuShow);
    const bool: boolean = typeProps === 'all' ? true : false;

    // const bp1 = useMediaQuery({ maxWidth: 1456 });

    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 1128 });
    const bp3 = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        let result = await axios.get('https://server-youtube.onrender.com/watches');
        const data = await result.data;
        setApi(data);
    };

    return (
        <div className={cx('wrapper', !logic && 'size', bp3 && 'bp3')}>
            <div className={cx('inner', !logic && 'size')}>
                <div className={cx('list', !logic && 'size', bp2 && 'bp2', bp3 && 'bp3')}>
                    {/* {apiMain.map(
                        (item, index) =>
                            (bool ? !!item.type : item.type === typeProps) && (
                                <NavLink
                                    key={index}
                                    to={`/watch/${item.link}`}
                                    className={cx('item', !logic && 'size')}
                                >
                                    <img className={cx('item-img', !logic && 'size')} src={item.img} alt="" />
                                    <span className={cx('item-time')}>6:14</span>
                                    <div className={cx('item-info')}>
                                        <img className={cx('itemInfo-img')} src={item.avatar} alt="" />
                                        <div className={cx('itemInfo-detail')}>
                                            <span className={cx('itemDetail-content')}>{item.content}</span>
                                            <span className={cx('itemDetail-author')}>
                                                {item.name}{' '}
                                                {item.check === true && (
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        focusable="false"
                                                        width={14}
                                                        height={14}
                                                        className={cx('itemDetail-check')}
                                                    >
                                                        <g>
                                                            <path
                                                                fill="#aaaaaa"
                                                                d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                )}
                                            </span>
                                            <span className={cx('itemDetail-time')}>
                                                {item.views} N lượt xem •{' '}
                                                <span className={cx('itemDetail-last')}>{item.time} trước</span>
                                            </span>
                                        </div>
                                        <div onClick={() => console.log('Xin chao')} className={cx('itemDetail-more')}>
                                            <svg
                                                width={26}
                                                height={26}
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                            >
                                                <g>
                                                    <path
                                                        fill="white"
                                                        d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </NavLink>
                            ),
                    )} */}
                    {api.length > 0
                        ? api.map(
                              (item, index) =>
                                  (bool ? !!item.type : item.type === typeProps) && (
                                      <NavLink
                                          key={index}
                                          to={`/watch/${item.link}`}
                                          className={cx('item', !logic && 'size')}
                                      >
                                          <img className={cx('item-img', !logic && 'size')} src={item.img} alt="" />
                                          <span className={cx('item-time')}>6:14</span>
                                          <div className={cx('item-info')}>
                                              <img className={cx('itemInfo-img')} src={item.avatar} alt="" />
                                              <div className={cx('itemInfo-detail')}>
                                                  <span className={cx('itemDetail-content')}>{item.content}</span>
                                                  <span className={cx('itemDetail-author')}>
                                                      {item.name}{' '}
                                                      {item.check === true && (
                                                          <svg
                                                              viewBox="0 0 24 24"
                                                              preserveAspectRatio="xMidYMid meet"
                                                              focusable="false"
                                                              width={14}
                                                              height={14}
                                                              className={cx('itemDetail-check')}
                                                          >
                                                              <g>
                                                                  <path
                                                                      fill="#aaaaaa"
                                                                      d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                                                                  ></path>
                                                              </g>
                                                          </svg>
                                                      )}
                                                  </span>
                                                  <span className={cx('itemDetail-time')}>
                                                      {item.views} lượt xem •{' '}
                                                      <span className={cx('itemDetail-last')}>{item.time} trước</span>
                                                  </span>
                                              </div>
                                              <div
                                                  onClick={() => console.log('Xin chao')}
                                                  className={cx('itemDetail-more')}
                                              >
                                                  <svg
                                                      width={26}
                                                      height={26}
                                                      preserveAspectRatio="xMidYMid meet"
                                                      focusable="false"
                                                  >
                                                      <g>
                                                          <path
                                                              fill="white"
                                                              d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                                                          ></path>
                                                      </g>
                                                  </svg>
                                              </div>
                                          </div>
                                      </NavLink>
                                  ),
                          )
                        : arrLoading.map((item, index) => (
                              <div key={index} className={cx('item', !logic && 'size')}>
                                  <div className={cx('item-img', !logic && 'size', 'loadingApi')}></div>
                                  <div className={cx('item-info')}>
                                      <div className={cx('itemInfo-img', 'loadingApi')}></div>
                                      <div className={cx('loadingApi-content', 'loadingApi')}></div>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
}

export default MainHome;
