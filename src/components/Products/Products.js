import { COLUMNS } from "./columns";
import { useTable } from "react-table";
import { useMemo } from "react";
import ProductsTable from "./ProductsTable";

export default function Products({ products }){
    return (
        <div>
            <ProductsTable products={products}/>
        </div>
    )
}