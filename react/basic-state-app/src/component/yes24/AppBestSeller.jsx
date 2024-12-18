import React, { useEffect, useState } from 'react';
import BestBook from './BestBook';
import './BestBook.css';
import MenuList from './MenuList';

export default function AppBestSeller() {
    const [menuList, setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [category,setCategory] = useState('total');
    useEffect(() => {
        fetch('/data/yes24.json')
            .then(data => data.json())
            .then(jsonData => {
                setMenuList(jsonData.menuList)
                if (category==='total'){
                    setBookList(jsonData.bookList)
                } else {
                    //category 값에 따라 필터링 처리 훟 setBookList에 추가
                    const filterBooks = jsonData.bookList.filter((book)=>book.category===category);
                    setBookList(filterBooks);
                }
            })
    }, [category]);

    // AppBestSeller <-- MenuList <-- Menu
    const handleClickReq2 = (category) => {
        setCategory(category);
    }
    
    return (
        <div className='container'>
            <MenuList list={menuList} click = {handleClickReq2}/>
            <BestBook bookList={bookList} />
        </div>
    );
}

