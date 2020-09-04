import * as $protobuf from "protobufjs";
/** Properties of a reqLogin. */
export interface IreqLogin {

    /** reqLogin name */
    name?: (string|null);

    /** reqLogin pwd */
    pwd?: (string|null);
}

/** Represents a reqLogin. */
export class reqLogin implements IreqLogin {

    /**
     * Constructs a new reqLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqLogin);

    /** reqLogin name. */
    public name: string;

    /** reqLogin pwd. */
    public pwd: string;

    /**
     * Creates a new reqLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqLogin instance
     */
    public static create(properties?: IreqLogin): reqLogin;

    /**
     * Encodes the specified reqLogin message. Does not implicitly {@link reqLogin.verify|verify} messages.
     * @param message reqLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqLogin message, length delimited. Does not implicitly {@link reqLogin.verify|verify} messages.
     * @param message reqLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqLogin;

    /**
     * Decodes a reqLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqLogin;

    /**
     * Verifies a reqLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqLogin
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqLogin;

    /**
     * Creates a plain object from a reqLogin message. Also converts values to other types if specified.
     * @param message reqLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqLogin, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resLogin. */
export interface IresLogin {

    /** resLogin count */
    count?: (number|null);

    /** resLogin Players */
    Players?: (IloginPlayer[]|null);
}

/** Represents a resLogin. */
export class resLogin implements IresLogin {

    /**
     * Constructs a new resLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresLogin);

    /** resLogin count. */
    public count: number;

    /** resLogin Players. */
    public Players: [ 'Array' ].<IloginPlayer>;

    /**
     * Creates a new resLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resLogin instance
     */
    public static create(properties?: IresLogin): resLogin;

    /**
     * Encodes the specified resLogin message. Does not implicitly {@link resLogin.verify|verify} messages.
     * @param message resLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resLogin message, length delimited. Does not implicitly {@link resLogin.verify|verify} messages.
     * @param message resLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resLogin;

    /**
     * Decodes a resLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resLogin;

    /**
     * Verifies a resLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resLogin
     */
    public static fromObject(object: [ 'object' ].<string, any>): resLogin;

    /**
     * Creates a plain object from a resLogin message. Also converts values to other types if specified.
     * @param message resLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resLogin, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a loginPlayer. */
export interface IloginPlayer {

    /** loginPlayer id */
    id?: (number|null);

    /** loginPlayer job */
    job?: (number|null);

    /** loginPlayer sex */
    sex?: (number|null);

    /** loginPlayer name */
    name?: (string|null);

    /** loginPlayer head */
    head?: (string|null);
}

/** Represents a loginPlayer. */
export class loginPlayer implements IloginPlayer {

    /**
     * Constructs a new loginPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IloginPlayer);

    /** loginPlayer id. */
    public id: number;

    /** loginPlayer job. */
    public job: number;

    /** loginPlayer sex. */
    public sex: number;

    /** loginPlayer name. */
    public name: string;

    /** loginPlayer head. */
    public head: string;

    /**
     * Creates a new loginPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns loginPlayer instance
     */
    public static create(properties?: IloginPlayer): loginPlayer;

    /**
     * Encodes the specified loginPlayer message. Does not implicitly {@link loginPlayer.verify|verify} messages.
     * @param message loginPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IloginPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified loginPlayer message, length delimited. Does not implicitly {@link loginPlayer.verify|verify} messages.
     * @param message loginPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IloginPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a loginPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns loginPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginPlayer;

    /**
     * Decodes a loginPlayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns loginPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginPlayer;

    /**
     * Verifies a loginPlayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a loginPlayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns loginPlayer
     */
    public static fromObject(object: [ 'object' ].<string, any>): loginPlayer;

    /**
     * Creates a plain object from a loginPlayer message. Also converts values to other types if specified.
     * @param message loginPlayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: loginPlayer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this loginPlayer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a bagItem. */
export interface IbagItem {

    /** bagItem id */
    id?: (number|null);

    /** bagItem itemid */
    itemid?: (number|null);

    /** bagItem num */
    num?: (number|null);

    /** bagItem index */
    index?: (number|null);

    /** bagItem type */
    type?: (number|null);

    /** bagItem stats */
    stats?: (number|null);

    /** bagItem playerid */
    playerid?: (number|null);

    /** bagItem isbook */
    isbook?: (boolean|null);

    /** bagItem bookType */
    bookType?: (number|null);

    /** bagItem bookLastlevel */
    bookLastlevel?: (number|null);

    /** bagItem bookLastnum */
    bookLastnum?: (number|null);

    /** bagItem bookNeednum */
    bookNeednum?: (number|null);
}

/** Represents a bagItem. */
export class bagItem implements IbagItem {

    /**
     * Constructs a new bagItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbagItem);

    /** bagItem id. */
    public id: number;

    /** bagItem itemid. */
    public itemid: number;

    /** bagItem num. */
    public num: number;

    /** bagItem index. */
    public index: number;

    /** bagItem type. */
    public type: number;

    /** bagItem stats. */
    public stats: number;

    /** bagItem playerid. */
    public playerid: number;

    /** bagItem isbook. */
    public isbook: boolean;

    /** bagItem bookType. */
    public bookType: number;

    /** bagItem bookLastlevel. */
    public bookLastlevel: number;

    /** bagItem bookLastnum. */
    public bookLastnum: number;

    /** bagItem bookNeednum. */
    public bookNeednum: number;

    /**
     * Creates a new bagItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bagItem instance
     */
    public static create(properties?: IbagItem): bagItem;

    /**
     * Encodes the specified bagItem message. Does not implicitly {@link bagItem.verify|verify} messages.
     * @param message bagItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbagItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bagItem message, length delimited. Does not implicitly {@link bagItem.verify|verify} messages.
     * @param message bagItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbagItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bagItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bagItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bagItem;

    /**
     * Decodes a bagItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bagItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bagItem;

    /**
     * Verifies a bagItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a bagItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bagItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): bagItem;

    /**
     * Creates a plain object from a bagItem message. Also converts values to other types if specified.
     * @param message bagItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bagItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this bagItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerProp. */
export interface IPlayerProp {

    /** PlayerProp id */
    id?: (number|null);

    /** PlayerProp name */
    name?: (string|null);

    /** PlayerProp sex */
    sex?: (number|null);

    /** PlayerProp job */
    job?: (number|null);

    /** PlayerProp level */
    level?: (number|null);

    /** PlayerProp lastget */
    lastget?: (number|null);

    /** PlayerProp exp */
    exp?: (number|null);

    /** PlayerProp stone */
    stone?: (number|null);

    /** PlayerProp fame */
    fame?: (number|null);

    /** PlayerProp forgelevel */
    forgelevel?: (number|null);

    /** PlayerProp alchemylevel */
    alchemylevel?: (number|null);

    /** PlayerProp composelevel */
    composelevel?: (number|null);

    /** PlayerProp prayerid */
    prayerid?: (number|null);

    /** PlayerProp endprayer */
    endprayer?: (number|null);

    /** PlayerProp layer */
    layer?: (number|null);

    /** PlayerProp head */
    head?: (string|null);

    /** PlayerProp heart */
    heart?: (number|null);

    /** PlayerProp histroyExp */
    histroyExp?: (number|null);

    /** PlayerProp histroyLevel */
    histroyLevel?: (number|null);

    /** PlayerProp dftimes */
    dftimes?: (number|null);

    /** PlayerProp qytimes */
    qytimes?: (number|null);

    /** PlayerProp qyad */
    qyad?: (number|null);

    /** PlayerProp endTcdbTime */
    endTcdbTime?: (number|null);

    /** PlayerProp alchemyexp */
    alchemyexp?: (number|null);

    /** PlayerProp endTdjhTime */
    endTdjhTime?: (number|null);

    /** PlayerProp endTransTime */
    endTransTime?: (number|null);

    /** PlayerProp endAlchemyTime */
    endAlchemyTime?: (number|null);

    /** PlayerProp alchemyItem */
    alchemyItem?: (string|null);

    /** PlayerProp logingiftDays */
    logingiftDays?: (number|null);

    /** PlayerProp xmEndTime */
    xmEndTime?: (number|null);

    /** PlayerProp pastdays */
    pastdays?: (number|null);

    /** PlayerProp enyi */
    enyi?: (number|null);

    /** PlayerProp addtime */
    addtime?: (number|null);

    /** PlayerProp choseSex */
    choseSex?: (number|null);

    /** PlayerProp logingiftTime */
    logingiftTime?: (number|null);

    /** PlayerProp forgetTimes */
    forgetTimes?: (number|null);

    /** PlayerProp islevelTcdb */
    islevelTcdb?: (boolean|null);
}

/** Represents a PlayerProp. */
export class PlayerProp implements IPlayerProp {

    /**
     * Constructs a new PlayerProp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerProp);

    /** PlayerProp id. */
    public id: number;

    /** PlayerProp name. */
    public name: string;

    /** PlayerProp sex. */
    public sex: number;

    /** PlayerProp job. */
    public job: number;

    /** PlayerProp level. */
    public level: number;

    /** PlayerProp lastget. */
    public lastget: number;

    /** PlayerProp exp. */
    public exp: number;

    /** PlayerProp stone. */
    public stone: number;

    /** PlayerProp fame. */
    public fame: number;

    /** PlayerProp forgelevel. */
    public forgelevel: number;

    /** PlayerProp alchemylevel. */
    public alchemylevel: number;

    /** PlayerProp composelevel. */
    public composelevel: number;

    /** PlayerProp prayerid. */
    public prayerid: number;

    /** PlayerProp endprayer. */
    public endprayer: number;

    /** PlayerProp layer. */
    public layer: number;

    /** PlayerProp head. */
    public head: string;

    /** PlayerProp heart. */
    public heart: number;

    /** PlayerProp histroyExp. */
    public histroyExp: number;

    /** PlayerProp histroyLevel. */
    public histroyLevel: number;

    /** PlayerProp dftimes. */
    public dftimes: number;

    /** PlayerProp qytimes. */
    public qytimes: number;

    /** PlayerProp qyad. */
    public qyad: number;

    /** PlayerProp endTcdbTime. */
    public endTcdbTime: number;

    /** PlayerProp alchemyexp. */
    public alchemyexp: number;

    /** PlayerProp endTdjhTime. */
    public endTdjhTime: number;

    /** PlayerProp endTransTime. */
    public endTransTime: number;

    /** PlayerProp endAlchemyTime. */
    public endAlchemyTime: number;

    /** PlayerProp alchemyItem. */
    public alchemyItem: string;

    /** PlayerProp logingiftDays. */
    public logingiftDays: number;

    /** PlayerProp xmEndTime. */
    public xmEndTime: number;

    /** PlayerProp pastdays. */
    public pastdays: number;

    /** PlayerProp enyi. */
    public enyi: number;

    /** PlayerProp addtime. */
    public addtime: number;

    /** PlayerProp choseSex. */
    public choseSex: number;

    /** PlayerProp logingiftTime. */
    public logingiftTime: number;

    /** PlayerProp forgetTimes. */
    public forgetTimes: number;

    /** PlayerProp islevelTcdb. */
    public islevelTcdb: boolean;

    /**
     * Creates a new PlayerProp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerProp instance
     */
    public static create(properties?: IPlayerProp): PlayerProp;

    /**
     * Encodes the specified PlayerProp message. Does not implicitly {@link PlayerProp.verify|verify} messages.
     * @param message PlayerProp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerProp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerProp message, length delimited. Does not implicitly {@link PlayerProp.verify|verify} messages.
     * @param message PlayerProp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerProp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerProp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerProp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerProp;

    /**
     * Decodes a PlayerProp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerProp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerProp;

    /**
     * Verifies a PlayerProp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerProp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerProp
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerProp;

    /**
     * Creates a plain object from a PlayerProp message. Also converts values to other types if specified.
     * @param message PlayerProp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerProp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerProp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerRank. */
export interface IPlayerRank {

    /** PlayerRank id */
    id?: (number|null);

    /** PlayerRank name */
    name?: (string|null);

    /** PlayerRank head */
    head?: (string|null);

    /** PlayerRank level */
    level?: (number|null);

    /** PlayerRank layer */
    layer?: (number|null);
}

/** Represents a PlayerRank. */
export class PlayerRank implements IPlayerRank {

    /**
     * Constructs a new PlayerRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerRank);

    /** PlayerRank id. */
    public id: number;

    /** PlayerRank name. */
    public name: string;

    /** PlayerRank head. */
    public head: string;

    /** PlayerRank level. */
    public level: number;

    /** PlayerRank layer. */
    public layer: number;

    /**
     * Creates a new PlayerRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerRank instance
     */
    public static create(properties?: IPlayerRank): PlayerRank;

    /**
     * Encodes the specified PlayerRank message. Does not implicitly {@link PlayerRank.verify|verify} messages.
     * @param message PlayerRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerRank message, length delimited. Does not implicitly {@link PlayerRank.verify|verify} messages.
     * @param message PlayerRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerRank;

    /**
     * Decodes a PlayerRank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerRank;

    /**
     * Verifies a PlayerRank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerRank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerRank
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerRank;

    /**
     * Creates a plain object from a PlayerRank message. Also converts values to other types if specified.
     * @param message PlayerRank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerRank, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerRank to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerMail. */
export interface IPlayerMail {

    /** PlayerMail id */
    id?: (number|null);

    /** PlayerMail title */
    title?: (string|null);

    /** PlayerMail text */
    text?: (string|null);

    /** PlayerMail appendix */
    appendix?: (string|null);

    /** PlayerMail addTime */
    addTime?: (number|null);

    /** PlayerMail expireTime */
    expireTime?: (number|null);

    /** PlayerMail state */
    state?: (number|null);

    /** PlayerMail getState */
    getState?: (number|null);

    /** PlayerMail type */
    type?: (number|null);

    /** PlayerMail fromName */
    fromName?: (string|null);

    /** PlayerMail icon */
    icon?: (string|null);
}

/** Represents a PlayerMail. */
export class PlayerMail implements IPlayerMail {

    /**
     * Constructs a new PlayerMail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerMail);

    /** PlayerMail id. */
    public id: number;

    /** PlayerMail title. */
    public title: string;

    /** PlayerMail text. */
    public text: string;

    /** PlayerMail appendix. */
    public appendix: string;

    /** PlayerMail addTime. */
    public addTime: number;

    /** PlayerMail expireTime. */
    public expireTime: number;

    /** PlayerMail state. */
    public state: number;

    /** PlayerMail getState. */
    public getState: number;

    /** PlayerMail type. */
    public type: number;

    /** PlayerMail fromName. */
    public fromName: string;

    /** PlayerMail icon. */
    public icon: string;

    /**
     * Creates a new PlayerMail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerMail instance
     */
    public static create(properties?: IPlayerMail): PlayerMail;

    /**
     * Encodes the specified PlayerMail message. Does not implicitly {@link PlayerMail.verify|verify} messages.
     * @param message PlayerMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerMail message, length delimited. Does not implicitly {@link PlayerMail.verify|verify} messages.
     * @param message PlayerMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerMail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerMail;

    /**
     * Decodes a PlayerMail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerMail;

    /**
     * Verifies a PlayerMail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerMail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerMail
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerMail;

    /**
     * Creates a plain object from a PlayerMail message. Also converts values to other types if specified.
     * @param message PlayerMail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerMail, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerMail to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerDaily. */
export interface IPlayerDaily {

    /** PlayerDaily dailyid */
    dailyid?: (number|null);

    /** PlayerDaily num */
    num?: (number|null);

    /** PlayerDaily maxnum */
    maxnum?: (number|null);
}

/** Represents a PlayerDaily. */
export class PlayerDaily implements IPlayerDaily {

    /**
     * Constructs a new PlayerDaily.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerDaily);

    /** PlayerDaily dailyid. */
    public dailyid: number;

    /** PlayerDaily num. */
    public num: number;

    /** PlayerDaily maxnum. */
    public maxnum: number;

    /**
     * Creates a new PlayerDaily instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerDaily instance
     */
    public static create(properties?: IPlayerDaily): PlayerDaily;

    /**
     * Encodes the specified PlayerDaily message. Does not implicitly {@link PlayerDaily.verify|verify} messages.
     * @param message PlayerDaily message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerDaily, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerDaily message, length delimited. Does not implicitly {@link PlayerDaily.verify|verify} messages.
     * @param message PlayerDaily message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerDaily, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerDaily message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerDaily
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerDaily;

    /**
     * Decodes a PlayerDaily message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerDaily
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerDaily;

    /**
     * Verifies a PlayerDaily message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerDaily message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerDaily
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerDaily;

    /**
     * Creates a plain object from a PlayerDaily message. Also converts values to other types if specified.
     * @param message PlayerDaily
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerDaily, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerDaily to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerRelation. */
export interface IPlayerRelation {

    /** PlayerRelation playerid */
    playerid?: (number|null);

    /** PlayerRelation name */
    name?: (string|null);

    /** PlayerRelation head */
    head?: (string|null);

    /** PlayerRelation level */
    level?: (number|null);

    /** PlayerRelation layer */
    layer?: (number|null);

    /** PlayerRelation sex */
    sex?: (number|null);

    /** PlayerRelation addtime */
    addtime?: (number|null);

    /** PlayerRelation graduate */
    graduate?: (number|null);

    /** PlayerRelation lastlogin */
    lastlogin?: (number|null);

    /** PlayerRelation params */
    params?: (IPlayerParam[]|null);
}

/** Represents a PlayerRelation. */
export class PlayerRelation implements IPlayerRelation {

    /**
     * Constructs a new PlayerRelation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerRelation);

    /** PlayerRelation playerid. */
    public playerid: number;

    /** PlayerRelation name. */
    public name: string;

    /** PlayerRelation head. */
    public head: string;

    /** PlayerRelation level. */
    public level: number;

    /** PlayerRelation layer. */
    public layer: number;

    /** PlayerRelation sex. */
    public sex: number;

    /** PlayerRelation addtime. */
    public addtime: number;

    /** PlayerRelation graduate. */
    public graduate: number;

    /** PlayerRelation lastlogin. */
    public lastlogin: number;

    /** PlayerRelation params. */
    public params: [ 'Array' ].<IPlayerParam>;

    /**
     * Creates a new PlayerRelation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerRelation instance
     */
    public static create(properties?: IPlayerRelation): PlayerRelation;

    /**
     * Encodes the specified PlayerRelation message. Does not implicitly {@link PlayerRelation.verify|verify} messages.
     * @param message PlayerRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerRelation message, length delimited. Does not implicitly {@link PlayerRelation.verify|verify} messages.
     * @param message PlayerRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerRelation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerRelation;

    /**
     * Decodes a PlayerRelation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerRelation;

    /**
     * Verifies a PlayerRelation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerRelation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerRelation
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerRelation;

    /**
     * Creates a plain object from a PlayerRelation message. Also converts values to other types if specified.
     * @param message PlayerRelation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerRelation, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerRelation to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerParams. */
export interface IPlayerParams {

    /** PlayerParams params */
    params?: (IPlayerParam[]|null);
}

/** Represents a PlayerParams. */
export class PlayerParams implements IPlayerParams {

    /**
     * Constructs a new PlayerParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerParams);

    /** PlayerParams params. */
    public params: [ 'Array' ].<IPlayerParam>;

    /**
     * Creates a new PlayerParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerParams instance
     */
    public static create(properties?: IPlayerParams): PlayerParams;

    /**
     * Encodes the specified PlayerParams message. Does not implicitly {@link PlayerParams.verify|verify} messages.
     * @param message PlayerParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerParams message, length delimited. Does not implicitly {@link PlayerParams.verify|verify} messages.
     * @param message PlayerParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerParams;

    /**
     * Decodes a PlayerParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerParams;

    /**
     * Verifies a PlayerParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerParams
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerParams;

    /**
     * Creates a plain object from a PlayerParams message. Also converts values to other types if specified.
     * @param message PlayerParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerParams, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerParams to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerParam. */
export interface IPlayerParam {

    /** PlayerParam ParamKey */
    ParamKey?: (number|null);

    /** PlayerParam ParamValue */
    ParamValue?: (number|null);

    /** PlayerParam aid */
    aid?: (number|null);
}

/** Represents a PlayerParam. */
export class PlayerParam implements IPlayerParam {

    /**
     * Constructs a new PlayerParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerParam);

    /** PlayerParam ParamKey. */
    public ParamKey: number;

    /** PlayerParam ParamValue. */
    public ParamValue: number;

    /** PlayerParam aid. */
    public aid: number;

    /**
     * Creates a new PlayerParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerParam instance
     */
    public static create(properties?: IPlayerParam): PlayerParam;

    /**
     * Encodes the specified PlayerParam message. Does not implicitly {@link PlayerParam.verify|verify} messages.
     * @param message PlayerParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerParam message, length delimited. Does not implicitly {@link PlayerParam.verify|verify} messages.
     * @param message PlayerParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerParam;

    /**
     * Decodes a PlayerParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerParam;

    /**
     * Verifies a PlayerParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerParam
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerParam;

    /**
     * Creates a plain object from a PlayerParam message. Also converts values to other types if specified.
     * @param message PlayerParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerParam, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerParam to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerBuff. */
export interface IPlayerBuff {

    /** PlayerBuff id */
    id?: (number|null);

    /** PlayerBuff type */
    type?: (number|null);

    /** PlayerBuff playerid */
    playerid?: (number|null);

    /** PlayerBuff level */
    level?: (number|null);

    /** PlayerBuff layer */
    layer?: (number|null);

    /** PlayerBuff sex */
    sex?: (number|null);

    /** PlayerBuff name */
    name?: (string|null);

    /** PlayerBuff head */
    head?: (string|null);

    /** PlayerBuff activeTime */
    activeTime?: (number|null);

    /** PlayerBuff duration */
    duration?: (number|null);

    /** PlayerBuff creatureType */
    creatureType?: (number|null);

    /** PlayerBuff addTime */
    addTime?: (number|null);
}

/** Represents a PlayerBuff. */
export class PlayerBuff implements IPlayerBuff {

    /**
     * Constructs a new PlayerBuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerBuff);

    /** PlayerBuff id. */
    public id: number;

    /** PlayerBuff type. */
    public type: number;

    /** PlayerBuff playerid. */
    public playerid: number;

    /** PlayerBuff level. */
    public level: number;

    /** PlayerBuff layer. */
    public layer: number;

    /** PlayerBuff sex. */
    public sex: number;

    /** PlayerBuff name. */
    public name: string;

    /** PlayerBuff head. */
    public head: string;

    /** PlayerBuff activeTime. */
    public activeTime: number;

    /** PlayerBuff duration. */
    public duration: number;

    /** PlayerBuff creatureType. */
    public creatureType: number;

    /** PlayerBuff addTime. */
    public addTime: number;

    /**
     * Creates a new PlayerBuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerBuff instance
     */
    public static create(properties?: IPlayerBuff): PlayerBuff;

    /**
     * Encodes the specified PlayerBuff message. Does not implicitly {@link PlayerBuff.verify|verify} messages.
     * @param message PlayerBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerBuff message, length delimited. Does not implicitly {@link PlayerBuff.verify|verify} messages.
     * @param message PlayerBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerBuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerBuff;

    /**
     * Decodes a PlayerBuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerBuff;

    /**
     * Verifies a PlayerBuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerBuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerBuff
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerBuff;

    /**
     * Creates a plain object from a PlayerBuff message. Also converts values to other types if specified.
     * @param message PlayerBuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerBuff, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerBuff to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a WeddingInfo. */
export interface IWeddingInfo {

    /** WeddingInfo weddingid */
    weddingid?: (number|null);

    /** WeddingInfo player1 */
    player1?: (IPlayerRank|null);

    /** WeddingInfo player2 */
    player2?: (IPlayerRank|null);

    /** WeddingInfo endtime */
    endtime?: (number|null);

    /** WeddingInfo playernum */
    playernum?: (number|null);

    /** WeddingInfo giftnum */
    giftnum?: (number|null);
}

/** Represents a WeddingInfo. */
export class WeddingInfo implements IWeddingInfo {

    /**
     * Constructs a new WeddingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeddingInfo);

    /** WeddingInfo weddingid. */
    public weddingid: number;

    /** WeddingInfo player1. */
    public player1?: (IPlayerRank|null);

    /** WeddingInfo player2. */
    public player2?: (IPlayerRank|null);

    /** WeddingInfo endtime. */
    public endtime: number;

    /** WeddingInfo playernum. */
    public playernum: number;

    /** WeddingInfo giftnum. */
    public giftnum: number;

    /**
     * Creates a new WeddingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeddingInfo instance
     */
    public static create(properties?: IWeddingInfo): WeddingInfo;

