/*
 * @Author: Jiangtao
 * @Date: 2020-03-21 15:21:31
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-22 20:20:58
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    @property(cc.AudioSource)
    bgm: cc.AudioSource = null;

    @property(cc.AudioSource)
    button_audio: cc.AudioSource = null;

    public settings: systemSettings = new systemSettings();

    onLoad() {
        let data = cc.sys.localStorage.getItem("system_setting");
        if (data) {
            let jsonData = JSON.parse(data);
            this.settings.bgm_mute = jsonData.bgm_mute;
            this.settings.bgm_volume = Number.parseFloat(jsonData.bgm_volume);
            this.settings.button_mute = jsonData.button_mute;
            this.settings.button_volume = Number.parseFloat(jsonData.button_volume);
            // this.bgm.loop = true;
            // this.bgm.play()
            this.updateAudio();
        }
        // SDKManager.PlayBgm(this.updateAudio.bind(this));
    }


    start() {

    }

    public updateAudio() {
        if (this.settings) {
            // if (cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BAIDU_GAME) {
            //     SDKManager.innerAudioContext.volume = this.settings.bgm_volume;
            //     if (this.settings.bgm_mute) {
            //         SDKManager.innerAudioContext.play();
            //     } else {
            //         SDKManager.innerAudioContext.stop();
            //     }
            //     // this.bgm.volume = this.settings.bgm_volume;

            //     // this.bgm.mute = !this.settings.bgm_mute;
            //     // this.bgm.volume = this.settings.bgm_volume;
            // }
            // else
            {
                if (this.settings.bgm_mute) {
                    this.bgm.loop = true;
                    this.bgm.play()
                } else {
                    this.bgm.stop();
                }
                if (this.settings.button_mute) {
                    fgui.UIConfig.buttonSound = "ui://Audio/tap"
                } else {
                    fgui.UIConfig.buttonSound = ""
                }
                this.bgm.mute = !this.settings.bgm_mute;
                this.bgm.volume = this.settings.bgm_volume;
                fgui.UIConfig.buttonSoundVolumeScale = this.settings.button_volume;
            }
        }
    }

    public saveAudio() {
        cc.sys.localStorage.setItem("system_setting", JSON.stringify(this.settings));
    }

    public Mute(): void {
        if (this.bgm) {
            this.bgm.mute = true;
        }
    }

    public getAudioMute(): boolean {
        return this.bgm.mute;
    }

    public setVolume(val: number) {
        this.bgm.volume = val;
    }

    public getVolume(): number {
        return this.bgm.volume;
    }
}

export class systemSettings {
    public bgm_mute: boolean = true;
    public bgm_volume: number = 0.5;
    public button_mute: boolean = true;
    public button_volume: number = 1;
}

