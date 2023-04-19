import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import SidebarScroll from './sidebarScroll';
import { sidebarApi7 as api7 } from './sidebarApi';
import { menuFade } from '../../../redux/actions/menuFade';

const cx = classNames.bind(styles);

function Sidebar() {
    const logic = useSelector((state: any) => state.menuShow);
    const logic1 = useSelector((state: any) => state.menuFade);
    const dispatch = useDispatch();

    const bp1 = useMediaQuery({ maxWidth: 1456 });
    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const bp3 = useMediaQuery({ maxWidth: 767 });
    return (
        <div className={cx('wrapper', !logic && 'wrapper-thin', bp1 && 'bp1', bp3 && 'bp3')}>
            <div className={cx('thin-fixed', logic && 'logic', bp1 && 'bp1', bp3 && 'bp3')}>
                <div className={cx('thin')}>
                    {api7.map((item, index) => (
                        <NavLink to={`${item.to}`} key={index} className={cx('thin-item')}>
                            {item.icon}
                            <span className={cx('thin-title')}>{item.title}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div
                onClick={() => dispatch(menuFade(4))}
                className={cx('box-overlay', logic1 && 'logic1', bp2 && 'bp2', bp3 && 'bp3')}
            >
                <div className={cx('box-fixed', bp1 && 'bp1', !logic && 'logic', logic1 && 'logic1')}>
                    <SidebarScroll />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
