import Image from "next/image";
import logo from "../Static/logo.png";

const styles = {
  wrapper: `flex justify-center gap-10 p-5`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logocontainer: `flex items-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannernav: `flex cursor-pointer items-center space-x-5`,
  accentedbutton: `bg-black text-white py-2 px-4 rounded-full`,
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logocontainer}>
          <Image className={styles.logo} src={logo} height={40} width={200} />
        </div>

        <div className={styles.bannernav}>
          <div>Home</div>
          <div>Explore</div>
          <div>About</div>
          <div className={styles.accentedbutton}>Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
