"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Apilist } from "@/components/ui/api-list";
interface ColorClientProps{
    data: ColorColumn[]
}

export const ColorsClient: React.FC<ColorClientProps> = async ({
    data
})=>{
    const router = useRouter();
    const params = useParams();


    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title= {`Colors (${data.length})`}
            description="Manage colors for your store"/>
        <Button onClick={()=>{router.push(`/${params.storeId}/colors/new `)}}>
            <Plus/>
            Add New
        </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading 
        title="API"
        description="API calls for Colors"/>
        <Separator/>
        <Apilist entityName="colors" entityIdName="colorId" />

        </>
    )
}