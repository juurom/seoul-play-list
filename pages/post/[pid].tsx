import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Post.module.css";
import ReactHtmlParser from "react-html-parser";
import Footer from "@/components/Footer";

const parseDate = (dateString: string) => {
  const [yy, mm, dd] = dateString.split(" ")[0].split("-");
  return `${yy}년 ${mm}월 ${dd}일`;
};

const post = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);
  const post = JSON.parse(router.query.data);
  console.log("POST:", post);
  return (
    <>
      <div className={styles.topnav}>
        <div className={styles.titlebar}>
          <Link href="/search">
            <button>&lt;</button>
          </Link>
          <div>상세보기</div>
        </div>
      </div>
      <div className={styles.undernav}></div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.pics}>
            <Image
              src={post.IMGURL}
              alt="활동이미지"
              fill
              sizes="(max-width: 500px)"
              quality={100}
            ></Image>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.title}>{ReactHtmlParser(post.SVCNM)}</div>
          <br />
          <div className={styles.tagwrapper}>
            <span className={styles.tag}>{post.SVCSTATNM}</span>
            <span className={styles.tag}>{post.AREANM}</span>
            <span className={styles.tag}>{post.MAXCLASSNM}</span>
            <span className={styles.tag}>{post.MINCLASSNM}</span>
          </div>
          <div className={styles.divline}></div>
          위치: {post.AREANM}
          <br />
          세부장소: {post.PLACENM}
          <br />
          <br />
          접수 : {parseDate(post.RCPTBGNDT)} ~ {parseDate(post.RCPTENDDT)}
          <br />
          활동 : {parseDate(post.SVCOPNBGNDT)} ~ {parseDate(post.SVCOPNENDDT)}
          <br />
          문의 : {post.TELNO}
          <br />
          <br />
          <a className={styles.link} href={post.SVCURL}>
            바로가기
          </a>
          <br />
          <br />
        </div>
      </div>
      <div className={styles.details}></div>
      <Footer />
    </>
  );
};

export default post;
