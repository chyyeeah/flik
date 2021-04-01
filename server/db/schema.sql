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
-- VALUES ('2021-3-30', 'billy bob', 2734, 5.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-25', 'billy bob', 872234, 51.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-25', 'billy bob', 452734, 50.23);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-27', 'billy bob', 21734, 45.194);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-28', 'billy bob', 12734, 30.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-3-29', 'billy bob', 8734, 10.12394);
-- INSERT INTO scores (created_date, player, click_time, distance_from_target)
-- VALUES ('2021-1-29', 'billy bob', 812734, 500.12394);