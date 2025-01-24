import React, { useState } from 'react';

export default function DetailMenu({ activeTab, setActiveTab, qnaCount,reviewCount }) {
    const tabs = [
        { "id": "detail", "label": "Detail", "href": "#detail" },
        { "id": "review", "label": "Review", "href": "#review" },
        { "id": "qna", "label": "Q&A", "href": "#qna" },
        { "id": "delivery", "label": "Return & Delivery", "href": "/products/:pid#delivery" }
    ]


    return (
        <ul className="detail-menu">
            {tabs.map(tab =>
                <li className={(activeTab === tab.id) ? 'active' : ''}
                    onClick={() => setActiveTab(tab.id)}>
                    <label>{tab.label}{(tab.id === 'qna' ? ` (${qnaCount})` : '')}
                        {(tab.id === 'review' ? ` (${reviewCount})` : '')}</label>
                </li>
            )}
        </ul>
    );
}


// (tab.id === 'qna' ? ` (${qnaCount})` : '')