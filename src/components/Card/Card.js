import styles from "./Card.module.scss";

const Card = ({ results }) => {
    let display;

    if (results) {


        display = results.map((x) => {
            let { id, name, avatar } = x;

            return (
                <div
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                    <div className={`${styles.card} d-flex flex-colum justify-content-center`}>
                        <img className={`${styles.img} img-fluid`} src={avatar} alt="" />
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6 fw-normal">{id}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    else {
        display = "No characters Found :/";
    }

    return <>{display}</>
}

export default Card;