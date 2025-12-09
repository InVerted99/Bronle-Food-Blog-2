export function getStars(rating) {
  const whole = Math.floor(rating);
  const decimal = rating - whole;

  let displayRating;

  if (decimal >= 0.5) {
    displayRating = whole * 10 + 5;
  } else {
    displayRating = whole * 10;
  }

  if (rating >= 5.0) {
    displayRating = 50;
  }

  return displayRating;
}


