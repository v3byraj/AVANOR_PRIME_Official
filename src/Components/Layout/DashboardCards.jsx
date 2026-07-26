import { useState } from "react";
import {
  FaNewspaper,
  FaStar,
  FaFolder,
} from "react-icons/fa";

export default function DashboardCards({
  articles,
}) {

  const [search, setSearch] = useState("");

  const filteredArticles =
    articles.filter(article =>

      article.title
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  const featured =
    articles.filter((a) => a.featured).length;

  const categories =
    new Set(
      filteredArticles.map((a) => a.category)
    ).size;

  return (

    <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">

      <div className="bg-white rounded-xl shadow p-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-5 py-3 w-80"
        />


        <FaNewspaper className="text-blue-600 text-3xl mb-4" />

        <h2 className="text-3xl font-bold">

          {articles.length}

        </h2>

        <p>Total Articles</p>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <FaStar className="text-yellow-500 text-3xl mb-4" />

        <h2 className="text-3xl font-bold">

          {featured}

        </h2>

        <p>Featured</p>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <FaFolder className="text-green-600 text-3xl mb-4" />

        <h2 className="text-3xl font-bold">

          {categories}

        </h2>

        <p>Categories</p>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-3xl font-bold">

          {articles[0]?.title || "-"}

        </h2>

        <p>Latest Article</p>

      </div>

    </div>

  );

}