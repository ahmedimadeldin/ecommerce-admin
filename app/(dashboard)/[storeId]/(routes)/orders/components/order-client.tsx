"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Apilist } from "@/components/ui/api-list";
interface BillboardClientProps{
    data: OrderColumn[]
}

export const OrderClient: React.FC<BillboardClientProps> = async ({
    data
})=>{
    const router = useRouter();
    const params = useParams();


    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title= {`Orders (${data.length})`}
            description="Manage orders for your store"/>
        </div>
        <Separator/>
        <DataTable searchKey="products" columns={columns} data={data}/>

        </>
    )
}