    /**
     * Encodes the specified WeddingInfo message. Does not implicitly {@link WeddingInfo.verify|verify} messages.
     * @param message WeddingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeddingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WeddingInfo message, length delimited. Does not implicitly {@link WeddingInfo.verify|verify} messages.
     * @param message WeddingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeddingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeddingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeddingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeddingInfo;

    /**
     * Decodes a WeddingInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WeddingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WeddingInfo;

    /**
     * Verifies a WeddingInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a WeddingInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WeddingInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): WeddingInfo;

    /**
     * Creates a plain object from a WeddingInfo message. Also converts values to other types if specified.
     * @param message WeddingInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WeddingInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this WeddingInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a WeddingAwardMsg. */
export interface IWeddingAwardMsg {

    /** WeddingAwardMsg stone */
    stone?: (number|null);

    /** WeddingAwardMsg heart */
    heart?: (number|null);

    /** WeddingAwardMsg buff */
    buff?: (number|null);

    /** WeddingAwardMsg times */
    times?: (number|null);
}

/** Represents a WeddingAwardMsg. */
export class WeddingAwardMsg implements IWeddingAwardMsg {

    /**
     * Constructs a new WeddingAwardMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeddingAwardMsg);

    /** WeddingAwardMsg stone. */
    public stone: number;

    /** WeddingAwardMsg heart. */
    public heart: number;

    /** WeddingAwardMsg buff. */
    public buff: number;

    /** WeddingAwardMsg times. */
    public times: number;

    /**
     * Creates a new WeddingAwardMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeddingAwardMsg instance
     */
    public static create(properties?: IWeddingAwardMsg): WeddingAwardMsg;

    /**
     * Encodes the specified WeddingAwardMsg message. Does not implicitly {@link WeddingAwardMsg.verify|verify} messages.
     * @param message WeddingAwardMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeddingAwardMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WeddingAwardMsg message, length delimited. Does not implicitly {@link WeddingAwardMsg.verify|verify} messages.
     * @param message WeddingAwardMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeddingAwardMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeddingAwardMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeddingAwardMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeddingAwardMsg;

    /**
     * Decodes a WeddingAwardMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WeddingAwardMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WeddingAwardMsg;

    /**
     * Verifies a WeddingAwardMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a WeddingAwardMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WeddingAwardMsg
     */
    public static fromObject(object: [ 'object' ].<string, any>): WeddingAwardMsg;

    /**
     * Creates a plain object from a WeddingAwardMsg message. Also converts values to other types if specified.
     * @param message WeddingAwardMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WeddingAwardMsg, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this WeddingAwardMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a WeddingRank. */
export interface IWeddingRank {

    /** WeddingRank player1 */
    player1?: (IPlayerRank|null);

    /** WeddingRank player2 */
    player2?: (IPlayerRank|null);

    /** WeddingRank rank */
    rank?: (number|null);
}

/** Represents a WeddingRank. */
export class WeddingRank implements IWeddingRank {

    /**
     * Constructs a new WeddingRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeddingRank);

    /** WeddingRank player1. */
    public player1?: (IPlayerRank|null);

    /** WeddingRank player2. */
    public player2?: (IPlayerRank|null);

    /** WeddingRank rank. */
    public rank: number;

    /**
     * Creates a new WeddingRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeddingRank instance
     */
    public static create(properties?: IWeddingRank): WeddingRank;

    /**
     * Encodes the specified WeddingRank message. Does not implicitly {@link WeddingRank.verify|verify} messages.
     * @param message WeddingRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeddingRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WeddingRank message, length delimited. Does not implicitly {@link WeddingRank.verify|verify} messages.
     * @param message WeddingRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeddingRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeddingRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeddingRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeddingRank;

    /**
     * Decodes a WeddingRank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WeddingRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WeddingRank;

    /**
     * Verifies a WeddingRank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a WeddingRank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WeddingRank
     */
    public static fromObject(object: [ 'object' ].<string, any>): WeddingRank;

    /**
     * Creates a plain object from a WeddingRank message. Also converts values to other types if specified.
     * @param message WeddingRank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WeddingRank, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this WeddingRank to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a WeddingFoodInfo. */
export interface IWeddingFoodInfo {

    /** WeddingFoodInfo time */
    time?: (number|null);

    /** WeddingFoodInfo award */
    award?: (string|null);
}

/** Represents a WeddingFoodInfo. */
export class WeddingFoodInfo implements IWeddingFoodInfo {

    /**
     * Constructs a new WeddingFoodInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeddingFoodInfo);

    /** WeddingFoodInfo time. */
    public time: number;

    /** WeddingFoodInfo award. */
    public award: string;

    /**
     * Creates a new WeddingFoodInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeddingFoodInfo instance
     */
    public static create(properties?: IWeddingFoodInfo): WeddingFoodInfo;

    /**
     * Encodes the specified WeddingFoodInfo message. Does not implicitly {@link WeddingFoodInfo.verify|verify} messages.
     * @param message WeddingFoodInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeddingFoodInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WeddingFoodInfo message, length delimited. Does not implicitly {@link WeddingFoodInfo.verify|verify} messages.
     * @param message WeddingFoodInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeddingFoodInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeddingFoodInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeddingFoodInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeddingFoodInfo;

    /**
     * Decodes a WeddingFoodInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WeddingFoodInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WeddingFoodInfo;

    /**
     * Verifies a WeddingFoodInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a WeddingFoodInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WeddingFoodInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): WeddingFoodInfo;

    /**
     * Creates a plain object from a WeddingFoodInfo message. Also converts values to other types if specified.
     * @param message WeddingFoodInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WeddingFoodInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this WeddingFoodInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerField. */
export interface IPlayerField {

    /** PlayerField type */
    type?: (number|null);

    /** PlayerField index */
    index?: (number|null);

    /** PlayerField time */
    time?: (number|null);

    /** PlayerField flowerTime */
    flowerTime?: (number|null);
}

/** Represents a PlayerField. */
export class PlayerField implements IPlayerField {

    /**
     * Constructs a new PlayerField.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerField);

    /** PlayerField type. */
    public type: number;

    /** PlayerField index. */
    public index: number;

    /** PlayerField time. */
    public time: number;

    /** PlayerField flowerTime. */
    public flowerTime: number;

    /**
     * Creates a new PlayerField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerField instance
     */
    public static create(properties?: IPlayerField): PlayerField;

    /**
     * Encodes the specified PlayerField message. Does not implicitly {@link PlayerField.verify|verify} messages.
     * @param message PlayerField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerField message, length delimited. Does not implicitly {@link PlayerField.verify|verify} messages.
     * @param message PlayerField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerField;

    /**
     * Decodes a PlayerField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerField;

    /**
     * Verifies a PlayerField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerField
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerField;

    /**
     * Creates a plain object from a PlayerField message. Also converts values to other types if specified.
     * @param message PlayerField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerField, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerField to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PlayerFields. */
export interface IPlayerFields {

    /** PlayerFields fields */
    fields?: (IPlayerField[]|null);
}

/** Represents a PlayerFields. */
export class PlayerFields implements IPlayerFields {

    /**
     * Constructs a new PlayerFields.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerFields);

    /** PlayerFields fields. */
    public fields: [ 'Array' ].<IPlayerField>;

    /**
     * Creates a new PlayerFields instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerFields instance
     */
    public static create(properties?: IPlayerFields): PlayerFields;

    /**
     * Encodes the specified PlayerFields message. Does not implicitly {@link PlayerFields.verify|verify} messages.
     * @param message PlayerFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerFields message, length delimited. Does not implicitly {@link PlayerFields.verify|verify} messages.
     * @param message PlayerFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerFields message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerFields;

    /**
     * Decodes a PlayerFields message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerFields;

    /**
     * Verifies a PlayerFields message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PlayerFields message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerFields
     */
    public static fromObject(object: [ 'object' ].<string, any>): PlayerFields;

    /**
     * Creates a plain object from a PlayerFields message. Also converts values to other types if specified.
     * @param message PlayerFields
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerFields, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PlayerFields to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqQA. */
export interface IreqQA {

    /** reqQA id */
    id?: (number|null);

    /** reqQA answer */
    answer?: (number|null);
}

/** Represents a reqQA. */
export class reqQA implements IreqQA {

    /**
     * Constructs a new reqQA.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqQA);

    /** reqQA id. */
    public id: number;

    /** reqQA answer. */
    public answer: number;

    /**
     * Creates a new reqQA instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqQA instance
     */
    public static create(properties?: IreqQA): reqQA;

    /**
     * Encodes the specified reqQA message. Does not implicitly {@link reqQA.verify|verify} messages.
     * @param message reqQA message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqQA, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqQA message, length delimited. Does not implicitly {@link reqQA.verify|verify} messages.
     * @param message reqQA message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqQA, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqQA message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqQA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqQA;

    /**
     * Decodes a reqQA message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqQA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqQA;

    /**
     * Verifies a reqQA message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqQA message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqQA
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqQA;

    /**
     * Creates a plain object from a reqQA message. Also converts values to other types if specified.
     * @param message reqQA
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqQA, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqQA to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resQA. */
export interface IresQA {

    /** resQA id */
    id?: (number|null);
}

/** Represents a resQA. */
export class resQA implements IresQA {

    /**
     * Constructs a new resQA.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresQA);

    /** resQA id. */
    public id: number;

    /**
     * Creates a new resQA instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resQA instance
     */
    public static create(properties?: IresQA): resQA;

    /**
     * Encodes the specified resQA message. Does not implicitly {@link resQA.verify|verify} messages.
     * @param message resQA message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresQA, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resQA message, length delimited. Does not implicitly {@link resQA.verify|verify} messages.
     * @param message resQA message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresQA, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resQA message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resQA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resQA;

    /**
     * Decodes a resQA message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resQA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resQA;

    /**
     * Verifies a resQA message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resQA message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resQA
     */
    public static fromObject(object: [ 'object' ].<string, any>): resQA;

    /**
     * Creates a plain object from a resQA message. Also converts values to other types if specified.
     * @param message resQA
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resQA, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resQA to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resQAReward. */
export interface IresQAReward {

    /** resQAReward rewards */
    rewards?: (string|null);
}

/** Represents a resQAReward. */
export class resQAReward implements IresQAReward {

    /**
     * Constructs a new resQAReward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresQAReward);

    /** resQAReward rewards. */
    public rewards: string;

    /**
     * Creates a new resQAReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resQAReward instance
     */
    public static create(properties?: IresQAReward): resQAReward;

    /**
     * Encodes the specified resQAReward message. Does not implicitly {@link resQAReward.verify|verify} messages.
     * @param message resQAReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresQAReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resQAReward message, length delimited. Does not implicitly {@link resQAReward.verify|verify} messages.
     * @param message resQAReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresQAReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resQAReward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resQAReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resQAReward;

    /**
     * Decodes a resQAReward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resQAReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resQAReward;

    /**
     * Verifies a resQAReward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resQAReward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resQAReward
     */
    public static fromObject(object: [ 'object' ].<string, any>): resQAReward;

    /**
     * Creates a plain object from a resQAReward message. Also converts values to other types if specified.
     * @param message resQAReward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resQAReward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resQAReward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqActivity. */
export interface IreqActivity {

    /** reqActivity id */
    id?: (number|null);

    /** reqActivity playerid */
    playerid?: (number|null);
}

/** Represents a reqActivity. */
export class reqActivity implements IreqActivity {

    /**
     * Constructs a new reqActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqActivity);

    /** reqActivity id. */
    public id: number;

    /** reqActivity playerid. */
    public playerid: number;

    /**
     * Creates a new reqActivity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqActivity instance
     */
    public static create(properties?: IreqActivity): reqActivity;

    /**
     * Encodes the specified reqActivity message. Does not implicitly {@link reqActivity.verify|verify} messages.
     * @param message reqActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqActivity message, length delimited. Does not implicitly {@link reqActivity.verify|verify} messages.
     * @param message reqActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqActivity;

    /**
     * Decodes a reqActivity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqActivity;

    /**
     * Verifies a reqActivity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqActivity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqActivity
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqActivity;

    /**
     * Creates a plain object from a reqActivity message. Also converts values to other types if specified.
     * @param message reqActivity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqActivity, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqActivity to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resTcdb. */
export interface IresTcdb {

    /** resTcdb endtime */
    endtime?: (number|null);
}

/** Represents a resTcdb. */
export class resTcdb implements IresTcdb {

    /**
     * Constructs a new resTcdb.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresTcdb);

    /** resTcdb endtime. */
    public endtime: number;

    /**
     * Creates a new resTcdb instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resTcdb instance
     */
    public static create(properties?: IresTcdb): resTcdb;

    /**
     * Encodes the specified resTcdb message. Does not implicitly {@link resTcdb.verify|verify} messages.
     * @param message resTcdb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresTcdb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resTcdb message, length delimited. Does not implicitly {@link resTcdb.verify|verify} messages.
     * @param message resTcdb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresTcdb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resTcdb message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resTcdb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resTcdb;

    /**
     * Decodes a resTcdb message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resTcdb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resTcdb;

    /**
     * Verifies a resTcdb message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resTcdb message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resTcdb
     */
    public static fromObject(object: [ 'object' ].<string, any>): resTcdb;

    /**
     * Creates a plain object from a resTcdb message. Also converts values to other types if specified.
     * @param message resTcdb
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resTcdb, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resTcdb to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resActivity. */
export interface IresActivity {

    /** resActivity id */
    id?: (number|null);

    /** resActivity endtime */
    endtime?: (number|null);
}

/** Represents a resActivity. */
export class resActivity implements IresActivity {

    /**
     * Constructs a new resActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresActivity);

    /** resActivity id. */
    public id: number;

    /** resActivity endtime. */
    public endtime: number;

    /**
     * Creates a new resActivity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resActivity instance
     */
    public static create(properties?: IresActivity): resActivity;

    /**
     * Encodes the specified resActivity message. Does not implicitly {@link resActivity.verify|verify} messages.
     * @param message resActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resActivity message, length delimited. Does not implicitly {@link resActivity.verify|verify} messages.
     * @param message resActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resActivity;

    /**
     * Decodes a resActivity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resActivity;

    /**
     * Verifies a resActivity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resActivity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resActivity
     */
    public static fromObject(object: [ 'object' ].<string, any>): resActivity;

    /**
     * Creates a plain object from a resActivity message. Also converts values to other types if specified.
     * @param message resActivity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resActivity, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resActivity to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerBody. */
export interface IreqPlayerBody {
}

/** Represents a reqPlayerBody. */
export class reqPlayerBody implements IreqPlayerBody {

    /**
     * Constructs a new reqPlayerBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerBody);

    /**
     * Creates a new reqPlayerBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerBody instance
     */
    public static create(properties?: IreqPlayerBody): reqPlayerBody;

    /**
     * Encodes the specified reqPlayerBody message. Does not implicitly {@link reqPlayerBody.verify|verify} messages.
     * @param message reqPlayerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerBody message, length delimited. Does not implicitly {@link reqPlayerBody.verify|verify} messages.
     * @param message reqPlayerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerBody;

    /**
     * Decodes a reqPlayerBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerBody;

    /**
     * Verifies a reqPlayerBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerBody
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerBody;

    /**
     * Creates a plain object from a reqPlayerBody message. Also converts values to other types if specified.
     * @param message reqPlayerBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerBody, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerBody to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerBody. */
export interface IresPlayerBody {

    /** resPlayerBody playerbodys */
    playerbodys?: (IplayerBody[]|null);
}

/** Represents a resPlayerBody. */
export class resPlayerBody implements IresPlayerBody {

    /**
     * Constructs a new resPlayerBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerBody);

    /** resPlayerBody playerbodys. */
    public playerbodys: [ 'Array' ].<IplayerBody>;

    /**
     * Creates a new resPlayerBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerBody instance
     */
    public static create(properties?: IresPlayerBody): resPlayerBody;

    /**
     * Encodes the specified resPlayerBody message. Does not implicitly {@link resPlayerBody.verify|verify} messages.
     * @param message resPlayerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerBody message, length delimited. Does not implicitly {@link resPlayerBody.verify|verify} messages.
     * @param message resPlayerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerBody;

    /**
     * Decodes a resPlayerBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerBody;

    /**
     * Verifies a resPlayerBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerBody
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerBody;

    /**
     * Creates a plain object from a resPlayerBody message. Also converts values to other types if specified.
     * @param message resPlayerBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerBody, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerBody to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a playerBody. */
export interface IplayerBody {

    /** playerBody type */
    type?: (number|null);

    /** playerBody level */
    level?: (number|null);

    /** playerBody booklevel */
    booklevel?: (number|null);

    /** playerBody booknum */
    booknum?: (number|null);

    /** playerBody layer */
    layer?: (number|null);
}

/** Represents a playerBody. */
export class playerBody implements IplayerBody {

    /**
     * Constructs a new playerBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerBody);

    /** playerBody type. */
    public type: number;

    /** playerBody level. */
    public level: number;

    /** playerBody booklevel. */
    public booklevel: number;

    /** playerBody booknum. */
    public booknum: number;

    /** playerBody layer. */
    public layer: number;

    /**
     * Creates a new playerBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerBody instance
     */
    public static create(properties?: IplayerBody): playerBody;

    /**
     * Encodes the specified playerBody message. Does not implicitly {@link playerBody.verify|verify} messages.
     * @param message playerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerBody message, length delimited. Does not implicitly {@link playerBody.verify|verify} messages.
     * @param message playerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerBody;

    /**
     * Decodes a playerBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerBody;

    /**
     * Verifies a playerBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a playerBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerBody
     */
    public static fromObject(object: [ 'object' ].<string, any>): playerBody;

    /**
     * Creates a plain object from a playerBody message. Also converts values to other types if specified.
     * @param message playerBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerBody, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this playerBody to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqUpLevelBody. */
export interface IreqUpLevelBody {

    /** reqUpLevelBody bodytype */
    bodytype?: (number|null);

    /** reqUpLevelBody uptype */
    uptype?: (number|null);
}

/** Represents a reqUpLevelBody. */
export class reqUpLevelBody implements IreqUpLevelBody {

    /**
     * Constructs a new reqUpLevelBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqUpLevelBody);

    /** reqUpLevelBody bodytype. */
    public bodytype: number;

    /** reqUpLevelBody uptype. */
    public uptype: number;

    /**
     * Creates a new reqUpLevelBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqUpLevelBody instance
     */
    public static create(properties?: IreqUpLevelBody): reqUpLevelBody;

    /**
     * Encodes the specified reqUpLevelBody message. Does not implicitly {@link reqUpLevelBody.verify|verify} messages.
     * @param message reqUpLevelBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqUpLevelBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqUpLevelBody message, length delimited. Does not implicitly {@link reqUpLevelBody.verify|verify} messages.
     * @param message reqUpLevelBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqUpLevelBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqUpLevelBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqUpLevelBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqUpLevelBody;

    /**
     * Decodes a reqUpLevelBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqUpLevelBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqUpLevelBody;

    /**
     * Verifies a reqUpLevelBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqUpLevelBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqUpLevelBody
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqUpLevelBody;

    /**
     * Creates a plain object from a reqUpLevelBody message. Also converts values to other types if specified.
     * @param message reqUpLevelBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqUpLevelBody, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqUpLevelBody to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqUpLayerBody. */
export interface IreqUpLayerBody {

    /** reqUpLayerBody bodytype */
    bodytype?: (number|null);
}

/** Represents a reqUpLayerBody. */
export class reqUpLayerBody implements IreqUpLayerBody {

    /**
     * Constructs a new reqUpLayerBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqUpLayerBody);

    /** reqUpLayerBody bodytype. */
    public bodytype: number;

    /**
     * Creates a new reqUpLayerBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqUpLayerBody instance
     */
    public static create(properties?: IreqUpLayerBody): reqUpLayerBody;

    /**
     * Encodes the specified reqUpLayerBody message. Does not implicitly {@link reqUpLayerBody.verify|verify} messages.
     * @param message reqUpLayerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqUpLayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqUpLayerBody message, length delimited. Does not implicitly {@link reqUpLayerBody.verify|verify} messages.
     * @param message reqUpLayerBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqUpLayerBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqUpLayerBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqUpLayerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqUpLayerBody;

    /**
     * Decodes a reqUpLayerBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqUpLayerBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqUpLayerBody;

    /**
     * Verifies a reqUpLayerBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqUpLayerBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqUpLayerBody
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqUpLayerBody;

    /**
     * Creates a plain object from a reqUpLayerBody message. Also converts values to other types if specified.
     * @param message reqUpLayerBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqUpLayerBody, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqUpLayerBody to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqHome. */
export interface IreqHome {

    /** reqHome type */
    type?: (number|null);

    /** reqHome ad */
    ad?: (boolean|null);
}

/** Represents a reqHome. */
export class reqHome implements IreqHome {

    /**
     * Constructs a new reqHome.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqHome);

    /** reqHome type. */
    public type: number;

    /** reqHome ad. */
    public ad: boolean;

    /**
     * Creates a new reqHome instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqHome instance
     */
    public static create(properties?: IreqHome): reqHome;

    /**
     * Encodes the specified reqHome message. Does not implicitly {@link reqHome.verify|verify} messages.
     * @param message reqHome message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqHome, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqHome message, length delimited. Does not implicitly {@link reqHome.verify|verify} messages.
     * @param message reqHome message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqHome, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqHome message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqHome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqHome;

    /**
     * Decodes a reqHome message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqHome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqHome;

    /**
     * Verifies a reqHome message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqHome message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqHome
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqHome;

    /**
     * Creates a plain object from a reqHome message. Also converts values to other types if specified.
     * @param message reqHome
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqHome, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqHome to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a Frame. */
export interface IFrame {

    /** Frame messageType */
    messageType?: (string|null);

    /** Frame payload */
    payload?: (Uint8Array|null);
}

/** Represents a Frame. */
export class Frame implements IFrame {

    /**
     * Constructs a new Frame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrame);

    /** Frame messageType. */
    public messageType: string;

    /** Frame payload. */
    public payload: Uint8Array;

    /**
     * Creates a new Frame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Frame instance
     */
    public static create(properties?: IFrame): Frame;

    /**
     * Encodes the specified Frame message. Does not implicitly {@link Frame.verify|verify} messages.
     * @param message Frame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Frame message, length delimited. Does not implicitly {@link Frame.verify|verify} messages.
     * @param message Frame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Frame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Frame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Frame;

    /**
     * Decodes a Frame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Frame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Frame;

    /**
     * Verifies a Frame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a Frame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Frame
     */
    public static fromObject(object: [ 'object' ].<string, any>): Frame;

    /**
     * Creates a plain object from a Frame message. Also converts values to other types if specified.
     * @param message Frame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Frame, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this Frame to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqGMCMD. */
export interface IreqGMCMD {

    /** reqGMCMD username */
    username?: (string|null);

    /** reqGMCMD password */
    password?: (string|null);

    /** reqGMCMD gmtype */
    gmtype?: (number|null);

    /** reqGMCMD title */
    title?: (string|null);

    /** reqGMCMD desc */
    desc?: (string|null);

    /** reqGMCMD playerid */
    playerid?: (number|null);

    /** reqGMCMD items */
    items?: (string|null);
}

/** Represents a reqGMCMD. */
export class reqGMCMD implements IreqGMCMD {

    /**
     * Constructs a new reqGMCMD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqGMCMD);

    /** reqGMCMD username. */
    public username: string;

    /** reqGMCMD password. */
    public password: string;

    /** reqGMCMD gmtype. */
    public gmtype: number;

    /** reqGMCMD title. */
    public title: string;

    /** reqGMCMD desc. */
    public desc: string;

    /** reqGMCMD playerid. */
    public playerid: number;

    /** reqGMCMD items. */
    public items: string;

    /**
     * Creates a new reqGMCMD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqGMCMD instance
     */
    public static create(properties?: IreqGMCMD): reqGMCMD;

    /**
     * Encodes the specified reqGMCMD message. Does not implicitly {@link reqGMCMD.verify|verify} messages.
     * @param message reqGMCMD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqGMCMD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqGMCMD message, length delimited. Does not implicitly {@link reqGMCMD.verify|verify} messages.
     * @param message reqGMCMD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqGMCMD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqGMCMD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqGMCMD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqGMCMD;

    /**
     * Decodes a reqGMCMD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqGMCMD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqGMCMD;

    /**
     * Verifies a reqGMCMD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqGMCMD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqGMCMD
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqGMCMD;

    /**
     * Creates a plain object from a reqGMCMD message. Also converts values to other types if specified.
     * @param message reqGMCMD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqGMCMD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqGMCMD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resGMCMD. */
export interface IresGMCMD {

    /** resGMCMD type */
    type?: (number|null);

    /** resGMCMD reslut */
    reslut?: (string|null);

    /** resGMCMD num */
    num?: (number|null);
}

/** Represents a resGMCMD. */
export class resGMCMD implements IresGMCMD {

