import NewsItemFind from "./newsItemFind"
function NewsGridFind({items}) {
    return (
        <div className="news-body">
            <div className="news-grid">
                {items.map((item, i) => (
                    <NewsItemFind key={i} item={item} />
                ))}
            </div>
        </div>
    )
}
export default NewsGridFind