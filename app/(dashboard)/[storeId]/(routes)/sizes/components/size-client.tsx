"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Apilist } from "@/components/ui/api-list";
interface SizeClientProps{
    data: SizeColumn[]
}

export const SizesClient: React.FC<SizeClientProps> = async ({
    data
})=>{
    const router = useRouter();
    const params = useParams();


    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title= {`Sizes (${data.length})`}
            description="Manage sizes for your store"/>
        <Button onClick={()=>{router.push(`/${params.storeId}/sizes/new `)}}>
            <Plus/>
            Add New
        </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading 
        title="API"
        description="API calls for Sizes"/>
        <Separator/>
        <Apilist entityName="sizes" entityIdName="sizeId" />

        </>
    )
}