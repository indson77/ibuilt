import { LucideIcon } from 'lucide-react'
import {cn} from "@/lib/utils"
import React from 'react'

const Cards = ({
    icons : Icon ,
    value ,
    label,
    hasBorder ,
} : {
    icons : LucideIcon;
    value : string;
    label : string;
    hasBorder : boolean;
}) => {
  return (
    <div className={ cn(" md:space-y-2" , hasBorder && "md:border-x md:border-border/50")}>
        <div className='flex items-center justify-center gap-2'>
            <Icon  className=' size-5 text-primary/70'/>
            <p className='text-3xl sm:text-4xl font-semibold text-center'>{value}</p>
        </div>
        <div>
            <p className='text-sm text-muted-foreground text-center'>{label}</p>
        </div>
    </div>
  )
}

export default Cards