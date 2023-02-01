import Link from "next/link"
import Footer from '@/components/Footer'
import SearchView from '@/components/SearchView'
import styles from '@/styles/Search.module.css'

export default function Search() {
    return(
        <>
            <div className={styles.topnav}>
                <div className={styles.titlebar}>
                    <Link href="/">
                        <button>&lt;</button>
                    </Link>
                    <div>검색</div>
                </div>
                <div className={styles.searchbar}>
                    <div>구 선택 ▼</div>
                    <input type="text"/>
                </div> 
            </div>

            <div className={styles.undernav}>
                <div className={styles.condition}>
                    <div className={styles.check}>
                        <p>검색조건</p>
                        <label><input type="checkbox"/>교육</label>
                        <label><input type="checkbox"/>시설</label>
                        <label><input type="checkbox"/>체험</label>
                        <label><input type="checkbox"/>무료만</label>
                    </div>
                    <hr></hr>
                    <p>검색결과 10건</p>
                </div>
            </div>
            <SearchView key={null} type={undefined} props={undefined}></SearchView>

            <Footer></Footer>

        </>

    )
  }