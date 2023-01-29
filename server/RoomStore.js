class RoomStore {
  constructor() {
    this.rooms = new Map();
  }

  saveRoom(roomID, participants) {
    console.log(roomID);
    this.rooms.set(roomID, participants);
  }

  addNewParticipant(roomID, nickname, socketID) {
    const newParts = [...this.rooms.get(roomID), { nickname, socketID }];
    this.rooms.set(roomID, newParts);
  }

  removeParticipant(roomID, partToRemove) {
    let newParts = this.rooms.get(roomID);
    newParts = newParts.filter((participant) => {
      participant.nickname != partToRemove;
    });
    return this.saveRoom(roomID, newParts);
  }

  findRoom(roomID) {
    return this.rooms.get(roomID);
  }
}

module.exports = {
  RoomStore: RoomStore,
};
