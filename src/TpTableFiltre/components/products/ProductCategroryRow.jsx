/**
 * 
 * @param {string} name
 */
export function ProductCategoryRow({name}) {
    return <tr>
        <td className="fw-semibold text-center" colSpan={2}>{name}</td>
    </tr>
}