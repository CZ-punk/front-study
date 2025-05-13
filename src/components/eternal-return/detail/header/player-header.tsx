import styled from "styled-components";
import HeaderContent from "./header-content";
import HeaderImage from "./header-image";
import { useEffect, useState } from "react";
import GetSeason, { ResSeasonDto } from "../../../../api/eternal-return/get-season";
import { useApi } from "../../../../api/useApi";
import HeaderSeason from "./header-season";

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 80%;
    height: 80%;
    margin: 0 auto;
`
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`

export const SubWrapper = styled.div`

`

const PlayerHeader: React.FC = () => {
    // const {playerHeaderInfo, setPlayerHeaderInfo} = usePlayerHeaderInfo();
    const [seasonList, setSeasonList] = useState<ResSeasonDto[] | undefined>();
    const [selectSeason, setSelectSeason] = useState<number>(31);
    const api = useApi();
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    loading;
    error;

    const fetchGetSeason =  async () => {
        try {
            setLoading(true);
            const response = await GetSeason(api)
            setSeasonList(response.data);
            const data = response.data.filter(season => season.isCurrent);
            setSelectSeason(data[0].seasonId);
        } catch (err) {
            setError('Failed to load season infomation');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGetSeason()
    }, [])

    useEffect(() => {
        // username 을 통해 player 정보 받아오는 api
        


        // 이걸 더 상위 컴포넌트에서 진행할 지 고려
    }, [selectSeason])

    return (
        <Wrapper>
            <MainWrapper>
                <HeaderImage src={"/image/loveheart_half.png"}/> 
                {/* skinCode Props */}

                <HeaderContent level={"lv80"} nickname={"nickname"} selectSeason={selectSeason}/>
                <HeaderSeason seasonList={seasonList} selectSeason={selectSeason} setSelectSeason={setSelectSeason}/>
                


            </MainWrapper>

            {/* <SubWrapper>
            subWrapper

            TODO: 여기를 만들지 말지..
            </SubWrapper> */}
        </Wrapper>

    )
}


export default PlayerHeader;