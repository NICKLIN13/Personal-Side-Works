import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<Link class="navbar-brand" to="/">Lin Portfolio</Link>

					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-center" id="navbarNav">
						<ul class="navbar-nav">
							<li class="navbar-brand">
								<a class="nav-link" href="#">About me</a>
							</li>
							<li class="navbar-brand">
								<a class="nav-link" href="#">Experience</a>
							</li>
							<li class="navbar-brand">
								<Link class="nav-link" to="/Project">Project</Link>
							</li>
							<li class="navbar-brand">
								<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Coming Soon</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
