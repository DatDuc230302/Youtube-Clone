import classNames from 'classnames/bind';
import styles from './alert.module.scss';
import { useDispatch } from 'react-redux';
import { alert } from '../../redux/actions/alert';

const cx = classNames.bind(styles);

function Alert({ turnFade = false }) {
    const dispath = useDispatch();

    turnFade && setTimeout(() => dispath(alert(false)), 1500);

    return (
        <div className={cx('wrapper', turnFade && 'fade')}>
            <div className={cx('inner')}>Feature is comming soon</div>
        </div>
    );
}

export default Alert;
