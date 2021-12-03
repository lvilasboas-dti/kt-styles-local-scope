import styles from './ButtonCssModules.module.css';

console.log({ styles });

export const ButtonCssModules = ({ icon, label, type }) => {
    return (
        <button className={`${styles['container']} ${styles[type]}`}>
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
