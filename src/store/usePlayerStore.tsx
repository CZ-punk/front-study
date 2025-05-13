import { create } from "zustand";

export interface PlayerHeaderInfo {
    userNum: number;
    level: number;
    nickname: string;
    updateAt: string;
    skincode: string;
}


export interface PlayerBodyRankInfo {
    rank: string;
    mmr: number;
    tier: string;

    topRank: number;
    topPercent: number;

    averageTk: number;
    averageKill: number;
    averageAssist: number;

    top1: number;
    top2: number;
    top3: number;

    totalGames: number;
    averageDealAmount: number;
    averageRank: number;
}

export interface PlayerBodyExperimentInfo {
    experimentCode: string;
    top1: number;
    mmr: number;
    averageKill: number;
    averageTk: number;
    averageDealAmount: number;
}

export interface PlayerBodyRight {
    // TODO: 너무 많아서 추가 가능성 많음

    totalData: null;
    rankData: null;
    genericData: null;
    cobaltData: null;

}


interface PlayerStore {
    playerHeaderInfo: PlayerHeaderInfo | null;
    playerBodyRankInfo: PlayerBodyRankInfo | null;
    playerBodyExperimentInfo: PlayerBodyExperimentInfo | null;
    playerBodyRight: PlayerBodyRight | null;
    setPlayerHeaderInfo: (info: PlayerHeaderInfo) => void;
    setPlayerBodyRankInfo: (info: PlayerBodyRankInfo) => void;
    setPlayerBodyExperimentInfo: (info: PlayerBodyExperimentInfo) => void;
    setPlayerBodyRight: (info: PlayerBodyRight) => void;
    setPlayerLevel: (info: number) => void;
}

const usePlayerStore = create<PlayerStore>((set) => ({
    playerHeaderInfo: null,
    playerBodyRankInfo: null,
    playerBodyExperimentInfo: null,
    playerBodyRight: null,
    setPlayerHeaderInfo: (info) => set({ playerHeaderInfo: info }),
    setPlayerBodyRankInfo: (info: PlayerBodyRankInfo) => set({ playerBodyRankInfo: info }),
    setPlayerBodyExperimentInfo: (info: PlayerBodyExperimentInfo) => set({ playerBodyExperimentInfo: info }),
    setPlayerBodyRight: (info: PlayerBodyRight) => set({ playerBodyRight: info }),
    setPlayerLevel: (level: number) => set((state) => ({
        playerHeaderInfo: state.playerHeaderInfo ? { ...state.playerHeaderInfo, level } : null
    })),
}));

export const usePlayerHeaderInfo = () => {
    const playerHeaderInfo = usePlayerStore((state) => state.playerHeaderInfo);
    const setPlayerHeaderInfo = usePlayerStore((state) => state.setPlayerHeaderInfo);
    return { playerHeaderInfo, setPlayerHeaderInfo };
};

export const usePlayerRankInfo = () => {
    const playerBodyRankInfo = usePlayerStore((state) => state.playerBodyRankInfo);
    const setPlayerBodyRankInfo = usePlayerStore((state) => state.setPlayerHeaderInfo);
    return { playerBodyRankInfo, setPlayerBodyRankInfo };
}

export const usePlayerExperimentInfo = () => {
    const playerBodyExperimentInfo = usePlayerStore((state) => state.playerBodyExperimentInfo);
    const setPlayerBodyExperimentInfo = usePlayerStore((state) => state.setPlayerBodyExperimentInfo);
    return { playerBodyExperimentInfo, setPlayerBodyExperimentInfo };
}

export const usePlayerBodyRight = () => {
    const playerBodyRight = usePlayerStore((state) => state.playerBodyRight);
    const setPlayerBodyRight = usePlayerStore((state) => state.setPlayerBodyRight);
    return { playerBodyRight, setPlayerBodyRight };
}

export default usePlayerStore;