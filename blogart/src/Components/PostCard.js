import Image from "next/image";
import logo from "../app/Static/logo.png";
import { FiBookmark } from "react-icons/Fi";
import Link from "next/link";

const styles = {
  authorContainer: `flex gap-[0.4rem] `,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `objext-cover`,
  authorName: `font-semibold text-black`,
  title: `font-bold text-2xl text-black`,
  subtitle: `text-[#787878]`,
  articleDetails: `my-2 text-[0.8rem]`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  bookmarkContainer: `cursor-pointer`,
  wrapper: `flex max-w-[46remp] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex flex-col`,
};

const PostCard = () => {
  return (
    <Link href="/post/123">
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={logo}
                className={styles.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>Yash Srivastava</div>
          </div>
          <div className={styles.title}>Hello, This is my first Post.</div>
          <div className={styles.subtitle}>
            Life is a race, if you don't run fast, you ded.
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              Jun 15 • 5 min read •{" "}
              <span className={styles.category}>productivity</span>{" "}
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image src={logo} height={100} width={100} />
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
