import styles from './ButtonCssModules.module.css';

export const ButtonCssModules = ({ icon, label }) => {
    return (
        <button className={styles['container']}>
            {!!icon &&
                <div className={styles['icon']}>
                    {icon}
                </div>
            }

            {!!label &&
                <div className={styles['label']}>
                    {label}
                </div>
            }
        </button>
    )
}
