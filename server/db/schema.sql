CREATE TABLE scores (
  id                    SERIAL PRIMARY KEY,
  created_date          DATE,
  player                TEXT,
  click_time            INTEGER,
  distance_from_target  NUMERIC
);

-- dummy data
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'wilson', 892734, 15.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 882234, 310.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 872234, 309.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 862234, 308.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 852234, 307.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 842234, 310.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 852234, 308.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-26', 'albert', 842234, 307.12394);

-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 782234, 290.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 772234, 297.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 762234, 296.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 752234, 295.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 742234, 296.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 752234, 297.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'albert', 742234, 291.12394);

-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 682234, 260.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 672234, 269.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 662234, 268.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 652234, 267.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 642234, 260.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 652234, 268.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'albert', 642234, 267.12394);

-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 582234, 240.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 572234, 249.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 562234, 248.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 552234, 247.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 542234, 240.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 552234, 248.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'albert', 542234, 247.12394);

-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 92934, 190.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 92244, 199.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 92263, 198.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 99934, 197.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 92234, 190.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 98234, 208.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-30', 'albert', 95234, 197.12394);

-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 82934, 190.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 82244, 188.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 82263, 178.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 89934, 197.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 82234, 190.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 88234, 208.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-31', 'albert', 85234, 191.12394);

-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 79934, 200.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 78244, 190.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 79263, 198.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 80934, 197.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 6234, 190.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 78234, 208.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-4-01', 'albert', 77234, 300.12394);