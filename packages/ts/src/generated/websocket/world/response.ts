// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "websocket/world/response.proto" (package "com.wiredprotocol.websocket.world.response", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.wiredprotocol.websocket.world.response.JoinSuccess
 */
export interface JoinSuccess {
    /**
     * @generated from protobuf field: string world = 1;
     */
    world: string;
    /**
     * @generated from protobuf field: uint32 player_id = 2;
     */
    playerId: number;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.world.response.ChatMessage
 */
export interface ChatMessage {
    /**
     * @generated from protobuf field: uint32 player_id = 1;
     */
    playerId: number;
    /**
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.world.response.PlayerJoined
 */
export interface PlayerJoined {
    /**
     * @generated from protobuf field: uint32 player_id = 1;
     */
    playerId: number;
    /**
     * @generated from protobuf field: map<string, string> data = 2;
     */
    data: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.world.response.PlayerLeft
 */
export interface PlayerLeft {
    /**
     * @generated from protobuf field: uint32 player_id = 1;
     */
    playerId: number;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.world.response.PlayerData
 */
export interface PlayerData {
    /**
     * @generated from protobuf field: uint32 player_id = 1;
     */
    playerId: number;
    /**
     * @generated from protobuf field: string key = 2;
     */
    key: string;
    /**
     * @generated from protobuf field: string value = 3;
     */
    value: string;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.world.response.Event
 */
export interface Event {
    /**
     * @generated from protobuf field: uint32 player_id = 1;
     */
    playerId: number;
    /**
     * @generated from protobuf field: bytes data = 2;
     */
    data: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class JoinSuccess$Type extends MessageType<JoinSuccess> {
    constructor() {
        super("com.wiredprotocol.websocket.world.response.JoinSuccess", [
            { no: 1, name: "world", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "player_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<JoinSuccess>): JoinSuccess {
        const message = { world: "", playerId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JoinSuccess>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JoinSuccess): JoinSuccess {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string world */ 1:
                    message.world = reader.string();
                    break;
                case /* uint32 player_id */ 2:
                    message.playerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JoinSuccess, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string world = 1; */
        if (message.world !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.world);
        /* uint32 player_id = 2; */
        if (message.playerId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.playerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.world.response.JoinSuccess
 */
export const JoinSuccess = new JoinSuccess$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatMessage$Type extends MessageType<ChatMessage> {
    constructor() {
        super("com.wiredprotocol.websocket.world.response.ChatMessage", [
            { no: 1, name: "player_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ChatMessage>): ChatMessage {
        const message = { playerId: 0, message: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChatMessage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChatMessage): ChatMessage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 player_id */ 1:
                    message.playerId = reader.uint32();
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ChatMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_id = 1; */
        if (message.playerId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playerId);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.world.response.ChatMessage
 */
export const ChatMessage = new ChatMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerJoined$Type extends MessageType<PlayerJoined> {
    constructor() {
        super("com.wiredprotocol.websocket.world.response.PlayerJoined", [
            { no: 1, name: "player_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "data", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value?: PartialMessage<PlayerJoined>): PlayerJoined {
        const message = { playerId: 0, data: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerJoined>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerJoined): PlayerJoined {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 player_id */ 1:
                    message.playerId = reader.uint32();
                    break;
                case /* map<string, string> data */ 2:
                    this.binaryReadMap2(message.data, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap2(map: PlayerJoined["data"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PlayerJoined["data"] | undefined, val: PlayerJoined["data"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.wiredprotocol.websocket.world.response.PlayerJoined.data");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: PlayerJoined, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_id = 1; */
        if (message.playerId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playerId);
        /* map<string, string> data = 2; */
        for (let k of Object.keys(message.data))
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.data[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.world.response.PlayerJoined
 */
export const PlayerJoined = new PlayerJoined$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLeft$Type extends MessageType<PlayerLeft> {
    constructor() {
        super("com.wiredprotocol.websocket.world.response.PlayerLeft", [
            { no: 1, name: "player_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerLeft>): PlayerLeft {
        const message = { playerId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerLeft>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerLeft): PlayerLeft {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 player_id */ 1:
                    message.playerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PlayerLeft, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_id = 1; */
        if (message.playerId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.world.response.PlayerLeft
 */
export const PlayerLeft = new PlayerLeft$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerData$Type extends MessageType<PlayerData> {
    constructor() {
        super("com.wiredprotocol.websocket.world.response.PlayerData", [
            { no: 1, name: "player_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerData>): PlayerData {
        const message = { playerId: 0, key: "", value: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerData): PlayerData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 player_id */ 1:
                    message.playerId = reader.uint32();
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* string value */ 3:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PlayerData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_id = 1; */
        if (message.playerId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playerId);
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        /* string value = 3; */
        if (message.value !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.world.response.PlayerData
 */
export const PlayerData = new PlayerData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Event$Type extends MessageType<Event> {
    constructor() {
        super("com.wiredprotocol.websocket.world.response.Event", [
            { no: 1, name: "player_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<Event>): Event {
        const message = { playerId: 0, data: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Event>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Event): Event {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 player_id */ 1:
                    message.playerId = reader.uint32();
                    break;
                case /* bytes data */ 2:
                    message.data = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Event, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_id = 1; */
        if (message.playerId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playerId);
        /* bytes data = 2; */
        if (message.data.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.world.response.Event
 */
export const Event = new Event$Type();
