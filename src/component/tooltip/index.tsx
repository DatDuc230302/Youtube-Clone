import classNames from 'classnames/bind';
import styles from './toolTip.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function ToolTip({ children, text }) {
    return (
        <Fragment>
            <div className={cx('inner')}>
                {children}
                <div className={cx('tooltip')}>{text}</div>
            </div>
        </Fragment>
    );
}

export default ToolTip;
