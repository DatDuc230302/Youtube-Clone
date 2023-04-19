import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './loading.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Loading({ size }) {
    return (
        <div className={cx('loading')}>
            <FontAwesomeIcon style={{ fontSize: size }} icon={faSpinner} className={cx('loading-icon')} />
        </div>
    );
}

export default Loading;
