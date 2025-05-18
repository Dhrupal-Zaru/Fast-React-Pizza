import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import React from "react";
import Username from '../features/user/Username';


export default function Header() {
    return (
        <div className='flex gap-2 items-center justify-between bg-orange-400 uppercase px-4 py-3 border-b border-zinc-200'>
            <Link to='/' className='tracking-widest text-xl p-3 text-zinc-50'>Fast React Pizza Co.</Link>
            <SearchOrder/>
            <Username/>
        </div>
    )
}