    /**
     * Constructs a new resGMCMD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresGMCMD);

    /** resGMCMD type. */
    public type: number;

    /** resGMCMD reslut. */
    public reslut: string;

    /** resGMCMD num. */
    public num: number;

    /**
     * Creates a new resGMCMD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resGMCMD instance
     */
    public static create(properties?: IresGMCMD): resGMCMD;

    /**
     * Encodes the specified resGMCMD message. Does not implicitly {@link resGMCMD.verify|verify} messages.
     * @param message resGMCMD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresGMCMD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resGMCMD message, length delimited. Does not implicitly {@link resGMCMD.verify|verify} messages.
     * @param message resGMCMD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresGMCMD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resGMCMD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resGMCMD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resGMCMD;

    /**
     * Decodes a resGMCMD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resGMCMD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resGMCMD;

    /**
     * Verifies a resGMCMD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resGMCMD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resGMCMD
     */
    public static fromObject(object: [ 'object' ].<string, any>): resGMCMD;

    /**
     * Creates a plain object from a resGMCMD message. Also converts values to other types if specified.
     * @param message resGMCMD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resGMCMD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resGMCMD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqBuyItem. */
export interface IreqBuyItem {

    /** reqBuyItem itemid */
    itemid?: (number|null);

    /** reqBuyItem num */
    num?: (number|null);
}

/** Represents a reqBuyItem. */
export class reqBuyItem implements IreqBuyItem {

    /**
     * Constructs a new reqBuyItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqBuyItem);

    /** reqBuyItem itemid. */
    public itemid: number;

    /** reqBuyItem num. */
    public num: number;

    /**
     * Creates a new reqBuyItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqBuyItem instance
     */
    public static create(properties?: IreqBuyItem): reqBuyItem;

    /**
     * Encodes the specified reqBuyItem message. Does not implicitly {@link reqBuyItem.verify|verify} messages.
     * @param message reqBuyItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqBuyItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqBuyItem message, length delimited. Does not implicitly {@link reqBuyItem.verify|verify} messages.
     * @param message reqBuyItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqBuyItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqBuyItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqBuyItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqBuyItem;

    /**
     * Decodes a reqBuyItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqBuyItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqBuyItem;

    /**
     * Verifies a reqBuyItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqBuyItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqBuyItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqBuyItem;

    /**
     * Creates a plain object from a reqBuyItem message. Also converts values to other types if specified.
     * @param message reqBuyItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqBuyItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqBuyItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resBagItems. */
export interface IresBagItems {

    /** resBagItems bagitem */
    bagitem?: (IbagItem[]|null);
}

/** Represents a resBagItems. */
export class resBagItems implements IresBagItems {

    /**
     * Constructs a new resBagItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresBagItems);

    /** resBagItems bagitem. */
    public bagitem: [ 'Array' ].<IbagItem>;

    /**
     * Creates a new resBagItems instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resBagItems instance
     */
    public static create(properties?: IresBagItems): resBagItems;

    /**
     * Encodes the specified resBagItems message. Does not implicitly {@link resBagItems.verify|verify} messages.
     * @param message resBagItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresBagItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resBagItems message, length delimited. Does not implicitly {@link resBagItems.verify|verify} messages.
     * @param message resBagItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresBagItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resBagItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resBagItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resBagItems;

    /**
     * Decodes a resBagItems message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resBagItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resBagItems;

    /**
     * Verifies a resBagItems message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resBagItems message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resBagItems
     */
    public static fromObject(object: [ 'object' ].<string, any>): resBagItems;

    /**
     * Creates a plain object from a resBagItems message. Also converts values to other types if specified.
     * @param message resBagItems
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resBagItems, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resBagItems to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPutOnEquip. */
export interface IreqPutOnEquip {

    /** reqPutOnEquip id */
    id?: (number|null);
}

/** Represents a reqPutOnEquip. */
export class reqPutOnEquip implements IreqPutOnEquip {

    /**
     * Constructs a new reqPutOnEquip.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPutOnEquip);

    /** reqPutOnEquip id. */
    public id: number;

    /**
     * Creates a new reqPutOnEquip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPutOnEquip instance
     */
    public static create(properties?: IreqPutOnEquip): reqPutOnEquip;

    /**
     * Encodes the specified reqPutOnEquip message. Does not implicitly {@link reqPutOnEquip.verify|verify} messages.
     * @param message reqPutOnEquip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPutOnEquip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPutOnEquip message, length delimited. Does not implicitly {@link reqPutOnEquip.verify|verify} messages.
     * @param message reqPutOnEquip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPutOnEquip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPutOnEquip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPutOnEquip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPutOnEquip;

    /**
     * Decodes a reqPutOnEquip message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPutOnEquip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPutOnEquip;

    /**
     * Verifies a reqPutOnEquip message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPutOnEquip message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPutOnEquip
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPutOnEquip;

    /**
     * Creates a plain object from a reqPutOnEquip message. Also converts values to other types if specified.
     * @param message reqPutOnEquip
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPutOnEquip, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPutOnEquip to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTakeOffEquip. */
export interface IreqTakeOffEquip {

    /** reqTakeOffEquip id */
    id?: (number|null);
}

/** Represents a reqTakeOffEquip. */
export class reqTakeOffEquip implements IreqTakeOffEquip {

    /**
     * Constructs a new reqTakeOffEquip.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTakeOffEquip);

    /** reqTakeOffEquip id. */
    public id: number;

    /**
     * Creates a new reqTakeOffEquip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTakeOffEquip instance
     */
    public static create(properties?: IreqTakeOffEquip): reqTakeOffEquip;

    /**
     * Encodes the specified reqTakeOffEquip message. Does not implicitly {@link reqTakeOffEquip.verify|verify} messages.
     * @param message reqTakeOffEquip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTakeOffEquip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTakeOffEquip message, length delimited. Does not implicitly {@link reqTakeOffEquip.verify|verify} messages.
     * @param message reqTakeOffEquip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTakeOffEquip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTakeOffEquip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTakeOffEquip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTakeOffEquip;

    /**
     * Decodes a reqTakeOffEquip message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTakeOffEquip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTakeOffEquip;

    /**
     * Verifies a reqTakeOffEquip message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTakeOffEquip message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTakeOffEquip
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTakeOffEquip;

    /**
     * Creates a plain object from a reqTakeOffEquip message. Also converts values to other types if specified.
     * @param message reqTakeOffEquip
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTakeOffEquip, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTakeOffEquip to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resEquipStatus. */
export interface IresEquipStatus {

    /** resEquipStatus id */
    id?: (number|null);

    /** resEquipStatus isPutOn */
    isPutOn?: (boolean|null);
}

/** Represents a resEquipStatus. */
export class resEquipStatus implements IresEquipStatus {

    /**
     * Constructs a new resEquipStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresEquipStatus);

    /** resEquipStatus id. */
    public id: number;

    /** resEquipStatus isPutOn. */
    public isPutOn: boolean;

    /**
     * Creates a new resEquipStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resEquipStatus instance
     */
    public static create(properties?: IresEquipStatus): resEquipStatus;

    /**
     * Encodes the specified resEquipStatus message. Does not implicitly {@link resEquipStatus.verify|verify} messages.
     * @param message resEquipStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresEquipStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resEquipStatus message, length delimited. Does not implicitly {@link resEquipStatus.verify|verify} messages.
     * @param message resEquipStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresEquipStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resEquipStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resEquipStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resEquipStatus;

    /**
     * Decodes a resEquipStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resEquipStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resEquipStatus;

    /**
     * Verifies a resEquipStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resEquipStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resEquipStatus
     */
    public static fromObject(object: [ 'object' ].<string, any>): resEquipStatus;

    /**
     * Creates a plain object from a resEquipStatus message. Also converts values to other types if specified.
     * @param message resEquipStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resEquipStatus, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resEquipStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqComposeEquip. */
export interface IreqComposeEquip {

    /** reqComposeEquip fromId */
    fromId?: (number|null);

    /** reqComposeEquip toId */
    toId?: (number|null);
}

/** Represents a reqComposeEquip. */
export class reqComposeEquip implements IreqComposeEquip {

    /**
     * Constructs a new reqComposeEquip.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqComposeEquip);

    /** reqComposeEquip fromId. */
    public fromId: number;

    /** reqComposeEquip toId. */
    public toId: number;

    /**
     * Creates a new reqComposeEquip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqComposeEquip instance
     */
    public static create(properties?: IreqComposeEquip): reqComposeEquip;

    /**
     * Encodes the specified reqComposeEquip message. Does not implicitly {@link reqComposeEquip.verify|verify} messages.
     * @param message reqComposeEquip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqComposeEquip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqComposeEquip message, length delimited. Does not implicitly {@link reqComposeEquip.verify|verify} messages.
     * @param message reqComposeEquip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqComposeEquip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqComposeEquip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqComposeEquip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqComposeEquip;

    /**
     * Decodes a reqComposeEquip message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqComposeEquip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqComposeEquip;

    /**
     * Verifies a reqComposeEquip message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqComposeEquip message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqComposeEquip
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqComposeEquip;

    /**
     * Creates a plain object from a reqComposeEquip message. Also converts values to other types if specified.
     * @param message reqComposeEquip
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqComposeEquip, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqComposeEquip to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqChangeItemPos. */
export interface IreqChangeItemPos {

    /** reqChangeItemPos fromPos */
    fromPos?: (number|null);

    /** reqChangeItemPos toPos */
    toPos?: (number|null);
}

/** Represents a reqChangeItemPos. */
export class reqChangeItemPos implements IreqChangeItemPos {

    /**
     * Constructs a new reqChangeItemPos.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqChangeItemPos);

    /** reqChangeItemPos fromPos. */
    public fromPos: number;

    /** reqChangeItemPos toPos. */
    public toPos: number;

    /**
     * Creates a new reqChangeItemPos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqChangeItemPos instance
     */
    public static create(properties?: IreqChangeItemPos): reqChangeItemPos;

    /**
     * Encodes the specified reqChangeItemPos message. Does not implicitly {@link reqChangeItemPos.verify|verify} messages.
     * @param message reqChangeItemPos message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqChangeItemPos, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqChangeItemPos message, length delimited. Does not implicitly {@link reqChangeItemPos.verify|verify} messages.
     * @param message reqChangeItemPos message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqChangeItemPos, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqChangeItemPos message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqChangeItemPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqChangeItemPos;

    /**
     * Decodes a reqChangeItemPos message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqChangeItemPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqChangeItemPos;

    /**
     * Verifies a reqChangeItemPos message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqChangeItemPos message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqChangeItemPos
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqChangeItemPos;

    /**
     * Creates a plain object from a reqChangeItemPos message. Also converts values to other types if specified.
     * @param message reqChangeItemPos
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqChangeItemPos, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqChangeItemPos to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resChangeItemPos. */
export interface IresChangeItemPos {

    /** resChangeItemPos fromPos */
    fromPos?: (number|null);

    /** resChangeItemPos toPos */
    toPos?: (number|null);
}

/** Represents a resChangeItemPos. */
export class resChangeItemPos implements IresChangeItemPos {

    /**
     * Constructs a new resChangeItemPos.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresChangeItemPos);

    /** resChangeItemPos fromPos. */
    public fromPos: number;

    /** resChangeItemPos toPos. */
    public toPos: number;

    /**
     * Creates a new resChangeItemPos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resChangeItemPos instance
     */
    public static create(properties?: IresChangeItemPos): resChangeItemPos;

    /**
     * Encodes the specified resChangeItemPos message. Does not implicitly {@link resChangeItemPos.verify|verify} messages.
     * @param message resChangeItemPos message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresChangeItemPos, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resChangeItemPos message, length delimited. Does not implicitly {@link resChangeItemPos.verify|verify} messages.
     * @param message resChangeItemPos message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresChangeItemPos, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resChangeItemPos message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resChangeItemPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resChangeItemPos;

    /**
     * Decodes a resChangeItemPos message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resChangeItemPos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resChangeItemPos;

    /**
     * Verifies a resChangeItemPos message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resChangeItemPos message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resChangeItemPos
     */
    public static fromObject(object: [ 'object' ].<string, any>): resChangeItemPos;

    /**
     * Creates a plain object from a resChangeItemPos message. Also converts values to other types if specified.
     * @param message resChangeItemPos
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resChangeItemPos, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resChangeItemPos to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqForge. */
export interface IreqForge {
}

/** Represents a reqForge. */
export class reqForge implements IreqForge {

    /**
     * Constructs a new reqForge.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqForge);

    /**
     * Creates a new reqForge instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqForge instance
     */
    public static create(properties?: IreqForge): reqForge;

    /**
     * Encodes the specified reqForge message. Does not implicitly {@link reqForge.verify|verify} messages.
     * @param message reqForge message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqForge, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqForge message, length delimited. Does not implicitly {@link reqForge.verify|verify} messages.
     * @param message reqForge message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqForge, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqForge message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqForge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqForge;

    /**
     * Decodes a reqForge message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqForge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqForge;

    /**
     * Verifies a reqForge message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqForge message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqForge
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqForge;

    /**
     * Creates a plain object from a reqForge message. Also converts values to other types if specified.
     * @param message reqForge
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqForge, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqForge to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqAlchemy. */
export interface IreqAlchemy {

    /** reqAlchemy index */
    index?: (number|null);
}

/** Represents a reqAlchemy. */
export class reqAlchemy implements IreqAlchemy {

    /**
     * Constructs a new reqAlchemy.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqAlchemy);

    /** reqAlchemy index. */
    public index: number;

    /**
     * Creates a new reqAlchemy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqAlchemy instance
     */
    public static create(properties?: IreqAlchemy): reqAlchemy;

    /**
     * Encodes the specified reqAlchemy message. Does not implicitly {@link reqAlchemy.verify|verify} messages.
     * @param message reqAlchemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqAlchemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqAlchemy message, length delimited. Does not implicitly {@link reqAlchemy.verify|verify} messages.
     * @param message reqAlchemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqAlchemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqAlchemy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqAlchemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqAlchemy;

    /**
     * Decodes a reqAlchemy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqAlchemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqAlchemy;

    /**
     * Verifies a reqAlchemy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqAlchemy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqAlchemy
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqAlchemy;

    /**
     * Creates a plain object from a reqAlchemy message. Also converts values to other types if specified.
     * @param message reqAlchemy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqAlchemy, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqAlchemy to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resAlchemy. */
export interface IresAlchemy {

    /** resAlchemy alchemyEndTime */
    alchemyEndTime?: (number|null);

    /** resAlchemy alchemyItem */
    alchemyItem?: (string|null);

    /** resAlchemy alchemylevel */
    alchemylevel?: (number|null);

    /** resAlchemy alchemyexp */
    alchemyexp?: (number|null);
}

/** Represents a resAlchemy. */
export class resAlchemy implements IresAlchemy {

    /**
     * Constructs a new resAlchemy.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresAlchemy);

    /** resAlchemy alchemyEndTime. */
    public alchemyEndTime: number;

    /** resAlchemy alchemyItem. */
    public alchemyItem: string;

    /** resAlchemy alchemylevel. */
    public alchemylevel: number;

    /** resAlchemy alchemyexp. */
    public alchemyexp: number;

    /**
     * Creates a new resAlchemy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resAlchemy instance
     */
    public static create(properties?: IresAlchemy): resAlchemy;

    /**
     * Encodes the specified resAlchemy message. Does not implicitly {@link resAlchemy.verify|verify} messages.
     * @param message resAlchemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresAlchemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resAlchemy message, length delimited. Does not implicitly {@link resAlchemy.verify|verify} messages.
     * @param message resAlchemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresAlchemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resAlchemy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resAlchemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resAlchemy;

    /**
     * Decodes a resAlchemy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resAlchemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resAlchemy;

    /**
     * Verifies a resAlchemy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resAlchemy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resAlchemy
     */
    public static fromObject(object: [ 'object' ].<string, any>): resAlchemy;

    /**
     * Creates a plain object from a resAlchemy message. Also converts values to other types if specified.
     * @param message resAlchemy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resAlchemy, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resAlchemy to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqAlchemyAD. */
export interface IreqAlchemyAD {
}

/** Represents a reqAlchemyAD. */
export class reqAlchemyAD implements IreqAlchemyAD {

    /**
     * Constructs a new reqAlchemyAD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqAlchemyAD);

    /**
     * Creates a new reqAlchemyAD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqAlchemyAD instance
     */
    public static create(properties?: IreqAlchemyAD): reqAlchemyAD;

    /**
     * Encodes the specified reqAlchemyAD message. Does not implicitly {@link reqAlchemyAD.verify|verify} messages.
     * @param message reqAlchemyAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqAlchemyAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqAlchemyAD message, length delimited. Does not implicitly {@link reqAlchemyAD.verify|verify} messages.
     * @param message reqAlchemyAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqAlchemyAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqAlchemyAD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqAlchemyAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqAlchemyAD;

    /**
     * Decodes a reqAlchemyAD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqAlchemyAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqAlchemyAD;

    /**
     * Verifies a reqAlchemyAD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqAlchemyAD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqAlchemyAD
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqAlchemyAD;

    /**
     * Creates a plain object from a reqAlchemyAD message. Also converts values to other types if specified.
     * @param message reqAlchemyAD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqAlchemyAD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqAlchemyAD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqAlchemyAward. */
export interface IreqAlchemyAward {
}

/** Represents a reqAlchemyAward. */
export class reqAlchemyAward implements IreqAlchemyAward {

    /**
     * Constructs a new reqAlchemyAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqAlchemyAward);

    /**
     * Creates a new reqAlchemyAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqAlchemyAward instance
     */
    public static create(properties?: IreqAlchemyAward): reqAlchemyAward;

    /**
     * Encodes the specified reqAlchemyAward message. Does not implicitly {@link reqAlchemyAward.verify|verify} messages.
     * @param message reqAlchemyAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqAlchemyAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqAlchemyAward message, length delimited. Does not implicitly {@link reqAlchemyAward.verify|verify} messages.
     * @param message reqAlchemyAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqAlchemyAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqAlchemyAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqAlchemyAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqAlchemyAward;

    /**
     * Decodes a reqAlchemyAward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqAlchemyAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqAlchemyAward;

    /**
     * Verifies a reqAlchemyAward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqAlchemyAward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqAlchemyAward
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqAlchemyAward;

    /**
     * Creates a plain object from a reqAlchemyAward message. Also converts values to other types if specified.
     * @param message reqAlchemyAward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqAlchemyAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqAlchemyAward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTrashItem. */
export interface IreqTrashItem {

    /** reqTrashItem id */
    id?: (number|null);
}

/** Represents a reqTrashItem. */
export class reqTrashItem implements IreqTrashItem {

    /**
     * Constructs a new reqTrashItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTrashItem);

    /** reqTrashItem id. */
    public id: number;

    /**
     * Creates a new reqTrashItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTrashItem instance
     */
    public static create(properties?: IreqTrashItem): reqTrashItem;

    /**
     * Encodes the specified reqTrashItem message. Does not implicitly {@link reqTrashItem.verify|verify} messages.
     * @param message reqTrashItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTrashItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTrashItem message, length delimited. Does not implicitly {@link reqTrashItem.verify|verify} messages.
     * @param message reqTrashItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTrashItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTrashItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTrashItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTrashItem;

    /**
     * Decodes a reqTrashItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTrashItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTrashItem;

    /**
     * Verifies a reqTrashItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTrashItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTrashItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTrashItem;

    /**
     * Creates a plain object from a reqTrashItem message. Also converts values to other types if specified.
     * @param message reqTrashItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTrashItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTrashItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqUseItem. */
export interface IreqUseItem {

    /** reqUseItem id */
    id?: (number|null);

    /** reqUseItem num */
    num?: (number|null);
}

/** Represents a reqUseItem. */
export class reqUseItem implements IreqUseItem {

    /**
     * Constructs a new reqUseItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqUseItem);

    /** reqUseItem id. */
    public id: number;

    /** reqUseItem num. */
    public num: number;

    /**
     * Creates a new reqUseItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqUseItem instance
     */
    public static create(properties?: IreqUseItem): reqUseItem;

    /**
     * Encodes the specified reqUseItem message. Does not implicitly {@link reqUseItem.verify|verify} messages.
     * @param message reqUseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqUseItem message, length delimited. Does not implicitly {@link reqUseItem.verify|verify} messages.
     * @param message reqUseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqUseItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqUseItem;

    /**
     * Decodes a reqUseItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqUseItem;

    /**
     * Verifies a reqUseItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqUseItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqUseItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqUseItem;

    /**
     * Creates a plain object from a reqUseItem message. Also converts values to other types if specified.
     * @param message reqUseItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqUseItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqUseItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqLianDan. */
export interface IreqLianDan {

    /** reqLianDan daoyan */
    daoyan?: (number|null);

    /** reqLianDan ext */
    ext?: (number|null);
}

/** Represents a reqLianDan. */
export class reqLianDan implements IreqLianDan {

    /**
     * Constructs a new reqLianDan.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqLianDan);

    /** reqLianDan daoyan. */
    public daoyan: number;

    /** reqLianDan ext. */
    public ext: number;

    /**
     * Creates a new reqLianDan instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqLianDan instance
     */
    public static create(properties?: IreqLianDan): reqLianDan;

    /**
     * Encodes the specified reqLianDan message. Does not implicitly {@link reqLianDan.verify|verify} messages.
     * @param message reqLianDan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqLianDan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqLianDan message, length delimited. Does not implicitly {@link reqLianDan.verify|verify} messages.
     * @param message reqLianDan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqLianDan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqLianDan message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqLianDan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqLianDan;

    /**
     * Decodes a reqLianDan message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqLianDan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqLianDan;

    /**
     * Verifies a reqLianDan message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqLianDan message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqLianDan
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqLianDan;

    /**
     * Creates a plain object from a reqLianDan message. Also converts values to other types if specified.
     * @param message reqLianDan
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqLianDan, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqLianDan to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resDropItems. */
export interface IresDropItems {

    /** resDropItems type */
    type?: (number|null);

    /** resDropItems dropitems */
    dropitems?: (IDropItem[]|null);
}

/** Represents a resDropItems. */
export class resDropItems implements IresDropItems {

    /**
     * Constructs a new resDropItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresDropItems);

    /** resDropItems type. */
    public type: number;

    /** resDropItems dropitems. */
    public dropitems: [ 'Array' ].<IDropItem>;

    /**
     * Creates a new resDropItems instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resDropItems instance
     */
    public static create(properties?: IresDropItems): resDropItems;

    /**
     * Encodes the specified resDropItems message. Does not implicitly {@link resDropItems.verify|verify} messages.
     * @param message resDropItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresDropItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resDropItems message, length delimited. Does not implicitly {@link resDropItems.verify|verify} messages.
     * @param message resDropItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresDropItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resDropItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resDropItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resDropItems;

    /**
     * Decodes a resDropItems message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resDropItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resDropItems;

    /**
     * Verifies a resDropItems message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resDropItems message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resDropItems
     */
    public static fromObject(object: [ 'object' ].<string, any>): resDropItems;

    /**
     * Creates a plain object from a resDropItems message. Also converts values to other types if specified.
     * @param message resDropItems
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resDropItems, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resDropItems to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a DropItem. */
export interface IDropItem {

    /** DropItem gameId */
    gameId?: (number|null);

    /** DropItem itemid */
    itemid?: (number|null);

    /** DropItem num */
    num?: (number|null);

    /** DropItem posX */
    posX?: (number|null);

    /** DropItem posy */
    posy?: (number|null);
}

/** Represents a DropItem. */
export class DropItem implements IDropItem {

    /**
     * Constructs a new DropItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDropItem);

    /** DropItem gameId. */
    public gameId: number;

    /** DropItem itemid. */
    public itemid: number;

    /** DropItem num. */
    public num: number;

    /** DropItem posX. */
    public posX: number;

    /** DropItem posy. */
    public posy: number;

    /**
     * Creates a new DropItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DropItem instance
     */
    public static create(properties?: IDropItem): DropItem;

    /**
     * Encodes the specified DropItem message. Does not implicitly {@link DropItem.verify|verify} messages.
     * @param message DropItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDropItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DropItem message, length delimited. Does not implicitly {@link DropItem.verify|verify} messages.
     * @param message DropItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDropItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DropItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DropItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DropItem;

    /**
     * Decodes a DropItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DropItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DropItem;

    /**
     * Verifies a DropItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a DropItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DropItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): DropItem;

    /**
     * Creates a plain object from a DropItem message. Also converts values to other types if specified.
     * @param message DropItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DropItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this DropItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a petProp. */
export interface IpetProp {

