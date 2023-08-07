// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "websocket/webrtc/request.proto" (package "com.wiredprotocol.websocket.webrtc.request", syntax proto3)
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
import { SctpStreamParameters } from "./signaling";
import { RtpParameters } from "./signaling";
import { RtpCapabilities } from "./signaling";
import { DtlsParameters } from "./signaling";
import { TransportType } from "./signaling";
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.PauseAudio
 */
export interface PauseAudio {
    /**
     * @generated from protobuf field: bool paused = 1;
     */
    paused: boolean;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.ConnectTransport
 */
export interface ConnectTransport {
    /**
     * @generated from protobuf field: com.wiredprotocol.websocket.webrtc.signaling.TransportType type = 1;
     */
    type: TransportType;
    /**
     * @generated from protobuf field: com.wiredprotocol.websocket.webrtc.signaling.DtlsParameters dtlsParameters = 2;
     */
    dtlsParameters?: DtlsParameters;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.CreateTransport
 */
export interface CreateTransport {
    /**
     * @generated from protobuf field: com.wiredprotocol.websocket.webrtc.signaling.TransportType type = 1;
     */
    type: TransportType;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.GetRouterRtpCapabilities
 */
export interface GetRouterRtpCapabilities {
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.SetRtpCapabilities
 */
export interface SetRtpCapabilities {
    /**
     * @generated from protobuf field: com.wiredprotocol.websocket.webrtc.signaling.RtpCapabilities rtpCapabilities = 1;
     */
    rtpCapabilities?: RtpCapabilities;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.Produce
 */
export interface Produce {
    /**
     * @generated from protobuf field: com.wiredprotocol.websocket.webrtc.signaling.RtpParameters rtpParameters = 1;
     */
    rtpParameters?: RtpParameters;
}
/**
 * @generated from protobuf message com.wiredprotocol.websocket.webrtc.request.ProduceData
 */
export interface ProduceData {
    /**
     * @generated from protobuf field: com.wiredprotocol.websocket.webrtc.signaling.SctpStreamParameters sctpStreamParameters = 1;
     */
    sctpStreamParameters?: SctpStreamParameters;
}
// @generated message type with reflection information, may provide speed optimized methods
class PauseAudio$Type extends MessageType<PauseAudio> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.PauseAudio", [
            { no: 1, name: "paused", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<PauseAudio>): PauseAudio {
        const message = { paused: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PauseAudio>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PauseAudio): PauseAudio {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool paused */ 1:
                    message.paused = reader.bool();
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
    internalBinaryWrite(message: PauseAudio, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool paused = 1; */
        if (message.paused !== false)
            writer.tag(1, WireType.Varint).bool(message.paused);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.PauseAudio
 */
export const PauseAudio = new PauseAudio$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConnectTransport$Type extends MessageType<ConnectTransport> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.ConnectTransport", [
            { no: 1, name: "type", kind: "enum", T: () => ["com.wiredprotocol.websocket.webrtc.signaling.TransportType", TransportType] },
            { no: 2, name: "dtlsParameters", kind: "message", T: () => DtlsParameters }
        ]);
    }
    create(value?: PartialMessage<ConnectTransport>): ConnectTransport {
        const message = { type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConnectTransport>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConnectTransport): ConnectTransport {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.wiredprotocol.websocket.webrtc.signaling.TransportType type */ 1:
                    message.type = reader.int32();
                    break;
                case /* com.wiredprotocol.websocket.webrtc.signaling.DtlsParameters dtlsParameters */ 2:
                    message.dtlsParameters = DtlsParameters.internalBinaryRead(reader, reader.uint32(), options, message.dtlsParameters);
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
    internalBinaryWrite(message: ConnectTransport, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* com.wiredprotocol.websocket.webrtc.signaling.TransportType type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* com.wiredprotocol.websocket.webrtc.signaling.DtlsParameters dtlsParameters = 2; */
        if (message.dtlsParameters)
            DtlsParameters.internalBinaryWrite(message.dtlsParameters, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.ConnectTransport
 */
export const ConnectTransport = new ConnectTransport$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateTransport$Type extends MessageType<CreateTransport> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.CreateTransport", [
            { no: 1, name: "type", kind: "enum", T: () => ["com.wiredprotocol.websocket.webrtc.signaling.TransportType", TransportType] }
        ]);
    }
    create(value?: PartialMessage<CreateTransport>): CreateTransport {
        const message = { type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateTransport>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateTransport): CreateTransport {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.wiredprotocol.websocket.webrtc.signaling.TransportType type */ 1:
                    message.type = reader.int32();
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
    internalBinaryWrite(message: CreateTransport, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* com.wiredprotocol.websocket.webrtc.signaling.TransportType type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.CreateTransport
 */
export const CreateTransport = new CreateTransport$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRouterRtpCapabilities$Type extends MessageType<GetRouterRtpCapabilities> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.GetRouterRtpCapabilities", []);
    }
    create(value?: PartialMessage<GetRouterRtpCapabilities>): GetRouterRtpCapabilities {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetRouterRtpCapabilities>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetRouterRtpCapabilities): GetRouterRtpCapabilities {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetRouterRtpCapabilities, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.GetRouterRtpCapabilities
 */
export const GetRouterRtpCapabilities = new GetRouterRtpCapabilities$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetRtpCapabilities$Type extends MessageType<SetRtpCapabilities> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.SetRtpCapabilities", [
            { no: 1, name: "rtpCapabilities", kind: "message", T: () => RtpCapabilities }
        ]);
    }
    create(value?: PartialMessage<SetRtpCapabilities>): SetRtpCapabilities {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetRtpCapabilities>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetRtpCapabilities): SetRtpCapabilities {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.wiredprotocol.websocket.webrtc.signaling.RtpCapabilities rtpCapabilities */ 1:
                    message.rtpCapabilities = RtpCapabilities.internalBinaryRead(reader, reader.uint32(), options, message.rtpCapabilities);
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
    internalBinaryWrite(message: SetRtpCapabilities, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* com.wiredprotocol.websocket.webrtc.signaling.RtpCapabilities rtpCapabilities = 1; */
        if (message.rtpCapabilities)
            RtpCapabilities.internalBinaryWrite(message.rtpCapabilities, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.SetRtpCapabilities
 */
export const SetRtpCapabilities = new SetRtpCapabilities$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Produce$Type extends MessageType<Produce> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.Produce", [
            { no: 1, name: "rtpParameters", kind: "message", T: () => RtpParameters }
        ]);
    }
    create(value?: PartialMessage<Produce>): Produce {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Produce>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Produce): Produce {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.wiredprotocol.websocket.webrtc.signaling.RtpParameters rtpParameters */ 1:
                    message.rtpParameters = RtpParameters.internalBinaryRead(reader, reader.uint32(), options, message.rtpParameters);
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
    internalBinaryWrite(message: Produce, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* com.wiredprotocol.websocket.webrtc.signaling.RtpParameters rtpParameters = 1; */
        if (message.rtpParameters)
            RtpParameters.internalBinaryWrite(message.rtpParameters, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.Produce
 */
export const Produce = new Produce$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProduceData$Type extends MessageType<ProduceData> {
    constructor() {
        super("com.wiredprotocol.websocket.webrtc.request.ProduceData", [
            { no: 1, name: "sctpStreamParameters", kind: "message", T: () => SctpStreamParameters }
        ]);
    }
    create(value?: PartialMessage<ProduceData>): ProduceData {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProduceData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProduceData): ProduceData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.wiredprotocol.websocket.webrtc.signaling.SctpStreamParameters sctpStreamParameters */ 1:
                    message.sctpStreamParameters = SctpStreamParameters.internalBinaryRead(reader, reader.uint32(), options, message.sctpStreamParameters);
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
    internalBinaryWrite(message: ProduceData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* com.wiredprotocol.websocket.webrtc.signaling.SctpStreamParameters sctpStreamParameters = 1; */
        if (message.sctpStreamParameters)
            SctpStreamParameters.internalBinaryWrite(message.sctpStreamParameters, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.wiredprotocol.websocket.webrtc.request.ProduceData
 */
export const ProduceData = new ProduceData$Type();
