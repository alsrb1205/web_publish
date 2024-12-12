import React, { useEffect, useState } from 'react';
import Book from './Book';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState('total');
    const [selectCategory, setSelectCategory] = useState('');

    useEffect(() => {
        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                setCategory(jsonData.categories);
                if (type === 'total') {
                    setBooks(jsonData.books) // 전체 도서 목록
                    const filterBooks = jsonData.books.filter((book) => book.type === type);//타입으로 필터링 , if 문 코드 간결하게 사용가능
                    setBooks(filterBooks);
                }
            })
            .catch(error => console.log(error))
    }, [type,selectCategory]);
    const handleClick = (event) => {
        setType(event.target.value);
    }
    const handleChangeCategory = (event) => {
        setSelectCategory(event.target.value);
    }

    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleClick} />전체
                <input type="radio" name="type" value="domestic" onClick={handleClick} />국내도서
                <input type="radio" name="type" value="overseas" onClick={handleClick} />국외도서
                <select name="" id="" onChange={handleChangeCategory}>
                    <option value="선택">선택</option>
                    {category && category.map(item =>
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {books && books.map(book =>
                    <li style={{ listStyleType: "none" }}>
                        <Book img={book.img} title={book.title} type={book.type} />
                    </li>
                )}
            </ul>
        </>
    );
}

