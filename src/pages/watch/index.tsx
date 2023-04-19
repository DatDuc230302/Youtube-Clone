import classNames from 'classnames/bind';
import styles from './watch.module.scss';
import { useEffect, useState } from 'react';
import LeftWatch from './leftWatch/leftWatch';
import RightWatch from './rightWatch';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Watch() {
    const params = useParams();
    const url = params.key;
    const [currentUrl, setCurrentUrl] = useState(url);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentUrl]);

    const bp1 = useMediaQuery({ maxWidth: 1456 });
    const bp2 = useMediaQuery({ minWidth: 768, maxWidth: 1128 });
    const bp3 = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('iframe')}>
                    <iframe
                        width="100%"
                        height="591px"
                        src={`https://www.youtube-nocookie.com/embed/${currentUrl}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow={'autoplay'}
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className={cx('main', bp1 && 'bp1', bp2 && 'bp2', bp3 && 'bp3')}>
                    <LeftWatch currentUrl={currentUrl} />
                    <RightWatch currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} />
                </div>
            </div>
        </div>
    );
}

export default Watch;
