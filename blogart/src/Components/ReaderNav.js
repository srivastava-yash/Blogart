import logo from "../app/Static/logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Image from "next/image";

const styles = {
  wrapper: `w-screen h-[5rem] flex justify-between items-center p[1rem] bg-white`,
  logoContainer: `cursor-pointer`,
  iconContainer: `flex-1 flex justify-center gap-[1.4rem] text-2xl text-black cursor-pointer`,
};

const ReaderNav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Image src={logo} height={50} width={100} />
      </div>
      <div className={styles.iconContainer}>
        <HiOutlineHome />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider}>
          <BsPencilSquare />
        </div>
      </div>
    </div>
  );
};

export default ReaderNav;
