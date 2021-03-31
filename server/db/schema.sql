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