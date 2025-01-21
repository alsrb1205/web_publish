import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import QnAList from './QnAList';

export default function QnA() {

    return (
        <div className='product-qna'>
            <div className='question-button'>
                <button type='button'>상품문의</button>
            </div>
            <QnAList/>
                <ul className='pagination'>
                    <li><Link to={'#'}><button type='button'>&lt;&lt;</button></Link></li>
                    <li><Link><button type='button'>&lt;</button></Link></li>
                    <li><Link>1</Link></li>
                    <li><Link>2</Link></li>
                    <li><Link>3</Link></li>
                    <li><Link>4</Link></li>
                    <li><Link><button type='button'>&gt;&gt;</button></Link></li>
                    <li><Link><button type='button'>&gt;</button></Link></li>
                </ul>
        </div>
    );
}

