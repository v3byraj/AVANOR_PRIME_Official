import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../api/innovationApi";

export const LatestInnovations = () => {
  const location = useLocation();
  const isResearchPath = location.pathname === "/research";
  const [innovations, setInnovations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pinnedIds, setPinnedIds] = useState(() => {
    try {
      if (typeof window === "undefined") return [];
      const raw = localStorage.getItem("pinnedInnovations");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const fetchInnovations = async () => {
  try {
    const res = await API.get("/innovations");
    setInnovations(res.data.innovations);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchInnovations();
}, []);

useEffect(() => {
  try {
    localStorage.setItem("pinnedInnovations", JSON.stringify(pinnedIds));
  } catch (e) {
    console.log(e);
  }
}, [pinnedIds]);

const togglePin = (id) => {
  setPinnedIds((prev) => {
    if (prev.includes(id)) return prev.filter((x) => x !== id);
    return [id, ...prev];
  });
};

// Precompute filtered, pinned and other items for rendering
const queryLower = searchQuery.trim().toLowerCase();
const filtered = innovations.filter((item) => {
  if (!queryLower) return true;
  return [item.title, item.category, item.description]
    .filter(Boolean)
    .some((field) => field.toLowerCase().includes(queryLower));
});

const pinnedItems = filtered.filter((i) => pinnedIds.includes(i._id));
const otherItems = filtered.filter((i) => !pinnedIds.includes(i._id));


  return (
    <section className="bg-[#f6f5f2] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b pb-6">

          <div>
            <p className="uppercase tracking-[4px] text-[#d86b25] text-sm font-semibold">
              Latest Innovation
            </p>

            <h2 className="text-5xl font-bold mt-2">
              Avanor Spectrum
            </h2>

            <p className="text-gray-500 mt-2">
              Research • AI • Technology • Innovation
            </p>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Innovations..."
            className="w-full lg:w-80 rounded-lg border px-5 py-3 bg-white outline-none"
          />

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 mt-12">

          {/* Left: wide area for pinned items or hero */}
          <div className="lg:col-span-2 space-y-10">
            {(() => {
              if (pinnedIds.length === 0) {
                return (
                  <div>
                    <div className="flex gap-3 text-xs uppercase tracking-widest">
                      <span className="border px-3 py-1">News</span>
                      <span className="text-[#d86b25]">Artificial Intelligence</span>
                    </div>

                    <h1 className="text-5xl leading-tight font-serif mt-6">
                      AI Is Transforming The Future Of
                      Education And Research Across
                      The World
                    </h1>

                    <p className="text-gray-500 text-lg mt-4">
                      Avanor Prime explores how Artificial Intelligence,
                      Machine Learning and modern computing are shaping
                      the next generation of innovation.
                    </p>

                    <div className="flex gap-6 text-gray-500 uppercase text-sm mt-8">
                      <span>25 JUL 2026</span>
                      <span>8 MIN READ</span>
                      <FaRegBookmark />
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
                      className="mt-8 rounded-xl w-full h-[520px] object-cover"
                    />
                  </div>
                );
              }

              // Render pinned items when present
              return (
                <div className="space-y-6">
                  {pinnedItems.map((item) => (
                    <div key={item._id} className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow overflow-hidden">
                      <a href={`/research/${item._id}`} className="block md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img src={item.image || item.img} alt={item.title} className="w-full h-full object-cover" />
                      </a>

                      <div className="p-6 md:w-1/2">
                        <div className="flex items-start justify-between gap-4">
                          <p className="uppercase text-xs tracking-[3px] text-[#d86b25]">{item.category}</p>

                          <button onClick={(e) => { e.stopPropagation(); togglePin(item._id); }} aria-label="Pin article" className="text-gray-600">
                            {pinnedIds.includes(item._id) ? <FaBookmark /> : <FaRegBookmark />}
                          </button>
                        </div>

                        <a href={`/research/${item._id}`} className="block text-3xl font-semibold mt-3 hover:text-[#00629B]">{item.title}</a>

                        <p className="text-gray-600 mt-4 text-sm" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {item.description}
                        </p>

                        <div className="flex gap-5 text-xs uppercase text-gray-500 mt-6">
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                          <span>{item.readTime || "5 Min Read"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Right: compact list */}
          <div className="space-y-10">

            {otherItems.map((item, index) => (
              <div key={item._id || index} className="flex gap-5 border-b pb-8">

                <div className="flex-1">

                  <div className="flex items-center justify-between">
                    <p className="uppercase text-xs tracking-[3px] text-[#d86b25]">{item.category}</p>

                    <button onClick={(e) => { e.stopPropagation(); togglePin(item._id); }} aria-label="Pin article" className="text-gray-600">
                      {pinnedIds.includes(item._id) ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                  </div>

                  <a href={`/research/${item._id}`} className="block text-2xl font-semibold leading-snug mt-3 hover:text-[#00629B] cursor-pointer">{item.title}</a>

                  <div className="flex gap-5 text-xs uppercase text-gray-500 mt-5">
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    <span>{item.readTime || "5 Min Read"}</span>
                  </div>

                </div>

                <a href={`/research/${item._id}`} className="block w-36 h-28 overflow-hidden rounded-lg">
                  <img src={item.image || item.img} alt={item.title} className="w-full h-full object-cover" />
                </a>

              </div>
            ))}

            {!isResearchPath && (
              <div className="mt-10 text-center lg:text-left">
                <Link
                  to="/research"
                  className="inline-flex items-center justify-center rounded-full bg-[#00629B] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#004f7f]"
                >
                  View All Articles
                </Link>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};