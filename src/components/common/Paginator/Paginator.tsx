import s from "./Paginator.module.css"

type PropsType = {
    currentPage: number
    onPageChanged: (page: number) => void
    pageSize: number
    totalUsersCount: number
}
export const Paginator = ({totalUsersCount, pageSize,currentPage, onPageChanged}: PropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize) // Делим Количество юзеров на количество юзеров доступных на странице
    let pages = [] // Создали пустой массив
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    } // Пушим количество страниц в массив чтобы потом отрисоввать


    return <div>
        {pages.map(p => <span className={currentPage === p ? s.selectedPage : ""}
                              onClick={() => onPageChanged(p)}>{p},</span>)} {/*Мапим Массив страниц */}
    </div>
}