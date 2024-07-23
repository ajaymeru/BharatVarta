import React, { useState } from 'react'
import "./Home.css";

const Home = () => {
    const [category, setCategory] = useState('')

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(category);
    }
    return (
        <div className="home">
            <h1>Welcome to BharatVarta</h1>
            <form onSubmit={handlesubmit}>
                <label htmlFor="category">Choose a category:</label>
                <select name="" id="category" value={category} onChange={handleCategoryChange}>
                    <option value="">--Select a category--</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home