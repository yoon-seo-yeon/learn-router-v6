import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom"


function UserDetail(props) {
    const [user, setUser] = userState(null)
    const {id} = useParams()

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json()) 
    })
}

function App() {
    return (
        <Router>
            <Link to="/users/1">1번 유저</Link><br />
            <Link to="/users/2">2번 유저</Link><br />
            <Link to="/users/3">3번 유저</Link><br />
            

            <Routes>
                <Route path="/users/:id" element={<UseLocationStudyComponent />}></Route>
            </Routes>
        </Router>
    )
}