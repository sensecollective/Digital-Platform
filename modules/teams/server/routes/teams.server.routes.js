'use strict';

/**
 * Module dependencies
 */
var teamsPolicy = require('../policies/teams.server.policy'),
  teams = require('../controllers/teams.server.controller');

module.exports = function (app) {
  // Teams members collection routes
  app.route('/api/teams/members').all(teamsPolicy.isAllowed)
    .get(teams.listMembers)
    .post(teams.createMember)
    .put(teams.updateMember)
    .delete(teams.deleteMember);

  // Teams collection routes
  app.route('/api/teams').all(teamsPolicy.isAllowed)
    .get(teams.list)
    .post(teams.create);

  // Single team routes
  app.route('/api/teams/:teamId').all(teamsPolicy.isAllowed)
    .get(teams.read)
    .put(teams.update)
    .delete(teams.delete);

  // Finish by binding the team middleware
  app.param('teamId', teams.teamByID);
};
