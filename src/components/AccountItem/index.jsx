import clsx from "clsx";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.avatar)} src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/518391110_2534237056930263_2288160139815862128_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_ohc=n7HvPNecWe4Q7kNvwENb7ej&_nc_oc=AdmnuV-I8aKHVJk9iEyoutL5YX2CoIeVgUZGBMVYV3RGYfQ_BbAP35AIZ3tPf_6mhyE&_nc_zt=24&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=EYCrjvqo0JNPEXaVnx5d-w&oh=00_AfgPqqkaprZqJHyuXoxlpHyfTqaDGAePtGnoWGlkFCsb7g&oe=6916301F" alt="nguyenvana" />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                </h4>
                <span className={clsx(styles.username)}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;