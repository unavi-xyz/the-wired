@0xae09eca2c525e50a;

struct Option(T) {
  union {
    some @0 :T;
    none @1 :Void;
  }
}

struct Result(T) {
  union {
    result @0 :T;
    error @1 :Text;
  }
}

struct Success {
  union {
    success @0 :Void;
    error @1 :Text;
  }
}

interface WorldServer {
  join @0 (recordId :Text) -> (success :Success);
  leave @1 (recordId :Text);

  # Tickrate of the server, in seconds.
  # Sending updates faster than this will be detrimental.
  tickrate @2 () -> (tickrate :Float32);

  player @3 (id :UInt16) -> (player :Option(Player));
  players @4 () -> (players :List(Player));

  struct Player {
    id @0 :UInt16;
    did @1 :Text;
  }
}
