# Spatial Protocol

The Wired's spatial protocol is concerned with running interactive user-created
content within a dynamic 3D multiplayer environment.

## Scenes (glXF)

The Wired uses the [glXF](https://github.com/KhronosGroup/glXF) file format for
describing scenes. glXF is a variant of [glTF](https://github.com/KhronosGroup/glTF),
focused on the composition of multiple glTF (or other glXF) assets. glTF is a
well supported format for 3D models, and its extensible nature makes it a great
fit for The Wired.

## Scripts (WASM)

The Wired uses [WebAssembly](https://webassembly.org/) (WASM) as a cross-platform
compilation target and sandboxed execution environment for user scripting.
Scripts use the [component model](https://github.com/WebAssembly/component-model)
to interact with a set of [WIT](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md)
interfaces defined by The Wired. Host environments can then implement these
interfaces, allowing scripts to interact with the outside world in a controlled
manner.

## Worlds

A world is a hosted multiplayer environment running some glXF scene.

### Host

Each world must be hosted by a central server. This server acts as a relay for
communication between players within the world.

Worlds are created at a host's [DWN](../social/#decentralized-web-nodes-dwns),
following the [world schema](../social/dwn/schemas/world.json). This contains
metadata about the world such as a name and description, as well as the glXF
scene and any used assets.

Additionally the host DWN acts as a location for world discovery, where you can,
for example, query for active worlds to join.

## Networking

Networking within an world follows a [Cap'n Proto](https://capnproto.org/)
schema over [WebTransport](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport).
