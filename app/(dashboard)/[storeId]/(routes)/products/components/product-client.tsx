"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Apilist } from "@/components/ui/api-list";

interface ProductClientProps{
    data: ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = async ({
    data
})=>{
    const router = useRouter();
    const params = useParams();


    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title= {`Products (${data.length})`}
            description="Manage products for your store"/>
        <Button onClick={()=>{router.push(`/${params.storeId}/products/new `)}}>
            <Plus/>
            Add New
        </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading 
        title="API"
        description="API calls for Products"/>
        <Separator/>
        <Apilist entityName="products" entityIdName="productId" />

        </>
    )
}