    /** petProp playerId */
    playerId?: (number|null);

    /** petProp petlevel */
    petlevel?: (number|null);

    /** petProp times */
    times?: (number|null);

    /** petProp lastTime */
    lastTime?: (number|null);

    /** petProp type */
    type?: (number|null);

    /** petProp strength */
    strength?: (number|null);

    /** petProp petid */
    petid?: (number|null);

    /** petProp floor */
    floor?: (number|null);

    /** petProp awardfloor */
    awardfloor?: (number|null);

    /** petProp adTimes */
    adTimes?: (number|null);
}

/** Represents a petProp. */
export class petProp implements IpetProp {

    /**
     * Constructs a new petProp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IpetProp);

    /** petProp playerId. */
    public playerId: number;

    /** petProp petlevel. */
    public petlevel: number;

    /** petProp times. */
    public times: number;

    /** petProp lastTime. */
    public lastTime: number;

    /** petProp type. */
    public type: number;

    /** petProp strength. */
    public strength: number;

    /** petProp petid. */
    public petid: number;

    /** petProp floor. */
    public floor: number;

    /** petProp awardfloor. */
    public awardfloor: number;

    /** petProp adTimes. */
    public adTimes: number;

    /**
     * Creates a new petProp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns petProp instance
     */
    public static create(properties?: IpetProp): petProp;

    /**
     * Encodes the specified petProp message. Does not implicitly {@link petProp.verify|verify} messages.
     * @param message petProp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IpetProp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified petProp message, length delimited. Does not implicitly {@link petProp.verify|verify} messages.
     * @param message petProp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IpetProp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a petProp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns petProp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): petProp;

    /**
     * Decodes a petProp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns petProp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): petProp;

    /**
     * Verifies a petProp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a petProp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns petProp
     */
    public static fromObject(object: [ 'object' ].<string, any>): petProp;

    /**
     * Creates a plain object from a petProp message. Also converts values to other types if specified.
     * @param message petProp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: petProp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this petProp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerPet. */
export interface IresPlayerPet {

    /** resPlayerPet pets */
    pets?: (IpetProp[]|null);
}

/** Represents a resPlayerPet. */
export class resPlayerPet implements IresPlayerPet {

    /**
     * Constructs a new resPlayerPet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerPet);

    /** resPlayerPet pets. */
    public pets: [ 'Array' ].<IpetProp>;

    /**
     * Creates a new resPlayerPet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerPet instance
     */
    public static create(properties?: IresPlayerPet): resPlayerPet;

    /**
     * Encodes the specified resPlayerPet message. Does not implicitly {@link resPlayerPet.verify|verify} messages.
     * @param message resPlayerPet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerPet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerPet message, length delimited. Does not implicitly {@link resPlayerPet.verify|verify} messages.
     * @param message resPlayerPet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerPet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerPet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerPet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerPet;

    /**
     * Decodes a resPlayerPet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerPet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerPet;

    /**
     * Verifies a resPlayerPet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerPet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerPet
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerPet;

    /**
     * Creates a plain object from a resPlayerPet message. Also converts values to other types if specified.
     * @param message resPlayerPet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerPet, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerPet to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerPet. */
export interface IreqPlayerPet {
}

/** Represents a reqPlayerPet. */
export class reqPlayerPet implements IreqPlayerPet {

    /**
     * Constructs a new reqPlayerPet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerPet);

    /**
     * Creates a new reqPlayerPet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerPet instance
     */
    public static create(properties?: IreqPlayerPet): reqPlayerPet;

    /**
     * Encodes the specified reqPlayerPet message. Does not implicitly {@link reqPlayerPet.verify|verify} messages.
     * @param message reqPlayerPet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerPet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerPet message, length delimited. Does not implicitly {@link reqPlayerPet.verify|verify} messages.
     * @param message reqPlayerPet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerPet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerPet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerPet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerPet;

    /**
     * Decodes a reqPlayerPet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerPet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerPet;

    /**
     * Verifies a reqPlayerPet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerPet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerPet
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerPet;

    /**
     * Creates a plain object from a reqPlayerPet message. Also converts values to other types if specified.
     * @param message reqPlayerPet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerPet, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerPet to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqUpLevelPet. */
export interface IreqUpLevelPet {
}

/** Represents a reqUpLevelPet. */
export class reqUpLevelPet implements IreqUpLevelPet {

    /**
     * Constructs a new reqUpLevelPet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqUpLevelPet);

    /**
     * Creates a new reqUpLevelPet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqUpLevelPet instance
     */
    public static create(properties?: IreqUpLevelPet): reqUpLevelPet;

    /**
     * Encodes the specified reqUpLevelPet message. Does not implicitly {@link reqUpLevelPet.verify|verify} messages.
     * @param message reqUpLevelPet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqUpLevelPet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqUpLevelPet message, length delimited. Does not implicitly {@link reqUpLevelPet.verify|verify} messages.
     * @param message reqUpLevelPet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqUpLevelPet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqUpLevelPet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqUpLevelPet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqUpLevelPet;

    /**
     * Decodes a reqUpLevelPet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqUpLevelPet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqUpLevelPet;

    /**
     * Verifies a reqUpLevelPet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqUpLevelPet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqUpLevelPet
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqUpLevelPet;

    /**
     * Creates a plain object from a reqUpLevelPet message. Also converts values to other types if specified.
     * @param message reqUpLevelPet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqUpLevelPet, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqUpLevelPet to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqJuLing. */
export interface IreqJuLing {

    /** reqJuLing index */
    index?: (number|null);
}

/** Represents a reqJuLing. */
export class reqJuLing implements IreqJuLing {

    /**
     * Constructs a new reqJuLing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqJuLing);

    /** reqJuLing index. */
    public index: number;

    /**
     * Creates a new reqJuLing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqJuLing instance
     */
    public static create(properties?: IreqJuLing): reqJuLing;

    /**
     * Encodes the specified reqJuLing message. Does not implicitly {@link reqJuLing.verify|verify} messages.
     * @param message reqJuLing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqJuLing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqJuLing message, length delimited. Does not implicitly {@link reqJuLing.verify|verify} messages.
     * @param message reqJuLing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqJuLing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqJuLing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqJuLing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqJuLing;

    /**
     * Decodes a reqJuLing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqJuLing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqJuLing;

    /**
     * Verifies a reqJuLing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqJuLing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqJuLing
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqJuLing;

    /**
     * Creates a plain object from a reqJuLing message. Also converts values to other types if specified.
     * @param message reqJuLing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqJuLing, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqJuLing to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPetExplorer. */
export interface IreqPetExplorer {
}

/** Represents a reqPetExplorer. */
export class reqPetExplorer implements IreqPetExplorer {

    /**
     * Constructs a new reqPetExplorer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPetExplorer);

    /**
     * Creates a new reqPetExplorer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPetExplorer instance
     */
    public static create(properties?: IreqPetExplorer): reqPetExplorer;

    /**
     * Encodes the specified reqPetExplorer message. Does not implicitly {@link reqPetExplorer.verify|verify} messages.
     * @param message reqPetExplorer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPetExplorer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPetExplorer message, length delimited. Does not implicitly {@link reqPetExplorer.verify|verify} messages.
     * @param message reqPetExplorer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPetExplorer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPetExplorer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPetExplorer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPetExplorer;

    /**
     * Decodes a reqPetExplorer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPetExplorer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPetExplorer;

    /**
     * Verifies a reqPetExplorer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPetExplorer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPetExplorer
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPetExplorer;

    /**
     * Creates a plain object from a reqPetExplorer message. Also converts values to other types if specified.
     * @param message reqPetExplorer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPetExplorer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPetExplorer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPetMove. */
export interface IreqPetMove {

    /** reqPetMove x */
    x?: (number|null);

    /** reqPetMove y */
    y?: (number|null);
}

/** Represents a reqPetMove. */
export class reqPetMove implements IreqPetMove {

    /**
     * Constructs a new reqPetMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPetMove);

    /** reqPetMove x. */
    public x: number;

    /** reqPetMove y. */
    public y: number;

    /**
     * Creates a new reqPetMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPetMove instance
     */
    public static create(properties?: IreqPetMove): reqPetMove;

    /**
     * Encodes the specified reqPetMove message. Does not implicitly {@link reqPetMove.verify|verify} messages.
     * @param message reqPetMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPetMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPetMove message, length delimited. Does not implicitly {@link reqPetMove.verify|verify} messages.
     * @param message reqPetMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPetMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPetMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPetMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPetMove;

    /**
     * Decodes a reqPetMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPetMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPetMove;

    /**
     * Verifies a reqPetMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPetMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPetMove
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPetMove;

    /**
     * Creates a plain object from a reqPetMove message. Also converts values to other types if specified.
     * @param message reqPetMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPetMove, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPetMove to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqNextFloor. */
export interface IreqNextFloor {
}

/** Represents a reqNextFloor. */
export class reqNextFloor implements IreqNextFloor {

    /**
     * Constructs a new reqNextFloor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqNextFloor);

    /**
     * Creates a new reqNextFloor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqNextFloor instance
     */
    public static create(properties?: IreqNextFloor): reqNextFloor;

    /**
     * Encodes the specified reqNextFloor message. Does not implicitly {@link reqNextFloor.verify|verify} messages.
     * @param message reqNextFloor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqNextFloor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqNextFloor message, length delimited. Does not implicitly {@link reqNextFloor.verify|verify} messages.
     * @param message reqNextFloor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqNextFloor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqNextFloor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqNextFloor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqNextFloor;

    /**
     * Decodes a reqNextFloor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqNextFloor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqNextFloor;

    /**
     * Verifies a reqNextFloor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqNextFloor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqNextFloor
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqNextFloor;

    /**
     * Creates a plain object from a reqNextFloor message. Also converts values to other types if specified.
     * @param message reqNextFloor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqNextFloor, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqNextFloor to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resNextFloor. */
export interface IresNextFloor {
}

/** Represents a resNextFloor. */
export class resNextFloor implements IresNextFloor {

    /**
     * Constructs a new resNextFloor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresNextFloor);

    /**
     * Creates a new resNextFloor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resNextFloor instance
     */
    public static create(properties?: IresNextFloor): resNextFloor;

    /**
     * Encodes the specified resNextFloor message. Does not implicitly {@link resNextFloor.verify|verify} messages.
     * @param message resNextFloor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresNextFloor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resNextFloor message, length delimited. Does not implicitly {@link resNextFloor.verify|verify} messages.
     * @param message resNextFloor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresNextFloor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resNextFloor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resNextFloor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resNextFloor;

    /**
     * Decodes a resNextFloor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resNextFloor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resNextFloor;

    /**
     * Verifies a resNextFloor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resNextFloor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resNextFloor
     */
    public static fromObject(object: [ 'object' ].<string, any>): resNextFloor;

    /**
     * Creates a plain object from a resNextFloor message. Also converts values to other types if specified.
     * @param message resNextFloor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resNextFloor, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resNextFloor to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPetAD. */
export interface IreqPetAD {
}

/** Represents a reqPetAD. */
export class reqPetAD implements IreqPetAD {

    /**
     * Constructs a new reqPetAD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPetAD);

    /**
     * Creates a new reqPetAD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPetAD instance
     */
    public static create(properties?: IreqPetAD): reqPetAD;

    /**
     * Encodes the specified reqPetAD message. Does not implicitly {@link reqPetAD.verify|verify} messages.
     * @param message reqPetAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPetAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPetAD message, length delimited. Does not implicitly {@link reqPetAD.verify|verify} messages.
     * @param message reqPetAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPetAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPetAD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPetAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPetAD;

    /**
     * Decodes a reqPetAD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPetAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPetAD;

    /**
     * Verifies a reqPetAD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPetAD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPetAD
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPetAD;

    /**
     * Creates a plain object from a reqPetAD message. Also converts values to other types if specified.
     * @param message reqPetAD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPetAD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPetAD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPetAD. */
export interface IresPetAD {

    /** resPetAD times */
    times?: (number|null);

    /** resPetAD addstrength */
    addstrength?: (number|null);
}

/** Represents a resPetAD. */
export class resPetAD implements IresPetAD {

    /**
     * Constructs a new resPetAD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPetAD);

    /** resPetAD times. */
    public times: number;

    /** resPetAD addstrength. */
    public addstrength: number;

    /**
     * Creates a new resPetAD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPetAD instance
     */
    public static create(properties?: IresPetAD): resPetAD;

    /**
     * Encodes the specified resPetAD message. Does not implicitly {@link resPetAD.verify|verify} messages.
     * @param message resPetAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPetAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPetAD message, length delimited. Does not implicitly {@link resPetAD.verify|verify} messages.
     * @param message resPetAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPetAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPetAD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPetAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPetAD;

    /**
     * Decodes a resPetAD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPetAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPetAD;

    /**
     * Verifies a resPetAD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPetAD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPetAD
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPetAD;

    /**
     * Creates a plain object from a resPetAD message. Also converts values to other types if specified.
     * @param message resPetAD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPetAD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPetAD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPetFloorAward. */
export interface IreqPetFloorAward {

    /** reqPetFloorAward floor */
    floor?: (number|null);
}

/** Represents a reqPetFloorAward. */
export class reqPetFloorAward implements IreqPetFloorAward {

    /**
     * Constructs a new reqPetFloorAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPetFloorAward);

    /** reqPetFloorAward floor. */
    public floor: number;

    /**
     * Creates a new reqPetFloorAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPetFloorAward instance
     */
    public static create(properties?: IreqPetFloorAward): reqPetFloorAward;

    /**
     * Encodes the specified reqPetFloorAward message. Does not implicitly {@link reqPetFloorAward.verify|verify} messages.
     * @param message reqPetFloorAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPetFloorAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPetFloorAward message, length delimited. Does not implicitly {@link reqPetFloorAward.verify|verify} messages.
     * @param message reqPetFloorAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPetFloorAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPetFloorAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPetFloorAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPetFloorAward;

    /**
     * Decodes a reqPetFloorAward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPetFloorAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPetFloorAward;

    /**
     * Verifies a reqPetFloorAward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPetFloorAward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPetFloorAward
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPetFloorAward;

    /**
     * Creates a plain object from a reqPetFloorAward message. Also converts values to other types if specified.
     * @param message reqPetFloorAward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPetFloorAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPetFloorAward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqEndPetExplorer. */
export interface IreqEndPetExplorer {
}

/** Represents a reqEndPetExplorer. */
export class reqEndPetExplorer implements IreqEndPetExplorer {

    /**
     * Constructs a new reqEndPetExplorer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqEndPetExplorer);

    /**
     * Creates a new reqEndPetExplorer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqEndPetExplorer instance
     */
    public static create(properties?: IreqEndPetExplorer): reqEndPetExplorer;

    /**
     * Encodes the specified reqEndPetExplorer message. Does not implicitly {@link reqEndPetExplorer.verify|verify} messages.
     * @param message reqEndPetExplorer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqEndPetExplorer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqEndPetExplorer message, length delimited. Does not implicitly {@link reqEndPetExplorer.verify|verify} messages.
     * @param message reqEndPetExplorer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqEndPetExplorer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqEndPetExplorer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqEndPetExplorer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqEndPetExplorer;

    /**
     * Decodes a reqEndPetExplorer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqEndPetExplorer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqEndPetExplorer;

    /**
     * Verifies a reqEndPetExplorer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqEndPetExplorer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqEndPetExplorer
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqEndPetExplorer;

    /**
     * Creates a plain object from a reqEndPetExplorer message. Also converts values to other types if specified.
     * @param message reqEndPetExplorer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqEndPetExplorer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqEndPetExplorer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqBuyTickets. */
export interface IreqBuyTickets {
}

/** Represents a reqBuyTickets. */
export class reqBuyTickets implements IreqBuyTickets {

    /**
     * Constructs a new reqBuyTickets.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqBuyTickets);

    /**
     * Creates a new reqBuyTickets instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqBuyTickets instance
     */
    public static create(properties?: IreqBuyTickets): reqBuyTickets;

    /**
     * Encodes the specified reqBuyTickets message. Does not implicitly {@link reqBuyTickets.verify|verify} messages.
     * @param message reqBuyTickets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqBuyTickets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqBuyTickets message, length delimited. Does not implicitly {@link reqBuyTickets.verify|verify} messages.
     * @param message reqBuyTickets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqBuyTickets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqBuyTickets message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqBuyTickets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqBuyTickets;

    /**
     * Decodes a reqBuyTickets message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqBuyTickets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqBuyTickets;

    /**
     * Verifies a reqBuyTickets message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqBuyTickets message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqBuyTickets
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqBuyTickets;

    /**
     * Creates a plain object from a reqBuyTickets message. Also converts values to other types if specified.
     * @param message reqBuyTickets
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqBuyTickets, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqBuyTickets to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqCreatePlayer. */
export interface IreqCreatePlayer {

    /** reqCreatePlayer name */
    name?: (string|null);

    /** reqCreatePlayer job */
    job?: (number|null);

    /** reqCreatePlayer sex */
    sex?: (number|null);

    /** reqCreatePlayer head */
    head?: (string|null);

    /** reqCreatePlayer inviteType */
    inviteType?: (number|null);

    /** reqCreatePlayer inviteid */
    inviteid?: (number|null);
}

/** Represents a reqCreatePlayer. */
export class reqCreatePlayer implements IreqCreatePlayer {

    /**
     * Constructs a new reqCreatePlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqCreatePlayer);

    /** reqCreatePlayer name. */
    public name: string;

    /** reqCreatePlayer job. */
    public job: number;

    /** reqCreatePlayer sex. */
    public sex: number;

    /** reqCreatePlayer head. */
    public head: string;

    /** reqCreatePlayer inviteType. */
    public inviteType: number;

    /** reqCreatePlayer inviteid. */
    public inviteid: number;

    /**
     * Creates a new reqCreatePlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqCreatePlayer instance
     */
    public static create(properties?: IreqCreatePlayer): reqCreatePlayer;

    /**
     * Encodes the specified reqCreatePlayer message. Does not implicitly {@link reqCreatePlayer.verify|verify} messages.
     * @param message reqCreatePlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqCreatePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqCreatePlayer message, length delimited. Does not implicitly {@link reqCreatePlayer.verify|verify} messages.
     * @param message reqCreatePlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqCreatePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqCreatePlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqCreatePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqCreatePlayer;

    /**
     * Decodes a reqCreatePlayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqCreatePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqCreatePlayer;

    /**
     * Verifies a reqCreatePlayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqCreatePlayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqCreatePlayer
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqCreatePlayer;

    /**
     * Creates a plain object from a reqCreatePlayer message. Also converts values to other types if specified.
     * @param message reqCreatePlayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqCreatePlayer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqCreatePlayer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resCreatePlayer. */
export interface IresCreatePlayer {

    /** resCreatePlayer Player */
    Player?: (IloginPlayer|null);
}

/** Represents a resCreatePlayer. */
export class resCreatePlayer implements IresCreatePlayer {

    /**
     * Constructs a new resCreatePlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresCreatePlayer);

    /** resCreatePlayer Player. */
    public Player?: (IloginPlayer|null);

    /**
     * Creates a new resCreatePlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resCreatePlayer instance
     */
    public static create(properties?: IresCreatePlayer): resCreatePlayer;

    /**
     * Encodes the specified resCreatePlayer message. Does not implicitly {@link resCreatePlayer.verify|verify} messages.
     * @param message resCreatePlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresCreatePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resCreatePlayer message, length delimited. Does not implicitly {@link resCreatePlayer.verify|verify} messages.
     * @param message resCreatePlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresCreatePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resCreatePlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resCreatePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resCreatePlayer;

    /**
     * Decodes a resCreatePlayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resCreatePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resCreatePlayer;

    /**
     * Verifies a resCreatePlayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resCreatePlayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resCreatePlayer
     */
    public static fromObject(object: [ 'object' ].<string, any>): resCreatePlayer;

    /**
     * Creates a plain object from a resCreatePlayer message. Also converts values to other types if specified.
     * @param message resCreatePlayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resCreatePlayer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resCreatePlayer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSelectPlayer. */
export interface IreqSelectPlayer {

    /** reqSelectPlayer playerId */
    playerId?: (number|null);

    /** reqSelectPlayer inviteid */
    inviteid?: (number|null);

    /** reqSelectPlayer inviteType */
    inviteType?: (number|null);

    /** reqSelectPlayer name */
    name?: (string|null);

    /** reqSelectPlayer head */
    head?: (string|null);
}

/** Represents a reqSelectPlayer. */
export class reqSelectPlayer implements IreqSelectPlayer {

    /**
     * Constructs a new reqSelectPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSelectPlayer);

    /** reqSelectPlayer playerId. */
    public playerId: number;

    /** reqSelectPlayer inviteid. */
    public inviteid: number;

    /** reqSelectPlayer inviteType. */
    public inviteType: number;

    /** reqSelectPlayer name. */
    public name: string;

    /** reqSelectPlayer head. */
    public head: string;

    /**
     * Creates a new reqSelectPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSelectPlayer instance
     */
    public static create(properties?: IreqSelectPlayer): reqSelectPlayer;

    /**
     * Encodes the specified reqSelectPlayer message. Does not implicitly {@link reqSelectPlayer.verify|verify} messages.
     * @param message reqSelectPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSelectPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSelectPlayer message, length delimited. Does not implicitly {@link reqSelectPlayer.verify|verify} messages.
     * @param message reqSelectPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSelectPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSelectPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSelectPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSelectPlayer;

    /**
     * Decodes a reqSelectPlayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSelectPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSelectPlayer;

    /**
     * Verifies a reqSelectPlayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSelectPlayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSelectPlayer
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSelectPlayer;

    /**
     * Creates a plain object from a reqSelectPlayer message. Also converts values to other types if specified.
     * @param message reqSelectPlayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSelectPlayer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSelectPlayer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resSelectPlayer. */
export interface IresSelectPlayer {

    /** resSelectPlayer props */
    props?: (IPlayerProp|null);

    /** resSelectPlayer bagitems */
    bagitems?: (IbagItem[]|null);

    /** resSelectPlayer dailys */
    dailys?: (IPlayerDaily[]|null);

    /** resSelectPlayer offlineExp */
    offlineExp?: (number|null);
}

/** Represents a resSelectPlayer. */
export class resSelectPlayer implements IresSelectPlayer {

    /**
     * Constructs a new resSelectPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresSelectPlayer);

    /** resSelectPlayer props. */
    public props?: (IPlayerProp|null);

    /** resSelectPlayer bagitems. */
    public bagitems: [ 'Array' ].<IbagItem>;

    /** resSelectPlayer dailys. */
    public dailys: [ 'Array' ].<IPlayerDaily>;

    /** resSelectPlayer offlineExp. */
    public offlineExp: number;

    /**
     * Creates a new resSelectPlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resSelectPlayer instance
     */
    public static create(properties?: IresSelectPlayer): resSelectPlayer;

    /**
     * Encodes the specified resSelectPlayer message. Does not implicitly {@link resSelectPlayer.verify|verify} messages.
     * @param message resSelectPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresSelectPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resSelectPlayer message, length delimited. Does not implicitly {@link resSelectPlayer.verify|verify} messages.
     * @param message resSelectPlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresSelectPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resSelectPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resSelectPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resSelectPlayer;

    /**
     * Decodes a resSelectPlayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resSelectPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resSelectPlayer;

    /**
     * Verifies a resSelectPlayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resSelectPlayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resSelectPlayer
     */
    public static fromObject(object: [ 'object' ].<string, any>): resSelectPlayer;

    /**
     * Creates a plain object from a resSelectPlayer message. Also converts values to other types if specified.
     * @param message resSelectPlayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resSelectPlayer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resSelectPlayer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPerExp. */
export interface IresPerExp {

    /** resPerExp exp */
    exp?: (number|null);

    /** resPerExp canGet */
    canGet?: (number|null);
}

/** Represents a resPerExp. */
export class resPerExp implements IresPerExp {

    /**
     * Constructs a new resPerExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPerExp);

    /** resPerExp exp. */
    public exp: number;

    /** resPerExp canGet. */
    public canGet: number;

    /**
     * Creates a new resPerExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPerExp instance
     */
    public static create(properties?: IresPerExp): resPerExp;

    /**
     * Encodes the specified resPerExp message. Does not implicitly {@link resPerExp.verify|verify} messages.
     * @param message resPerExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPerExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPerExp message, length delimited. Does not implicitly {@link resPerExp.verify|verify} messages.
     * @param message resPerExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPerExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPerExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPerExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPerExp;

    /**
     * Decodes a resPerExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPerExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPerExp;

    /**
     * Verifies a resPerExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPerExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPerExp
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPerExp;

    /**
     * Creates a plain object from a resPerExp message. Also converts values to other types if specified.
     * @param message resPerExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPerExp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPerExp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqGetExp. */
export interface IreqGetExp {
}

/** Represents a reqGetExp. */
export class reqGetExp implements IreqGetExp {

