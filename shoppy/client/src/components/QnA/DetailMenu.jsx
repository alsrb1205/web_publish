import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailMenu({ activeTab, setActiveTab }) {
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
                    <label>{tab.label}</label>
                </li>
            )}
        </ul>
    );
}

