import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
	return (
		<section className="container">
			<h2 className="mt-5">Welcome to admin home page</h2>
			<hr />
			<nav className="nav flex-column">
				<Link to={"/create-quiz"} className="nav-link">
					Create a New Quiz
				</Link>
				<Link to={"/all-quizzes"} className="nav-link">
					Manage existing Quizes
				</Link>
			</nav>
		</section>
	)
}

export default Admin
