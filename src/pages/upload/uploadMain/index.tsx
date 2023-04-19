import classNames from 'classnames/bind';
import styles from './uploadMain.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPenToSquare, faRotate, faTrash } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const arrLoading: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function UploadMain() {
    //
    const [id, setId] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('');
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [check, setCheck] = useState('check');
    const [views, setViews] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('type');
    const [link, setLink] = useState('');
    const [subscriber, setSubscriber] = useState('');
    const [likes, setLikes] = useState('');
    const [description, setDescription] = useState('');
    //
    const [api, setApi] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const [count, setCount] = useState(-1);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [turnAuth, setTurnAuth] = useState(false);
    const [token, setToken] = useState('');
    const [option, setOption] = useState('');

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        const result = await axios.get('https://server-youtube.onrender.com/watches');
        const data = await result.data;
        setApi(data);
    };

    const handleNext = () => {
        if (end < api.length) {
            setStart(start + 10);
            setEnd(end + 10);
        }
    };

    const handlePre = () => {
        if (start !== 0) {
            setStart(start - 10);
            setEnd(end - 10);
        }
    };

    const handleRefresh = () => {
        getApi();
        setCount(-1);
        setModalUpdate(false);
    };

    const handleUpdate = (id: any, index: number) => {
        setCount(index);
        setModalUpdate(true);
        api.map((item, i) => {
            index === i && setContent(item.content);
            index === i && setImg(item.img);
            index === i && setAvatar(item.avatar);
            index === i && setName(item.name);
            index === i && setCheck(item.check);
            index === i && setViews(item.views);
            index === i && setTime(item.time);
            index === i && setType(item.type);
            index === i && setLink(item.link);
            index === i && setSubscriber(item.subscriber);
            index === i && setLikes(item.likes);
            index === i && setDescription(item.description);
        });
    };

    const handleCancle = () => {
        setModalUpdate(false);
        setCount(-1);
    };

    const handleUpdateSubmit = async (id: any) => {
        setTurnAuth(true);
        setId(id);
        setOption('upd');
    };

    const handleDel = async (id: any) => {
        setTurnAuth(true);
        setId(id);
        setOption('del');
    };

    const handleAuthSubmit = async () => {
        const result = await axios.post('https://server-youtube.onrender.com/users/post', { token });
        if (result.data.length > 0) {
            if (option === 'upd') {
                const data = {
                    id,
                    content,
                    img,
                    avatar,
                    name,
                    check,
                    views,
                    time,
                    type,
                    link,
                    subscriber,
                    likes,
                    description,
                };
                const result = await axios.post('https://server-youtube.onrender.com/watches/update', data);
                if (result.data.length > 0) {
                    alert('Cập nhật thành công !');
                    setTurnAuth(false);
                    setToken('');
                }
            }
            if (option === 'del') {
                const result = await axios.post('https://server-youtube.onrender.com/watches/delete', { id });
                if (result.data.length > 0) {
                    alert('Xóa thành công !');
                    setTurnAuth(false);
                    setToken('');
                }
            }
        }
    };

    const handleSearch = async (e: any) => {
        const value = e.target.value;
        if (value.length < 1) {
            getApi();
        }
        if (value) {
            const result = await axios.get(`https://server-youtube.onrender.com/watches/search/${value}`);
            if (result.data.length > 0) {
                setApi(result.data);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <span className={cx('header-title')}>Database Client</span>
                    <div className={cx('header-tools')}>
                        <div className={cx('headerTools-show')}>
                            {start + 1} - {end} of {api.length}
                        </div>
                        <FontAwesomeIcon onClick={() => handleRefresh()} className={cx('refresh')} icon={faRotate} />
                        <FontAwesomeIcon onClick={() => handlePre()} className={cx('previous')} icon={faChevronLeft} />
                        <FontAwesomeIcon onClick={() => handleNext()} className={cx('next')} icon={faChevronRight} />
                    </div>
                </div>
                <div className={cx('filter')}>
                    <label htmlFor="filter" className={cx('filter-icon')}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                        >
                            <g>
                                <path fill="#909090" d="M21,6H3V5h18V6z M18,11H6v1h12V11z M15,17H9v1h6V17z"></path>
                            </g>
                        </svg>
                    </label>
                    <input
                        onChange={(e) => handleSearch(e)}
                        id="filter"
                        placeholder="Lọc"
                        type="text"
                        className={cx('filter-input')}
                        autoComplete="off"
                    />
                </div>
                <div className={cx('scroll')}>
                    <div className={cx('manage')}>
                        <div className={cx('manage-item')}>
                            <span className={cx('manage-index')}>ID</span>
                            <div className={cx('manage-record')}>
                                <span>Content</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Img</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Avatar</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Name</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Check</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Views</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Time</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Type</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Link</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Subscriber</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Likes</span>
                            </div>
                            <div className={cx('manage-record')}>
                                <span>Description</span>
                            </div>
                            <div className={cx('tools', 'main')}>Tools</div>
                        </div>
                        {api.length > 0
                            ? api.map(
                                  (item, index) =>
                                      index >= start &&
                                      index < end && (
                                          <div key={index} className={cx('box')}>
                                              <div className={cx('manage-item')}>
                                                  <span className={cx('manage-index')}>{index + 1}</span>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.content}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.img}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.avatar}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.name}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.check ? 'True' : 'False'}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.views}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.time}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.type}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.link}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.subscriber}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.likes}</span>
                                                  </div>
                                                  <div className={cx('manage-record')}>
                                                      <span>{item.description}</span>
                                                  </div>
                                                  <div className={cx('tools')}>
                                                      <FontAwesomeIcon
                                                          onClick={() => handleUpdate(item._id, index)}
                                                          className={cx('tools-icon')}
                                                          icon={faPenToSquare}
                                                      />
                                                      <FontAwesomeIcon
                                                          onClick={() => handleDel(item._id)}
                                                          className={cx('tools-icon')}
                                                          icon={faTrash}
                                                      />
                                                  </div>
                                              </div>
                                              {index === count && (
                                                  <div className={cx('update')}>
                                                      <div className={cx('manage-item')}>
                                                          <span className={cx('manage-index')}>{index + 1}</span>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setContent(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={content}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setImg(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={img}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setAvatar(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={avatar}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setName(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={name}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <span>{item.check ? 'True' : 'False'}</span>
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setViews(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={views}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setTime(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={time}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <span>{item.type}</span>
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setLink(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={link}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setSubscriber(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={subscriber}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setLikes(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={likes}
                                                              />
                                                          </div>
                                                          <div className={cx('manage-record')}>
                                                              <input
                                                                  onChange={(e) => setDescription(e.target.value)}
                                                                  className={cx('update-input')}
                                                                  value={description}
                                                              />
                                                          </div>
                                                          <div className={cx('tools')}>
                                                              {modalUpdate ? (
                                                                  <>
                                                                      <span
                                                                          onClick={() => handleUpdateSubmit(item._id)}
                                                                          className={cx('update-btn')}
                                                                      >
                                                                          Update
                                                                      </span>
                                                                      <span
                                                                          onClick={() => handleCancle()}
                                                                          className={cx('update-btn')}
                                                                      >
                                                                          Cancle
                                                                      </span>
                                                                  </>
                                                              ) : (
                                                                  <>
                                                                      <FontAwesomeIcon
                                                                          onClick={() => handleUpdate(item._id, index)}
                                                                          className={cx('tools-icon')}
                                                                          icon={faPenToSquare}
                                                                      />
                                                                      <FontAwesomeIcon
                                                                          onClick={() => handleDel(item._id)}
                                                                          className={cx('tools-icon')}
                                                                          icon={faTrash}
                                                                      />
                                                                  </>
                                                              )}
                                                          </div>
                                                      </div>
                                                  </div>
                                              )}
                                          </div>
                                      ),
                              )
                            : arrLoading.map((item, index) => (
                                  <div key={index} className={cx('manage-item', 'loadingApi')}>
                                      <span className={cx('manage-index')}></span>
                                      <div className={cx('manage-record')}></div>
                                      <div className={cx('manage-record')}></div>
                                      <div className={cx('manage-record')}></div>
                                      <div className={cx('manage-record')}></div>
                                      <div className={cx('manage-record')}></div>
                                  </div>
                              ))}
                    </div>
                </div>
                {turnAuth && (
                    <div className={cx('token')}>
                        <div className={cx('token-overlay')}></div>
                        <div className={cx('token-box')}>
                            <input
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                className={cx('token-input')}
                                type="text"
                                placeholder="Manage Token"
                            />
                            <span onClick={() => handleAuthSubmit()} className={cx('token-btn')}>
                                Submit
                            </span>
                            <span
                                onClick={() => {
                                    setTurnAuth(false);
                                    setToken('');
                                }}
                                className={cx('token-btn')}
                            >
                                Cancle
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UploadMain;
