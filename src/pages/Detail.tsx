import { useParams } from 'react-router-dom'
import React, { FC } from "react";
import { Link } from 'react-router-dom';

interface Props {
	study : Array<any>;
	
}



const Detail: FC<Props> = ({ study }) => {

	
	let {id} = useParams();
	console.log(id)

	return (

		
			
			<div>
					<div>{ study[0].title}</div>
					<div>{ study[0].date}</div>
					<div>{ study[0].content}</div>

					<Link to="/editPost"><button>글 수정</button></Link>
					<Link to="/chatting"><button>작성자에게 채팅</button></Link>
				</div>
			
		
    )
}

export default Detail