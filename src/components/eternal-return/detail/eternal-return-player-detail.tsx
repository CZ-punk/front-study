import PlayerHeader from "./header/player-header";
import PlayerBody from "./body/player-body";

const EternalReturnPlayerDetail: React.FC = () => {

    /**
     * 
     * header 필요한 정보
     * {
     * userNum
     * nickname
     * updateAt 
     * skincode ( most )
     * }
     * 
     * body left1 필요한 정보
     * {
     * rank, mmr, tier, 상위%,
     * asia 등수
     * 
     * 평균 TK, 평균 킬, 평균 어시,
     * top1, top2, top3,
     * 게임수, 평균 딜량, 평균 순위
     * 
     * < 날짜 별 mmr 그래프.. >
     * }
     * 
     * body left2 필요한 정보
     * {
     * 사용한 실험체 정보
     * ( 실험체 이름, 게임수, 승률, mmr 상승치, 평균킬, 평균딜량)
     * }
     * 
     * 
     * body right 필요한 정보
     * {
     * 전체 data 가져오기,
     * 랭크 data 가져오기,
     * 일반 data 가져오기,
     * 코발트 data 가져오기,
     * 
     * < 
     *  공통적으로 매칭 20판 요약 data
     * 
     * 20판 요약 data: 순위, top1 횟수, top3, 평균 tk
     * 
     * 판마다 data: 게임ID, tk, k, a, 실험체 코드, 터미네이터 횟수, 장착한 아이템, mmr 상승량, 딜량, 게임 종료 시간, 루트ID,  
     * 
     * 판 순위detail: 모든 player 정보 ( 순위, 실험체, 닉네임, 레벨, 무스, F스킬(lv포함), tk, k, a, 딜량, 동물 딜량, 크레딧, item build)
     * 
     * 판 빌드/스탯 detail: 스킬 정보 (qwer), 스킬 빌드, 숙련도, 피해량, 스탯
     * 
     * 판 킬 정보 detail: 1순위부터.. a -> b  kill , 총 킬, nickname, tier, 죽은 위치
     * 
     * 판 특성 정보 detail: 특성 정보 아이콘 in game 처럼 디자인
     * 
     * 판 크레딧 사용 정보 detail: 원격드론으로 구매한 템, 전송 콘솔로 구매한 템
     * 
     * 
     * 
     * 
     * 
     * >
     * 
     * 
     * }
     */

    return (
        <>
        {/* zustand 써서 하자.. 컴포넌트가 너무 많다;; */}
        
            <PlayerHeader />
            <PlayerBody />
        </>
    )
}

export default EternalReturnPlayerDetail;