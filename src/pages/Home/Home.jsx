// style
import classes from './Home.module.css';
// components
import Header from "../../components/Header/Header"
import MyForm from '../../components/MyForm/MyForm';

const Home = () => {
    return (
        <div>
            <Header />
            <div className={classes.home}>
                <h1 className={classes.title}>А КАКОЙ БУДЕТ ВАША ИСТОРИЯ?</h1>
                <button className={classes.btn}>СМОТРЕТЬ ПОРТФОЛИО</button>
            </div>
            <div className={classes.form}>
                <MyForm />
            </div>

        </div>
    )
}

export default Home