export interface AudioPlayerProps {
    src: string;
    title?: string;
    artist?: string;
    cover?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    volume?: number;
    preload?: 'none' | 'metadata' | 'auto';
}
export interface AudioPlayerEvents {
    play: [];
    pause: [];
    ended: [];
    timeupdate: [time: number];
    volumechange: [volume: number];
    error: [error: Error];
}
export interface AudioPlayerInstance {
    play: () => void;
    pause: () => void;
    toggle: () => void;
    seek: (time: number) => void;
    setVolume: (volume: number) => void;
    setMuted: (muted: boolean) => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlaying: () => boolean;
}
