import React, { useState } from 'react'
function Search(props) {

    const [querry, setquerry] = useState("")
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();//passing serach term to api call
                props.animelist(querry)
            }}>
                <center>
                    <h2>Find A Movie </h2>
                    <div className="ui icon input">
                        <input style={{ border: '1px solid grey', width: '60%', textAlign: 'center', fontSize: '20px', padding: "6px" }}
                            onChange={(e) => {
                                setquerry(e.target.value)
                            }}
                            value={querry} type="text" placeholder="Search..." />
                        <i className="search icon" />
                    </div>
                </center>
            </form>
        </div>
    )
}

export default Search