    /**
     * Constructs a new reqGetExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqGetExp);

    /**
     * Creates a new reqGetExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqGetExp instance
     */
    public static create(properties?: IreqGetExp): reqGetExp;

    /**
     * Encodes the specified reqGetExp message. Does not implicitly {@link reqGetExp.verify|verify} messages.
     * @param message reqGetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqGetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqGetExp message, length delimited. Does not implicitly {@link reqGetExp.verify|verify} messages.
     * @param message reqGetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqGetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqGetExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqGetExp;

    /**
     * Decodes a reqGetExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqGetExp;

    /**
     * Verifies a reqGetExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqGetExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqGetExp
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqGetExp;

    /**
     * Creates a plain object from a reqGetExp message. Also converts values to other types if specified.
     * @param message reqGetExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqGetExp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqGetExp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerProp. */
export interface IresPlayerProp {

    /** resPlayerProp props */
    props?: (IPlayerProp|null);
}

/** Represents a resPlayerProp. */
export class resPlayerProp implements IresPlayerProp {

    /**
     * Constructs a new resPlayerProp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerProp);

    /** resPlayerProp props. */
    public props?: (IPlayerProp|null);

    /**
     * Creates a new resPlayerProp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerProp instance
     */
    public static create(properties?: IresPlayerProp): resPlayerProp;

    /**
     * Encodes the specified resPlayerProp message. Does not implicitly {@link resPlayerProp.verify|verify} messages.
     * @param message resPlayerProp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerProp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerProp message, length delimited. Does not implicitly {@link resPlayerProp.verify|verify} messages.
     * @param message resPlayerProp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerProp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerProp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerProp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerProp;

    /**
     * Decodes a resPlayerProp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerProp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerProp;

    /**
     * Verifies a resPlayerProp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerProp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerProp
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerProp;

    /**
     * Creates a plain object from a resPlayerProp message. Also converts values to other types if specified.
     * @param message resPlayerProp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerProp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerProp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqLevelUp. */
export interface IreqLevelUp {
}

/** Represents a reqLevelUp. */
export class reqLevelUp implements IreqLevelUp {

    /**
     * Constructs a new reqLevelUp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqLevelUp);

    /**
     * Creates a new reqLevelUp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqLevelUp instance
     */
    public static create(properties?: IreqLevelUp): reqLevelUp;

    /**
     * Encodes the specified reqLevelUp message. Does not implicitly {@link reqLevelUp.verify|verify} messages.
     * @param message reqLevelUp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqLevelUp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqLevelUp message, length delimited. Does not implicitly {@link reqLevelUp.verify|verify} messages.
     * @param message reqLevelUp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqLevelUp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqLevelUp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqLevelUp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqLevelUp;

    /**
     * Decodes a reqLevelUp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqLevelUp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqLevelUp;

    /**
     * Verifies a reqLevelUp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqLevelUp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqLevelUp
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqLevelUp;

    /**
     * Creates a plain object from a reqLevelUp message. Also converts values to other types if specified.
     * @param message reqLevelUp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqLevelUp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqLevelUp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPrayer. */
export interface IreqPrayer {

    /** reqPrayer type */
    type?: (number|null);
}

/** Represents a reqPrayer. */
export class reqPrayer implements IreqPrayer {

    /**
     * Constructs a new reqPrayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPrayer);

    /** reqPrayer type. */
    public type: number;

    /**
     * Creates a new reqPrayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPrayer instance
     */
    public static create(properties?: IreqPrayer): reqPrayer;

    /**
     * Encodes the specified reqPrayer message. Does not implicitly {@link reqPrayer.verify|verify} messages.
     * @param message reqPrayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPrayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPrayer message, length delimited. Does not implicitly {@link reqPrayer.verify|verify} messages.
     * @param message reqPrayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPrayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPrayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPrayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPrayer;

    /**
     * Decodes a reqPrayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPrayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPrayer;

    /**
     * Verifies a reqPrayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPrayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPrayer
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPrayer;

    /**
     * Creates a plain object from a reqPrayer message. Also converts values to other types if specified.
     * @param message reqPrayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPrayer, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPrayer to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSignInfo. */
export interface IreqSignInfo {
}

/** Represents a reqSignInfo. */
export class reqSignInfo implements IreqSignInfo {

    /**
     * Constructs a new reqSignInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSignInfo);

    /**
     * Creates a new reqSignInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSignInfo instance
     */
    public static create(properties?: IreqSignInfo): reqSignInfo;

    /**
     * Encodes the specified reqSignInfo message. Does not implicitly {@link reqSignInfo.verify|verify} messages.
     * @param message reqSignInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSignInfo message, length delimited. Does not implicitly {@link reqSignInfo.verify|verify} messages.
     * @param message reqSignInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSignInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSignInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSignInfo;

    /**
     * Decodes a reqSignInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSignInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSignInfo;

    /**
     * Verifies a reqSignInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSignInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSignInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSignInfo;

    /**
     * Creates a plain object from a reqSignInfo message. Also converts values to other types if specified.
     * @param message reqSignInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSignInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSignInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSign. */
export interface IreqSign {
}

/** Represents a reqSign. */
export class reqSign implements IreqSign {

    /**
     * Constructs a new reqSign.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSign);

    /**
     * Creates a new reqSign instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSign instance
     */
    public static create(properties?: IreqSign): reqSign;

    /**
     * Encodes the specified reqSign message. Does not implicitly {@link reqSign.verify|verify} messages.
     * @param message reqSign message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSign, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSign message, length delimited. Does not implicitly {@link reqSign.verify|verify} messages.
     * @param message reqSign message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSign, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSign message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSign
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSign;

    /**
     * Decodes a reqSign message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSign
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSign;

    /**
     * Verifies a reqSign message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSign message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSign
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSign;

    /**
     * Creates a plain object from a reqSign message. Also converts values to other types if specified.
     * @param message reqSign
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSign, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSign to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resSignInfo. */
export interface IresSignInfo {

    /** resSignInfo signDays */
    signDays?: (number|null);

    /** resSignInfo lastSignTime */
    lastSignTime?: (number|null);
}

/** Represents a resSignInfo. */
export class resSignInfo implements IresSignInfo {

    /**
     * Constructs a new resSignInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresSignInfo);

    /** resSignInfo signDays. */
    public signDays: number;

    /** resSignInfo lastSignTime. */
    public lastSignTime: number;

    /**
     * Creates a new resSignInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resSignInfo instance
     */
    public static create(properties?: IresSignInfo): resSignInfo;

    /**
     * Encodes the specified resSignInfo message. Does not implicitly {@link resSignInfo.verify|verify} messages.
     * @param message resSignInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresSignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resSignInfo message, length delimited. Does not implicitly {@link resSignInfo.verify|verify} messages.
     * @param message resSignInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresSignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resSignInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resSignInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resSignInfo;

    /**
     * Decodes a resSignInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resSignInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resSignInfo;

    /**
     * Verifies a resSignInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resSignInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resSignInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): resSignInfo;

    /**
     * Creates a plain object from a resSignInfo message. Also converts values to other types if specified.
     * @param message resSignInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resSignInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resSignInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqRank. */
export interface IreqRank {

    /** reqRank type */
    type?: (number|null);

    /** reqRank page */
    page?: (number|null);
}

/** Represents a reqRank. */
export class reqRank implements IreqRank {

    /**
     * Constructs a new reqRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqRank);

    /** reqRank type. */
    public type: number;

    /** reqRank page. */
    public page: number;

    /**
     * Creates a new reqRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqRank instance
     */
    public static create(properties?: IreqRank): reqRank;

    /**
     * Encodes the specified reqRank message. Does not implicitly {@link reqRank.verify|verify} messages.
     * @param message reqRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqRank message, length delimited. Does not implicitly {@link reqRank.verify|verify} messages.
     * @param message reqRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqRank;

    /**
     * Decodes a reqRank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqRank;

    /**
     * Verifies a reqRank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqRank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqRank
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqRank;

    /**
     * Creates a plain object from a reqRank message. Also converts values to other types if specified.
     * @param message reqRank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqRank, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqRank to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resRank. */
export interface IresRank {

    /** resRank type */
    type?: (number|null);

    /** resRank players */
    players?: (IPlayerRank[]|null);
}

/** Represents a resRank. */
export class resRank implements IresRank {

    /**
     * Constructs a new resRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresRank);

    /** resRank type. */
    public type: number;

    /** resRank players. */
    public players: [ 'Array' ].<IPlayerRank>;

    /**
     * Creates a new resRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resRank instance
     */
    public static create(properties?: IresRank): resRank;

    /**
     * Encodes the specified resRank message. Does not implicitly {@link resRank.verify|verify} messages.
     * @param message resRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resRank message, length delimited. Does not implicitly {@link resRank.verify|verify} messages.
     * @param message resRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resRank;

    /**
     * Decodes a resRank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resRank;

    /**
     * Verifies a resRank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resRank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resRank
     */
    public static fromObject(object: [ 'object' ].<string, any>): resRank;

    /**
     * Creates a plain object from a resRank message. Also converts values to other types if specified.
     * @param message resRank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resRank, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resRank to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTransframInfo. */
export interface IreqTransframInfo {
}

/** Represents a reqTransframInfo. */
export class reqTransframInfo implements IreqTransframInfo {

    /**
     * Constructs a new reqTransframInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTransframInfo);

    /**
     * Creates a new reqTransframInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTransframInfo instance
     */
    public static create(properties?: IreqTransframInfo): reqTransframInfo;

    /**
     * Encodes the specified reqTransframInfo message. Does not implicitly {@link reqTransframInfo.verify|verify} messages.
     * @param message reqTransframInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTransframInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTransframInfo message, length delimited. Does not implicitly {@link reqTransframInfo.verify|verify} messages.
     * @param message reqTransframInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTransframInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTransframInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTransframInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTransframInfo;

    /**
     * Decodes a reqTransframInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTransframInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTransframInfo;

    /**
     * Verifies a reqTransframInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTransframInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTransframInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTransframInfo;

    /**
     * Creates a plain object from a reqTransframInfo message. Also converts values to other types if specified.
     * @param message reqTransframInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTransframInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTransframInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTransframAD. */
export interface IreqTransframAD {
}

/** Represents a reqTransframAD. */
export class reqTransframAD implements IreqTransframAD {

    /**
     * Constructs a new reqTransframAD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTransframAD);

    /**
     * Creates a new reqTransframAD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTransframAD instance
     */
    public static create(properties?: IreqTransframAD): reqTransframAD;

    /**
     * Encodes the specified reqTransframAD message. Does not implicitly {@link reqTransframAD.verify|verify} messages.
     * @param message reqTransframAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTransframAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTransframAD message, length delimited. Does not implicitly {@link reqTransframAD.verify|verify} messages.
     * @param message reqTransframAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTransframAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTransframAD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTransframAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTransframAD;

    /**
     * Decodes a reqTransframAD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTransframAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTransframAD;

    /**
     * Verifies a reqTransframAD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTransframAD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTransframAD
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTransframAD;

    /**
     * Creates a plain object from a reqTransframAD message. Also converts values to other types if specified.
     * @param message reqTransframAD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTransframAD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTransframAD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resTransframInfo. */
export interface IresTransframInfo {

    /** resTransframInfo endTransTime */
    endTransTime?: (number|null);

    /** resTransframInfo exp */
    exp?: (number|null);

    /** resTransframInfo fame */
    fame?: (number|null);

    /** resTransframInfo friends */
    friends?: (IPlayerRank[]|null);
}

/** Represents a resTransframInfo. */
export class resTransframInfo implements IresTransframInfo {

    /**
     * Constructs a new resTransframInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresTransframInfo);

    /** resTransframInfo endTransTime. */
    public endTransTime: number;

    /** resTransframInfo exp. */
    public exp: number;

    /** resTransframInfo fame. */
    public fame: number;

    /** resTransframInfo friends. */
    public friends: [ 'Array' ].<IPlayerRank>;

    /**
     * Creates a new resTransframInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resTransframInfo instance
     */
    public static create(properties?: IresTransframInfo): resTransframInfo;

    /**
     * Encodes the specified resTransframInfo message. Does not implicitly {@link resTransframInfo.verify|verify} messages.
     * @param message resTransframInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresTransframInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resTransframInfo message, length delimited. Does not implicitly {@link resTransframInfo.verify|verify} messages.
     * @param message resTransframInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresTransframInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resTransframInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resTransframInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resTransframInfo;

    /**
     * Decodes a resTransframInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resTransframInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resTransframInfo;

    /**
     * Verifies a resTransframInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resTransframInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resTransframInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): resTransframInfo;

    /**
     * Creates a plain object from a resTransframInfo message. Also converts values to other types if specified.
     * @param message resTransframInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resTransframInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resTransframInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTransfram. */
export interface IreqTransfram {
}

/** Represents a reqTransfram. */
export class reqTransfram implements IreqTransfram {

    /**
     * Constructs a new reqTransfram.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTransfram);

    /**
     * Creates a new reqTransfram instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTransfram instance
     */
    public static create(properties?: IreqTransfram): reqTransfram;

    /**
     * Encodes the specified reqTransfram message. Does not implicitly {@link reqTransfram.verify|verify} messages.
     * @param message reqTransfram message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTransfram, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTransfram message, length delimited. Does not implicitly {@link reqTransfram.verify|verify} messages.
     * @param message reqTransfram message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTransfram, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTransfram message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTransfram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTransfram;

    /**
     * Decodes a reqTransfram message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTransfram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTransfram;

    /**
     * Verifies a reqTransfram message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTransfram message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTransfram
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTransfram;

    /**
     * Creates a plain object from a reqTransfram message. Also converts values to other types if specified.
     * @param message reqTransfram
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTransfram, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTransfram to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerMail. */
export interface IreqPlayerMail {

    /** reqPlayerMail page */
    page?: (number|null);
}

/** Represents a reqPlayerMail. */
export class reqPlayerMail implements IreqPlayerMail {

    /**
     * Constructs a new reqPlayerMail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerMail);

    /** reqPlayerMail page. */
    public page: number;

    /**
     * Creates a new reqPlayerMail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerMail instance
     */
    public static create(properties?: IreqPlayerMail): reqPlayerMail;

    /**
     * Encodes the specified reqPlayerMail message. Does not implicitly {@link reqPlayerMail.verify|verify} messages.
     * @param message reqPlayerMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerMail message, length delimited. Does not implicitly {@link reqPlayerMail.verify|verify} messages.
     * @param message reqPlayerMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerMail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerMail;

    /**
     * Decodes a reqPlayerMail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerMail;

    /**
     * Verifies a reqPlayerMail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerMail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerMail
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerMail;

    /**
     * Creates a plain object from a reqPlayerMail message. Also converts values to other types if specified.
     * @param message reqPlayerMail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerMail, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerMail to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerMail. */
export interface IresPlayerMail {

    /** resPlayerMail mails */
    mails?: (IPlayerMail[]|null);
}

/** Represents a resPlayerMail. */
export class resPlayerMail implements IresPlayerMail {

    /**
     * Constructs a new resPlayerMail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerMail);

    /** resPlayerMail mails. */
    public mails: [ 'Array' ].<IPlayerMail>;

    /**
     * Creates a new resPlayerMail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerMail instance
     */
    public static create(properties?: IresPlayerMail): resPlayerMail;

    /**
     * Encodes the specified resPlayerMail message. Does not implicitly {@link resPlayerMail.verify|verify} messages.
     * @param message resPlayerMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerMail message, length delimited. Does not implicitly {@link resPlayerMail.verify|verify} messages.
     * @param message resPlayerMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerMail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerMail;

    /**
     * Decodes a resPlayerMail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerMail;

    /**
     * Verifies a resPlayerMail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerMail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerMail
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerMail;

    /**
     * Creates a plain object from a resPlayerMail message. Also converts values to other types if specified.
     * @param message resPlayerMail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerMail, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerMail to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerMailGet. */
export interface IreqPlayerMailGet {

    /** reqPlayerMailGet mailid */
    mailid?: (number|null);
}

/** Represents a reqPlayerMailGet. */
export class reqPlayerMailGet implements IreqPlayerMailGet {

    /**
     * Constructs a new reqPlayerMailGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerMailGet);

    /** reqPlayerMailGet mailid. */
    public mailid: number;

    /**
     * Creates a new reqPlayerMailGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerMailGet instance
     */
    public static create(properties?: IreqPlayerMailGet): reqPlayerMailGet;

    /**
     * Encodes the specified reqPlayerMailGet message. Does not implicitly {@link reqPlayerMailGet.verify|verify} messages.
     * @param message reqPlayerMailGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerMailGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerMailGet message, length delimited. Does not implicitly {@link reqPlayerMailGet.verify|verify} messages.
     * @param message reqPlayerMailGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerMailGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerMailGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerMailGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerMailGet;

    /**
     * Decodes a reqPlayerMailGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerMailGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerMailGet;

    /**
     * Verifies a reqPlayerMailGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerMailGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerMailGet
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerMailGet;

    /**
     * Creates a plain object from a reqPlayerMailGet message. Also converts values to other types if specified.
     * @param message reqPlayerMailGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerMailGet, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerMailGet to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerMailRead. */
export interface IreqPlayerMailRead {

    /** reqPlayerMailRead mailid */
    mailid?: (number|null);
}

/** Represents a reqPlayerMailRead. */
export class reqPlayerMailRead implements IreqPlayerMailRead {

    /**
     * Constructs a new reqPlayerMailRead.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerMailRead);

    /** reqPlayerMailRead mailid. */
    public mailid: number;

    /**
     * Creates a new reqPlayerMailRead instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerMailRead instance
     */
    public static create(properties?: IreqPlayerMailRead): reqPlayerMailRead;

    /**
     * Encodes the specified reqPlayerMailRead message. Does not implicitly {@link reqPlayerMailRead.verify|verify} messages.
     * @param message reqPlayerMailRead message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerMailRead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerMailRead message, length delimited. Does not implicitly {@link reqPlayerMailRead.verify|verify} messages.
     * @param message reqPlayerMailRead message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerMailRead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerMailRead message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerMailRead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerMailRead;

    /**
     * Decodes a reqPlayerMailRead message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerMailRead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerMailRead;

    /**
     * Verifies a reqPlayerMailRead message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerMailRead message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerMailRead
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerMailRead;

    /**
     * Creates a plain object from a reqPlayerMailRead message. Also converts values to other types if specified.
     * @param message reqPlayerMailRead
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerMailRead, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerMailRead to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerMailChange. */
export interface IresPlayerMailChange {

    /** resPlayerMailChange mail */
    mail?: (IPlayerMail|null);
}

/** Represents a resPlayerMailChange. */
export class resPlayerMailChange implements IresPlayerMailChange {

    /**
     * Constructs a new resPlayerMailChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerMailChange);

    /** resPlayerMailChange mail. */
    public mail?: (IPlayerMail|null);

    /**
     * Creates a new resPlayerMailChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerMailChange instance
     */
    public static create(properties?: IresPlayerMailChange): resPlayerMailChange;

    /**
     * Encodes the specified resPlayerMailChange message. Does not implicitly {@link resPlayerMailChange.verify|verify} messages.
     * @param message resPlayerMailChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerMailChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerMailChange message, length delimited. Does not implicitly {@link resPlayerMailChange.verify|verify} messages.
     * @param message resPlayerMailChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerMailChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerMailChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerMailChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerMailChange;

    /**
     * Decodes a resPlayerMailChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerMailChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerMailChange;

    /**
     * Verifies a resPlayerMailChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerMailChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerMailChange
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerMailChange;

    /**
     * Creates a plain object from a resPlayerMailChange message. Also converts values to other types if specified.
     * @param message resPlayerMailChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerMailChange, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerMailChange to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerNewMail. */
export interface IresPlayerNewMail {

    /** resPlayerNewMail type */
    type?: (number|null);
}

/** Represents a resPlayerNewMail. */
export class resPlayerNewMail implements IresPlayerNewMail {

    /**
     * Constructs a new resPlayerNewMail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerNewMail);

    /** resPlayerNewMail type. */
    public type: number;

    /**
     * Creates a new resPlayerNewMail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerNewMail instance
     */
    public static create(properties?: IresPlayerNewMail): resPlayerNewMail;

    /**
     * Encodes the specified resPlayerNewMail message. Does not implicitly {@link resPlayerNewMail.verify|verify} messages.
     * @param message resPlayerNewMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerNewMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerNewMail message, length delimited. Does not implicitly {@link resPlayerNewMail.verify|verify} messages.
     * @param message resPlayerNewMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerNewMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerNewMail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerNewMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerNewMail;

    /**
     * Decodes a resPlayerNewMail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerNewMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerNewMail;

    /**
     * Verifies a resPlayerNewMail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerNewMail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerNewMail
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerNewMail;

    /**
     * Creates a plain object from a resPlayerNewMail message. Also converts values to other types if specified.
     * @param message resPlayerNewMail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerNewMail, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerNewMail to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerDaily. */
export interface IresPlayerDaily {

    /** resPlayerDaily dailys */
    dailys?: (IPlayerDaily[]|null);
}

/** Represents a resPlayerDaily. */
export class resPlayerDaily implements IresPlayerDaily {

    /**
     * Constructs a new resPlayerDaily.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerDaily);

    /** resPlayerDaily dailys. */
    public dailys: [ 'Array' ].<IPlayerDaily>;

    /**
     * Creates a new resPlayerDaily instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerDaily instance
     */
    public static create(properties?: IresPlayerDaily): resPlayerDaily;

    /**
     * Encodes the specified resPlayerDaily message. Does not implicitly {@link resPlayerDaily.verify|verify} messages.
     * @param message resPlayerDaily message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerDaily, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerDaily message, length delimited. Does not implicitly {@link resPlayerDaily.verify|verify} messages.
     * @param message resPlayerDaily message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerDaily, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerDaily message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerDaily
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerDaily;

    /**
     * Decodes a resPlayerDaily message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerDaily
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerDaily;

    /**
     * Verifies a resPlayerDaily message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerDaily message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerDaily
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerDaily;

    /**
     * Creates a plain object from a resPlayerDaily message. Also converts values to other types if specified.
     * @param message resPlayerDaily
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerDaily, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerDaily to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqLoginGift. */
export interface IreqLoginGift {
}

/** Represents a reqLoginGift. */
export class reqLoginGift implements IreqLoginGift {

    /**
     * Constructs a new reqLoginGift.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqLoginGift);

    /**
     * Creates a new reqLoginGift instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqLoginGift instance
     */
    public static create(properties?: IreqLoginGift): reqLoginGift;

    /**
     * Encodes the specified reqLoginGift message. Does not implicitly {@link reqLoginGift.verify|verify} messages.
     * @param message reqLoginGift message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqLoginGift, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqLoginGift message, length delimited. Does not implicitly {@link reqLoginGift.verify|verify} messages.
     * @param message reqLoginGift message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqLoginGift, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqLoginGift message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqLoginGift
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqLoginGift;

    /**
     * Decodes a reqLoginGift message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqLoginGift
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqLoginGift;

    /**
     * Verifies a reqLoginGift message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqLoginGift message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqLoginGift
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqLoginGift;

    /**
     * Creates a plain object from a reqLoginGift message. Also converts values to other types if specified.
     * @param message reqLoginGift
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqLoginGift, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqLoginGift to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqLevelUpAD. */
export interface IreqLevelUpAD {
}

/** Represents a reqLevelUpAD. */
export class reqLevelUpAD implements IreqLevelUpAD {

    /**
     * Constructs a new reqLevelUpAD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqLevelUpAD);

    /**
     * Creates a new reqLevelUpAD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqLevelUpAD instance
     */
    public static create(properties?: IreqLevelUpAD): reqLevelUpAD;

    /**
     * Encodes the specified reqLevelUpAD message. Does not implicitly {@link reqLevelUpAD.verify|verify} messages.
     * @param message reqLevelUpAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqLevelUpAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqLevelUpAD message, length delimited. Does not implicitly {@link reqLevelUpAD.verify|verify} messages.
     * @param message reqLevelUpAD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqLevelUpAD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqLevelUpAD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqLevelUpAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqLevelUpAD;

    /**
     * Decodes a reqLevelUpAD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqLevelUpAD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqLevelUpAD;

    /**
     * Verifies a reqLevelUpAD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqLevelUpAD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqLevelUpAD
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqLevelUpAD;

    /**
     * Creates a plain object from a reqLevelUpAD message. Also converts values to other types if specified.
     * @param message reqLevelUpAD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqLevelUpAD, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqLevelUpAD to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqGMCommand. */
export interface IreqGMCommand {

