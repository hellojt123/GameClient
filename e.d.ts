/*
 * @Author: Jiangtao
 * @Date: 2019-11-04 10:21:52
 * @LastEditTime: 2020-06-11 15:12:38
 * @LastEditors: Jiangtao
 * @Description: In User Settings Edit
 * @FilePath: \NewProject\assets\test.d.ts
 */
declare namespace Global {
    var configurl: string;
    var resurl: string;
    var host: string;
    var port: string;
    var json: string;
    var webport: string;
    var webhost: string;
    var username: string;
    var password: string;
    var inviteType: number;
    var inviteid: number;
    var userinfo: userinfo;
    var isQQ: boolean;
    export var stageName: string;
    export var gameManager: GameManager;
    export var loginManager: LoginManager;
    export var GameSettings: GameSettings;
    export var SignSettings: SignSettings;
    export function random(min: number, max: number): number;
    export function getPort(): string;
    export function getWebPort(): string;
    export enum Settings {
        NORMAL = 1,
        RANDOMGAME = 2,
    }

    export enum Buffers {
        NORMAL = 1,
        SPEED = 2,
        INVINCIBLE = 3,
        SCALE = 4,
    }

    export enum BombTypes {
        NORMAL = 1,
        BOMB = 2,
        ITEM = 3,
        GOLD = 4,
        END = 5,
    }

    export class GameSettings {
        Mode: Settings
    }

    export class userinfo {
        nickname: string;
        job: number;
        sex: number;
        head: string;
    }

    export class GameManager extends cc.Component {
        EditorMode: boolean;
        stageManager: StageManager;
        uiManager: import("./assets/script/Manager/UIManager").default;
        audioManager: import("./assets/script/Manager/AudioManager").default;
        playerManager: import("./assets/script/Manager/PlayerManager").default;
        loadingManager: import("./assets/script/Manager/LoadingManager").default;
        point: cc.MotionStreak;
        expball: cc.ParticleSystem;
        uiroot: cc.Node;
    }


    export class StageManager extends cc.Component {
        far_bg: cc.Node[];
        far_speed: number;
        buffer_speed: number;
        halfscene: number;
        fixscene: number;
        sceneLength: number;
        mainCamera: cc.Node;
        _loadDone: boolean;
        _waitTime: number;

        loadStage(stageName: string);
    }
    export class FlyerManager extends cc.Component {
        bomb: cc.Node;
        item: cc.Node;
        gold: cc.Node;
        end: cc.Node;
        flyer: cc.Node;
        stage: cc.Node;
        itemsSprite: cc.Sprite[];

        private flyerPool: cc.NodePool;
        private _lastPos: cc.Vec2;
        private _config: any;
        private _index: number;
        randomTile();
        getRandomConfig(position: cc.Vec2): Tile;
        loadStageTile(config: any);
        clean();
    }
    export class Tile {
        index: number;
        type: Global.BombTypes;
        pos: cc.Vec2;
        used: boolean;
        buffer: Buffer;
    }
    export class UIManager extends cc.Component {
        prayerui: import("./assets/script/UI/scripts/PrayerUI").default;
        mainui: import("./assets/script/UI/scripts/MainUI").default;
        signui: import("./assets/script/UI/scripts/SignUI").default;
        rankui: import("./assets/script/UI/scripts/RankUI").default;
    }

    export class SignUIManager extends cc.Component {

    }
    export class LoginManager extends cc.Component {
        // static getSignData: any;
        getSignData();
        setSignData(data: any[]);
        receive();
        leave();
    }

    export class PlayerManager extends cc.Component {
        updatePlayerRank(data: import("./assets/script/Net/proto/proto").resRank) {
            throw new Error("Method not implemented.");
        }
        updatePlayerPerExp(data: import("./assets/script/Net/proto/proto").resPerExp) {
            throw new Error("Method not implemented.");
        }

        updatePlayerProp(props: import("./assets/script/Net/proto/proto").IPlayerProp) {
            throw new Error("Method not implemented.");
        }

    }

    export class Player extends cc.Component {
        jumpHeight: number;
        jumpDuration: number;
        state: string;
        jumpState: string;
        jumpCount: number;
        targetHeight: number;
        gold: number;
        invincible: boolean;
        jumpStep: number;
        yuan: cc.Sprite;
        runAnimation: cc.Animation;
        _runAnimationState: cc.AnimationState;
        startPos: cc.Vec2;
        buffers: Buffer[];
        addBuffer(buffer: Buffer);
        addGold(gold: number);
        run();
        jump();
        down();
        downRelease();
        processBuffers();
        doBuffer(buffer: Buffer);
        relive();
    }
    export class Buffer {
        type: Global.Buffers;
        duration: number;
        speed: number;
        scale: number;
    }
    export class EditorManager extends cc.Component {
        initImortConfig(config: any)
    }



}