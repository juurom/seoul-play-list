import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Post } from "./Interface";

export default function GallaryView(child: JSX.Element) {
  const title: string = child.props.title;
  const posts: Post[] = child.props.inputPost;
  return (
    <>
      <h2 className={styles.gallerytitle}>{title}</h2>

      <div className={styles.gallery}>
        {posts &&
          posts.map((post) => (
            <>
              <div className={styles.pics}>
                <Image
                  src={post.IMGURL}
                  alt="활동이미지"
                  fill
                  sizes="(max-width: 250px),
                (max-width: 200px)"
                  quality={100}
                ></Image>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
