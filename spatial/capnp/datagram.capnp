@0x875d2f2c381d4863;

struct Vec3 {
  x @0 :Float32;
  y @1 :Float32;
  z @2 :Float32;
}

struct Vec4 {
  x @0 :Float32;
  y @1 :Float32;
  z @2 :Float32;
  w @3 :Float32;
}

struct PublishTransform {
  translation @0 :Vec3;
  rotation @1 :Vec4;
}

struct ReceiveTransform {
  playerId @0 :UInt16;
  translation @1 :Vec3;
  rotation @2 :Vec4;
}
