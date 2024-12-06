import PackageContentItem from "./PackageContentItem";
import PackageContentTitle from "./PackageContentTitle";
export default function PackageContent({title, list}) {
    // const list =[
    //     {"src":"/images/package1.jpg","alt":"package1","text":"우리 패키지","price":"60000"},
    //     {"src":"/images/package1.jpg","alt":"package1","text":"우리 패키지","price":"60000"},    {"src":"/images/package1.jpg","alt":"package1","text":"우리 패키지","price":"60000"}
    // ];
    
    return (
            <div class="package">
                <PackageContentTitle title={title} />
                <ul>
                    {list&&list.map(item => 
                                <li>
                                <PackageContentItem
                                    src={item.src}
                                    alt={item.alt}
                                    text={item.text}
                                    price={item.price}
                                />
                                </li>
                    )}
                    
                </ul>
            </div>


    );
}
