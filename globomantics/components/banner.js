import styles from "./banner.module.css"

const Banner = (props) => {
    return(
        <header className="row bm-4">
            <div className="col-5">
                <img src="../GloboLogo.png" alt="logo" className={styles.logo}></img>
            </div>
            <div className="col-7 mt-5">{props.headerText}</div>
        </header>
    )
};

export default Banner;