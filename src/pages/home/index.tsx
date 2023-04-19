import classNames from 'classnames/bind';

import styles from './home.module.scss';
import { useState } from 'react';
import MainHome from './mainHome';
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
];

function Home() {
    const [count, setCount] = useState(0);
    const [type, setType] = useState('all');

    function handleNav(id: number, text): void {
        window.scrollTo(0, 0);
        setCount(id);
        setType(text);
    }

    return (
        <div className={cx('wrapper')}>
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
                <MainHome typeProps={type} />
            </div>
        </div>
    );
}

export default Home;
