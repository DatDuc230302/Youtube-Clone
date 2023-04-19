import Header from '../mainLayout/header';
import classNames from 'classnames/bind';
import styles from './layoutHeader.module.scss';
import SidebarScroll from '../mainLayout/sidebar/sidebarScroll';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuLayout } from '../../redux/actions/menuLayout';
import Alert from '../../component/alert';

const cx = classNames.bind(styles);

function LayoutHeader({ children }) {
    const [layout, setLayout] = useState(false);
    const logic3 = useSelector((state: any) => state.menuLayout);
    const alertShow = useSelector((state: any) => state.alert);
    const dishpatch = useDispatch();

    useEffect(() => {
        dishpatch(menuLayout(6));
        setLayout(true);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Header layoutHeader={layout} />
                <div className={cx('body')}>
                    <div className={cx('sidebar', logic3 && 'logic3')}>
                        <SidebarScroll />
                    </div>
                    {children}
                </div>
            </div>
            <Alert turnFade={alertShow} />
        </div>
    );
}

export default LayoutHeader;
