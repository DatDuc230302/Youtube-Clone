import classNames from 'classnames/bind';
import styles from './emptyLayout.module.scss';
import Alert from '../../component/alert';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function EmptyLayout({ children }) {
    const alertShow = useSelector((state: any) => state.alert);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>
                {children}
                <Alert turnFade={alertShow} />
            </div>
        </div>
    );
}

export default EmptyLayout;
