export const APP_PAGES = {
  TOP: '/',
  LOGIN: '/login',
  MY_RECORD: '/my-record',
  COLUMN: '/column',
  CHALLENGE: '/challenge',
  ANNOUNCEMENT: '/announcement',
};

export const APP_MENU_LABELS = {
  MY_RECORD: '自分の記録',
  CHALLENGE: 'チャレンジ',
  ANNOUNCEMENT: 'お知らせ',
};

export const APP_API_URL = {
  HEALTHY: '/healthy',
  EXERCISE: '/exercise',
  COLUMN: '/column',
  DIARY: '/diary',
  LOGIN: '/login',
};

export const APP_RECOMMENDED_TYPE = {
  COLUMN: 'COLUMN',
  DIET: 'DIET',
  BEAUTY: 'BEAUTY',
  HEALTH: 'HEALTH',
};

export const APP_USER_DUMMY = {
  username: 'admin',
  password: 'admin',
};

export const APP_RECOMMENDED_DESCRIPTION = {
  [APP_RECOMMENDED_TYPE.COLUMN]: 'オススメ',
  [APP_RECOMMENDED_TYPE.DIET]: 'ダイエット',
  [APP_RECOMMENDED_TYPE.BEAUTY]: '美容',
  [APP_RECOMMENDED_TYPE.HEALTH]: '健康',
};

export const APP_RECORD_CATEGORY_TYPE = {
  BODY_RECORD: 'BODY RECORD',
  MY_EXERCISE: 'MY EXERCISE',
  MY_DIARY: 'MY DIARY',
};

export const APP_RECORD_CATEGORY_DESCRIPTION = {
  [APP_RECORD_CATEGORY_TYPE.BODY_RECORD]: '自分のカラダの記録',
  [APP_RECORD_CATEGORY_TYPE.MY_EXERCISE]: '自分の運動の記録',
  [APP_RECORD_CATEGORY_TYPE.MY_DIARY]: '自分の日記',
};

export const APP_ANCHOR_ID = {
  BODY_RECORD: 'body-record',
  MY_EXERCISE: 'my-exercise',
  MY_DIARY: 'my-diary',
};

export const APP_CONSTANTS = {
  SCROLL_2_TOP: {
    HEAD: 0,
    POSITION_Y_OFFSET: 100,
    THROTTLE_DELAY: 100,
  },
  PERIOD_TYPE: {
    DAY: '日',
    WEEK: '週',
    MONTH: '月',
    YEAR: '年',
  },
};
