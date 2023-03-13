import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogCard from "./BlogCard";

const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <Header />
            <BlogCard />
            <Footer />
        </div>
    )
}

export default Homepage;