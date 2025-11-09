import clsx from "clsx";
import styles from './Popper.module.scss'

function wrapper({ children }) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            {children}
        </div>
    );
}

export default wrapper;