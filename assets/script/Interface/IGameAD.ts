/*
 * @Author: Jiangtao
 * @Date: 2020-03-26 17:41:47
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-26 17:46:18
 */

interface IGameAdStyle {
    left: number
    top: number
    width: number
    height: number
}

interface IGameAd {
    adUnitId: string
    style: IGameAdStyle
    show(): void
    hide(): void
    onError(err: string): void
    onResize(res): void
    destroy(): void
}