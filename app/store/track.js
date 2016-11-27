'use strict';

import Parse from 'parse/react-native';
import { AppEventsLogger } from 'react-native-fbsdk';

import type { Action } from '../actions/types';

function track(action) {
  switch (action.type) {
    case 'LOGGED_IN':
      AppEventsLogger.logEvent('Login', 1, {source: action.source || ''});
      break;

    case 'LOGGED_OUT':
      AppEventsLogger.logEvent('Logout', 1);
      break;

    case 'SKIPPED_LOGIN':
      AppEventsLogger.logEvent('Skip login', 1);
      break;

    case 'SESSION_ADDED':
      Parse.Analytics.track('addToSchedule', {id: action.id});
      AppEventsLogger.logEvent('Added To Schedule', 1, {id: action.id});
      break;

    case 'SESSION_REMOVED':
      Parse.Analytics.track('removeFromSchedule', {id: action.id});
      AppEventsLogger.logEvent('Removed From Schedule', 1, {id: action.id});
      break;

    case 'TURNED_ON_PUSH_NOTIFICATIONS':
      AppEventsLogger.logEvent('Enabled Push', 1);
      break;

    case 'SKIPPED_PUSH_NOTIFICATIONS':
      AppEventsLogger.logEvent('Disabled Push', 1);
      break;

    case 'SET_SHARING':
      AppEventsLogger.logEvent(action.enabled ? 'Enabled Sharing' : 'Disabled Sharing', 1);
      break;

    case 'APPLY_TOPICS_FILTER':
      AppEventsLogger.logEvent('Filtered', 1);
      break;
  }
}

module.exports = track;
