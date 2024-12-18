import BestBookAvatar from "./BestBookAvatar";
import BestBookButton from "./BestBookButton";
import BestBookContent from "./BestBookContent";

export default function BestBook({ bookList }) {

    return (
        <>
            {bookList && bookList.map((book,i) =>
                <div style={{ 'display': 'flex' }}>
                    <BestBookAvatar
                        rank={i+1}
                        img={book.img} />
                    <BestBookContent
                        suggest={book.suggest}
                        today={book.today}
                        type={book.type}
                        title={book.title}
                        author={book.author}
                        company={book.company}
                        pubDate={book.pubDate}
                        price={book.price}
                        perSale={book.perSale}
                        point={book.point}
                    />
                    <BestBookButton />
                </div>
            )}
        </>
    );

}
