import { LazyLoadImage } from 'react-lazy-load-image-component';
// style
import classes from './About.module.css';
// components
import Header from "../../components/Header/Header";
import MyButton from '../../components/UI/MyButton/MyButton';
// img
import IM from '../../assets/im.png'
import { Link } from 'react-router-dom';

const About = () => {



    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.left}>
                    <LazyLoadImage src={IM} effect="blur" className={classes.lazy} />
                </div>
                <div className={classes.info}>
                    <h1>ОБО МНЕ</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aperiam, fugiat et labore natus, deserunt quas
                        sequi repudiandae commodi suscipit enim reiciendis quasi facilis dolore cum voluptate blanditiis explicabo velit.
                        Optio iusto sed et? Vel reprehenderit tenetur, ullam nesciunt doloremque quidem eligendi aperiam est esse magnam,
                        labore quia quis non? Quasi neque placeat ratione error ipsa? Repudiandae ut voluptatem amet neque est eaque facilis
                        libero blanditiis cumque molestias qui maxime officia fuga quasi sint soluta excepturi iusto, culpa eligendi
                        repellat nisi cum laboriosam modi maiores. Blanditiis, corrupti maxime maiores perferendis sit eaque, ipsam debitis
                        dolorem tenetur eveniet eius provident vitae perspiciatis, consequatur recusandae ex quis quidem alias ducimus quae
                        temporibus cumque earum. Provident, perferendis cum, modi, ab pariatur exercitationem ex cupiditate quidem enim id
                        illum molestiae? Ad molestiae placeat corporis dolorum accusantium provident, beatae accusamus quaerat iusto
                        inventore eos quasi unde corrupti eum, deleniti laudantium, dolores earum aperiam quia asperiores veniam sit laborum
                        suscipit! Fugit quis provident animi voluptatem ipsum, veniam, sed accusantium dolores recusandae esse eum vel
                        maiores molestiae eaque tempora? Eligendi neque dolorem quod distinctio recusandae quaerat quis, culpa similique
                        aspernatur laborum aut nobis, maiores accusamus dolores non vitae mollitia dicta debitis tenetur ad minima amet.
                        Dicta, provident? </p>
                    <Link to={'/contact'}><MyButton>Записаться на съемку!</MyButton></Link>
                </div>
            </div>
        </>
    )
}

export default About