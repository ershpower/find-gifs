import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';

interface IWithObserverProps extends PropsWithChildren {
    // eslint-disable-next-line @typescript-eslint/ban-types
    callback: Function;
}
const WithObserver: FC<IWithObserverProps> = ({ callback, children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        callback();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((item) => {
                    if (item.isIntersecting) {
                        callback();
                    }
                });
            },
            { rootMargin: '20px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div>
            {children}
            <div ref={ref}></div>
        </div>
    );
};

export default WithObserver;
