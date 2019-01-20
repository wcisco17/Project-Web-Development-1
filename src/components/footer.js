import React from 'react'

import Fac from '../data/fac.svg'


export default () => (
    <footer class="footer">
			<div class="footer_bar d-flex flex-column flex-sm-row px-5 align-items-center">
				<div class="footer_copyright">
                    <span>Copyright &copy; Angu Team</span>
				</div>
				<div class="footer_social ml-sm-auto">
					<ul class="menu_social">
						<img 
						style={{ width: "15%", background:"white" }}
						className='rounded-circle'
						alt=".." src={require("../img/facebook(1).png")} />
						<img 
						style={{ width: "15%", background:"white" }}
						className='rounded-circle'
						alt=".." src={require("../img/twitter.png")} />
						<img 
						style={{ width: "15%", background:"white" }}
						className='rounded-circle'
						alt=".." src={require("../img/whatsapp.png")} />
						<img 
						style={{ width: "15%", background:"white" }}
						className='rounded-circle'
						alt=".." src={require("../img/youtube.png")} />
						
					</ul>
				</div>
			</div>
	</footer>
)