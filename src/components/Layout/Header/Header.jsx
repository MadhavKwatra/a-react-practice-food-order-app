import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import styles from "./Header.module.css";
import mealsImage from "./meals.jpg";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h2 className="logo" href="/">
          ReactMeals
        </h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="" />

        {/* ways to import images 
        import imageName from "./fdf.jpg"
        require(//).default in src
        put in public /assets/images/fdf.jpg or other folder 
        also src="someURlToImage in a servaer"*/}
      </div>
    </>
  );
};
export default Header;
