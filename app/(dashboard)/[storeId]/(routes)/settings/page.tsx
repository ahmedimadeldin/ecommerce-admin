import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";

interface SettingsPageprops{
    params: {
        storeId: string,
    }
}
const SettingsPage: React.FC<SettingsPageprops> = async({
    params
}) => {

    const {userId} = auth();

    if (!userId) {
        redirect("/sign-in");
    };

    const store = await prismadb.store.findFirst({
        where:{id: params.storeId,
            userId}
    });

    if (!store) {
        redirect("/");
    }
  return (
    <div className="flex-col ">
        <div className="flex-1 space-y-4 px-8 pt-6">
            <SettingsForm initialData={store}/>
        </div>
    </div>
  )
}

export default SettingsPage