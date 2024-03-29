import React, { useEffect, useState } from 'react';
import { getStoredRead } from '../utility/LocalStorage';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const PagesToRead = () => {
     const [books1, setBooks] = useState([])
        useEffect ( () => {
            const storedBooks = getStoredRead()
            setBooks(storedBooks)
    }, [])
    return (
        <>
        <div>
<p className='font-bold text-3xl text-center'>Read list books name Against Read list book's total page</p>
<p className='text-center mb-10'>*for the bar chart to work, user need to add books into read list first</p>
        </div>
        <BarChart width={1200} height={800} data={books1}>
        <XAxis dataKey="bookName" tickMargin={10} />
        <YAxis />
        <Tooltip></Tooltip>

        <Bar dataKey="totalPages" fill="#8884d8" barSize={70} />
      </BarChart>
      </>
    );
};

export default PagesToRead;