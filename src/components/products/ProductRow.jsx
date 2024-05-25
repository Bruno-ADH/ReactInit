import { useEffect } from "react";

/**
 * 
 * @param {(name: string, stocked: boolean, price: string)} 
 */
export function ProductRow({product}) {
// const style = product.stocked ? {
//     color: `var(--bs-primary)`,
// } : {
//     color: `var(--bs-danger)`,
// };
const style = {
    color: product.stocked ? `var(--bs-primary)` : `var(--bs-danger)`,
} 


// throw new Error('misclicked')

    return <tr>
        <td style = {style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}