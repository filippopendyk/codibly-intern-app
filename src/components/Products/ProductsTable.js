import { COLUMNS } from "./columns";
import { useTable, usePagination } from "react-table";
import { useMemo } from "react";

export default function PaginationTable({ products }){

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => products, [products])

    const tableInstance = useTable({
        columns,
        data
    },
        usePagination
    )

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow
    } = tableInstance;

    const { pageIndex } = state;

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}
                            style={{backgroundColor: row.original.color}}
                                >
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
                <tr> 
                    <td></td>
                </tr>
            </tbody>
        </table>
        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        </div>
        </>
    )
}