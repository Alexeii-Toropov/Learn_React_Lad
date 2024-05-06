import classes from "./product.module.scss";

const PutProduct = () => {
    const product = {
        id: 1,
        name: "Наручные часы мужские SKMEI 1251",
        imageUrl: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
        price: 8165,
        discount: 90,
        rating: 4.7,
        isFavorite: true,
    }

    if (product.isFavorite) {
        return (
            <section className={classes.product}>
                <div className={classes.item}>{"Номер товара: " + product.id}</div>
                <div className={classes.item}>{"Наименование товара: " + product.name}</div>
                <div className={classes.item}>{"Ссылка на товар: " + product.imageUrl}</div>
                <div className={classes.item}>{"Цена: " + product.price}</div>
                <div className={classes.item}>{"Скидка: " + product.discount}</div>
                <div className={classes.item}>{"Рейтинг товара: " + product.rating}</div>
                <div className={classes.itemImportant}>Этот товар особенный!</div>
                <img className={classes.itemImportant2} src="./vite.svg" alt="Отметка особенности"/>
            </section>
        )
    } else {
        return (
            <section className={classes.product}>
                <div className={classes.item}>{"Номер товара: " + product.id}</div>
                <div className={classes.item}>{"Наименование товара: " + product.name}</div>
                <div className={classes.item}>{"Ссылка на товар: " + product.imageUrl}</div>
                <div className={classes.item}>{"Цена: " + product.price}</div>
                <div className={classes.item}>{"Скидка: " + product.discount}</div>
                <div className={classes.item}>{"Рейтинг товара: " + product.rating}</div>
            </section>
        )
    }
    
}
export default PutProduct;