    /** reqGMCommand command */
    command?: (string|null);
}

/** Represents a reqGMCommand. */
export class reqGMCommand implements IreqGMCommand {

    /**
     * Constructs a new reqGMCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqGMCommand);

    /** reqGMCommand command. */
    public command: string;

    /**
     * Creates a new reqGMCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqGMCommand instance
     */
    public static create(properties?: IreqGMCommand): reqGMCommand;

    /**
     * Encodes the specified reqGMCommand message. Does not implicitly {@link reqGMCommand.verify|verify} messages.
     * @param message reqGMCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqGMCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqGMCommand message, length delimited. Does not implicitly {@link reqGMCommand.verify|verify} messages.
     * @param message reqGMCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqGMCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqGMCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqGMCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqGMCommand;

    /**
     * Decodes a reqGMCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqGMCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqGMCommand;

    /**
     * Verifies a reqGMCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqGMCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqGMCommand
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqGMCommand;

    /**
     * Creates a plain object from a reqGMCommand message. Also converts values to other types if specified.
     * @param message reqGMCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqGMCommand, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqGMCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqMasterRelation. */
export interface IreqMasterRelation {
}

/** Represents a reqMasterRelation. */
export class reqMasterRelation implements IreqMasterRelation {

    /**
     * Constructs a new reqMasterRelation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqMasterRelation);

    /**
     * Creates a new reqMasterRelation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqMasterRelation instance
     */
    public static create(properties?: IreqMasterRelation): reqMasterRelation;

    /**
     * Encodes the specified reqMasterRelation message. Does not implicitly {@link reqMasterRelation.verify|verify} messages.
     * @param message reqMasterRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqMasterRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqMasterRelation message, length delimited. Does not implicitly {@link reqMasterRelation.verify|verify} messages.
     * @param message reqMasterRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqMasterRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqMasterRelation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqMasterRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqMasterRelation;

    /**
     * Decodes a reqMasterRelation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqMasterRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqMasterRelation;

    /**
     * Verifies a reqMasterRelation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqMasterRelation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqMasterRelation
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqMasterRelation;

    /**
     * Creates a plain object from a reqMasterRelation message. Also converts values to other types if specified.
     * @param message reqMasterRelation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqMasterRelation, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqMasterRelation to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resMasterRelation. */
export interface IresMasterRelation {

    /** resMasterRelation master */
    master?: (IPlayerRelation|null);

    /** resMasterRelation players */
    players?: (IPlayerRelation[]|null);
}

/** Represents a resMasterRelation. */
export class resMasterRelation implements IresMasterRelation {

    /**
     * Constructs a new resMasterRelation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresMasterRelation);

    /** resMasterRelation master. */
    public master?: (IPlayerRelation|null);

    /** resMasterRelation players. */
    public players: [ 'Array' ].<IPlayerRelation>;

    /**
     * Creates a new resMasterRelation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resMasterRelation instance
     */
    public static create(properties?: IresMasterRelation): resMasterRelation;

    /**
     * Encodes the specified resMasterRelation message. Does not implicitly {@link resMasterRelation.verify|verify} messages.
     * @param message resMasterRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresMasterRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resMasterRelation message, length delimited. Does not implicitly {@link resMasterRelation.verify|verify} messages.
     * @param message resMasterRelation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresMasterRelation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resMasterRelation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resMasterRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resMasterRelation;

    /**
     * Decodes a resMasterRelation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resMasterRelation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resMasterRelation;

    /**
     * Verifies a resMasterRelation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resMasterRelation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resMasterRelation
     */
    public static fromObject(object: [ 'object' ].<string, any>): resMasterRelation;

    /**
     * Creates a plain object from a resMasterRelation message. Also converts values to other types if specified.
     * @param message resMasterRelation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resMasterRelation, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resMasterRelation to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resMasterRelationChange. */
export interface IresMasterRelationChange {

    /** resMasterRelationChange player */
    player?: (IPlayerRelation|null);
}

/** Represents a resMasterRelationChange. */
export class resMasterRelationChange implements IresMasterRelationChange {

    /**
     * Constructs a new resMasterRelationChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresMasterRelationChange);

    /** resMasterRelationChange player. */
    public player?: (IPlayerRelation|null);

    /**
     * Creates a new resMasterRelationChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resMasterRelationChange instance
     */
    public static create(properties?: IresMasterRelationChange): resMasterRelationChange;

    /**
     * Encodes the specified resMasterRelationChange message. Does not implicitly {@link resMasterRelationChange.verify|verify} messages.
     * @param message resMasterRelationChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresMasterRelationChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resMasterRelationChange message, length delimited. Does not implicitly {@link resMasterRelationChange.verify|verify} messages.
     * @param message resMasterRelationChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresMasterRelationChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resMasterRelationChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resMasterRelationChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resMasterRelationChange;

    /**
     * Decodes a resMasterRelationChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resMasterRelationChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resMasterRelationChange;

    /**
     * Verifies a resMasterRelationChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resMasterRelationChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resMasterRelationChange
     */
    public static fromObject(object: [ 'object' ].<string, any>): resMasterRelationChange;

    /**
     * Creates a plain object from a resMasterRelationChange message. Also converts values to other types if specified.
     * @param message resMasterRelationChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resMasterRelationChange, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resMasterRelationChange to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqKickoutRookie. */
export interface IreqKickoutRookie {

    /** reqKickoutRookie playerid */
    playerid?: (number|null);
}

/** Represents a reqKickoutRookie. */
export class reqKickoutRookie implements IreqKickoutRookie {

    /**
     * Constructs a new reqKickoutRookie.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqKickoutRookie);

    /** reqKickoutRookie playerid. */
    public playerid: number;

    /**
     * Creates a new reqKickoutRookie instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqKickoutRookie instance
     */
    public static create(properties?: IreqKickoutRookie): reqKickoutRookie;

    /**
     * Encodes the specified reqKickoutRookie message. Does not implicitly {@link reqKickoutRookie.verify|verify} messages.
     * @param message reqKickoutRookie message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqKickoutRookie, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqKickoutRookie message, length delimited. Does not implicitly {@link reqKickoutRookie.verify|verify} messages.
     * @param message reqKickoutRookie message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqKickoutRookie, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqKickoutRookie message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqKickoutRookie
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqKickoutRookie;

    /**
     * Decodes a reqKickoutRookie message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqKickoutRookie
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqKickoutRookie;

    /**
     * Verifies a reqKickoutRookie message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqKickoutRookie message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqKickoutRookie
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqKickoutRookie;

    /**
     * Creates a plain object from a reqKickoutRookie message. Also converts values to other types if specified.
     * @param message reqKickoutRookie
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqKickoutRookie, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqKickoutRookie to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqEnyi. */
export interface IreqEnyi {
}

/** Represents a reqEnyi. */
export class reqEnyi implements IreqEnyi {

    /**
     * Constructs a new reqEnyi.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqEnyi);

    /**
     * Creates a new reqEnyi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqEnyi instance
     */
    public static create(properties?: IreqEnyi): reqEnyi;

    /**
     * Encodes the specified reqEnyi message. Does not implicitly {@link reqEnyi.verify|verify} messages.
     * @param message reqEnyi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqEnyi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqEnyi message, length delimited. Does not implicitly {@link reqEnyi.verify|verify} messages.
     * @param message reqEnyi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqEnyi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqEnyi message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqEnyi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqEnyi;

    /**
     * Decodes a reqEnyi message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqEnyi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqEnyi;

    /**
     * Verifies a reqEnyi message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqEnyi message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqEnyi
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqEnyi;

    /**
     * Creates a plain object from a reqEnyi message. Also converts values to other types if specified.
     * @param message reqEnyi
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqEnyi, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqEnyi to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqBuff. */
export interface IreqBuff {

    /** reqBuff type */
    type?: (number|null);
}

/** Represents a reqBuff. */
export class reqBuff implements IreqBuff {

    /**
     * Constructs a new reqBuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqBuff);

    /** reqBuff type. */
    public type: number;

    /**
     * Creates a new reqBuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqBuff instance
     */
    public static create(properties?: IreqBuff): reqBuff;

    /**
     * Encodes the specified reqBuff message. Does not implicitly {@link reqBuff.verify|verify} messages.
     * @param message reqBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqBuff message, length delimited. Does not implicitly {@link reqBuff.verify|verify} messages.
     * @param message reqBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqBuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqBuff;

    /**
     * Decodes a reqBuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqBuff;

    /**
     * Verifies a reqBuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqBuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqBuff
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqBuff;

    /**
     * Creates a plain object from a reqBuff message. Also converts values to other types if specified.
     * @param message reqBuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqBuff, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqBuff to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resBuff. */
export interface IresBuff {

    /** resBuff buffs */
    buffs?: (IPlayerBuff[]|null);
}

/** Represents a resBuff. */
export class resBuff implements IresBuff {

    /**
     * Constructs a new resBuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresBuff);

    /** resBuff buffs. */
    public buffs: [ 'Array' ].<IPlayerBuff>;

    /**
     * Creates a new resBuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resBuff instance
     */
    public static create(properties?: IresBuff): resBuff;

    /**
     * Encodes the specified resBuff message. Does not implicitly {@link resBuff.verify|verify} messages.
     * @param message resBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resBuff message, length delimited. Does not implicitly {@link resBuff.verify|verify} messages.
     * @param message resBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resBuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resBuff;

    /**
     * Decodes a resBuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resBuff;

    /**
     * Verifies a resBuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resBuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resBuff
     */
    public static fromObject(object: [ 'object' ].<string, any>): resBuff;

    /**
     * Creates a plain object from a resBuff message. Also converts values to other types if specified.
     * @param message resBuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resBuff, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resBuff to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resBuffChange. */
export interface IresBuffChange {

    /** resBuffChange buffs */
    buffs?: (IPlayerBuff|null);
}

/** Represents a resBuffChange. */
export class resBuffChange implements IresBuffChange {

    /**
     * Constructs a new resBuffChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresBuffChange);

    /** resBuffChange buffs. */
    public buffs?: (IPlayerBuff|null);

    /**
     * Creates a new resBuffChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resBuffChange instance
     */
    public static create(properties?: IresBuffChange): resBuffChange;

    /**
     * Encodes the specified resBuffChange message. Does not implicitly {@link resBuffChange.verify|verify} messages.
     * @param message resBuffChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresBuffChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resBuffChange message, length delimited. Does not implicitly {@link resBuffChange.verify|verify} messages.
     * @param message resBuffChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresBuffChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resBuffChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resBuffChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resBuffChange;

    /**
     * Decodes a resBuffChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resBuffChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resBuffChange;

    /**
     * Verifies a resBuffChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resBuffChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resBuffChange
     */
    public static fromObject(object: [ 'object' ].<string, any>): resBuffChange;

    /**
     * Creates a plain object from a resBuffChange message. Also converts values to other types if specified.
     * @param message resBuffChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resBuffChange, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resBuffChange to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqOffLineExp. */
export interface IreqOffLineExp {

    /** reqOffLineExp isAd */
    isAd?: (boolean|null);
}

/** Represents a reqOffLineExp. */
export class reqOffLineExp implements IreqOffLineExp {

    /**
     * Constructs a new reqOffLineExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqOffLineExp);

    /** reqOffLineExp isAd. */
    public isAd: boolean;

    /**
     * Creates a new reqOffLineExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqOffLineExp instance
     */
    public static create(properties?: IreqOffLineExp): reqOffLineExp;

    /**
     * Encodes the specified reqOffLineExp message. Does not implicitly {@link reqOffLineExp.verify|verify} messages.
     * @param message reqOffLineExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqOffLineExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqOffLineExp message, length delimited. Does not implicitly {@link reqOffLineExp.verify|verify} messages.
     * @param message reqOffLineExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqOffLineExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqOffLineExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqOffLineExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqOffLineExp;

    /**
     * Decodes a reqOffLineExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqOffLineExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqOffLineExp;

    /**
     * Verifies a reqOffLineExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqOffLineExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqOffLineExp
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqOffLineExp;

    /**
     * Creates a plain object from a reqOffLineExp message. Also converts values to other types if specified.
     * @param message reqOffLineExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqOffLineExp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqOffLineExp to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerFields. */
export interface IreqPlayerFields {
}

/** Represents a reqPlayerFields. */
export class reqPlayerFields implements IreqPlayerFields {

    /**
     * Constructs a new reqPlayerFields.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerFields);

    /**
     * Creates a new reqPlayerFields instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerFields instance
     */
    public static create(properties?: IreqPlayerFields): reqPlayerFields;

    /**
     * Encodes the specified reqPlayerFields message. Does not implicitly {@link reqPlayerFields.verify|verify} messages.
     * @param message reqPlayerFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerFields message, length delimited. Does not implicitly {@link reqPlayerFields.verify|verify} messages.
     * @param message reqPlayerFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerFields message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerFields;

    /**
     * Decodes a reqPlayerFields message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerFields;

    /**
     * Verifies a reqPlayerFields message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerFields message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerFields
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerFields;

    /**
     * Creates a plain object from a reqPlayerFields message. Also converts values to other types if specified.
     * @param message reqPlayerFields
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerFields, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerFields to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerFields. */
export interface IresPlayerFields {

    /** resPlayerFields level */
    level?: (number|null);

    /** resPlayerFields exp */
    exp?: (number|null);

    /** resPlayerFields fields */
    fields?: (IPlayerFields|null);
}

/** Represents a resPlayerFields. */
export class resPlayerFields implements IresPlayerFields {

    /**
     * Constructs a new resPlayerFields.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerFields);

    /** resPlayerFields level. */
    public level: number;

    /** resPlayerFields exp. */
    public exp: number;

    /** resPlayerFields fields. */
    public fields?: (IPlayerFields|null);

    /**
     * Creates a new resPlayerFields instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerFields instance
     */
    public static create(properties?: IresPlayerFields): resPlayerFields;

    /**
     * Encodes the specified resPlayerFields message. Does not implicitly {@link resPlayerFields.verify|verify} messages.
     * @param message resPlayerFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerFields message, length delimited. Does not implicitly {@link resPlayerFields.verify|verify} messages.
     * @param message resPlayerFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerFields message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerFields;

    /**
     * Decodes a resPlayerFields message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerFields;

    /**
     * Verifies a resPlayerFields message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerFields message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerFields
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerFields;

    /**
     * Creates a plain object from a resPlayerFields message. Also converts values to other types if specified.
     * @param message resPlayerFields
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerFields, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerFields to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSowSeed. */
export interface IreqSowSeed {

    /** reqSowSeed type */
    type?: (number|null);

    /** reqSowSeed index */
    index?: (number|null);
}

/** Represents a reqSowSeed. */
export class reqSowSeed implements IreqSowSeed {

    /**
     * Constructs a new reqSowSeed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSowSeed);

    /** reqSowSeed type. */
    public type: number;

    /** reqSowSeed index. */
    public index: number;

    /**
     * Creates a new reqSowSeed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSowSeed instance
     */
    public static create(properties?: IreqSowSeed): reqSowSeed;

    /**
     * Encodes the specified reqSowSeed message. Does not implicitly {@link reqSowSeed.verify|verify} messages.
     * @param message reqSowSeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSowSeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSowSeed message, length delimited. Does not implicitly {@link reqSowSeed.verify|verify} messages.
     * @param message reqSowSeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSowSeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSowSeed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSowSeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSowSeed;

    /**
     * Decodes a reqSowSeed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSowSeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSowSeed;

    /**
     * Verifies a reqSowSeed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSowSeed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSowSeed
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSowSeed;

    /**
     * Creates a plain object from a reqSowSeed message. Also converts values to other types if specified.
     * @param message reqSowSeed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSowSeed, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSowSeed to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqHarvest. */
export interface IreqHarvest {

    /** reqHarvest type */
    type?: (number|null);

    /** reqHarvest index */
    index?: (number|null);
}

/** Represents a reqHarvest. */
export class reqHarvest implements IreqHarvest {

    /**
     * Constructs a new reqHarvest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqHarvest);

    /** reqHarvest type. */
    public type: number;

    /** reqHarvest index. */
    public index: number;

    /**
     * Creates a new reqHarvest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqHarvest instance
     */
    public static create(properties?: IreqHarvest): reqHarvest;

    /**
     * Encodes the specified reqHarvest message. Does not implicitly {@link reqHarvest.verify|verify} messages.
     * @param message reqHarvest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqHarvest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqHarvest message, length delimited. Does not implicitly {@link reqHarvest.verify|verify} messages.
     * @param message reqHarvest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqHarvest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqHarvest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqHarvest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqHarvest;

    /**
     * Decodes a reqHarvest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqHarvest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqHarvest;

    /**
     * Verifies a reqHarvest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqHarvest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqHarvest
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqHarvest;

    /**
     * Creates a plain object from a reqHarvest message. Also converts values to other types if specified.
     * @param message reqHarvest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqHarvest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqHarvest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqAddBuff. */
export interface IreqAddBuff {

    /** reqAddBuff type */
    type?: (number|null);
}

/** Represents a reqAddBuff. */
export class reqAddBuff implements IreqAddBuff {

    /**
     * Constructs a new reqAddBuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqAddBuff);

    /** reqAddBuff type. */
    public type: number;

    /**
     * Creates a new reqAddBuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqAddBuff instance
     */
    public static create(properties?: IreqAddBuff): reqAddBuff;

    /**
     * Encodes the specified reqAddBuff message. Does not implicitly {@link reqAddBuff.verify|verify} messages.
     * @param message reqAddBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqAddBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqAddBuff message, length delimited. Does not implicitly {@link reqAddBuff.verify|verify} messages.
     * @param message reqAddBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqAddBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqAddBuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqAddBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqAddBuff;

    /**
     * Decodes a reqAddBuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqAddBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqAddBuff;

    /**
     * Verifies a reqAddBuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqAddBuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqAddBuff
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqAddBuff;

    /**
     * Creates a plain object from a reqAddBuff message. Also converts values to other types if specified.
     * @param message reqAddBuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqAddBuff, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqAddBuff to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqXianJin. */
export interface IreqXianJin {
}

/** Represents a reqXianJin. */
export class reqXianJin implements IreqXianJin {

    /**
     * Constructs a new reqXianJin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqXianJin);

    /**
     * Creates a new reqXianJin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqXianJin instance
     */
    public static create(properties?: IreqXianJin): reqXianJin;

    /**
     * Encodes the specified reqXianJin message. Does not implicitly {@link reqXianJin.verify|verify} messages.
     * @param message reqXianJin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqXianJin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqXianJin message, length delimited. Does not implicitly {@link reqXianJin.verify|verify} messages.
     * @param message reqXianJin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqXianJin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqXianJin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqXianJin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqXianJin;

    /**
     * Decodes a reqXianJin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqXianJin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqXianJin;

    /**
     * Verifies a reqXianJin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqXianJin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqXianJin
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqXianJin;

    /**
     * Creates a plain object from a reqXianJin message. Also converts values to other types if specified.
     * @param message reqXianJin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqXianJin, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqXianJin to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resXianJin. */
export interface IresXianJin {

    /** resXianJin params */
    params?: (IPlayerParam[]|null);
}

/** Represents a resXianJin. */
export class resXianJin implements IresXianJin {

    /**
     * Constructs a new resXianJin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresXianJin);

    /** resXianJin params. */
    public params: [ 'Array' ].<IPlayerParam>;

    /**
     * Creates a new resXianJin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resXianJin instance
     */
    public static create(properties?: IresXianJin): resXianJin;

    /**
     * Encodes the specified resXianJin message. Does not implicitly {@link resXianJin.verify|verify} messages.
     * @param message resXianJin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresXianJin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resXianJin message, length delimited. Does not implicitly {@link resXianJin.verify|verify} messages.
     * @param message resXianJin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresXianJin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resXianJin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resXianJin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resXianJin;

    /**
     * Decodes a resXianJin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resXianJin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resXianJin;

    /**
     * Verifies a resXianJin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resXianJin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resXianJin
     */
    public static fromObject(object: [ 'object' ].<string, any>): resXianJin;

    /**
     * Creates a plain object from a resXianJin message. Also converts values to other types if specified.
     * @param message resXianJin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resXianJin, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resXianJin to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqShiLian. */
export interface IreqShiLian {

    /** reqShiLian type */
    type?: (number|null);
}

/** Represents a reqShiLian. */
export class reqShiLian implements IreqShiLian {

    /**
     * Constructs a new reqShiLian.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqShiLian);

    /** reqShiLian type. */
    public type: number;

    /**
     * Creates a new reqShiLian instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqShiLian instance
     */
    public static create(properties?: IreqShiLian): reqShiLian;

    /**
     * Encodes the specified reqShiLian message. Does not implicitly {@link reqShiLian.verify|verify} messages.
     * @param message reqShiLian message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqShiLian, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqShiLian message, length delimited. Does not implicitly {@link reqShiLian.verify|verify} messages.
     * @param message reqShiLian message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqShiLian, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqShiLian message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqShiLian
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqShiLian;

    /**
     * Decodes a reqShiLian message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqShiLian
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqShiLian;

    /**
     * Verifies a reqShiLian message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqShiLian message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqShiLian
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqShiLian;

    /**
     * Creates a plain object from a reqShiLian message. Also converts values to other types if specified.
     * @param message reqShiLian
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqShiLian, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqShiLian to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqChoseSex. */
export interface IreqChoseSex {

    /** reqChoseSex sex */
    sex?: (number|null);
}

/** Represents a reqChoseSex. */
export class reqChoseSex implements IreqChoseSex {

    /**
     * Constructs a new reqChoseSex.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqChoseSex);

    /** reqChoseSex sex. */
    public sex: number;

    /**
     * Creates a new reqChoseSex instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqChoseSex instance
     */
    public static create(properties?: IreqChoseSex): reqChoseSex;

    /**
     * Encodes the specified reqChoseSex message. Does not implicitly {@link reqChoseSex.verify|verify} messages.
     * @param message reqChoseSex message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqChoseSex, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqChoseSex message, length delimited. Does not implicitly {@link reqChoseSex.verify|verify} messages.
     * @param message reqChoseSex message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqChoseSex, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqChoseSex message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqChoseSex
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqChoseSex;

    /**
     * Decodes a reqChoseSex message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqChoseSex
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqChoseSex;

    /**
     * Verifies a reqChoseSex message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqChoseSex message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqChoseSex
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqChoseSex;

    /**
     * Creates a plain object from a reqChoseSex message. Also converts values to other types if specified.
     * @param message reqChoseSex
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqChoseSex, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqChoseSex to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqActiveBuff. */
export interface IreqActiveBuff {

    /** reqActiveBuff buffid */
    buffid?: (number|null);
}

/** Represents a reqActiveBuff. */
export class reqActiveBuff implements IreqActiveBuff {

    /**
     * Constructs a new reqActiveBuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqActiveBuff);

    /** reqActiveBuff buffid. */
    public buffid: number;

    /**
     * Creates a new reqActiveBuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqActiveBuff instance
     */
    public static create(properties?: IreqActiveBuff): reqActiveBuff;

    /**
     * Encodes the specified reqActiveBuff message. Does not implicitly {@link reqActiveBuff.verify|verify} messages.
     * @param message reqActiveBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqActiveBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqActiveBuff message, length delimited. Does not implicitly {@link reqActiveBuff.verify|verify} messages.
     * @param message reqActiveBuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqActiveBuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqActiveBuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqActiveBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqActiveBuff;

    /**
     * Decodes a reqActiveBuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqActiveBuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqActiveBuff;

    /**
     * Verifies a reqActiveBuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqActiveBuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqActiveBuff
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqActiveBuff;

    /**
     * Creates a plain object from a reqActiveBuff message. Also converts values to other types if specified.
     * @param message reqActiveBuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqActiveBuff, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqActiveBuff to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resNumChange. */
export interface IresNumChange {

    /** resNumChange type */
    type?: (number|null);

    /** resNumChange num */
    num?: (number|null);
}

/** Represents a resNumChange. */
export class resNumChange implements IresNumChange {

    /**
     * Constructs a new resNumChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresNumChange);

    /** resNumChange type. */
    public type: number;

    /** resNumChange num. */
    public num: number;

    /**
     * Creates a new resNumChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resNumChange instance
     */
    public static create(properties?: IresNumChange): resNumChange;

    /**
     * Encodes the specified resNumChange message. Does not implicitly {@link resNumChange.verify|verify} messages.
     * @param message resNumChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresNumChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resNumChange message, length delimited. Does not implicitly {@link resNumChange.verify|verify} messages.
     * @param message resNumChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresNumChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resNumChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resNumChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resNumChange;

    /**
     * Decodes a resNumChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resNumChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resNumChange;

    /**
     * Verifies a resNumChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resNumChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resNumChange
     */
    public static fromObject(object: [ 'object' ].<string, any>): resNumChange;

