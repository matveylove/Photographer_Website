import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '../../redux/slices/headerSlice';
// style
import classes from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const activeLink = useSelector((state) => state.header.activeLink);
    const linkArray = useSelector((state) => state.header.linkArray);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <h3>VICTORIA LUKYANENKO</h3>
                <div>
                    {linkArray.map(({ title, path }, index) => {
                        return <NavLink
                            key={path}
                            to={path}
                            onClick={() => {
                                dispatch(setActiveLink(index))
                                console.log(index, activeLink);
                            }}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? classes.active : ""
                            }
                        >
                            {title}
                        </NavLink>
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header