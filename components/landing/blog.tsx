import React from "react";
import InfiniteMovingCards from "../ui/infinite-moving-cards";

function Blog() {
  return (
    <section className="container py-10">
      <h3 className="text-3xl mb-4">Recent Blogs</h3>
      <InfiniteMovingCards
        items={[
          { name: "Understanding useCallback vs. useMemo in React", href: "/" },
          { name: "How to make a blog", href: "/" },
        ]}
      />
    </section>
  );
}

export default Blog;
