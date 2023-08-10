// style
import classes from './Tarifs.module.css';

const Tarifs = ({ rate }) => {
    const { price, title, services } = rate;

    return (
        <li className={classes.item}>
            <h3>{price}₽</h3>
            <p className={classes.title}>‟{title}”</p>
            <ul>
                {services.map((note, index) => {
                    return <li className={classes.note} key={index}>-{note}</li>
                })}
            </ul>

        </li>
    )
}

export default Tarifs