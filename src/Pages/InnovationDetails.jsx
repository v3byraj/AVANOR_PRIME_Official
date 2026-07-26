import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle } from "../api/innovationApi";
import { FaArrowLeft } from "react-icons/fa6";

export default function InnovationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [innovation, setInnovation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInnovation = async () => {
      try {
        const res = await getArticle(id);
        setInnovation(res.data.innovation);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInnovation();
  }, [id]);

  if (loading) {
    return (
      <section className="bg-[#f6f5f2] min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500">Loading innovation details...</div>
      </section>
    );
  }

  if (!innovation) {
    return (
      <section className="bg-[#f6f5f2] min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500">Innovation not found.</div>
      </section>
    );
  }

  const publishedDate = innovation.createdAt
    ? new Date(innovation.createdAt).toLocaleDateString()
    : "";

  return (
    <section className="bg-[#f6f5f2] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-[#00629B] font-medium mb-8"
        >
          <FaArrowLeft /> Back to Research
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="relative w-full h-[560px] sm:h-[620px] bg-[#f3f4f6]">
            <img
              src={innovation.image}
              alt={innovation.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="p-10 space-y-8">
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[3px] text-[#d86b25] font-semibold">
              <span>{innovation.category}</span>
              <span>{publishedDate}</span>
              <span>{innovation.readTime || "5 Min Read"}</span>
              {innovation.featured && <span className="text-black">Featured</span>}
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  {innovation.title}
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {innovation.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 text-sm max-w-xl">
                  Want to verify and join the Avanor community? Tap the button to join our verified membership channel and stay connected with the latest innovation updates.
                </p>

                <a
                  href="https://www.linkedin.com/company/avanorprime/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#00629B] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#004f7f]"
                >
                  Join 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
