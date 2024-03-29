const { AuthenticationError, UserInputError } = require("apollo-server");

const Run = require("../../models/Run");
const checkAuth = require("../../util/check-auth");
// const checkAuth = require("../../util/check-auth");

module.exports = {
    Query: {
        async getRuns() {
            try {
                const runs = await Run.find().sort({ createdAt: -1 });
                return runs;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getRun(_, { runId }) {
            try {
                const run = await Run.findById(runId);
                if (run) {
                    return run;
                } else {
                    throw new Error("Run not found");
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createRun(_, { instrument, assay, trays, username }, context) {
            // const user = checkAuth(context);
            const user = checkAuth(context);
            if (instrument.trim() === '') {
                throw new Error('Instrument must be selected');
            }
            if(assay.trim() === ''){
                throw new Error('Assay must be selected')
            }
            if(trays.trim() === ''){
                throw new Error('Trays must be selected')
            }

            const newRun = new Run({
                instrument,
                assay,
                trays,
                username,
                user: user.id,
                createdAt: new Date().toISOString(),
            });

            const run = await newRun.save();



            return run;
        },
        async deleteRun(_, { runId }, context) {
            const user = checkAuth(context);

            try {
                const run = await Run.findById(runId);
                if (user.username === run.username || user.username === 'Nathaniel') {
                    await run.deleteOne();
                    return "Run deleted successfully";
                } else {
                    throw new AuthenticationError("Action not allowed");

                }
            } catch (err) {
                throw new Error(err);
            }
        }

    }
};