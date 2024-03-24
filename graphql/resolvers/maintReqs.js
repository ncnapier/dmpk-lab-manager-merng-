const { AuthenticationError, UserInputError } = require("apollo-server");

const MaintReq = require("../../models/MaintReq");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getMaintReqs() {
      try {
        const maintReq = await MaintReq.find().sort({ createdAt: -1 });
        return maintReq;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getMaintReq(_, { maintReqId }) {
      try {
        const maintReq = await MaintReq.findById(maintReqId);
        if (maintReq) {
          return maintReq;
        } else {
          throw new Error("Maint Req not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createMaintReq(_, { body, instrument }, context) {
      const user = checkAuth(context);
      console.log(context)
      if (body.trim() === '') {
          throw new Error('Maint Req body must not be empty');
      }
      if (instrument.trim() === ''){
        throw new Error('Instrument must be selected');
      }
      const newMaintReq = new MaintReq({
        body,
        instrument,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const maintReq = await newMaintReq.save();

     

      return maintReq;
    },
    async deleteMaintReq(_, { maintReqId }, context) {
      const user = checkAuth(context);

      try {
        const maintReq = await MaintReq.findById(maintReqId);
        if (user.username === maintReq.username) {
          await maintReq.deleteOne();
          return "Maint Req deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    
  }
};