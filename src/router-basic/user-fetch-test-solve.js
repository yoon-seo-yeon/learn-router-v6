import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link, 
    useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom"

function UserDetail(props) {
    const[user, setUser, setError] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => {
            console.log(r.status)
            if(r.status === 404) {
                throw new Error("404")
            }else {
                return r.json()
            }
        })
        .then(data => {
            setUser(data)
        }).catch(e => {
            console.log(e)
            setError(e)
            setUser(null)
        })
    }, [id])

    // if(error) {
    //     return <div>해당 유저는 존재하지 않습니다</div>
    // }else {
        if(user === null) return <div>qnffjdhsms wnd</div>
        return <div>{user.id}번 유지 {user.name}</div>
    //}
}

function UserList(props) {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(r => r.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

    const userList = users === null ? null : <div>
        {
            users.map(u => {
                return <>
                    <Link to = {`/users/${u.id}`}>{u.id}번 유저</Link><br/>
                </>
            })
        }
    </div>
}

function App(props) {
    return <Router>
        {/* <Link to = "/users/1">1번 유저</Link><br/>
        <Link to = "/users/2">2번 유저</Link><br/>
        <Link to = "/users/3">3번 유저</Link><br/> */}

        <Routes>
            //<Route path = "/" element={<UserList/>}/>
            <Route path = "/users/:id" element = {<UserDetail />}/>
        </Routes>
    </Router>
}

ReactDOM.render(<App />, document.getElementById("root"))