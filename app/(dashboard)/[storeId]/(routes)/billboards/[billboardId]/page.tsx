import prismadb from "@/lib/prismadb"
import { BillboardsForm } from "./components/billboard-form"

const BillboardPage = async({
    params
}:{params : {billboardId : string}})=>{

    const billboard = await prismadb.billboard.findUnique({
        where :{
            id: params.billboardId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-col space-y-4 p-8">
                <BillboardsForm initialData={billboard}/>
            </div>
        </div>
    )
}

export default BillboardPage