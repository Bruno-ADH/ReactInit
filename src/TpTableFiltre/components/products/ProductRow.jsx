/**
 * 
 * @param {(name: string, stocked: boolean, price: string)} 
 */
export function ProductRow({product}) {
const style = product.stocked ? {
    color: `var(--bs-primary)`,
} : {
    color: `var(--bs-danger)`,
};

    return <tr>
        <td style = {style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}