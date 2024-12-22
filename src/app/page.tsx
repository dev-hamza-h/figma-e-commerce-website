import Hero from "@/components/Hero"
import NewArrivals from "@/components/product/NewArrivals"
import TopSeeling from "@/components/product/TopSelling"
import BrowseByStyle from "@/components/BrowseByStyle"
import Testimonials from "@/components/CustomerReviews"



export default function Home(){
  return( 
    <div>
      <Hero/>
      <NewArrivals/>
      <TopSeeling/>
      <BrowseByStyle/>
      <Testimonials/>
 
    </div>
  )
}