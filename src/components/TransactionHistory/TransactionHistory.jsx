import styles from './TransactionHistory.module.css';

function upperFirstLetter(string) {
    let newStr = string[0].toUpperCase() + string.slice(1);
    return newStr;
}
const TransactionHistory = ({items}) => {
    return <div class={styles.transTable}>
    <table class="transaction-history">
        <thead class={styles.table}>
            <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
            </tr>
            </thead>
            <tbody class={styles.tableBody}>
            {items.map((item) => (
            <tr key={item.id}>
                    <td class={styles.tableData}>{ upperFirstLetter(item.type) }</td>
                    <td class={styles.tableData}>{ item.amount }</td>
                    <td class={styles.tableData}>{ item.currency }</td>
            </tr>
        ))}      
        </tbody>
    </table>
    </div>
}

export default TransactionHistory;