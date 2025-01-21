import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailMenu() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { "id": 1, "label": "Detail", "href": "#detail","component":"<Detail/>" },
        { "id": 2, "label": "Review", "href": "#review","component":"<Review/>" },
        { "id": 3, "label": "Q&A", "href": "#qna","component":"<QnA/>" },
        { "id": 4, "label": "Return & Delivery", "href": "#delivery","component":"<Delivery/>" }
    ]

    return (
        <ul className="detail-menu">
            {tabs.map(tab =>
                <li className={(activeTab === tab.id) ? 'active' : ''}
                    onClick={() => setActiveTab(tab.id)}>
                    <Link to={tab.href}>
                        <label>{tab.label}</label>
                    </Link>
                </li>
            )}
        </ul>
    );
}

