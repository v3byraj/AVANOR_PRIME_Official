import { useEffect, useState } from "react";
import API, { deleteArticle } from "../../api/innovationApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ArticleTable() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await API.get("/innovations");
                setArticles(res.data.innovations);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArticles();
    }, []);




    const handleDelete = async (id) => {

        const result = await Swal.fire({
            title: "Delete Article?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Delete",
        });

        if (!result.isConfirmed) return;

        try {

            await deleteArticle(id);

            setArticles((prev) =>
                prev.filter((item) => item._id !== id)
            );

            Swal.fire({
                icon: "success",
                title: "Deleted Successfully",
                timer: 1500,
                showConfirmButton: false,
            });

        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Delete Failed",
            });
        }
    };

    return (

        <table className="w-full">

            <thead>

                <tr>

                    <th>Image</th>

                    <th>Title</th>

                    <th>Category</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    articles.map(article => (

                        <tr key={article._id}>

                            <td>

                                <img

                                    src={article.image}

                                    className="w-20 h-16 object-cover rounded"

                                />

                            </td>

                            <td>{article.title}</td>

                            <td>{article.category}</td>

                            <td className="space-x-3">

                                <Link
                                    to={`/admin/edit/${article._id}`}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() => handleDelete(article._id)}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>

                            </td>
                        </tr>

                    ))

                }

            </tbody>

        </table>

    )

}