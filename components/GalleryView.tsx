import Image from 'next/image'
import styles from '@/styles/Home.module.css'

let samplepics:string[]=[
    "https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283__340.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/01/16/abacus-1866497__340.jpg",
    "https://cdn.pixabay.com/photo/2020/09/18/03/28/people-5580755__340.jpg",
    "https://cdn.pixabay.com/photo/2020/07/09/14/24/asia-5387568__340.jpg",
    "https://cdn.pixabay.com/photo/2021/07/27/13/43/vietnamese-6496887__340.jpg",
]

export default function GallaryView(child:JSX.Element) {
    return (
      <>
        <h2 className={styles.gallerytitle}>{child.props.title}</h2>

        <div className={styles.gallery}>
        {samplepics.map(pic=>(
          <>
            <div className={styles.pics}>
                <Image 
                src={pic}
                alt="활동이미지"
                layout="fill"
                objectFit="cover"
                quality={100}></Image>
            </div>
          </>
        ))}
        </div>
      </>
    )
}