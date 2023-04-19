import classNames from 'classnames/bind';
import styles from './register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('img', 'loading')}></div>
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default Register;
