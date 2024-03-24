const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");
const runsResolvers = require("./runs");
const maintReqsResolvers = require("./maintReqs");



module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length
  },
  Query: {
    ...postsResolvers.Query,
    ...runsResolvers.Query,
    ...maintReqsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...runsResolvers.Mutation,
    ...maintReqsResolvers.Mutation
  },
};
