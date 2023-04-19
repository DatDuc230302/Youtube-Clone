import classNames from 'classnames/bind';
import styles from './rightWatch.module.scss';
import { useState } from 'react';
import { mainApi as api } from '../../../api/main';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

interface obj {
    key: String;
    type: String;
}

const navs: obj[] = [
    {
        key: 'all',
        type: 'Tất cả',
    },
    {
        key: 'music',
        type: 'Âm nhạc',
    },
    {
        key: 'english',
        type: 'Tiếng anh',
    },
    {
        key: 'games',
        type: 'Trò chơi',
    },
    {
        key: 'dev',
        type: 'Lập trình',
    },
    {
        key: 'books',
        type: 'Sách nói',
    },
    {
        key: 'cartoons',
        type: 'Hoạt hình',
    },
    {
        key: 'recent',
        type: 'Mới tải lên gần đây',
    },
];

function RightWatch({ currentUrl, setCurrentUrl }) {
    const [count, setCount] = useState(0);
    const [type, setType] = useState('all');

    function handleNav(id: number, text): void {
        setCount(id);
        setType(text);
    }

    const bp1 = useMediaQuery({ maxWidth: 1456 });

    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 1128 });

    const bp3 = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={cx('wrapper', bp2 && 'bp2', bp3 && 'bp3')}>
            <div className={cx('inner')}>
                <div className={cx('nav')}>
                    <div className={cx('nav-list')}>
                        {navs.map((item, index) => (
                            <div
                                onClick={() => handleNav(index, item.key)}
                                key={index}
                                className={cx('nav-item', index === count && 'active')}
                            >
                                {item.type}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('list')}>
                    {api.map(
                        (item, index) =>
                            (type !== 'all' ? type === item.type : !!item.type) && (
                                <div onClick={() => setCurrentUrl(item.link)} key={index} className={cx('item')}>
                                    <img className={cx('item-img')} src={item.img} alt="" />
                                    <div className={cx('item-info')}>
                                        <span className={cx('item-content')}>{item.content}</span>
                                        <span className={cx('item-name')}>{item.name}</span>
                                        <span className={cx('item-time')}>
                                            {item.views} lượt xem •
                                            <span className={cx('itemDetail-last')}> {item.time} trước</span>
                                        </span>
                                    </div>
                                </div>
                            ),
                    )}
                </div>
            </div>
        </div>
    );
}

export default RightWatch;
