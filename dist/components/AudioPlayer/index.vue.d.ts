import { AudioPlayerProps } from './types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AudioPlayerProps>, {
    title: string;
    artist: string;
    cover: string;
    autoplay: boolean;
    loop: boolean;
    muted: boolean;
    volume: number;
    preload: string;
}>>, {
    play: () => void;
    pause: () => void;
    toggle: () => void;
    seek: (time: number) => void;
    setVolume: (volume: number) => void;
    setMuted: (muted: boolean) => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlaying: () => boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    ended: () => void;
    error: (error: Error) => void;
    pause: () => void;
    play: () => void;
    timeupdate: (time: number) => void;
    volumechange: (volume: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AudioPlayerProps>, {
    title: string;
    artist: string;
    cover: string;
    autoplay: boolean;
    loop: boolean;
    muted: boolean;
    volume: number;
    preload: string;
}>>> & Readonly<{
    onEnded?: (() => any) | undefined;
    onError?: ((error: Error) => any) | undefined;
    onPause?: (() => any) | undefined;
    onPlay?: (() => any) | undefined;
    onTimeupdate?: ((time: number) => any) | undefined;
    onVolumechange?: ((volume: number) => any) | undefined;
}>, {
    title: string;
    artist: string;
    cover: string;
    autoplay: boolean;
    loop: boolean;
    muted: boolean;
    volume: number;
    preload: "none" | "metadata" | "auto";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
