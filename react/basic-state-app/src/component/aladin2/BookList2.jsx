import React, { useEffect, useState } from 'react';
import Book2 from './Book2';

export default function BookList2() {
    const [bookList, setBookList] = useState([]);
    const [type, setType] = useState('total');
    useEffect(() => {
        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                setBookList(type === 'total' ? jsonData.books : jsonData.books.filter(book => book.type === type));
            })
            .catch()
    }, [type])
    const handleType = (event) => {
        setType(event.target.value);
    }

    return (
        <>
            <div>
                <input type="radio" name='type' value='total' onClick={handleType} />전체
                <input type="radio" name='type' value='domestic' onClick={handleType} />국내
                <input type="radio" name='type' value='overseas' onClick={handleType} />국외
            </div>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {bookList && bookList.map((item) =>
                    <li style={{ listStyleType: "none" }}><Book2 img={item.img}
                        title={item.title} type={item.type} name={item.name} /></li>
                )}
            </ul>
        </>
    );
}

