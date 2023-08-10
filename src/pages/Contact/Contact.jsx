// style
import classes from './Contact.module.css';
// components
import Header from "../../components/Header/Header";
// img
import contactme from '../../assets/contactme.png';
import phone from '../../assets/phone.svg';
import inst from '../../assets/instagram.svg';
import tg from '../../assets/telegram.svg';
import vk from '../../assets/vk.svg'
import MyForm from '../../components/MyForm/MyForm';
const Contact = () => {
    return (
        <div>
            <Header />
            <div className={classes.info}>
                <img src={contactme} />
                <a className={classes.number} href='tel:79231720870'>
                    <img src={phone} alt='Телефон' />
                    <span>+7(923)-172-08-70</span>
                </a>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <a href='#'><img src={inst} /></a>
                    </li>
                    <li className={classes.item}>
                        <a href='#'><img src={tg} /></a>
                    </li>
                    <li className={classes.item}>
                        <a href='#'><img src={vk} /></a>
                    </li>
                </ul>
                <MyForm />
            </div>
        </div>
    )
}

export default Contact