import { useRef } from "react";

import styled from "styled-components";

const DIV1 = styled.div`
    height: 95vh;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`

const DIV2 = styled.div`
    height: 95vh;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`


const Test = () => {
    const scrollDownRef = useRef<HTMLDivElement | null>(null);

    const scrollToRef = () => {
        scrollDownRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    return (
        <div>
            <DIV1>
                <h1>버튼을 누르면 아래로 이동</h1>
                <button onClick={scrollToRef}>버튼 클릭</button>
            </DIV1>

            <DIV2 ref={scrollDownRef}>
                <h1>이동완료</h1>
            </DIV2>

        </div>
    )
}

export default Test;