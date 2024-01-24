import "../../css/notfound.css"

function NotFound() {
    return (
        <div className="notfound_wrapper">

            <div className="notfound_text_box">
                <h2 className="notfound_title">앗, 여기는 아무 것도 없어요!</h2>
                <p className="notfound_text">정확한 주소를 입력하셨는지 확인하고, 다른 곳을 찾아보세요! 🙂</p>
                <a href="/">
                <button className="back_to_main_button">스터디 보러가기</button>
                </a>
            </div>

            
                <img alt="notfound_image" src="/image/notfound_image.png"></img>     
           

        </div>
    )
}

export default NotFound