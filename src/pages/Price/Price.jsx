import { useSelector } from 'react-redux';
// style
import classes from './Price.module.css';
// components
import Header from "../../components/Header/Header"
import Tarifs from '../../components/Tarifs/Tarifs';
import MyForm from '../../components/MyForm/MyForm';

const Price = () => {

    const tarifsArray = useSelector((state) => state.tarifs.tarifs);
    console.log(tarifsArray);


    return (
        <>
            <Header />
            <div className={classes.price}>
                <ul className={classes.list}>
                    {tarifsArray.map((rate, index) => {
                        return (
                            <Tarifs
                                rate={rate}
                                key={index}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className={classes.center}>
                <MyForm />
            </div>

        </>
    )
}

export default Price