import classNames from 'classnames/bind';
import styles from './mainLayout.module.scss';
import Header from './header';
import Sidebar from './sidebar';
import Alert from '../../component/alert';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    const alertShow = useSelector((state: any) => state.alert);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Header />
                <div className={cx('body')}>
                    <Sidebar />
                    <div className={cx('children')}>{children}</div>
                </div>
            </div>
            <Alert turnFade={alertShow} />
        </div>
    );
}

export default MainLayout;
