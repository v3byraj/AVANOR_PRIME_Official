import { useState, useEffect } from "react";

export default function ArticleForm({
  onSubmit,
  initialData = {},
  loading = false,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    readTime: "",
    featured: false,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "",
        readTime: initialData.readTime || "",
        featured: initialData.featured || false,
      });

      setPreview(initialData.image || "");
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("readTime", formData.readTime);
    data.append("featured", formData.featured);

    if (image) {
      data.append("image", image);
    }

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      {/* Title */}
      <div>
        <label className="font-semibold">Title</label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 mt-2"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="font-semibold">Description</label>

        <textarea
          rows="6"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 mt-2"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="font-semibold">Category</label>

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 mt-2"
          required
        />
      </div>

      {/* Read Time */}
      <div>
        <label className="font-semibold">Read Time</label>

        <input
          type="text"
          name="readTime"
          value={formData.readTime}
          onChange={handleChange}
          placeholder="5 Min Read"
          className="w-full border rounded-lg px-4 py-3 mt-2"
        />
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />

        <label>Featured Article</label>
      </div>

      {/* Image */}
      <div>
        <label className="font-semibold">Article Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="mt-3"
          required={!preview}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full md:w-72 rounded-xl mt-5 object-cover"
          />
        )}
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Save Article"}
      </button>
    </form>
  );
}