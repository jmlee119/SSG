import MainEventSection from '../../components/pages/Main/MainEventSection'
import MainShortcutSection from '@/components/pages/Main/MainShortcutSection'
import MainSecondNav from '@/components/pages/Main/MainSecondNav'
import MainBanner from '@/components/pages/Main/MainBanner'
import MainCategorySlideButton from '@/components/pages/Main/MainCategorySlideButton'
import ProductList from '@/components/pages/category/ProductList'

async function Home() {
    // const data: product[] = await getProductList()
    // console.log(data)
    return (
        <main>
            <MainSecondNav />
            <MainEventSection />
            <MainShortcutSection />
            <MainBanner />
            <MainCategorySlideButton />
        </main>
    )
}
export default Home
