import React from 'react';

export default function Job({img,name,period,alt}) {
    return (
        <>
                    <img src={img} alt={alt}/>
            <div>
              <p className="job__name">{name}</p>
              <p className="job__period">{period}</p>
            </div>
</>
        );
}

