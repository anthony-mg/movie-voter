class RoomStore {
  constructor() {
    this.rooms = new Map();
  }

  saveRoom(roomID, participants) {
    this.rooms.set(roomID, participants);
    console.log("SAVED ROOM:", roomID, "WITH PARTICIPANTS:", participants);
  }

  addNewParticipant(roomID, nickname, socketID) {
    const newParts = [...this.rooms.get(roomID), { nickname, socketID }];
    this.saveRoom(roomID, newParts);
  }

  removeParticipant(roomID, participantToRemove) {
    let currentParticipants = this.rooms.get(roomID);
    let newParticipants = currentParticipants.filter((participant) => participant.nickname != participantToRemove);

    return this.saveRoom(roomID, newParticipants);
  }

  findRoom(roomID) {
    return this.rooms.get(roomID);
  }

  deleteRoom(roomID) {
    console.log("DELETED ROOM ", roomID);
    return this.rooms.delete(roomID);
  }
}

module.exports = {
  RoomStore: RoomStore,
};
