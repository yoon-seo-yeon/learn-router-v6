import React from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

const Home = props => <h2>Home</h2>
const About = props => <h2>About</h2>
const Users = props => <h2>Users</h2>
const Hello = props => <h2>Hello</h2>

function App() {
    return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        {/*
                            Link 컴포넌트를 이용하여 "특수한" 앵커 태그(a)를 생성
                            (겉모습은 a 태그와 같지만 실제로 페이지 이동이 이루어지
                            지 않고, 브라우저의 주소만 변경함)
                        */}
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/hello">Hello</Link></li>
                </ul>
            </nav>
            {/*
            Routes 컴포넌트에 포함된 Route 컴포넌트는 path에 설정된 주소와 현재
            주소가 일치할 경우,
            BrowserRouter 컴포넌트
            전체 앱(루트 컴포넌트)을 BrowserRouter 컴포넌트로 감싸는 형태로 라우터가 동작하도록 설정
            내부적으로는 Context API를 사용하여 라우팅과 관련된 정보를 전달함
            보통 관례적으로 BrowserRouter를 as 키워드를 이용하여 Router 별칭을 통해 불러옴
            Link와 Route 컴포넌트
            Link 컴포넌트
            Link 컴포넌트를 추가하며 to 속성값으로 주소를 써주면 해당 링크로 이동할 수 있는 앵커 태그로
            변환되어 추가됨
            Link 컴포넌트를 통해 그려진 앵커 태그는 HTML5의 History API를 이용해서 페이지 이동없이
            주소만 변경하도록 동작하는 특수한 앵커 태그
            즉, 그냥 앵커 태그를 쓸 경우에는 브라우저에 의한 페이지 이동이 발생하므로 리액트 앱 외부
            로 이동할 타 사이트의 링크를 제공하는 것이 아니라면 반드시 Link 태그를 이용해야 함
            element 속성을 통해 전달한 컴포넌트를 렌더링
            */}
    <Routes>
    {/*
        현재 주소가 "/about"이면 element에 지정한 JSX를 렌더링함
        (여기서는 About 컴포넌트를 렌더링)
    */}
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="/" element={<Home />} />
    {/* <Route path="/hello" element={<div>Hello!</div>} /> */}
    <Route path="/hello" element={<Hello />} />
    </Routes>
    </div>
    </Router>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))