import Sidebar from "../../Components/Layout/Sidebar";
import ArticleTable from "../../Components/Layout/ArticleTable";

export default function Dashboard() {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-8">

                <h1 className="text-3xl font-bold mb-8">
                    Dashboard
                </h1>

                <ArticleTable />

            </div>

        </div>

    )

}