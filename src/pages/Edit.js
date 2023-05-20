import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode");

    console.log("id : ", id);
    console.log("mode : ", mode);

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 페이지입니다.</p>
            <button onClick={()=>{setSearchParams({id : "0924",mode : "light"});}}>
            Query String 변경
            </button>
            <button onClick={()=>{navigate("./home");}}>
            Home으로 이동!
            </button>
        </div>
    );
}

export default Edit;