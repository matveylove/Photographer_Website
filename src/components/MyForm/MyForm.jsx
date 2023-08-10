import { useSelector, useDispatch } from "react-redux"
import { setLoginValue, setEmailValue, setFioValue } from "../../redux/slices/formSlice";
// style
import classes from './Form.module.css';
// components
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const MyForm = () => {
    const dispatch = useDispatch();

    const loginValue = useSelector((state) => state.form.loginValue);
    const emailValue = useSelector((state) => state.form.emailValue);
    const fioValue = useSelector((state) => state.form.fioValue);

    return (
        <div className={classes.box}>
            <h2 className={classes.application}>Запишись на съемку</h2>
            <form action='' className={classes.form}>
                <div className={classes.info}>
                    <span>Введите ФИО</span>
                    <MyInput placeholder={'Введите ФИО'} value={fioValue} onChange={(e) => dispatch(setFioValue(e.target.value))} />
                </div>
                <div className={classes.info}>
                    <span>Введите номер телефона</span>
                    <MyInput type='number' placeholder={'Введите номер телефона'} value={loginValue} onChange={(e) => dispatch(setLoginValue(e.target.value))} />
                </div>
                <div className={classes.info}>
                    <span>Введите почту</span>
                    <MyInput type="email" placeholder={'Введите почту'} value={emailValue} onChange={(e) => dispatch(setEmailValue(e.target.value))} />
                </div>
                <MyButton>Записаться на съемку</MyButton>
            </form>
        </div>

    )
}

export default MyForm