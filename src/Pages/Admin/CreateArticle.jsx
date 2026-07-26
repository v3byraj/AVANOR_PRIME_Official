import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle as postArticle } from "../../api/innovationApi";
import ArticleForm from "../../Components/Layout/ArticleForm";

export default function CreateArticle() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const createArticle = async (data) => {
    try {
      setLoading(true);

      await postArticle(data);

      alert("Article Created Successfully");

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Create Article
      </h1>

      <ArticleForm
        onSubmit={createArticle}
        loading={loading}
      />
    </div>
  );
}