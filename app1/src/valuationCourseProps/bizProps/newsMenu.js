function Menu({active, setActive, setCategory}) {
    const links =[
        { id: 1, name: "Stock", value: "stock"}
    ]

    function onClick(id, value) {
        setActive(id)
        setCategory(value)
    }

    return (
        <nav className="news-menu">
            <ul>
                {links.map(link => (
                    /* eslint-disable */
                    <li
                    key={link.id}
                    className={active === link.id ? "active" : "inactive"}
                    onClick={() => onClick(link.id, link.value)}
                    >
                        {link.name}
                    </li>
                    /* eslint-enable */

                ))}
            </ul>
        </nav>
    )
}
export default Menu