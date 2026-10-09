import React from 'react'
import { Button } from '@/components/ui/button'
import Header from '../common/section-header'
import { ArrowRightIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'

const featuredProducts = [
    {
        id : 1 ,
        name : "partykit" ,
        description : "a tool for creating a partyin product" ,
        tags : [
            "saas",
            "tech",
            "ai"
        ] ,
        isFeatured : true
    } ,
    {
        id : 1 ,
        name : "partykit" ,
        description : "a tool for creating a partyin product" ,
        tags : [
            "saas",
            "tech",
            "ai"
        ] ,
        isFeatured : true
    } ,
    {
        id : 1 ,
        name : "partykit" ,
        description : "a tool for creating a partyin product" ,
        tags : [
            "saas",
            "tech",
            "ai"
        ] ,
        isFeatured : true
    }
]

const featuredProduct = () => {


  return (
  <section className='py-12 bg-muted/20'>
    <div className='wrapper'>
        <div className='sm:flex items-center justify-between mb-8'>
            <Header title='Featured Today' icon={StarIcon} description='Top picks from our community this week'/>
            <Button variant={'outline'} className={" sm:px-7 bg-white py-4 text-lg font-semibold tracking-wide "}>
                <Link
              href="/explore"
              className="hidden sm:flex items-center justify-center gap-2 "
            >
              View all <ArrowRightIcon size={16} />
            </Link>
            </Button>
        </div>
        <div className='grid-wrapper'>
            {featuredProducts.map((products)=> (
                <div key={products.id}>
                    <h3>{products.name}</h3>
                </div>
            ))}

        </div>
    </div>
  </section>
  )
}

export default featuredProduct