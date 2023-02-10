import Image from "next/image";
import styles from "@/styles/Search.module.css";
import React, { useEffect, useState } from "react";
import { Post } from "./Interface";
import getPost from "@/pages/api/getPost";
import Link from "next/link";
import Pagination from "react-js-pagination";

export default function SearchView(child: JSX.Element) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const set = async (start: number, end: number) => {
      setPosts(await getPost(start, end));
    };
    set((page - 1) * 10 + 1, page * 10 + 20);
  }, [handlePageChange]);

  return (
    <>
    <div className={styles.galleryContainer}>
      {posts &&
        posts.map((post) => (
          <Link href="/post">
            <div className={styles.gallery}>
              <div className={styles.pics}>
                <Image
                  src={post.IMGURL}
                  alt="활동이미지"
                  fill
                  sizes="(max-width: 250px),
                (max-width: 250px)"
                  quality={100}
                ></Image>
              </div>
              <div className={styles.exp}>
                <span className={styles.tag}>{post.SVCSTATNM}</span>
                <span className={styles.tag}>{post.AREANM}</span>
                <span className={styles.tag}>{post.MAXCLASSNM}</span>
                <span className={styles.tag}>{post.MINCLASSNM}</span>
                <div className={styles.postTitle}>{post.SVCNM}</div>
              </div>
            </div>
          </Link>
        ))}
    </div>
          <div className={styles.pagination}>
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={1000}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          ></Pagination>
        </div>
        </>
  );
}
