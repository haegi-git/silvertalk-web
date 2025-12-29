export default function RightSide(){
    return(
        <aside className="border-l border-gray-300">
            
            <div className="flex flex-col border-b">
                <p className="text-xs text-center mb-2">안녕하세요.<br/> 매너 있는 환경에 동참해주세요.</p>
                <input className="border"/>
                <input className="border"/>
                <button>로그인</button>
                <button>카카오 회원가입</button>
                <button>회원가입</button>
            </div>

            <ul className="flex
             flex-col
             text-center
             mt-3 mb-3
             text-lg
             font-bold">
                <li>공지 사항</li>
                <li>공공 일자리</li>
            </ul>

            <ul className="flex
             flex-col
             text-center
             mt-3 mb-3
             text-lg
             font-bold">
                <li>자유 게시판</li>
                <li>유머 게시판</li>
                <li>취미 게시판</li>
                <li>벙개 게시판</li>
                <li>정치 게시판</li>
            </ul>
        </aside>
    )
}