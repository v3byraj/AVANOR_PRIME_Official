import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API, { updateArticle as updateArticleApi } from "../../api/innovationApi";
import ArticleForm from "../../Components/Layout/ArticleForm";
import toast from "react-hot-toast";

export default function EditArticle() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [article, setArticle] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await API.get(`/innovations/${id}`);
        setArticle(res.data.innovation);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleUpdateArticle = async (data) => {
    try {
      setLoading(true);

      await updateArticleApi(id, data);

      toast.success("Article Updated Successfully");

      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">

        Edit Article

      </h1>

      <ArticleForm
        initialData={article}
        onSubmit={handleUpdateArticle}
        loading={loading}
      />

    </div>
  );
}