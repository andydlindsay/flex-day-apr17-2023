INSERT INTO users 
  (name, email, password)
VALUES 
  ('Alice', 'alice@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Bob', 'bob@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Carol', 'carol@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties 
  (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES
  (1, 'Speed Lamp', 'description', 'thumbnail_image.jpeg', 'cover_image.jpeg', 93061, 6, 4, 8, 'Canada', '536 Namsub Hwy', 'Sotboske', 'Quebec', 'H0H 0H0'),
  (2, 'Blank Corner', 'description', 'thumbnail_image.jpeg', 'cover_image.jpeg', 85234, 6, 6, 7, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', 'H0H 0H0'),
  (3, 'Habit Mix', 'description', 'thumbnail_image.jpeg', 'cover_image.jpeg', 46058, 0, 5, 6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'Newfoundland and Labrador', 'H0H 0H0');

INSERT INTO reservations 
  (start_date, end_date, property_id, guest_id)
VALUES
  ('2023-01-11', '2023-01-13', 1, 2),
  ('2023-01-15', '2023-01-18', 3, 1),
  ('2023-01-10', '2023-01-12', 2, 3);

INSERT INTO property_reviews
  (guest_id, property_id, reservation_id, rating, message)
VALUES
  (3, 2, 1, 3, 'messages'),
  (2, 2, 2, 4, 'messages'),
  (3, 1, 3, 4, 'messages');