    /**
     * Creates a plain object from a resNumChange message. Also converts values to other types if specified.
     * @param message resNumChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resNumChange, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resNumChange to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqInvite. */
export interface IreqInvite {

    /** reqInvite type */
    type?: (number|null);

    /** reqInvite inviteid */
    inviteid?: (number|null);
}

/** Represents a reqInvite. */
export class reqInvite implements IreqInvite {

    /**
     * Constructs a new reqInvite.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqInvite);

    /** reqInvite type. */
    public type: number;

    /** reqInvite inviteid. */
    public inviteid: number;

    /**
     * Creates a new reqInvite instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqInvite instance
     */
    public static create(properties?: IreqInvite): reqInvite;

    /**
     * Encodes the specified reqInvite message. Does not implicitly {@link reqInvite.verify|verify} messages.
     * @param message reqInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqInvite message, length delimited. Does not implicitly {@link reqInvite.verify|verify} messages.
     * @param message reqInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqInvite message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqInvite;

    /**
     * Decodes a reqInvite message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqInvite;

    /**
     * Verifies a reqInvite message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqInvite message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqInvite
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqInvite;

    /**
     * Creates a plain object from a reqInvite message. Also converts values to other types if specified.
     * @param message reqInvite
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqInvite, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqInvite to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resSystemNotice. */
export interface IresSystemNotice {

    /** resSystemNotice id */
    id?: (number|null);
}

/** Represents a resSystemNotice. */
export class resSystemNotice implements IresSystemNotice {

    /**
     * Constructs a new resSystemNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresSystemNotice);

    /** resSystemNotice id. */
    public id: number;

    /**
     * Creates a new resSystemNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resSystemNotice instance
     */
    public static create(properties?: IresSystemNotice): resSystemNotice;

    /**
     * Encodes the specified resSystemNotice message. Does not implicitly {@link resSystemNotice.verify|verify} messages.
     * @param message resSystemNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresSystemNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resSystemNotice message, length delimited. Does not implicitly {@link resSystemNotice.verify|verify} messages.
     * @param message resSystemNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresSystemNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resSystemNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resSystemNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resSystemNotice;

    /**
     * Decodes a resSystemNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resSystemNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resSystemNotice;

    /**
     * Verifies a resSystemNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resSystemNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resSystemNotice
     */
    public static fromObject(object: [ 'object' ].<string, any>): resSystemNotice;

    /**
     * Creates a plain object from a resSystemNotice message. Also converts values to other types if specified.
     * @param message resSystemNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resSystemNotice, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resSystemNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSystemInfo. */
export interface IreqSystemInfo {
}

/** Represents a reqSystemInfo. */
export class reqSystemInfo implements IreqSystemInfo {

    /**
     * Constructs a new reqSystemInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSystemInfo);

    /**
     * Creates a new reqSystemInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSystemInfo instance
     */
    public static create(properties?: IreqSystemInfo): reqSystemInfo;

    /**
     * Encodes the specified reqSystemInfo message. Does not implicitly {@link reqSystemInfo.verify|verify} messages.
     * @param message reqSystemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSystemInfo message, length delimited. Does not implicitly {@link reqSystemInfo.verify|verify} messages.
     * @param message reqSystemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSystemInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSystemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSystemInfo;

    /**
     * Decodes a reqSystemInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSystemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSystemInfo;

    /**
     * Verifies a reqSystemInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSystemInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSystemInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSystemInfo;

    /**
     * Creates a plain object from a reqSystemInfo message. Also converts values to other types if specified.
     * @param message reqSystemInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSystemInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSystemInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resSystemInfo. */
export interface IresSystemInfo {

    /** resSystemInfo fabaoid */
    fabaoid?: (number|null);

    /** resSystemInfo forgelevel */
    forgelevel?: (number|null);

    /** resSystemInfo petid */
    petid?: (number|null);

    /** resSystemInfo petfloor */
    petfloor?: (number|null);

    /** resSystemInfo cpname */
    cpname?: (string|null);

    /** resSystemInfo perexp */
    perexp?: (number|null);

    /** resSystemInfo level */
    level?: (number|null);

    /** resSystemInfo layer */
    layer?: (number|null);
}

/** Represents a resSystemInfo. */
export class resSystemInfo implements IresSystemInfo {

    /**
     * Constructs a new resSystemInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresSystemInfo);

    /** resSystemInfo fabaoid. */
    public fabaoid: number;

    /** resSystemInfo forgelevel. */
    public forgelevel: number;

    /** resSystemInfo petid. */
    public petid: number;

    /** resSystemInfo petfloor. */
    public petfloor: number;

    /** resSystemInfo cpname. */
    public cpname: string;

    /** resSystemInfo perexp. */
    public perexp: number;

    /** resSystemInfo level. */
    public level: number;

    /** resSystemInfo layer. */
    public layer: number;

    /**
     * Creates a new resSystemInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resSystemInfo instance
     */
    public static create(properties?: IresSystemInfo): resSystemInfo;

    /**
     * Encodes the specified resSystemInfo message. Does not implicitly {@link resSystemInfo.verify|verify} messages.
     * @param message resSystemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresSystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resSystemInfo message, length delimited. Does not implicitly {@link resSystemInfo.verify|verify} messages.
     * @param message resSystemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresSystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resSystemInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resSystemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resSystemInfo;

    /**
     * Decodes a resSystemInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resSystemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resSystemInfo;

    /**
     * Verifies a resSystemInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resSystemInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resSystemInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): resSystemInfo;

    /**
     * Creates a plain object from a resSystemInfo message. Also converts values to other types if specified.
     * @param message resSystemInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resSystemInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resSystemInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqHeartBeat. */
export interface IreqHeartBeat {

    /** reqHeartBeat id */
    id?: (number|null);
}

/** Represents a reqHeartBeat. */
export class reqHeartBeat implements IreqHeartBeat {

    /**
     * Constructs a new reqHeartBeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqHeartBeat);

    /** reqHeartBeat id. */
    public id: number;

    /**
     * Creates a new reqHeartBeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqHeartBeat instance
     */
    public static create(properties?: IreqHeartBeat): reqHeartBeat;

    /**
     * Encodes the specified reqHeartBeat message. Does not implicitly {@link reqHeartBeat.verify|verify} messages.
     * @param message reqHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqHeartBeat message, length delimited. Does not implicitly {@link reqHeartBeat.verify|verify} messages.
     * @param message reqHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqHeartBeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqHeartBeat;

    /**
     * Decodes a reqHeartBeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqHeartBeat;

    /**
     * Verifies a reqHeartBeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqHeartBeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqHeartBeat
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqHeartBeat;

    /**
     * Creates a plain object from a reqHeartBeat message. Also converts values to other types if specified.
     * @param message reqHeartBeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqHeartBeat, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqHeartBeat to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resHeartBeat. */
export interface IresHeartBeat {

    /** resHeartBeat id */
    id?: (number|null);
}

/** Represents a resHeartBeat. */
export class resHeartBeat implements IresHeartBeat {

    /**
     * Constructs a new resHeartBeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresHeartBeat);

    /** resHeartBeat id. */
    public id: number;

    /**
     * Creates a new resHeartBeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resHeartBeat instance
     */
    public static create(properties?: IresHeartBeat): resHeartBeat;

    /**
     * Encodes the specified resHeartBeat message. Does not implicitly {@link resHeartBeat.verify|verify} messages.
     * @param message resHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resHeartBeat message, length delimited. Does not implicitly {@link resHeartBeat.verify|verify} messages.
     * @param message resHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resHeartBeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resHeartBeat;

    /**
     * Decodes a resHeartBeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resHeartBeat;

    /**
     * Verifies a resHeartBeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resHeartBeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resHeartBeat
     */
    public static fromObject(object: [ 'object' ].<string, any>): resHeartBeat;

    /**
     * Creates a plain object from a resHeartBeat message. Also converts values to other types if specified.
     * @param message resHeartBeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resHeartBeat, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resHeartBeat to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqPlayerTask. */
export interface IreqPlayerTask {
}

/** Represents a reqPlayerTask. */
export class reqPlayerTask implements IreqPlayerTask {

    /**
     * Constructs a new reqPlayerTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqPlayerTask);

    /**
     * Creates a new reqPlayerTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqPlayerTask instance
     */
    public static create(properties?: IreqPlayerTask): reqPlayerTask;

    /**
     * Encodes the specified reqPlayerTask message. Does not implicitly {@link reqPlayerTask.verify|verify} messages.
     * @param message reqPlayerTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqPlayerTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqPlayerTask message, length delimited. Does not implicitly {@link reqPlayerTask.verify|verify} messages.
     * @param message reqPlayerTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqPlayerTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqPlayerTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqPlayerTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqPlayerTask;

    /**
     * Decodes a reqPlayerTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqPlayerTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqPlayerTask;

    /**
     * Verifies a reqPlayerTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqPlayerTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqPlayerTask
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqPlayerTask;

    /**
     * Creates a plain object from a reqPlayerTask message. Also converts values to other types if specified.
     * @param message reqPlayerTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqPlayerTask, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqPlayerTask to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqWaitRefresh. */
export interface IreqWaitRefresh {

    /** reqWaitRefresh id */
    id?: (number|null);

    /** reqWaitRefresh taskid */
    taskid?: (number|null);
}

/** Represents a reqWaitRefresh. */
export class reqWaitRefresh implements IreqWaitRefresh {

    /**
     * Constructs a new reqWaitRefresh.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqWaitRefresh);

    /** reqWaitRefresh id. */
    public id: number;

    /** reqWaitRefresh taskid. */
    public taskid: number;

    /**
     * Creates a new reqWaitRefresh instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqWaitRefresh instance
     */
    public static create(properties?: IreqWaitRefresh): reqWaitRefresh;

    /**
     * Encodes the specified reqWaitRefresh message. Does not implicitly {@link reqWaitRefresh.verify|verify} messages.
     * @param message reqWaitRefresh message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqWaitRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqWaitRefresh message, length delimited. Does not implicitly {@link reqWaitRefresh.verify|verify} messages.
     * @param message reqWaitRefresh message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqWaitRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqWaitRefresh message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqWaitRefresh
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqWaitRefresh;

    /**
     * Decodes a reqWaitRefresh message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqWaitRefresh
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqWaitRefresh;

    /**
     * Verifies a reqWaitRefresh message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqWaitRefresh message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqWaitRefresh
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqWaitRefresh;

    /**
     * Creates a plain object from a reqWaitRefresh message. Also converts values to other types if specified.
     * @param message reqWaitRefresh
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqWaitRefresh, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqWaitRefresh to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a playerTask. */
export interface IplayerTask {

    /** playerTask id */
    id?: (number|null);

    /** playerTask taskId */
    taskId?: (number|null);

    /** playerTask num */
    num?: (number|null);

    /** playerTask state */
    state?: (number|null);

    /** playerTask refreshTime */
    refreshTime?: (number|null);

    /** playerTask type */
    type?: (number|null);
}

/** Represents a playerTask. */
export class playerTask implements IplayerTask {

    /**
     * Constructs a new playerTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerTask);

    /** playerTask id. */
    public id: number;

    /** playerTask taskId. */
    public taskId: number;

    /** playerTask num. */
    public num: number;

    /** playerTask state. */
    public state: number;

    /** playerTask refreshTime. */
    public refreshTime: number;

    /** playerTask type. */
    public type: number;

    /**
     * Creates a new playerTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerTask instance
     */
    public static create(properties?: IplayerTask): playerTask;

    /**
     * Encodes the specified playerTask message. Does not implicitly {@link playerTask.verify|verify} messages.
     * @param message playerTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerTask message, length delimited. Does not implicitly {@link playerTask.verify|verify} messages.
     * @param message playerTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask;

    /**
     * Decodes a playerTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask;

    /**
     * Verifies a playerTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a playerTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerTask
     */
    public static fromObject(object: [ 'object' ].<string, any>): playerTask;

    /**
     * Creates a plain object from a playerTask message. Also converts values to other types if specified.
     * @param message playerTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerTask, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this playerTask to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resPlayerTask. */
export interface IresPlayerTask {

    /** resPlayerTask tasks */
    tasks?: (IplayerTask[]|null);
}

/** Represents a resPlayerTask. */
export class resPlayerTask implements IresPlayerTask {

    /**
     * Constructs a new resPlayerTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresPlayerTask);

    /** resPlayerTask tasks. */
    public tasks: [ 'Array' ].<IplayerTask>;

    /**
     * Creates a new resPlayerTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resPlayerTask instance
     */
    public static create(properties?: IresPlayerTask): resPlayerTask;

    /**
     * Encodes the specified resPlayerTask message. Does not implicitly {@link resPlayerTask.verify|verify} messages.
     * @param message resPlayerTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresPlayerTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resPlayerTask message, length delimited. Does not implicitly {@link resPlayerTask.verify|verify} messages.
     * @param message resPlayerTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresPlayerTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resPlayerTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resPlayerTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resPlayerTask;

    /**
     * Decodes a resPlayerTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resPlayerTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resPlayerTask;

    /**
     * Verifies a resPlayerTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resPlayerTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resPlayerTask
     */
    public static fromObject(object: [ 'object' ].<string, any>): resPlayerTask;

    /**
     * Creates a plain object from a resPlayerTask message. Also converts values to other types if specified.
     * @param message resPlayerTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resPlayerTask, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resPlayerTask to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqRefreshTask. */
export interface IreqRefreshTask {

    /** reqRefreshTask id */
    id?: (number|null);

    /** reqRefreshTask taskid */
    taskid?: (number|null);

    /** reqRefreshTask isad */
    isad?: (boolean|null);
}

/** Represents a reqRefreshTask. */
export class reqRefreshTask implements IreqRefreshTask {

    /**
     * Constructs a new reqRefreshTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqRefreshTask);

    /** reqRefreshTask id. */
    public id: number;

    /** reqRefreshTask taskid. */
    public taskid: number;

    /** reqRefreshTask isad. */
    public isad: boolean;

    /**
     * Creates a new reqRefreshTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqRefreshTask instance
     */
    public static create(properties?: IreqRefreshTask): reqRefreshTask;

    /**
     * Encodes the specified reqRefreshTask message. Does not implicitly {@link reqRefreshTask.verify|verify} messages.
     * @param message reqRefreshTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqRefreshTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqRefreshTask message, length delimited. Does not implicitly {@link reqRefreshTask.verify|verify} messages.
     * @param message reqRefreshTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqRefreshTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqRefreshTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqRefreshTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqRefreshTask;

    /**
     * Decodes a reqRefreshTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqRefreshTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqRefreshTask;

    /**
     * Verifies a reqRefreshTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqRefreshTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqRefreshTask
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqRefreshTask;

    /**
     * Creates a plain object from a reqRefreshTask message. Also converts values to other types if specified.
     * @param message reqRefreshTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqRefreshTask, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqRefreshTask to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSubmitTask. */
export interface IreqSubmitTask {

    /** reqSubmitTask id */
    id?: (number|null);

    /** reqSubmitTask taskid */
    taskid?: (number|null);
}

/** Represents a reqSubmitTask. */
export class reqSubmitTask implements IreqSubmitTask {

    /**
     * Constructs a new reqSubmitTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSubmitTask);

    /** reqSubmitTask id. */
    public id: number;

    /** reqSubmitTask taskid. */
    public taskid: number;

    /**
     * Creates a new reqSubmitTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSubmitTask instance
     */
    public static create(properties?: IreqSubmitTask): reqSubmitTask;

    /**
     * Encodes the specified reqSubmitTask message. Does not implicitly {@link reqSubmitTask.verify|verify} messages.
     * @param message reqSubmitTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSubmitTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSubmitTask message, length delimited. Does not implicitly {@link reqSubmitTask.verify|verify} messages.
     * @param message reqSubmitTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSubmitTask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSubmitTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSubmitTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSubmitTask;

    /**
     * Decodes a reqSubmitTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSubmitTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSubmitTask;

    /**
     * Verifies a reqSubmitTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSubmitTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSubmitTask
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSubmitTask;

    /**
     * Creates a plain object from a reqSubmitTask message. Also converts values to other types if specified.
     * @param message reqSubmitTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSubmitTask, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSubmitTask to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTaskAward. */
export interface IreqTaskAward {
}

/** Represents a reqTaskAward. */
export class reqTaskAward implements IreqTaskAward {

    /**
     * Constructs a new reqTaskAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTaskAward);

    /**
     * Creates a new reqTaskAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTaskAward instance
     */
    public static create(properties?: IreqTaskAward): reqTaskAward;

    /**
     * Encodes the specified reqTaskAward message. Does not implicitly {@link reqTaskAward.verify|verify} messages.
     * @param message reqTaskAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTaskAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTaskAward message, length delimited. Does not implicitly {@link reqTaskAward.verify|verify} messages.
     * @param message reqTaskAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTaskAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTaskAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTaskAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTaskAward;

    /**
     * Decodes a reqTaskAward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTaskAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTaskAward;

    /**
     * Verifies a reqTaskAward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTaskAward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTaskAward
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTaskAward;

    /**
     * Creates a plain object from a reqTaskAward message. Also converts values to other types if specified.
     * @param message reqTaskAward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTaskAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTaskAward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqDaoLvInfo. */
export interface IreqDaoLvInfo {
}

/** Represents a reqDaoLvInfo. */
export class reqDaoLvInfo implements IreqDaoLvInfo {

    /**
     * Constructs a new reqDaoLvInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqDaoLvInfo);

    /**
     * Creates a new reqDaoLvInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqDaoLvInfo instance
     */
    public static create(properties?: IreqDaoLvInfo): reqDaoLvInfo;

    /**
     * Encodes the specified reqDaoLvInfo message. Does not implicitly {@link reqDaoLvInfo.verify|verify} messages.
     * @param message reqDaoLvInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqDaoLvInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqDaoLvInfo message, length delimited. Does not implicitly {@link reqDaoLvInfo.verify|verify} messages.
     * @param message reqDaoLvInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqDaoLvInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqDaoLvInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqDaoLvInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqDaoLvInfo;

    /**
     * Decodes a reqDaoLvInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqDaoLvInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqDaoLvInfo;

    /**
     * Verifies a reqDaoLvInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqDaoLvInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqDaoLvInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqDaoLvInfo;

    /**
     * Creates a plain object from a reqDaoLvInfo message. Also converts values to other types if specified.
     * @param message reqDaoLvInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqDaoLvInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqDaoLvInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resDaoLvInfo. */
export interface IresDaoLvInfo {

    /** resDaoLvInfo cpname */
    cpname?: (string|null);

    /** resDaoLvInfo cpid */
    cpid?: (number|null);

    /** resDaoLvInfo cplevel */
    cplevel?: (number|null);

    /** resDaoLvInfo cpsex */
    cpsex?: (number|null);

    /** resDaoLvInfo treelevel */
    treelevel?: (number|null);

    /** resDaoLvInfo treeexp */
    treeexp?: (number|null);

    /** resDaoLvInfo waterState */
    waterState?: (number|null);

    /** resDaoLvInfo cpWaterState */
    cpWaterState?: (number|null);

    /** resDaoLvInfo seed1end */
    seed1end?: (number|null);

    /** resDaoLvInfo seed2end */
    seed2end?: (number|null);

    /** resDaoLvInfo seed3end */
    seed3end?: (number|null);

    /** resDaoLvInfo seed4end */
    seed4end?: (number|null);

    /** resDaoLvInfo weddingid */
    weddingid?: (number|null);

    /** resDaoLvInfo borkenend */
    borkenend?: (number|null);
}

/** Represents a resDaoLvInfo. */
export class resDaoLvInfo implements IresDaoLvInfo {

    /**
     * Constructs a new resDaoLvInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresDaoLvInfo);

    /** resDaoLvInfo cpname. */
    public cpname: string;

    /** resDaoLvInfo cpid. */
    public cpid: number;

    /** resDaoLvInfo cplevel. */
    public cplevel: number;

    /** resDaoLvInfo cpsex. */
    public cpsex: number;

    /** resDaoLvInfo treelevel. */
    public treelevel: number;

    /** resDaoLvInfo treeexp. */
    public treeexp: number;

    /** resDaoLvInfo waterState. */
    public waterState: number;

    /** resDaoLvInfo cpWaterState. */
    public cpWaterState: number;

    /** resDaoLvInfo seed1end. */
    public seed1end: number;

    /** resDaoLvInfo seed2end. */
    public seed2end: number;

    /** resDaoLvInfo seed3end. */
    public seed3end: number;

    /** resDaoLvInfo seed4end. */
    public seed4end: number;

    /** resDaoLvInfo weddingid. */
    public weddingid: number;

    /** resDaoLvInfo borkenend. */
    public borkenend: number;

    /**
     * Creates a new resDaoLvInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resDaoLvInfo instance
     */
    public static create(properties?: IresDaoLvInfo): resDaoLvInfo;

    /**
     * Encodes the specified resDaoLvInfo message. Does not implicitly {@link resDaoLvInfo.verify|verify} messages.
     * @param message resDaoLvInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresDaoLvInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resDaoLvInfo message, length delimited. Does not implicitly {@link resDaoLvInfo.verify|verify} messages.
     * @param message resDaoLvInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresDaoLvInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resDaoLvInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resDaoLvInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resDaoLvInfo;

    /**
     * Decodes a resDaoLvInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resDaoLvInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resDaoLvInfo;

    /**
     * Verifies a resDaoLvInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resDaoLvInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resDaoLvInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): resDaoLvInfo;

    /**
     * Creates a plain object from a resDaoLvInfo message. Also converts values to other types if specified.
     * @param message resDaoLvInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resDaoLvInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resDaoLvInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSeed. */
export interface IreqSeed {

    /** reqSeed type */
    type?: (number|null);
}

/** Represents a reqSeed. */
export class reqSeed implements IreqSeed {

    /**
     * Constructs a new reqSeed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSeed);

    /** reqSeed type. */
    public type: number;

    /**
     * Creates a new reqSeed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSeed instance
     */
    public static create(properties?: IreqSeed): reqSeed;

    /**
     * Encodes the specified reqSeed message. Does not implicitly {@link reqSeed.verify|verify} messages.
     * @param message reqSeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSeed message, length delimited. Does not implicitly {@link reqSeed.verify|verify} messages.
     * @param message reqSeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSeed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSeed;

    /**
     * Decodes a reqSeed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSeed;

    /**
     * Verifies a reqSeed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSeed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSeed
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSeed;

    /**
     * Creates a plain object from a reqSeed message. Also converts values to other types if specified.
     * @param message reqSeed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSeed, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSeed to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqWater. */
export interface IreqWater {
}

/** Represents a reqWater. */
export class reqWater implements IreqWater {

    /**
     * Constructs a new reqWater.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqWater);

    /**
     * Creates a new reqWater instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqWater instance
     */
    public static create(properties?: IreqWater): reqWater;

    /**
     * Encodes the specified reqWater message. Does not implicitly {@link reqWater.verify|verify} messages.
     * @param message reqWater message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqWater, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqWater message, length delimited. Does not implicitly {@link reqWater.verify|verify} messages.
     * @param message reqWater message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqWater, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqWater message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqWater
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqWater;

    /**
     * Decodes a reqWater message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqWater
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqWater;

    /**
     * Verifies a reqWater message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqWater message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqWater
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqWater;

    /**
     * Creates a plain object from a reqWater message. Also converts values to other types if specified.
     * @param message reqWater
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqWater, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqWater to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqCancelMarry. */
export interface IreqCancelMarry {
}

/** Represents a reqCancelMarry. */
export class reqCancelMarry implements IreqCancelMarry {

    /**
     * Constructs a new reqCancelMarry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqCancelMarry);

    /**
     * Creates a new reqCancelMarry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqCancelMarry instance
     */
    public static create(properties?: IreqCancelMarry): reqCancelMarry;

    /**
     * Encodes the specified reqCancelMarry message. Does not implicitly {@link reqCancelMarry.verify|verify} messages.
     * @param message reqCancelMarry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqCancelMarry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqCancelMarry message, length delimited. Does not implicitly {@link reqCancelMarry.verify|verify} messages.
     * @param message reqCancelMarry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqCancelMarry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqCancelMarry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqCancelMarry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqCancelMarry;

    /**
     * Decodes a reqCancelMarry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqCancelMarry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqCancelMarry;

    /**
     * Verifies a reqCancelMarry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqCancelMarry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqCancelMarry
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqCancelMarry;

    /**
     * Creates a plain object from a reqCancelMarry message. Also converts values to other types if specified.
     * @param message reqCancelMarry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqCancelMarry, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqCancelMarry to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqTreeAward. */
export interface IreqTreeAward {
}

/** Represents a reqTreeAward. */
export class reqTreeAward implements IreqTreeAward {

