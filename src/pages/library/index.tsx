import classNames from 'classnames/bind';
import styles from './library.module.scss';

const cx = classNames.bind(styles);

function Library() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('body')}>Body</div>
                <div className={cx('footer')}>Footer</div>
            </div>
        </div>
    );
}

export default Library;
