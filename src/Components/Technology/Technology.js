// src/Component/Technology/Technology.js

// import React, { useState, useEffect } from 'react';
// import "./Technology.css";

// const Technology = () => {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         const fetchArticles = async () => {
//             try {
//                 const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=316295073dc14f2f92b17975475e2c7f');
//                 const data = await response.json();
//                 console.log(data);
//                 setArticles(data.articles);
//             } catch (error) {
//                 console.error("Error fetching technology articles:", error);
//             }
//         };

//         fetchArticles();
//     }, []);

//     return (
//         <div className="technology">
//             <h1>Technology News</h1>
//             <div className="cards">
//                 {articles.map((article, index) => (
//                     <div key={index} className="card">
//                         {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
//                         <div className="card-content">
//                             <h2>{article.title}</h2>
//                             <p>{article.description}</p>
//                             <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Technology;

// src/Component/Technology/Technology.js

import React, { useState, useEffect } from 'react';
import "./Technology.css";

const Technology = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=316295073dc14f2f92b17975475e2c7f');
                const data = await response.json();
                if (data.articles) {
                    setArticles(data.articles);
                } else {
                    setArticles([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching technology articles:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching technology articles: {error.message}</div>;
    }

    return (
        <div className="technology">
            <h1>Technology News</h1>
            <div className="cards">
                {articles.map((article, index) => (
                    <div key={index} className="card">
                        {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                        <div className="card-content">
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technology;