    /**
     * Constructs a new reqTreeAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqTreeAward);

    /**
     * Creates a new reqTreeAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqTreeAward instance
     */
    public static create(properties?: IreqTreeAward): reqTreeAward;

    /**
     * Encodes the specified reqTreeAward message. Does not implicitly {@link reqTreeAward.verify|verify} messages.
     * @param message reqTreeAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqTreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqTreeAward message, length delimited. Does not implicitly {@link reqTreeAward.verify|verify} messages.
     * @param message reqTreeAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqTreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqTreeAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqTreeAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqTreeAward;

    /**
     * Decodes a reqTreeAward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqTreeAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqTreeAward;

    /**
     * Verifies a reqTreeAward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqTreeAward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqTreeAward
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqTreeAward;

    /**
     * Creates a plain object from a reqTreeAward message. Also converts values to other types if specified.
     * @param message reqTreeAward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqTreeAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqTreeAward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resTreeAward. */
export interface IresTreeAward {

    /** resTreeAward params */
    params?: (IPlayerParam[]|null);
}

/** Represents a resTreeAward. */
export class resTreeAward implements IresTreeAward {

    /**
     * Constructs a new resTreeAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresTreeAward);

    /** resTreeAward params. */
    public params: [ 'Array' ].<IPlayerParam>;

    /**
     * Creates a new resTreeAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resTreeAward instance
     */
    public static create(properties?: IresTreeAward): resTreeAward;

    /**
     * Encodes the specified resTreeAward message. Does not implicitly {@link resTreeAward.verify|verify} messages.
     * @param message resTreeAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresTreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resTreeAward message, length delimited. Does not implicitly {@link resTreeAward.verify|verify} messages.
     * @param message resTreeAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresTreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resTreeAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resTreeAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resTreeAward;

    /**
     * Decodes a resTreeAward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resTreeAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resTreeAward;

    /**
     * Verifies a resTreeAward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resTreeAward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resTreeAward
     */
    public static fromObject(object: [ 'object' ].<string, any>): resTreeAward;

    /**
     * Creates a plain object from a resTreeAward message. Also converts values to other types if specified.
     * @param message resTreeAward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resTreeAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resTreeAward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqGetTreeAward. */
export interface IreqGetTreeAward {

    /** reqGetTreeAward level */
    level?: (number|null);
}

/** Represents a reqGetTreeAward. */
export class reqGetTreeAward implements IreqGetTreeAward {

    /**
     * Constructs a new reqGetTreeAward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqGetTreeAward);

    /** reqGetTreeAward level. */
    public level: number;

    /**
     * Creates a new reqGetTreeAward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqGetTreeAward instance
     */
    public static create(properties?: IreqGetTreeAward): reqGetTreeAward;

    /**
     * Encodes the specified reqGetTreeAward message. Does not implicitly {@link reqGetTreeAward.verify|verify} messages.
     * @param message reqGetTreeAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqGetTreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqGetTreeAward message, length delimited. Does not implicitly {@link reqGetTreeAward.verify|verify} messages.
     * @param message reqGetTreeAward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqGetTreeAward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqGetTreeAward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqGetTreeAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqGetTreeAward;

    /**
     * Decodes a reqGetTreeAward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqGetTreeAward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqGetTreeAward;

    /**
     * Verifies a reqGetTreeAward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqGetTreeAward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqGetTreeAward
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqGetTreeAward;

    /**
     * Creates a plain object from a reqGetTreeAward message. Also converts values to other types if specified.
     * @param message reqGetTreeAward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqGetTreeAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqGetTreeAward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqOpenMarry. */
export interface IreqOpenMarry {

    /** reqOpenMarry type */
    type?: (number|null);
}

/** Represents a reqOpenMarry. */
export class reqOpenMarry implements IreqOpenMarry {

    /**
     * Constructs a new reqOpenMarry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqOpenMarry);

    /** reqOpenMarry type. */
    public type: number;

    /**
     * Creates a new reqOpenMarry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqOpenMarry instance
     */
    public static create(properties?: IreqOpenMarry): reqOpenMarry;

    /**
     * Encodes the specified reqOpenMarry message. Does not implicitly {@link reqOpenMarry.verify|verify} messages.
     * @param message reqOpenMarry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqOpenMarry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqOpenMarry message, length delimited. Does not implicitly {@link reqOpenMarry.verify|verify} messages.
     * @param message reqOpenMarry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqOpenMarry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqOpenMarry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqOpenMarry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqOpenMarry;

    /**
     * Decodes a reqOpenMarry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqOpenMarry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqOpenMarry;

    /**
     * Verifies a reqOpenMarry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqOpenMarry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqOpenMarry
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqOpenMarry;

    /**
     * Creates a plain object from a reqOpenMarry message. Also converts values to other types if specified.
     * @param message reqOpenMarry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqOpenMarry, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqOpenMarry to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resOpenMarry. */
export interface IresOpenMarry {

    /** resOpenMarry type */
    type?: (number|null);
}

/** Represents a resOpenMarry. */
export class resOpenMarry implements IresOpenMarry {

    /**
     * Constructs a new resOpenMarry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresOpenMarry);

    /** resOpenMarry type. */
    public type: number;

    /**
     * Creates a new resOpenMarry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resOpenMarry instance
     */
    public static create(properties?: IresOpenMarry): resOpenMarry;

    /**
     * Encodes the specified resOpenMarry message. Does not implicitly {@link resOpenMarry.verify|verify} messages.
     * @param message resOpenMarry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresOpenMarry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resOpenMarry message, length delimited. Does not implicitly {@link resOpenMarry.verify|verify} messages.
     * @param message resOpenMarry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresOpenMarry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resOpenMarry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resOpenMarry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resOpenMarry;

    /**
     * Decodes a resOpenMarry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resOpenMarry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resOpenMarry;

    /**
     * Verifies a resOpenMarry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resOpenMarry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resOpenMarry
     */
    public static fromObject(object: [ 'object' ].<string, any>): resOpenMarry;

    /**
     * Creates a plain object from a resOpenMarry message. Also converts values to other types if specified.
     * @param message resOpenMarry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resOpenMarry, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resOpenMarry to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqWeddingInfo. */
export interface IreqWeddingInfo {
}

/** Represents a reqWeddingInfo. */
export class reqWeddingInfo implements IreqWeddingInfo {

    /**
     * Constructs a new reqWeddingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqWeddingInfo);

    /**
     * Creates a new reqWeddingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqWeddingInfo instance
     */
    public static create(properties?: IreqWeddingInfo): reqWeddingInfo;

    /**
     * Encodes the specified reqWeddingInfo message. Does not implicitly {@link reqWeddingInfo.verify|verify} messages.
     * @param message reqWeddingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqWeddingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqWeddingInfo message, length delimited. Does not implicitly {@link reqWeddingInfo.verify|verify} messages.
     * @param message reqWeddingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqWeddingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqWeddingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqWeddingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqWeddingInfo;

    /**
     * Decodes a reqWeddingInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqWeddingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqWeddingInfo;

    /**
     * Verifies a reqWeddingInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqWeddingInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqWeddingInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqWeddingInfo;

    /**
     * Creates a plain object from a reqWeddingInfo message. Also converts values to other types if specified.
     * @param message reqWeddingInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqWeddingInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqWeddingInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resWeddingInfo. */
export interface IresWeddingInfo {

    /** resWeddingInfo weddingAward */
    weddingAward?: (IWeddingAwardMsg|null);

    /** resWeddingInfo currentWedding */
    currentWedding?: (IWeddingInfo|null);

    /** resWeddingInfo foods */
    foods?: (IWeddingFoodInfo[]|null);
}

/** Represents a resWeddingInfo. */
export class resWeddingInfo implements IresWeddingInfo {

    /**
     * Constructs a new resWeddingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresWeddingInfo);

    /** resWeddingInfo weddingAward. */
    public weddingAward?: (IWeddingAwardMsg|null);

    /** resWeddingInfo currentWedding. */
    public currentWedding?: (IWeddingInfo|null);

    /** resWeddingInfo foods. */
    public foods: [ 'Array' ].<IWeddingFoodInfo>;

    /**
     * Creates a new resWeddingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resWeddingInfo instance
     */
    public static create(properties?: IresWeddingInfo): resWeddingInfo;

    /**
     * Encodes the specified resWeddingInfo message. Does not implicitly {@link resWeddingInfo.verify|verify} messages.
     * @param message resWeddingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresWeddingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resWeddingInfo message, length delimited. Does not implicitly {@link resWeddingInfo.verify|verify} messages.
     * @param message resWeddingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresWeddingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resWeddingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resWeddingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resWeddingInfo;

    /**
     * Decodes a resWeddingInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resWeddingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resWeddingInfo;

    /**
     * Verifies a resWeddingInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resWeddingInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resWeddingInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): resWeddingInfo;

    /**
     * Creates a plain object from a resWeddingInfo message. Also converts values to other types if specified.
     * @param message resWeddingInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resWeddingInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resWeddingInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqSendGift. */
export interface IreqSendGift {

    /** reqSendGift type */
    type?: (number|null);
}

/** Represents a reqSendGift. */
export class reqSendGift implements IreqSendGift {

    /**
     * Constructs a new reqSendGift.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqSendGift);

    /** reqSendGift type. */
    public type: number;

    /**
     * Creates a new reqSendGift instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqSendGift instance
     */
    public static create(properties?: IreqSendGift): reqSendGift;

    /**
     * Encodes the specified reqSendGift message. Does not implicitly {@link reqSendGift.verify|verify} messages.
     * @param message reqSendGift message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqSendGift, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqSendGift message, length delimited. Does not implicitly {@link reqSendGift.verify|verify} messages.
     * @param message reqSendGift message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqSendGift, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqSendGift message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqSendGift
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqSendGift;

    /**
     * Decodes a reqSendGift message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqSendGift
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqSendGift;

    /**
     * Verifies a reqSendGift message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqSendGift message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqSendGift
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqSendGift;

    /**
     * Creates a plain object from a reqSendGift message. Also converts values to other types if specified.
     * @param message reqSendGift
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqSendGift, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqSendGift to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resSendGift. */
export interface IresSendGift {

    /** resSendGift result */
    result?: (number|null);

    /** resSendGift playername */
    playername?: (string|null);
}

/** Represents a resSendGift. */
export class resSendGift implements IresSendGift {

    /**
     * Constructs a new resSendGift.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresSendGift);

    /** resSendGift result. */
    public result: number;

    /** resSendGift playername. */
    public playername: string;

    /**
     * Creates a new resSendGift instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resSendGift instance
     */
    public static create(properties?: IresSendGift): resSendGift;

    /**
     * Encodes the specified resSendGift message. Does not implicitly {@link resSendGift.verify|verify} messages.
     * @param message resSendGift message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresSendGift, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resSendGift message, length delimited. Does not implicitly {@link resSendGift.verify|verify} messages.
     * @param message resSendGift message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresSendGift, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resSendGift message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resSendGift
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resSendGift;

    /**
     * Decodes a resSendGift message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resSendGift
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resSendGift;

    /**
     * Verifies a resSendGift message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resSendGift message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resSendGift
     */
    public static fromObject(object: [ 'object' ].<string, any>): resSendGift;

    /**
     * Creates a plain object from a resSendGift message. Also converts values to other types if specified.
     * @param message resSendGift
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resSendGift, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resSendGift to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqMarryList. */
export interface IreqMarryList {
}

/** Represents a reqMarryList. */
export class reqMarryList implements IreqMarryList {

    /**
     * Constructs a new reqMarryList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqMarryList);

    /**
     * Creates a new reqMarryList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqMarryList instance
     */
    public static create(properties?: IreqMarryList): reqMarryList;

    /**
     * Encodes the specified reqMarryList message. Does not implicitly {@link reqMarryList.verify|verify} messages.
     * @param message reqMarryList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqMarryList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqMarryList message, length delimited. Does not implicitly {@link reqMarryList.verify|verify} messages.
     * @param message reqMarryList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqMarryList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqMarryList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqMarryList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqMarryList;

    /**
     * Decodes a reqMarryList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqMarryList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqMarryList;

    /**
     * Verifies a reqMarryList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqMarryList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqMarryList
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqMarryList;

    /**
     * Creates a plain object from a reqMarryList message. Also converts values to other types if specified.
     * @param message reqMarryList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqMarryList, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqMarryList to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resMaryyList. */
export interface IresMaryyList {

    /** resMaryyList list */
    list?: (IWeddingInfo[]|null);
}

/** Represents a resMaryyList. */
export class resMaryyList implements IresMaryyList {

    /**
     * Constructs a new resMaryyList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresMaryyList);

    /** resMaryyList list. */
    public list: [ 'Array' ].<IWeddingInfo>;

    /**
     * Creates a new resMaryyList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resMaryyList instance
     */
    public static create(properties?: IresMaryyList): resMaryyList;

    /**
     * Encodes the specified resMaryyList message. Does not implicitly {@link resMaryyList.verify|verify} messages.
     * @param message resMaryyList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresMaryyList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resMaryyList message, length delimited. Does not implicitly {@link resMaryyList.verify|verify} messages.
     * @param message resMaryyList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresMaryyList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resMaryyList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resMaryyList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resMaryyList;

    /**
     * Decodes a resMaryyList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resMaryyList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resMaryyList;

    /**
     * Verifies a resMaryyList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resMaryyList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resMaryyList
     */
    public static fromObject(object: [ 'object' ].<string, any>): resMaryyList;

    /**
     * Creates a plain object from a resMaryyList message. Also converts values to other types if specified.
     * @param message resMaryyList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resMaryyList, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resMaryyList to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqWeddingGuests. */
export interface IreqWeddingGuests {
}

/** Represents a reqWeddingGuests. */
export class reqWeddingGuests implements IreqWeddingGuests {

    /**
     * Constructs a new reqWeddingGuests.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqWeddingGuests);

    /**
     * Creates a new reqWeddingGuests instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqWeddingGuests instance
     */
    public static create(properties?: IreqWeddingGuests): reqWeddingGuests;

    /**
     * Encodes the specified reqWeddingGuests message. Does not implicitly {@link reqWeddingGuests.verify|verify} messages.
     * @param message reqWeddingGuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqWeddingGuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqWeddingGuests message, length delimited. Does not implicitly {@link reqWeddingGuests.verify|verify} messages.
     * @param message reqWeddingGuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqWeddingGuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqWeddingGuests message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqWeddingGuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqWeddingGuests;

    /**
     * Decodes a reqWeddingGuests message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqWeddingGuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqWeddingGuests;

    /**
     * Verifies a reqWeddingGuests message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqWeddingGuests message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqWeddingGuests
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqWeddingGuests;

    /**
     * Creates a plain object from a reqWeddingGuests message. Also converts values to other types if specified.
     * @param message reqWeddingGuests
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqWeddingGuests, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqWeddingGuests to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resWeddingGuests. */
export interface IresWeddingGuests {

    /** resWeddingGuests guests */
    guests?: (IPlayerRank[]|null);
}

/** Represents a resWeddingGuests. */
export class resWeddingGuests implements IresWeddingGuests {

    /**
     * Constructs a new resWeddingGuests.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresWeddingGuests);

    /** resWeddingGuests guests. */
    public guests: [ 'Array' ].<IPlayerRank>;

    /**
     * Creates a new resWeddingGuests instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resWeddingGuests instance
     */
    public static create(properties?: IresWeddingGuests): resWeddingGuests;

    /**
     * Encodes the specified resWeddingGuests message. Does not implicitly {@link resWeddingGuests.verify|verify} messages.
     * @param message resWeddingGuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresWeddingGuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resWeddingGuests message, length delimited. Does not implicitly {@link resWeddingGuests.verify|verify} messages.
     * @param message resWeddingGuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresWeddingGuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resWeddingGuests message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resWeddingGuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resWeddingGuests;

    /**
     * Decodes a resWeddingGuests message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resWeddingGuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resWeddingGuests;

    /**
     * Verifies a resWeddingGuests message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resWeddingGuests message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resWeddingGuests
     */
    public static fromObject(object: [ 'object' ].<string, any>): resWeddingGuests;

    /**
     * Creates a plain object from a resWeddingGuests message. Also converts values to other types if specified.
     * @param message resWeddingGuests
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resWeddingGuests, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resWeddingGuests to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqHongBao. */
export interface IreqHongBao {

    /** reqHongBao index */
    index?: (number|null);
}

/** Represents a reqHongBao. */
export class reqHongBao implements IreqHongBao {

    /**
     * Constructs a new reqHongBao.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqHongBao);

    /** reqHongBao index. */
    public index: number;

    /**
     * Creates a new reqHongBao instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqHongBao instance
     */
    public static create(properties?: IreqHongBao): reqHongBao;

    /**
     * Encodes the specified reqHongBao message. Does not implicitly {@link reqHongBao.verify|verify} messages.
     * @param message reqHongBao message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqHongBao, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqHongBao message, length delimited. Does not implicitly {@link reqHongBao.verify|verify} messages.
     * @param message reqHongBao message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqHongBao, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqHongBao message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqHongBao
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqHongBao;

    /**
     * Decodes a reqHongBao message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqHongBao
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqHongBao;

    /**
     * Verifies a reqHongBao message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqHongBao message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqHongBao
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqHongBao;

    /**
     * Creates a plain object from a reqHongBao message. Also converts values to other types if specified.
     * @param message reqHongBao
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqHongBao, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqHongBao to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqJoinWedding. */
export interface IreqJoinWedding {

    /** reqJoinWedding weddingid */
    weddingid?: (number|null);
}

/** Represents a reqJoinWedding. */
export class reqJoinWedding implements IreqJoinWedding {

    /**
     * Constructs a new reqJoinWedding.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqJoinWedding);

    /** reqJoinWedding weddingid. */
    public weddingid: number;

    /**
     * Creates a new reqJoinWedding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqJoinWedding instance
     */
    public static create(properties?: IreqJoinWedding): reqJoinWedding;

    /**
     * Encodes the specified reqJoinWedding message. Does not implicitly {@link reqJoinWedding.verify|verify} messages.
     * @param message reqJoinWedding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqJoinWedding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqJoinWedding message, length delimited. Does not implicitly {@link reqJoinWedding.verify|verify} messages.
     * @param message reqJoinWedding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqJoinWedding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqJoinWedding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqJoinWedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqJoinWedding;

    /**
     * Decodes a reqJoinWedding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqJoinWedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqJoinWedding;

    /**
     * Verifies a reqJoinWedding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqJoinWedding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqJoinWedding
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqJoinWedding;

    /**
     * Creates a plain object from a reqJoinWedding message. Also converts values to other types if specified.
     * @param message reqJoinWedding
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqJoinWedding, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqJoinWedding to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resHongBao. */
export interface IresHongBao {

    /** resHongBao result */
    result?: (number|null);

    /** resHongBao hongbao1 */
    hongbao1?: (number|null);

    /** resHongBao hongbao2 */
    hongbao2?: (number|null);

    /** resHongBao hongbao3 */
    hongbao3?: (number|null);

    /** resHongBao hongbao4 */
    hongbao4?: (number|null);
}

/** Represents a resHongBao. */
export class resHongBao implements IresHongBao {

    /**
     * Constructs a new resHongBao.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresHongBao);

    /** resHongBao result. */
    public result: number;

    /** resHongBao hongbao1. */
    public hongbao1: number;

    /** resHongBao hongbao2. */
    public hongbao2: number;

    /** resHongBao hongbao3. */
    public hongbao3: number;

    /** resHongBao hongbao4. */
    public hongbao4: number;

    /**
     * Creates a new resHongBao instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resHongBao instance
     */
    public static create(properties?: IresHongBao): resHongBao;

    /**
     * Encodes the specified resHongBao message. Does not implicitly {@link resHongBao.verify|verify} messages.
     * @param message resHongBao message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresHongBao, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resHongBao message, length delimited. Does not implicitly {@link resHongBao.verify|verify} messages.
     * @param message resHongBao message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresHongBao, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resHongBao message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resHongBao
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resHongBao;

    /**
     * Decodes a resHongBao message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resHongBao
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resHongBao;

    /**
     * Verifies a resHongBao message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resHongBao message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resHongBao
     */
    public static fromObject(object: [ 'object' ].<string, any>): resHongBao;

    /**
     * Creates a plain object from a resHongBao message. Also converts values to other types if specified.
     * @param message resHongBao
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resHongBao, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resHongBao to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqWeddingRanks. */
export interface IreqWeddingRanks {
}

/** Represents a reqWeddingRanks. */
export class reqWeddingRanks implements IreqWeddingRanks {

    /**
     * Constructs a new reqWeddingRanks.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqWeddingRanks);

    /**
     * Creates a new reqWeddingRanks instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqWeddingRanks instance
     */
    public static create(properties?: IreqWeddingRanks): reqWeddingRanks;

    /**
     * Encodes the specified reqWeddingRanks message. Does not implicitly {@link reqWeddingRanks.verify|verify} messages.
     * @param message reqWeddingRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqWeddingRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqWeddingRanks message, length delimited. Does not implicitly {@link reqWeddingRanks.verify|verify} messages.
     * @param message reqWeddingRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqWeddingRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqWeddingRanks message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqWeddingRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqWeddingRanks;

    /**
     * Decodes a reqWeddingRanks message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqWeddingRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqWeddingRanks;

    /**
     * Verifies a reqWeddingRanks message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqWeddingRanks message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqWeddingRanks
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqWeddingRanks;

    /**
     * Creates a plain object from a reqWeddingRanks message. Also converts values to other types if specified.
     * @param message reqWeddingRanks
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqWeddingRanks, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqWeddingRanks to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a resWeddingRanks. */
export interface IresWeddingRanks {

    /** resWeddingRanks self */
    self?: (IWeddingRank|null);

    /** resWeddingRanks list */
    list?: (IWeddingRank[]|null);
}

/** Represents a resWeddingRanks. */
export class resWeddingRanks implements IresWeddingRanks {

    /**
     * Constructs a new resWeddingRanks.
     * @param [properties] Properties to set
     */
    constructor(properties?: IresWeddingRanks);

    /** resWeddingRanks self. */
    public self?: (IWeddingRank|null);

    /** resWeddingRanks list. */
    public list: [ 'Array' ].<IWeddingRank>;

    /**
     * Creates a new resWeddingRanks instance using the specified properties.
     * @param [properties] Properties to set
     * @returns resWeddingRanks instance
     */
    public static create(properties?: IresWeddingRanks): resWeddingRanks;

    /**
     * Encodes the specified resWeddingRanks message. Does not implicitly {@link resWeddingRanks.verify|verify} messages.
     * @param message resWeddingRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IresWeddingRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified resWeddingRanks message, length delimited. Does not implicitly {@link resWeddingRanks.verify|verify} messages.
     * @param message resWeddingRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IresWeddingRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a resWeddingRanks message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns resWeddingRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resWeddingRanks;

    /**
     * Decodes a resWeddingRanks message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns resWeddingRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resWeddingRanks;

    /**
     * Verifies a resWeddingRanks message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a resWeddingRanks message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns resWeddingRanks
     */
    public static fromObject(object: [ 'object' ].<string, any>): resWeddingRanks;

    /**
     * Creates a plain object from a resWeddingRanks message. Also converts values to other types if specified.
     * @param message resWeddingRanks
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: resWeddingRanks, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this resWeddingRanks to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a reqEatFood. */
export interface IreqEatFood {

    /** reqEatFood time */
    time?: (number|null);
}

/** Represents a reqEatFood. */
export class reqEatFood implements IreqEatFood {

    /**
     * Constructs a new reqEatFood.
     * @param [properties] Properties to set
     */
    constructor(properties?: IreqEatFood);

    /** reqEatFood time. */
    public time: number;

    /**
     * Creates a new reqEatFood instance using the specified properties.
     * @param [properties] Properties to set
     * @returns reqEatFood instance
     */
    public static create(properties?: IreqEatFood): reqEatFood;

    /**
     * Encodes the specified reqEatFood message. Does not implicitly {@link reqEatFood.verify|verify} messages.
     * @param message reqEatFood message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IreqEatFood, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified reqEatFood message, length delimited. Does not implicitly {@link reqEatFood.verify|verify} messages.
     * @param message reqEatFood message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IreqEatFood, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a reqEatFood message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns reqEatFood
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reqEatFood;

    /**
     * Decodes a reqEatFood message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns reqEatFood
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reqEatFood;

    /**
     * Verifies a reqEatFood message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a reqEatFood message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns reqEatFood
     */
    public static fromObject(object: [ 'object' ].<string, any>): reqEatFood;

    /**
     * Creates a plain object from a reqEatFood message. Also converts values to other types if specified.
     * @param message reqEatFood
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: reqEatFood, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this reqEatFood to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}
