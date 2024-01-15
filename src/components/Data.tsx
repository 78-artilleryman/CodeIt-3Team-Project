import React, { FC } from "react";



interface Props {
	study : Array<any>;
	
}



const Data: FC<Props> = ({ study }) => {
	return (
		
		

			
			<div className="study_wrapper">
					<div>{ study[0].title}</div>
					<div>{ study[0].date}</div>
					<div>{ study[0].content}</div>
				</div>
			
		
    )
}
export default Data