'use client'
import React from 'react';
import {usePathname} from "next/navigation"

export default function PostDetail({ match }) {
    const pathname = usePathname()
    const id = pathname.split("")[pathname.length-1];
    // console.log();
    return (
        <h1>Post Detail: {id}</h1>
    )
} 
